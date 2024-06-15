import Link from "next/link";

export default function InterceptedF3() {
  return (
    <div className="ms-20 mt-20">
      <div className="">(...) Intersepted About page</div>
      <div className="flex flex-col gap-3">
        <Link href="/f1" className="underline">
          F1 Link
        </Link>
        <Link href="/f1/f2" className="underline">
          F2 Link
        </Link>
        <Link href="/f1/f4" className="underline">
          F4 Link
        </Link>
      </div>
    </div>
  );
}
