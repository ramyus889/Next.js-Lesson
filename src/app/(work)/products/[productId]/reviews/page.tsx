"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Products({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <div className="mx-20 my-20 inline-block">
      <div className="flex flex-col gap-5">
        <div className="text-[30px]">Reviews</div>
        <Button as={Link} href={`/products/${params.productId}/reviews/1200`}>
          Reviews list 1
        </Button>
        <Button as={Link} href={`/products/${params.productId}/reviews/45`}>
          Reviews list 2
        </Button>
        <Button as={Link} href={`/products/${params.productId}/reviews/62`}>
          Reviews list 3
        </Button>
        <Button as={Link} href={`/products/${params.productId}`}>
          Back
        </Button>
      </div>
    </div>
  );
}
