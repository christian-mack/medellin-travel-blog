import { getAccordionDetailsById } from "./query";

interface AccordionProps {
  itemId: any;
  slug: any;
}

export default async function Accordion({ itemId, slug }: AccordionProps) {
  const { title, subTitle, accordionCardsCollection } =
    await getAccordionDetailsById({
      itemId: itemId,
      slug: slug,
      isDraftMode: false,
    });

  const { items } = accordionCardsCollection;

  return (
    <div>
      <div>{title}</div>
      <div>{subTitle}</div>
      <ul>
        {items.map((item: any) => {
          return (
            <div key={item.title}>
              <div>{item.title}</div>
              <div>{item.description}</div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
