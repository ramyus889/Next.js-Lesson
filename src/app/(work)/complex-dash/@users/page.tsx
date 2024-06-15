import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col gap-5">
      <div className="">Users</div>
      <Link href="/complex-dash/users-archived" className="underline">
        Users - Archived
      </Link>
    </div>
  );
}
