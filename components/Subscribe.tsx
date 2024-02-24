import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Subscribe = () => {
  return (
    <div className="w-full flex flex-1 green-gradient py-28 justify-center">
      <div className="flex max-w-3xl items-center justify-center bg-zinc-200 rounded-lg pb-20">
        <div className="text-center items-center justify-center w-2/3">
          <div className="flex flex-col mt-12 mb-6">
            <h4 className="font-bold pb-4 text-4xl">
              Subscribe For <span className="italic font-normal">Updates</span>
            </h4>
            <p className="font-light">
              Subscribe to our newsletter to get the latest news, tips, and
              discounts for your next trip to Medellin!
            </p>
          </div>
          <div className="flex flex-1 gap-2 mb-12">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-zinc-800 text-white/90 p-6"
            />
            <Button variant="lime" className="flex flex-1">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
