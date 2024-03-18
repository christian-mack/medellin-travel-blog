import { fetchGraphQL } from "..";
import { BLOG_GRAPHQL_FIELDS } from "./queries";

function extractBlogPageEntries(fetchResponse: any) {
  return fetchResponse?.data?.blogCollection?.items;
}

export async function getAllBlogPages(limit = 50, isDraftMode = false) {
  const pages = await fetchGraphQL({
    query: `query {
          blogCollection(limit: ${limit}, preview: ${
            isDraftMode ? "true" : "false"
          }) {
            items {
              ${BLOG_GRAPHQL_FIELDS}
            }
          }
        }`,
    preview: isDraftMode,
    slug: "",
    tags: [],
  });

  return extractBlogPageEntries(pages);
}

export async function getBlogPageBySlug(slug: string, isDraftMode = false) {
  const page = await fetchGraphQL({
    query: `query {
          blogCollection(where:{slug: "${slug}"}, limit: 1, preview: ${
            isDraftMode ? "true" : "false"
          }) {
            items {
              ${BLOG_GRAPHQL_FIELDS}
            }
          }
        }`,
    preview: isDraftMode,
    slug: slug,
    tags: ["page"],
  });

  return extractBlogPageEntries(page)[0];
}
