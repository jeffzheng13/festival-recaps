'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function RaveInfo() {
  const pathname = usePathname();

  return <p>{pathname}</p>;
}