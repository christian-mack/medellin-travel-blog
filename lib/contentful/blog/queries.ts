import { base_query_limit } from "@/lib/utils";

export const BLOG_GRAPHQL_FIELDS = `
    sys {
        id
    }
    slug
    title
    summary
    publishDate
    authorName
    category {
      slug
      title
    }
    image {
      url
    }
    content {
      json
    }
`;
