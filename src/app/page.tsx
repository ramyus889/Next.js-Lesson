"use client";

import UserCard from "./(work)/(components)/components/UserCard";
import { Button } from "@nextui-org/react";
import { useState } from "react";

export default function Home() {
  const [link, setLink] = useState(false);
  return (
    <div className="mx-20 my-20 flex w-[400px] flex-col gap-5">
      <div className="">Frontend</div>
      <Button onClick={() => setLink(!link)} className="">
        Button
      </Button>
      <UserCard link={link} />
    </div>
  );
}
