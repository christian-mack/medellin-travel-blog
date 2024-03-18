import { base_query_limit } from "@/lib/utils";
import { BLOG_GRAPHQL_FIELDS } from "../blog/queries";

export const PAGE_GRAPHQL_FIELDS = `
    sys {
        id
    }
    slug
    title
    type
    blocksCollection(limit: ${base_query_limit}) {
      items {
        __typename
        ... on ContactForm {
          sys {
            id
          }
        }
        ... on Blog {
          ${BLOG_GRAPHQL_FIELDS}
        }
      }
    }
`;
