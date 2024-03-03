import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  titleColor?: string;
  titleLastWord: string;
  titleLastWordColor?: string;
  subtitle: string;
  subtitleColor?: string;
  description: string;
  descriptionColor?: string;
  separatorColor?: string;
}

export const SectionHeader = ({
  title,
  titleColor,
  titleLastWord,
  titleLastWordColor,
  subtitle,
  subtitleColor,
  description,
  descriptionColor,
  separatorColor,
}: SectionHeaderProps) => {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row justify-between pb-4 mt-24">
        <div className="text-center md:text-start">
          <h4 className={cn("text-3xl md:text-5xl font-bold", titleColor)}>
            {title}{" "}
            <span
              className={cn(
                "italic font-light tracking-tight",
                titleLastWordColor
              )}
            >
              {titleLastWord}
            </span>
          </h4>
        </div>
        <div className="text-center md:text-start mt-6 md:mt-0">
          <p
            className={cn(
              "uppercase font-normal tracking-widest mb-2 md:mb-0",
              subtitleColor
            )}
          >
            {subtitle}
          </p>
          <p className={cn("font-light tracking-wide", descriptionColor)}>
            {description}
          </p>
        </div>
      </div>
      <Separator className={cn("bg-zinc-900/70 mb-12", separatorColor)} />
    </>
  );
};
