import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  styles?: string;
}

export const SectionContainer = ({
  children,
  styles,
}: SectionContainerProps) => {
  const style = styles
    ? cn("w-full flex items-center justify-center align-middle", styles)
    : "w-full flex items-center justify-center align-middle";

  return <div className={style}>{children}</div>;
};
