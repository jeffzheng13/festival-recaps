'use client';

import { usePathname } from 'next/navigation';

export default function RaveInfo() {
  const pathname = usePathname();

  return <p>{pathname}</p>;
}