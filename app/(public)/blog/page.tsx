import { Post } from "@/components/Post";
import { getAllBlogPages } from "@/lib/contentful/blogPages";

export default async function Page() {
  const blogPages = await getAllBlogPages();

  return (
    <div className="grid col-span-12 lg:col-span-6 w-full h-screen  sm:overflow-scroll">
      {blogPages.map((page: any) => (
        <Post
          key={page.id}
          title={page.title}
          category={page.category.title}
          publishDate={page.publishDate}
          authorName={page.authorName}
          avatarImgUrl="https://picsum.photos/200"
          postImgUrl={page.image.url}
          postUrl={`/blog/${page.slug}`}
        />
      ))}
    </div>
  );
}
