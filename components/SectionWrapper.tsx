import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  elemId: string;
  styles?: string;
}

export const SectionWrapper = ({
  children,
  elemId,
  styles,
}: SectionWrapperProps) => {
  const style = styles
    ? cn("w-full flex flex-col max-w-6xl", styles)
    : "w-full flex flex-col max-w-6xl";

  return (
    <div className={style} id={elemId}>
      {children}
    </div>
  );
};
