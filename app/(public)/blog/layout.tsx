import { RightColumnScrollBase } from "@/components/templates/rightColumnScroll";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RightColumnScrollBase>{children}</RightColumnScrollBase>;
}
