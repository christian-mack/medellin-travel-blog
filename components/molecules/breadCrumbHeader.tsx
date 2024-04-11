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
import { ClockIcon, DotFilledIcon } from "@radix-ui/react-icons";

interface BreadCrumbHeaderProps {
  category: string;
  author: string;
  publishDate: string;
  timeToRead: string;
}

export default function BreadCrumbHeader({
  category,
  author,
  publishDate,
  timeToRead,
}: BreadCrumbHeaderProps) {
  return (
    <div
      id="breadCrumbHeader"
      className={cn(
        "flex justify-between w-full items-center gap-4",
        inter.className
      )}
    >
      <div className="flex flex-col md:flex-row justify-between w-full">
        <div className="flex md:hidden w-full justify-end">
          <ModeToggle />
        </div>
        <div className="mb-2 md:mb-0">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-xs">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  className="capitalize text-xs"
                  href={`/${category}`}
                >
                  {category}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex text-xs gap-4 items-center">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <p className="text-xs">{author}</p>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <DotFilledIcon />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <p className="text-xs">
                  {new Date(publishDate).toDateString()}
                </p>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <DotFilledIcon />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <div className="flex items-center gap-1">
                  <ClockIcon width={12} height={12} />
                  <p className="text-xs">{timeToRead} minute read</p>
                </div>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="hidden md:flex">
        <ModeToggle />
      </div>
    </div>
  );
}
