import { base_query_limit } from "@/lib/utils";

export const HERO_CAROUSEL_GRAPHQL_FIELDS = `
sys {
    id
  }
  title
  featuredBlogPostsCollection(limit: ${base_query_limit}) {
    items {
      __typename
      ... on BlogPage {
        title
        slug
        image {
          fileName
          description
        }
      }
    }
  }
`;
