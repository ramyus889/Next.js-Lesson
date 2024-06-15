"use client";

import Link from "next/link";
import { Button } from "@nextui-org/react";
import { notFound } from "next/navigation";

export default function Home({
  params,
}: {
  params: { productId: string; reviewsId: string };
}) {
  if (parseInt(params.reviewsId) > 1000) {
    notFound();
  }
  return (
    <div className="mx-20 my-20 inline-block">
      <div className="flex flex-col gap-5">
        <div className="text-[30px]">
          Product List {params.productId}, Reviews List {params.reviewsId}
        </div>
        <Button as={Link} href={`/products/${params.productId}/reviews`}>
          Back
        </Button>
      </div>
    </div>
  );
}
