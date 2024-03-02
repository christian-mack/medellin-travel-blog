import { base_query_limit } from "@/lib/utils";

export const ACCORDION_GRAPHQL_FIELDS = `
sys {
    id
  }
  title
  subTitle
  accordionCardsCollection(limit: ${base_query_limit}) {
    items {
      __typename
      ... on AccordionCard {
        title
        description
      }
    }
  }
`;
