import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col gap-5">
      <div className="">Revenue</div>
      <Link href="/complex-dash/revenue-archived" className="underline">
       Revenue - Archived
      </Link>
    </div>
  );
}
