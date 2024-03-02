import Image from "next/image";
import { getHeroDetailsById } from "./query";
import { Button } from "@/components/ui/button";

interface HeroProps {
  itemId: any;
  slug: string;
}

export default async function Hero({ itemId, slug }: HeroProps) {
  const { title, subTitle, description, image, ctaButtonText } =
    await getHeroDetailsById({
      itemId: itemId,
      slug: slug,
      isDraftMode: false,
    });

  return (
    <div className="grid grid-cols-12">
      <div className="flex flex-col col-span-6">
        <div>{title}</div>
        <div>{description}</div>
        <div>{subTitle}</div>
        <div>
          <Button variant="lime">{ctaButtonText}</Button>
        </div>
      </div>
      <div className="flex col-span-6 relative">
        <Image src={`/${image.fileName}`} alt="" fill />
      </div>
    </div>
  );
}
