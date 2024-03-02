import { fetchGraphQL } from "@/lib/contentful";
import { HERO_GRAPHQL_FIELDS } from "./fields";

interface getHeroDetailsByIdProps {
  itemId: string;
  isDraftMode: boolean;
  slug: string;
}

export async function getHeroDetailsById({
  itemId,
  isDraftMode = false,
  slug,
}: getHeroDetailsByIdProps) {
  const { data } = await fetchGraphQL({
    query: `query {
          hero(id: "${itemId}", preview: ${isDraftMode ? "true" : "false"}) {
              ${HERO_GRAPHQL_FIELDS}
          }
        }`,
    preview: isDraftMode,
    slug: slug,
    tags: [],
  });
  return data.hero;
}
