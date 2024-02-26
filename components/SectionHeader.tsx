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
      <div className="w-full flex justify-between pb-4 mt-24">
        <div>
          <h4 className={cn("text-5xl font-bold", titleColor)}>
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
        <div>
          <p
            className={cn(
              "uppercase font-normal tracking-widest",
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
