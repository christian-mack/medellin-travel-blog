import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { ReactNode } from "react";

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
        <h1>{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node: any, children: ReactNode) => (
        <h2>{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node: any, children: ReactNode) => (
        <h3>{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node: any, children: ReactNode) => (
        <h4>{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (node: any, children: ReactNode) => (
        <h5>{children}</h5>
      ),
      [BLOCKS.HEADING_6]: (node: any, children: ReactNode) => (
        <h6>{children}</h6>
      ),
      [BLOCKS.PARAGRAPH]: (node: any, children: ReactNode) => <p>{children}</p>,
    },
    renderText: (text) => {
      return text.split("\n").reduce((children: any, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
  });
  return <div>{renderData}</div>;
};
