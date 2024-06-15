"use client";

import Link from "next/link";
import { Button } from "@nextui-org/react";
import LineChart from "./line-chart";

export default function Home() {
  return (
    <div className="mx-20 my-20 ">
      <div className="">Dashboard</div>
      <div className="">
        <LineChart />
      </div>
    </div>
  );
}
