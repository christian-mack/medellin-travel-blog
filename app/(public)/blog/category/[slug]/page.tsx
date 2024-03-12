import { getAllCategories, getCategoryBySlug } from "@/lib/contentful/category";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const page = await getCategoryBySlug(params.slug);

  if (!page) {
    notFound();
  }

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-5xl bg-slate-200">{}</div>
    </div>
  );
}
export async function generateStaticParams() {
  const allCategories = await getAllCategories();

  return allCategories.map((category: any) => ({
    slug: category.slug,
  }));
}
