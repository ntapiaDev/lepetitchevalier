"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useTransition } from "react";
import toast from "react-hot-toast";
import type { Kingdom } from "@prisma/client";
import { useCurrentUser } from "@/modules/auth/hooks/use-current-user";
import { join } from "../actions/join";
import { leave } from "../actions/leave";
import styles from "../kingdom.module.css";

type KingdomWithUsers = Kingdom & {
  users: {
    userId: string,
    joinedAt: Date
  }[];
}

export default function Kingdom({ kingdom }: { kingdom: KingdomWithUsers }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const user = useCurrentUser();
  const { update } = useSession();

  const joinKingdom = (kingdomId: string) => {
    startTransition(() => {
      join(kingdomId)
        .then(data => {
          if (data.error) toast.error(data.error);
          if (data.success) {
            update()
              .then(() => {
                // TODO: Gestion de l'état, store? useState?
                kingdom.users.push({
                  userId: user?.id!,
                  joinedAt: new Date()
                });
                router.push(kingdom.name);
              });
          }
        });
    });
  }

  const leaveKingdom = (kingdomId: string) => {
    startTransition(() => {
      leave(kingdomId)
        .then(data => {
          if (data.error) toast.error(data.error);
          if (data.success) {
            update()
              .then(() => kingdom.users = kingdom.users.filter(u => u.userId !== user?.id!));
          }
        });
    });
  }

  const getElapsedDays = (createdAt: Date) => {
    const elapsedDays = (new Date().getTime() - new Date(createdAt).getTime()) / 1000 / 60 / 60 / 24;
    return Math.floor(elapsedDays);
  }

  return (
    <div>
      {/* TODO: Joueurs en ligne */}
      Nom : {kingdom.name} -
      Vitesse : x{kingdom.speed} -
      Joueurs : {kingdom.users.length} -
      Jours : {getElapsedDays(kingdom.createdAt)} -
      {user?.kingdoms.find(k => k.kingdomId === kingdom.id) && <>
        <Link href={kingdom.name}>Jouer</Link> <button disabled={isPending} onClick={() => leaveKingdom(kingdom.id)}>Quitter</button>
      </>}
      {!user?.kingdoms.find(k => k.kingdomId === kingdom.id) && <button disabled={isPending} onClick={() => joinKingdom(kingdom.id)}>Rejoindre</button>}
    </div>
  );
}
