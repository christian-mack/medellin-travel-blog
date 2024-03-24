import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { ModeToggle } from "../atoms/darkModeToggle";
import { cn } from "@/lib/utils";
import { inter } from "@/app/fonts";

interface BreadCrumbHeaderProps {
  category: string;
  author: string;
}

export default function BreadCrumbHeader({
  category,
  author,
}: BreadCrumbHeaderProps) {
  return (
    <div
      id="breadCrumbHeader"
      className={cn(
        "flex justify-between w-full items-center",
        inter.className
      )}
    >
      <div className="flex justify-between w-full">
        <div className="">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink className="capitalize" href={`/${category}`}>
                  {category}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex text-xs gap-4 items-center">
          <div>{author}</div>
          <div className="text-zinc-800/80">Publish date</div>
          <div className="text-zinc-800/80">2 minute read</div>
        </div>
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
}
