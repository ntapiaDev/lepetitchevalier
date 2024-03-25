import NavLink from "./navLink";

export default function Nav({ baseUrl }: { baseUrl: string }) {
  return (
    <nav>
      <ol>
        <NavLink baseUrl={baseUrl} url="" label="Campement" />
        <NavLink baseUrl={baseUrl} url="ressources" label="Ressources" />
        <NavLink baseUrl={baseUrl} url="support" label="Support" />
        <NavLink baseUrl={baseUrl} url="recherche" label="Recherche" />
        <NavLink baseUrl={baseUrl} url="unites" label="Unités" />
        <NavLink baseUrl={baseUrl} url="defense" label="Défense" />
        <NavLink baseUrl={baseUrl} url="messages" label="Messages" />
        <NavLink baseUrl={baseUrl} url="inventaire" label="Inventaire" />
        <NavLink baseUrl={baseUrl} url="carte" label="Carte du monde" />
        <NavLink baseUrl={baseUrl} url="attaque" label="Attaque" />
      </ol>
    </nav>
  );
}
