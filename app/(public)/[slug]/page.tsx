import { getPageBySlug } from "@/lib/contentful/pages";
import { useParams } from "next/navigation";

export default async function DynamicPage({
  params,
}: {
  params: { slug: string };
}) {
  const page = await getPageBySlug(params.slug);

  return (
    <div>
      <h1>{page.title}</h1>
    </div>
  );
}
