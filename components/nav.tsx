import NavLink from "./navLink";

export default function Nav({ baseUrl }: { baseUrl: string }) {
  return (
    <nav>
      <ol>
        <NavLink baseUrl={baseUrl} url="" label="Campement" />
        <NavLink baseUrl={baseUrl} url="ressources" label="Ressources" />
      </ol>
    </nav>
  );
}
