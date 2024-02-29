import { Separator } from "@/components/ui/separator";

interface SectionHeaderProps {
  title: string;
  titleLastWord: string;
  subtitle: string;
  description: string;
}

export const SectionHeader = ({
  title,
  titleLastWord,
  subtitle,
  description,
}: SectionHeaderProps) => {
  return (
    <>
      <div className="w-full flex justify-between pb-4 mt-24">
        <div>
          <h4 className="text-5xl font-bold">
            {title}{" "}
            <span className="italic font-light tracking-tight">
              {titleLastWord}
            </span>
          </h4>
        </div>
        <div>
          <p className="uppercase font-normal tracking-widest">{subtitle}</p>
          <p className="font-light tracking-wide">{description}</p>
        </div>
      </div>
      <Separator className="bg-zinc-900/70 mb-12" />
    </>
  );
};
