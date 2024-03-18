import { fetchGraphQL } from "..";
import { CATEGORY_GRAPHQL_FIELDS } from "./queries";

function extractCategoryEntries(fetchResponse: any) {
  return fetchResponse?.data?.categoryCollection?.items;
}

export async function getAllCategories(limit = 25, isDraftMode = false) {
  const categories = await fetchGraphQL({
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
    tags: [],
  });

  return extractCategoryEntries(categories);
}
