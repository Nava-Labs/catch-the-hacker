"use client";

import Link from "next/link";
import React from "react";
import { ConnectButton } from "./ConnectButton";

export default function Header() {
  return (
    <div className="w-full px-20 py-3 top-0 border-b-[1px] border-neutral-600">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex flex-col items-center">
          <h1 className="font-semibold text-lg">CatchTheHacker</h1>
        </Link>
        <div>
          <ConnectButton />
        </div>
      </div>
    </div>
  );
}
