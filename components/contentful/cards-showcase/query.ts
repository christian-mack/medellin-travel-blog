import { fetchGraphQL } from "@/lib/contentful";
import { CARDS_SHOWCASE_GRAPHQL_FIELDS } from "./fields";

interface getCardsShowcaseByIdProps {
  itemId: string;
  isDraftMode: boolean;
  slug: string;
}

export async function getCardsShowcaseById({
  itemId,
  isDraftMode = false,
  slug,
}: getCardsShowcaseByIdProps) {
  const { data } = await fetchGraphQL({
    query: `query {
          cardsShowcase(id: "${itemId}", preview: ${
            isDraftMode ? "true" : "false"
          }) {
              ${CARDS_SHOWCASE_GRAPHQL_FIELDS}
          }
        }`,
    preview: isDraftMode,
    slug: slug,
    tags: [],
  });
  return data.cardsShowcase;
}
