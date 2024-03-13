import { Post } from "@/components/Post";
import { getAllBlogPages } from "@/lib/contentful/blogPages";
import { getAllCategories } from "@/lib/contentful/category";
import RightColumnScroll, {
  RightColumnScrollBase,
} from "@/components/templates/rightColumnScroll";

export default async function Index() {
  const blogPages = await getAllBlogPages();
  const categories = await getAllCategories();

  return (
    <RightColumnScrollBase>
      <RightColumnScroll
        heading="Embrace adventure in the city of eternal spring."
        categories={categories}
      >
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
    </RightColumnScrollBase>
  );
}
