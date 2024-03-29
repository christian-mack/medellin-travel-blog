import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { ReactNode } from "react";
import { bebas, inter } from "@/app/fonts";
import { cn } from "@/lib/utils";

export const RichText = ({ data }: { data: any }) => {
  const renderData = documentToReactComponents(data, {
    renderMark: {
      [MARKS.BOLD]: (text: any) => <p className="font-bold">{text}</p>,
      [MARKS.ITALIC]: (text: any) => <p className="italic">{text}</p>,
      [MARKS.UNDERLINE]: (text: any) => <p className="underline">{text}</p>,
      [MARKS.SUBSCRIPT]: (text: any) => <sub>{text}</sub>,
      [MARKS.SUPERSCRIPT]: (text: any) => <sup>{text}</sup>,
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node: any, children: ReactNode) => (
        <h1 className={cn("text-[56px] mb-[32px] mt-[64px]", bebas.className)}>
          {children}
        </h1>
      ),
      [BLOCKS.HEADING_2]: (node: any, children: ReactNode) => (
        <h2 className={cn("text-[40px] mb-[32px] mt-[64px]", bebas.className)}>
          {children}
        </h2>
      ),
      [BLOCKS.HEADING_3]: (node: any, children: ReactNode) => (
        <h3 className={cn("text-[32px] mb-[32px] mt-[64px]", bebas.className)}>
          {children}
        </h3>
      ),
      [BLOCKS.HEADING_4]: (node: any, children: ReactNode) => (
        <h4 className={cn("text-[26px] mb-[32px] mt-[64px]", bebas.className)}>
          {children}
        </h4>
      ),
      [BLOCKS.HEADING_5]: (node: any, children: ReactNode) => (
        <h5 className={cn("text-[24px] mb-[32px] mt-[64px]", bebas.className)}>
          {children}
        </h5>
      ),
      [BLOCKS.HEADING_6]: (node: any, children: ReactNode) => (
        <h6 className={cn("text-[20px] mb-[32px] mt-[64px]", bebas.className)}>
          {children}
        </h6>
      ),
      [BLOCKS.PARAGRAPH]: (node: any, children: ReactNode) => (
        <p className="text-[16px] mb-[32px]">{children}</p>
      ),
    },
    renderText: (text) => {
      return text.split("\n").reduce((children: any, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
  });
  return <div className={inter.className}>{renderData}</div>;
};
