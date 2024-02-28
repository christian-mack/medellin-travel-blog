import { fetchGraphQL } from "..";
import { BLOG_PAGE_GRAPHQL_FIELDS } from "./queries";

function extractBlogPageEntries(fetchResponse: any) {
  return fetchResponse?.data?.blogPageCollection?.items;
}

export async function getAllBlogPages(
  // For this demo set the default limit to always return 3 articles.
  limit = 3,
  // By default this function will return published content but will provide an option to
  // return draft content for reviewing articles before they are live
  isDraftMode = false
) {
  const pages = await fetchGraphQL(
    `query {
          blogPageCollection(limit: ${limit}, preview: ${
            isDraftMode ? "true" : "false"
          }) {
            items {
              ${BLOG_PAGE_GRAPHQL_FIELDS}
            }
          }
        }`,
    isDraftMode
  );

  return extractBlogPageEntries(pages);
}

export async function getBlogPageBySlug(slug: string, isDraftMode = false) {
  const page = await fetchGraphQL(
    `query {
          blogPageCollection(where:{slug: "${slug}"}, limit: 1, preview: ${
            isDraftMode ? "true" : "false"
          }) {
            items {
              ${BLOG_PAGE_GRAPHQL_FIELDS}
            }
          }
        }`,
    isDraftMode
  );
  return extractBlogPageEntries(page)[0];
}
