import { getContactFormDetailsById } from "./query";

interface ContactUsFormProps {
  itemId: any;
  slug: any;
}

export default async function ContactUsForm({
  itemId,
  slug,
}: ContactUsFormProps) {
  const { title, subTitle } = await getContactFormDetailsById({
    itemId: itemId,
    isDraftMode: false,
  });

  if (!title || !subTitle) {
    return <></>;
  }

  return (
    <div>
      <div>{subTitle}</div>
      <div>{title}</div>
    </div>
  );
}
