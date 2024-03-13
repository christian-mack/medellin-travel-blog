"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <Button
      variant="link"
      className="p-0 text-lg items-center"
      onClick={() => router.back()}
    >
      <ArrowLeftIcon className="h-[100%] w-[100%]" />
    </Button>
  );
}
