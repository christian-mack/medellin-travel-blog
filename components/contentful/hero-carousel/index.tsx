import Image from "next/image";
import { getHeroCarouselDetailsById } from "./query";

interface HeroCarouselProps {
  itemId: any;
  slug: any;
  isDraftMode?: boolean;
}

export default async function HeroCarousel({
  itemId,
  slug,
  isDraftMode = false,
}: HeroCarouselProps) {
  const carouselItems = await getHeroCarouselDetailsById({
    itemId,
    isDraftMode,
    slug,
  });

  if (!carouselItems) {
    return <></>;
  }

  const { featuredBlogPostsCollection } = carouselItems.heroCarousel;

  return (
    <div>
      <ul>
        {featuredBlogPostsCollection.items.map(
          ({ title, slug, image }: { title: any; slug: any; image: any }) => {
            return (
              <div key={title}>
                <div>Title: {title}</div>
              </div>
            );
          }
        )}
      </ul>
    </div>
  );
}
