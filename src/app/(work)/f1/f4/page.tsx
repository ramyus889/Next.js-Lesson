import Link from "next/link";

export default function F4() {
  return (
    <div className="ms-20 mt-20">
      <div className="">F4 page</div>
      <div className="flex flex-col gap-3">
        <Link href="/f1" className="underline">
          F1 Link
        </Link>
        <Link href="/f1/f2" className="underline">
          F2 Link
        </Link>
        <Link href="/f1/f3" className="underline">
          F3 Link
        </Link>
        <Link href="/about" className="underline">
          About
        </Link>
      </div>
    </div>
  );
}
