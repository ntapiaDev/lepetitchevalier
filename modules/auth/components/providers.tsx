"use client";

import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { LOBBY_URL } from "@/routes";
import styles from "../auth.module.css";

export default function Providers() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Cet email est déjà utilisé avec un autre provider!"
      : searchParams.get("error") === "OAuthCallbackError"
        ? "Une erreur s'est produite, merci de réessayer."
        : "";

  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: callbackUrl || LOBBY_URL
    });
  }

  return (
    <div>
      {urlError && <span>{urlError}</span>}
      <button onClick={() => onClick("google")}>Google</button>
      <button onClick={() => onClick("github")}>GitHub</button>
    </div>
  );
}
