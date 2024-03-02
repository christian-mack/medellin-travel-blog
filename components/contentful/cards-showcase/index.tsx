import { getCardsShowcaseById } from "./query";

interface CardsShowcaseProps {
  itemId: any;
  slug: any;
  isDraftMode?: boolean;
}

export default async function CardsShowcase({
  itemId,
  slug,
  isDraftMode = false,
}: CardsShowcaseProps) {
  const data = await getCardsShowcaseById({
    itemId,
    isDraftMode,
    slug,
  });

  if (!data) {
    return <></>;
  }

  const {
    title,
    subTitle,
    description,
    cardsCollection: { items },
  } = data;

  return (
    <div>
      <div>
        <div>{title}</div>
        <div>{subTitle}</div>
        <div>{description}</div>
      </div>
      <div>
        {items.map((item: any) => {
          return (
            <div>
              <div>{item.title}</div>
              <div>{item.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
