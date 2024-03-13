import Header from "@/components/organisms/header";
import Image from "next/image";

import { getAllCategories } from "@/lib/contentful/category";
import Link from "next/link";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="grid grid-cols-12 w-full">{children}</div>;
}
