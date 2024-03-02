import { fetchGraphQL } from "@/lib/contentful";
import { CONTACT_FORM_GRAPHQL_FIELDS } from "./fields";

export async function getContactFormDetailsById({
  itemId,
  isDraftMode = false,
}: {
  itemId: any;
  isDraftMode: boolean;
}) {
  const contactFormDetails = await fetchGraphQL({
    query: `query {
          contactForm(id: "${itemId}", preview: ${
            isDraftMode ? "true" : "false"
          }) {
              ${CONTACT_FORM_GRAPHQL_FIELDS}
          }
        }`,
    preview: isDraftMode,
    slug: "/contact",
    tags: ["page"],
  });
  return contactFormDetails.data.contactForm;
}
