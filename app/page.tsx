import { LatestPosts } from "@/components/LatestPosts";
import { AllCategories } from "@/components/AllCategories";
import { FeaturedPosts } from "@/components/FeaturedPosts";
import { AboveTheFold } from "@/components/AboveTheFold";
import { getAllPages } from "@/lib/contentful/pages";

export default async function Index() {
  const pages = await getAllPages();

  return (
    <div className="flex-1 w-full flex flex-col items-center">
      <AboveTheFold />
      <FeaturedPosts />
      <AllCategories />
      <LatestPosts />
    </div>
  );
}
