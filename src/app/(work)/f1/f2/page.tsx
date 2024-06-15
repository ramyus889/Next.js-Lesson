import Link from "next/link";

export default function F2() {
  return (
    <div className="ms-20 mt-20">
      <div className="">F2 page</div>
      <div className="flex flex-col gap-3">
        <Link href="/f1" className="underline">
          F1 Link
        </Link>
        <Link href="/f1/f3" className="underline">
          F3 Link
        </Link>
        <Link href="/f1/f4" className="underline">
          F4 Link
        </Link>
      </div>
    </div>
  );
}
