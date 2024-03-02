import { getHeroInformationalDetailsById } from "./query";

interface HeroInformationalProps {
  itemId: any;
  slug: any;
  isDraftMode?: boolean;
}

export default async function HeroInformational({
  itemId,
  slug,
  isDraftMode = false,
}: HeroInformationalProps) {
  const { heroInformational } = await getHeroInformationalDetailsById({
    itemId,
    isDraftMode,
    slug,
  });

  const { title, subTitle, description, text, image } = heroInformational;

  if (!heroInformational) {
    return <></>;
  }

  return (
    <div>
      <div className="flex">
        <div>{title}</div>
        <div>{subTitle}</div>
        <div>{description}</div>
      </div>
      <div className="grid grid-cols-2">
        <div>image</div>
        <div>{text}</div>
      </div>
    </div>
  );
}
