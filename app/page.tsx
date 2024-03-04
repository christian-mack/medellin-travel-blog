import { LatestPosts } from "@/components/LatestPosts";
import { AllCategories } from "@/components/AllCategories";
import { FeaturedPosts } from "@/components/FeaturedPosts";
import { AboveTheFold } from "@/components/AboveTheFold";

export default function Index() {
  return (
    <div className="flex-1 w-full flex flex-col items-center">
      <AboveTheFold />
      <FeaturedPosts />
      <AllCategories />
      <LatestPosts />
    </div>
  );
}
