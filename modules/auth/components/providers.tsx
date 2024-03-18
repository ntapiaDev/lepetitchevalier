"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export default function Providers() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const urlError = searchParams.get("error") === "OAuthAccountNotLinked"
    ? "Cet email est déjà utilisé avec un autre provider!"
    : "";

  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT
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
