export const PAGE_GRAPHQL_FIELDS = `
    sys {
        id
    }
    slug
    title
    blocksCollection(limit: 10) {
        items {
          featuredBlogPostsCollection(limit:10) {
            items {
              sys {
                id
              }
              ... on BlogPage {
                title
                category
                authorName
              }
            }
          }
        }
      }
`;
