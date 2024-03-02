import {
  DrawingPinFilledIcon,
  IdCardIcon,
  PaperPlaneIcon,
  SunIcon,
} from "@radix-ui/react-icons";

interface HeroProps {
  elemId: string;
}

export const HomeHero = ({ elemId }: HeroProps) => {
  return (
    <div className="w-full max-w-5xl grid grid-cols-12 py-20 gap-6" id={elemId}>
      <div className="col-span-3 bg-brand rounded-md items-center justify-center flex flex-col py-8 gap-8">
        <SunIcon className="w-24 h-24 text-brand-100" />
        <IdCardIcon className="w-24 h-24 text-brand-100" />
        <DrawingPinFilledIcon className="w-24 h-24 text-brand-100" />
      </div>
      <div className="col-span-8">right</div>
    </div>
  );
};
