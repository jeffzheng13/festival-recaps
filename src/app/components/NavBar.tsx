"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Raves", href: "/raves", current: false },
];

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav
      className={
        pathname === "/"
          ? "flex items-center justify-between p-6 lg:px-8 bg-transparent z-50 fixed left-0 right-0"
          : "flex items-center justify-between p-6 lg:px-8 bg-transparent"
      }
    >
      {/* Here to handle what happens when screen gets too small for nav bar*/}
      <div className="flex lg:hidden"></div>
      <div className="hidden lg:flex lg:gap-x-20 justify-center w-full">
        {navigation.map((item, index) => (
          <>
            {index === Math.floor(navigation.length / 2) && (
              <Link key="logo" href="/">
                <Image src="/dj.png" alt="Logo" width={30} height={30}></Image>
              </Link>
            )}
            <Link key={item.name} href={item.href}>
              {item.name.toUpperCase()}
            </Link>
          </>
        ))}
      </div>
    </nav>
  );
}
