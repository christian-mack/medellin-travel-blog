import { RichText } from "@/components/RichText";
import { getAllBlogPages, getBlogPageBySlug } from "@/lib/contentful/blogPages";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const page = await getBlogPageBySlug(params.slug);

  // if (!page) {
  //   notFound();
  // }

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-5xl bg-slate-200">
        <h1>{page.title}</h1>
        <p>{page.authorName}</p>
        <p>{page.category}</p>
        <RichText data={page.content.json} />
      </div>
    </div>
  );
}
export async function generateStaticParams() {
  const allBlogPages = await getAllBlogPages();

  return allBlogPages.map((page: any) => ({
    slug: page.slug,
  }));
}
