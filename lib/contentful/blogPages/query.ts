export const BLOG_PAGE_GRAPHQL_FIELDS = `
    sys {
        id
    }
    slug
    title
    summary
    content {
      json
    }
    image {
      url
      description
      contentfulMetadata {
        tags {
          name
        }
      }
    }
    publishDate
    authorName
    category {
      title
    }
`;
