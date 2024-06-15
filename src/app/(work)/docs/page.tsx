"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Docs() {
  return (
    <div className="mx-20 my-20 inline-block">
      <div className="flex flex-col gap-5">
        <div className="text-[30px]">Docs Home Page</div>
        <Button as={Link} href={"/docs/catch-all-segments"}>
          Docs list 1
        </Button>
        <Button as={Link} href={"/docs/catch-all"}>
          Docs list 2
        </Button>
        <Button as={Link} href={"/docs/33"}>
          Docs list 3
        </Button>
      </div>
    </div>
  );
}
