import { fetchGraphQL } from "..";
import { PAGE_GRAPHQL_FIELDS } from "./queries";

function extractPageEntries(fetchResponse: any) {
  return fetchResponse?.data?.pageCollection?.items;
}

export async function getAllPages(limit = 50, isDraftMode = false) {
  const pages: any = await fetchGraphQL({
    query: `query {
          pageCollection(limit: ${limit}, preview: ${
            isDraftMode ? "true" : "false"
          }) {
            items {
              ${PAGE_GRAPHQL_FIELDS}
            }
          }
        }`,
    preview: isDraftMode,
    slug: "",
    tags: [],
  });

  return extractPageEntries(pages);
}

export async function getPagesByType(
  type: "General" | "Blog",
  isDraftMode = false
) {
  const pages: any = await fetchGraphQL({
    query: `query {
          pageCollection(where:{type: "${type}"}, limit: 50, preview: ${
            isDraftMode ? "true" : "false"
          }) {
            items {
              ${PAGE_GRAPHQL_FIELDS}
            }
          }
        }`,
    preview: isDraftMode,
    slug: "/",
    tags: [],
  });
  return extractPageEntries(pages);
}

export async function getPagesBySlug(slug: string, isDraftMode = false) {
  const pages: any = await fetchGraphQL({
    query: `query {
          pageCollection(where:{slug: "${slug}"}, limit: 50, preview: ${
            isDraftMode ? "true" : "false"
          }) {
            items {
              ${PAGE_GRAPHQL_FIELDS}
            }
          }
        }`,
    preview: isDraftMode,
    slug: slug,
    tags: ["pages"],
  });
  return extractPageEntries(pages);
}

export async function getPageBySlug(slug: string, isDraftMode = false) {
  const page: any = await fetchGraphQL({
    query: `query {
          pageCollection(where:{slug: "${slug}"}, limit: 1, preview: ${
            isDraftMode ? "true" : "false"
          }) {
            items {
              ${PAGE_GRAPHQL_FIELDS}
            }
          }
        }`,
    preview: isDraftMode,
    slug: slug,
    tags: ["page"],
  });
  return extractPageEntries(page)[0];
}
