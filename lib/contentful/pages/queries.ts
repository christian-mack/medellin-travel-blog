import { base_query_limit } from "@/lib/utils";

export const PAGE_GRAPHQL_FIELDS = `
    sys {
        id
    }
    slug
    title
    blocksCollection(limit: ${base_query_limit}) {
      items {
        __typename
        ... on Hero {
          sys {
            id
          }
        }
        ... on HeroCarousel {
          sys {
            id
          }
          featuredBlogPostsCollection {
            items {
              ... on BlogPage {
                sys {
                  id
                }
              }
            }
          }
        }
        ... on HeroInformational {
          sys {
            id
          }
        }
        ... on ContactForm {
          sys {
            id
          }
        }
        ... on CardsShowcase {
          sys {
            id
          }
        }
        ... on Accordion {
          sys {
            id
          }
        }
      }
    }
`;
