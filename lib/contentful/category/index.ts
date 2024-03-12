import { fetchGraphQL } from "..";
import { CATEGORY_GRAPHQL_FIELDS } from "./query";

function extractCategoryEntries(fetchResponse: any) {
  return fetchResponse?.data?.categoryCollection?.items;
}

export async function getAllCategories(
  // For this demo set the default limit to always return 3 articles.
  limit = 10,
  // By default this function will return published content but will provide an option to
  // return draft content for reviewing articles before they are live
  isDraftMode = false
) {
  const pages = await fetchGraphQL({
    query: `query {
          categoryCollection(limit: ${limit}, preview: ${
            isDraftMode ? "true" : "false"
          }) {
            items {
              ${CATEGORY_GRAPHQL_FIELDS}
            }
          }
        }`,
    preview: isDraftMode,
    slug: "",
    tags: ["allBlogs"],
  });

  return extractCategoryEntries(pages);
}

export async function getCategoryBySlug(slug: string, isDraftMode = false) {
  const page = await fetchGraphQL({
    query: `query {
          categoryCollection(where:{slug: "${slug}"}, limit: 1, preview: ${
            isDraftMode ? "true" : "false"
          }) {
            items {
              ${CATEGORY_GRAPHQL_FIELDS}
            }
          }
        }`,
    preview: isDraftMode,
    slug: "",
    tags: ["blog"],
  });
  return extractCategoryEntries(page)[0];
}
