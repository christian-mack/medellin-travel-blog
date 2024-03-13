import { Post } from "@/components/Post";
import { getAllBlogPages } from "@/lib/contentful/blogPages";
import RightColumnScroll from "@/components/templates/rightColumnScroll";

export default async function Page() {
  const blogPages = await getAllBlogPages();

  return (
    <RightColumnScroll heading="Get inspired by from stories of adventure.">
      {blogPages.map((page: any) => (
        <Post
          key={page.id}
          title={page.title}
          category={page.category.title}
          publishDate={page.publishDate}
          authorName={page.authorName}
          postImgUrl={page.image.url}
          postUrl={`/blog/${page.slug}`}
        />
      ))}
    </RightColumnScroll>
  );
}
