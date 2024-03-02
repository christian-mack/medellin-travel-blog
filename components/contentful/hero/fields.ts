import { base_query_limit } from "@/lib/utils";

export const HERO_GRAPHQL_FIELDS = `
sys {
    id
  }
  title
  subTitle
  description
  ctaButtonText
  image {
      fileName
    }
`;
