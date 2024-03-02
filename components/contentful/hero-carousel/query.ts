import { fetchGraphQL } from "@/lib/contentful";
import { HERO_CAROUSEL_GRAPHQL_FIELDS } from "./fields";

interface getHeroCarouselDetailsByIdProps {
  itemId: string;
  isDraftMode: boolean;
  slug: string;
}

export async function getHeroCarouselDetailsById({
  itemId,
  isDraftMode = false,
  slug,
}: getHeroCarouselDetailsByIdProps) {
  const heroCarousel = await fetchGraphQL({
    query: `query {
          heroCarousel(id: "${itemId}", preview: ${
            isDraftMode ? "true" : "false"
          }) {
              ${HERO_CAROUSEL_GRAPHQL_FIELDS}
          }
        }`,
    preview: isDraftMode,
    slug: slug,
    tags: [],
  });
  return heroCarousel.data;
}
