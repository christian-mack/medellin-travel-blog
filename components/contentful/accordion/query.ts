import { fetchGraphQL } from "@/lib/contentful";
import { ACCORDION_GRAPHQL_FIELDS } from "./fields";

interface getAccordionDetailsByIdProps {
  itemId: string;
  isDraftMode: boolean;
  slug: string;
}

export async function getAccordionDetailsById({
  itemId,
  isDraftMode = false,
  slug,
}: getAccordionDetailsByIdProps) {
  const accordion = await fetchGraphQL({
    query: `query {
          accordion(id: "${itemId}", preview: ${
            isDraftMode ? "true" : "false"
          }) {
              ${ACCORDION_GRAPHQL_FIELDS}
          }
        }`,
    preview: isDraftMode,
    slug: slug,
    tags: [],
  });
  return accordion.data.accordion;
}
