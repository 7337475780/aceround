import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="root-layout">
      <nav>
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="logo"
            className="rounded-full"
            width={38}
            height={32}
          />
          <h2 className="text-blue">
            Ace<span className="text-creamy-white">Round</span>
          </h2>
        </Link>
      </nav>
      {children}
    </div>
  );
};

export default RootLayout;
