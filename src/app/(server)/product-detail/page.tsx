import { Skeleton } from "@nextui-org/react";
import ProductsCom from "../components/ProductsCom";
import ReviewsCom from "../components/ReviewsCom";
import { Suspense } from "react";

export default function About() {
  return (
    <div className="ms-20 mt-20 flex max-w-[300px] flex-col gap-5">
      <div className="">Product detail page</div>

      <Suspense fallback={<Skeleton className="h-12 w-full rounded-xl" />}>
        <ProductsCom />
      </Suspense>
      <Suspense fallback={<Skeleton className="h-12 w-full rounded-xl" />}>
        <ReviewsCom />
      </Suspense>
    </div>
  );
}
