import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col gap-5">
      <div className="">Archived - 1</div>
      <Link href="/complex-dash" className="underline">
       Users
      </Link>
    </div>
  );
}
