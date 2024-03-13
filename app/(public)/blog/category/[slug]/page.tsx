import RightColumnScroll from "@/components/templates/rightColumnScroll";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getAllBlogPagesByCategory } from "@/lib/contentful/blogPages";
import { getAllCategories, getCategoryBySlug } from "@/lib/contentful/category";
import { MoonIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const page = await getCategoryBySlug(params.slug);
  const posts = await getAllBlogPagesByCategory(params.slug);

  if (!page) {
    notFound();
  }

  return (
    <RightColumnScroll heading={`${params.slug}`} bgImg={page.image.url}>
      <div className="w-full flex flex-col justify-center px-5">
        <div className="w-full flex justify-end mt-10">
          <Button variant="link">
            <MoonIcon width={20} height={20} className="mr-1" />
            Dark
          </Button>
        </div>
        <div className="w-full mt-16 flex flex-col gap-16">
          {posts.map((post: any) => {
            return (
              <Link key={post.title} href={`/blog/${post.slug}`}>
                <div className="grid gap-3">
                  <div className="h-60 relative">
                    <Image src={post.image.url} alt="" fill />
                  </div>
                  <div className="mt-2 text-zinc-800/90">
                    {post.category.title}
                  </div>
                  <div className="pr-2 text-zinc-900 tracking-wide leading-5">
                    {post.title}
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="text-zinc-900/90">{post.authorName}</div>
                    <Separator orientation="vertical" />
                    <div className="text-zinc-900/50">{post.publishDate}</div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </RightColumnScroll>
  );
}
export async function generateStaticParams() {
  const allCategories = await getAllCategories();

  return allCategories.map((category: any) => ({
    slug: category.slug,
  }));
}
