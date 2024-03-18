import { devLog, devLogHeader } from "@/lib/utils";
import RightColumnScroll from "./rightColumnScroll";
import { getPagesBySlug } from "@/lib/contentful/page";
import { renderComponentByTypename } from "@/utils/contentful";
import { Post } from "../molecules/post";

interface CategoryPageProps {
  slug: string;
  pages: any;
}

export default async function CategoryListPage({
  slug,
  pages,
}: CategoryPageProps) {
  // devLog([devLogHeader("[PAGE]: [slug] -> CategoryListPage"), pages]);

  return (
    <RightColumnScroll heading={`Get inspried by posts about ${slug}`}>
      {pages.map((page: any) => {
        return page.blocksCollection.items.map((item: any) => (
          <Post
            key={item.id}
            title={page.title}
            category={item.category.slug}
            publishDate={item.publishDate}
            authorName={item.authorName}
            postImgUrl={item.image.url}
            postUrl={`${item.category.slug}/${item.slug}`}
          />
        ));
      })}
    </RightColumnScroll>
  );
}
