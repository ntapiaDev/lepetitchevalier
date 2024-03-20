import Link from "next/link";
import { LOBBY_URL } from "@/routes";

export default function Campement() {
  // Ecran de bienvenue sur le serveur
  // Etat récapitulatif depuis la dernière connexion
  // Productions en cours, attaques, etc.
  return (
    <main>
      <h1>Campement</h1>
      <Link href={LOBBY_URL}>Liste des royaumes.</Link>
    </main>
  );
}
