import { RightColumnScrollBase } from "@/components/templates/rightColumnScroll";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RightColumnScrollBase>{children}</RightColumnScrollBase>;
}
