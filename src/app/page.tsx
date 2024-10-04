"use client";

import Image from "next/image";
import { ConnectButton } from "../../components/ConnectButton";
import { useAccount, useChains } from "wagmi";
import SearchForm from "../../components/SearchForm";

export default function Home() {
  const { isConnected, chain } = useAccount();

  return (
    <div className="h-full mx-auto px-4 sm:px-6 md:px-8 lg:px-40 py-5 sm:py-10">
      {isConnected ? (
        <>
          <div className="flex flex-col sm:flex-row justify-between items-center pb-5 space-y-4 sm:space-y-0">
            <SearchForm />
          </div>
        </>
      ) : (
        <ConnectButton />
      )}
    </div>
  );
}
