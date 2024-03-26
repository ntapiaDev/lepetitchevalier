import NavLink from "./navLink";

export default function NavLinks() {
  return (
    <ol>
      <NavLink url="" label="Campement" />
      <NavLink url="ressources" label="Ressources" />
      <NavLink url="support" label="Support" />
      <NavLink url="recherche" label="Recherche" />
      <NavLink url="unites" label="Unités" />
      <NavLink url="defense" label="Défense" />
      <NavLink url="messages" label="Messages" />
      <NavLink url="inventaire" label="Inventaire" />
      <NavLink url="carte" label="Carte du monde" />
      <NavLink url="attaque" label="Attaque" />
    </ol>
  );
}
