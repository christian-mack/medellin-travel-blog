import { RichText } from "@/components/RichText";
import RightColumnScroll from "@/components/templates/rightColumnScroll";
import { getAllBlogPages, getBlogPageBySlug } from "@/lib/contentful/blogPages";
import { devLog } from "@/lib/utils";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const page = await getBlogPageBySlug(params.slug);

  if (!page) {
    notFound();
  }

  devLog([page]);

  return (
    <RightColumnScroll heading={page.title} bgImg={page.image.url}>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-5xl bg-slate-200">
          <p>{page.authorName}</p>
          <p>{page.category.title}</p>
          <RichText data={page.content.json} />
        </div>
      </div>
    </RightColumnScroll>
  );
}
export async function generateStaticParams() {
  const allBlogPages = await getAllBlogPages();

  return allBlogPages.map((page: any) => ({
    slug: page.slug,
  }));
}
