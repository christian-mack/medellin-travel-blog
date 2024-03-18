import { Post } from "@/components/molecules/post";
import RightColumnScroll, {
  RightColumnScrollBase,
} from "@/components/templates/rightColumnScroll";
import { getPagesByType } from "@/lib/contentful/page";

export default async function Index() {
  const allBlogPages = await getPagesByType("Blog");

  return (
    <RightColumnScrollBase>
      <RightColumnScroll heading="Embrace adventure in the city of eternal spring.">
        <></>
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
