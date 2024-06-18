import { clientSideFunction } from "@/app/utils/client-utils";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function About() {
  console.log("client-route");

  const result = clientSideFunction();
  return (
    <div className="inline-block">
      <div className="ms-20 mt-20 flex flex-col gap-5">
        <div className="">Client-route</div>
        <div className="">{result}</div>
        <Button as={Link} href={"/server-route"}>
          Server route
        </Button>
      </div>
    </div>
  );
}
