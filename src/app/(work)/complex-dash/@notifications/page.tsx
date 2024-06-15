import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col gap-5">
      <div className="">Notification </div>
      <Link href="/complex-dash/archived" className="underline">
      Notification-Archived
      </Link>
    </div>
  );
}
