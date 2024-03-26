"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./layout.module.css";

export default function NavLink({ url, label }: { url: string, label: string }) {
  const pathname = usePathname();
  const baseUrl = pathname.split("/")[1];
  const isActive = pathname === `/${baseUrl}` && !url || pathname.split("/")[2] === url;
  return (
    <li className={styles.li}>
      <Link className={styles.navLink + (isActive ? ` ${styles.active}` : "")} href={`/${baseUrl}/${url}`}>
        <Image className={styles.navImg} src={`/${url || label.toLowerCase()}.png`} width={512} height={512} alt={label} />
        <span className={styles.navLabel}>{label}</span>
      </Link>
    </li>
  );
}
