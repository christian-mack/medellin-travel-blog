import { fetchGraphQL } from "..";
import { PAGE_GRAPHQL_FIELDS } from "./queries";

function extractPageEntries(fetchResponse: any) {
  return fetchResponse?.data?.pageCollection?.items;
}

export async function getAllPages(
  limit = 10,
  // By default this function will return published content but will provide an option to
  // return draft content for reviewing articles before they are live
  isDraftMode = false
) {
  const pages = await fetchGraphQL(
    `query {
          pageCollection(limit: ${limit}, preview: ${
            isDraftMode ? "true" : "false"
          }) {
            items {
              ${PAGE_GRAPHQL_FIELDS}
            }
          }
        }`,
    isDraftMode
  );

  return extractPageEntries(pages);
}

export async function getPageBySlug(slug: string, isDraftMode = false) {
  const page = await fetchGraphQL(
    `query {
          pageCollection(where:{slug: "${slug}"}, limit: 1, preview: ${
            isDraftMode ? "true" : "false"
          }) {
            items {
              ${PAGE_GRAPHQL_FIELDS}
            }
          }
        }`,
    isDraftMode
  );
  return extractPageEntries(page)[0];
}
