import { Post } from "@/components/molecules/post";
import RightColumnScroll, {
  RightColumnScrollBase,
} from "@/components/templates/rightColumnScroll";
import { fetchPages } from "@/contentful/helpers/page";
import { getPagesByType } from "@/lib/contentful/page";
import { devLog, devLogHeader } from "@/lib/utils";

export default async function Index() {
  const allBlogPages = await getPagesByType("Blog");

  const pages = await fetchPages({ preview: false });

  devLog([devLogHeader("Index: new pages implementation"), pages]);

  return (
    <RightColumnScrollBase>
      <RightColumnScroll heading="Embrace adventure in the city of eternal spring.">
        {allBlogPages.map((page: any) => {
          const {
            title,
            slug,
            category,
            sys: { id },
            image: { url },
          } = page.blocksCollection.items[0];

          return (
            <Post
              key={id}
              title={title}
              category={category.slug}
              postImgUrl={url}
              postUrl={`${category.slug}/${slug}`}
            />
          );
        })}
      </RightColumnScroll>
    </RightColumnScrollBase>
  );
}
