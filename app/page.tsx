import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Subscribe from "@/components/Subscribe";
import LatestPosts from "@/components/LatestPosts";

export default async function Index() {
  return (
    <div className="flex-1 w-full flex flex-col items-center">
      <LatestPosts />
    </div>
  );
}
