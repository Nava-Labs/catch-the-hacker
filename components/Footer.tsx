"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full px-20 py-3 border-t-[1px] border-neutral-600">
      <div className="flex justify-between">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-sm mb-2 text-neutral-600 font-medium">
            Created by:
          </h1>
          <Link href="https://navalabs.io/" target="_blank">
            <img
              src="/nava-labs-logo.png"
              alt="Nava Labs Logo"
              className="h-3"
            />
          </Link>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-sm text-neutral-600 font-medium">Created at:</h1>
          <Link href="https://www.2024.ethkl.org/" target="_blank">
            <img src="/ethkl-logo.avif" alt="ETHKL Logo" className="h-7" />
          </Link>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-sm mb-2 text-neutral-600 font-medium">
            Built on:
          </h1>
          <div className="flex space-x-2 items-center">
            <img
              src="/chain-logo/scroll.svg"
              alt="Scroll Logo"
              className="h-5"
            />
            <img src="/chain-logo/manta.svg" alt="Manta Logo" className="h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
