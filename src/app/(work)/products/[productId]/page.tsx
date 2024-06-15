import Link from "next/link";
import { Button } from "@nextui-org/react";
import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => resolve(`Iphone ${params.productId}`), 100);
  });
  return {
    title: `Product ${title}`,
  };
};

export default function Home({ params }: Props) {
  return (
    <div className="mx-20 my-20 inline-block">
      <div className="flex flex-col gap-5">
        <div className="text-[30px]">Product List {params.productId}</div>
        <Button as={Link} href={`/products/${params.productId}/reviews`}>
          Reviews
        </Button>
        <Button as={Link} href={"/products"}>
          Back
        </Button>
      </div>
    </div>
  );
}
