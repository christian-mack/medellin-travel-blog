import { devLog, devLogHeader } from "@/lib/utils";
import RightColumnScroll from "./rightColumnScroll";
import { renderComponentByTypename } from "@/utils/contentful";

interface DefaultPageProps {
  items: any;
  page: any;
  slug: string;
}

export default function DefaultPage({ items, slug }: DefaultPageProps) {
  //   devLog([devLogHeader("[PAGE]: [slug] -> DefaultPage"), items]);
  return (
    <RightColumnScroll heading="Sample heading">
      {items.map((item: any) => {
        return (
          <>
            <div key={item.sys.id}>
              {renderComponentByTypename({
                type: item.__typename,
                itemId: item.sys.id,
                slug: slug,
              })}
            </div>
          </>
        );
      })}
    </RightColumnScroll>
  );
}
