import { serverSideFunction } from "@/app/utils/server-utils";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function About() {
  console.log("server-route");

  const result = serverSideFunction();
  return (
    <div className="inline-block">
      <div className="ms-20 mt-20 flex flex-col gap-5">
        <div className="">Server-route</div>
        <div className="">{result}</div>
        <Button as={Link} href={"/server-route/client-route"}>
          Client route
        </Button>
      </div>
    </div>
  );
}
