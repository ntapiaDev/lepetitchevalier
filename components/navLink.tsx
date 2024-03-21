import Link from "next/link";

export default function NavLink({ baseUrl, url, label }: { baseUrl: string, url: string, label: string }) {
  return (
    <li>
      <Link href={`/${baseUrl}/${url}`}>{label}</Link>
    </li>
  );
}
