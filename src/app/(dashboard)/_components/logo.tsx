import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/">
      <Image height={130} width={130} alt="Logo" src="/logo.svg" />
    </Link>
  );
}
