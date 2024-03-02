// TODO: currently hardcoded but needs to be modularized

import { revalidatePath, revalidateTag } from "next/cache";

interface fetchProps {
  query: string;
  preview: boolean;
  slug: string;
  tags: string[];
}

export async function fetchGraphQL({
  query,
  preview = false,
  slug,
  tags,
}: fetchProps) {
  return fetch(
    `${process.env.CONTENTFUL_BASE_URL}/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Switch the Bearer token depending on whether the fetch is supposed to retrieve live
        // Contentful content or draft content
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      // 'tags' can be given to fetch requests for revalidation purposes
      next: { tags },
    }
  )
    .then((response) => response.json())
    .finally(() => revalidatePath(`/${slug}`));
}
