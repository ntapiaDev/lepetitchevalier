"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ baseUrl, url, label }: { baseUrl: string, url: string, label: string }) {
  const pathname = usePathname();
  const isActive = pathname === `/${baseUrl}` && !url || pathname.split("/")[2] === url;
  return (
    <li>
      <Link className={"nav-link" + (isActive ? " active" : "")} href={`/${baseUrl}/${url}`}>
        <Image className="nav-img" src={`/${url || label.toLowerCase()}.png`} width={512} height={512} alt={label} />
        <span>{label}</span>
      </Link>
    </li>
  );
}
