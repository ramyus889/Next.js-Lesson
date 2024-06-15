"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Products() {
  return (
    <div className="mx-20 my-20 inline-block">
      <div className="flex flex-col gap-5">
        <div className="text-[30px]">Products</div>
        <Button as={Link} href={"/products/17"}>
          Product list 1
        </Button>
        <Button as={Link} href={"/products/24"}>
          Product list 2
        </Button>
        <Button as={Link} replace href={"/products/33"}>
          Product list 3
        </Button>
      </div>
    </div>
  );
}
