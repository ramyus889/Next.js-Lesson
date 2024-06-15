"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Docs({ params }: { params: { slug: string[] } }) {
  if (params.slug.length === 3) {
    return (
      <div className="mx-20 my-20 inline-block">
        <div className="flex flex-col gap-5">
          <div className="text-[30px]">
            Viewing docs for feature {params.slug[0]} and concept{" "}
            {params.slug[1]}
          </div>
          <Button as={Link} href={"/docs"}>
            Back
          </Button>
        </div>
      </div>
    );
  } else if (params.slug.length === 1) {
    return (
      <div className="mx-20 my-20 inline-block">
        <div className="flex flex-col gap-5">
          <div className="text-[30px]">
            Viewing docs for topic {params.slug[0]}
          </div>
          <Button as={Link} href={"/docs"}>
            Back
          </Button>
        </div>
      </div>
    );
  }
  return (
    <div className="mx-20 my-20 inline-block">
      <div className="flex flex-col gap-5">
        <div className="text-[30px]">Slug Home Page {params.slug}</div>
        <Button as={Link} href={"/docs"}>
          Back
        </Button>
      </div>
    </div>
  );
}
