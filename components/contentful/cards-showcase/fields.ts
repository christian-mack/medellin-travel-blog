import { base_query_limit } from "@/lib/utils";

export const CARDS_SHOWCASE_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  subTitle
  description
  cardsCollection(limit: ${base_query_limit}) {
    items {
      ... on Card {
        title
        description
        image {
          fileName
          description
        }
      }
    }
  }
`;
