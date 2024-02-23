import Post from "@/components/Post";
import { Separator } from "@/components/ui/separator";

const LatestPosts = () => {
  return (
    <>
      <div className="w-full flex flex-col max-w-6xl">
        <div className="w-full flex justify-between py-4">
          <div>
            <h4 className="text-5xl font-bold">
              Latest <span className="italic font-light">Posts</span>
            </h4>
          </div>
          <div>
            <p className="uppercase font-medium">Our Recent Articles</p>
            <p className="font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="w-full">
          <Separator className="bg-zinc-900/70" />
        </div>
      </div>
    </>
  );
};

export default LatestPosts;
