import { fetchGraphQL } from "@/lib/contentful";
import { HERO_INFORMATIONAL_GRAPHQL_FIELDS } from "./fields";

interface getHeroInformationalDetailsByIdProps {
  itemId: string;
  isDraftMode: boolean;
  slug: string;
}

export async function getHeroInformationalDetailsById({
  itemId,
  isDraftMode = false,
  slug,
}: getHeroInformationalDetailsByIdProps) {
  const { data } = await fetchGraphQL({
    query: `query {
          heroInformational(id: "${itemId}", preview: ${
            isDraftMode ? "true" : "false"
          }) {
              ${HERO_INFORMATIONAL_GRAPHQL_FIELDS}
          }
        }`,
    preview: isDraftMode,
    slug: slug,
    tags: [],
  });
  return data;
}
