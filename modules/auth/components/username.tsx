"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LOBBY_URL } from "@/routes";
import { username } from "../actions/username";
import { usernameSchema } from "../schemas/username";
import styles from "../auth.module.css";

export default function Username() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(usernameSchema),
    defaultValues: {
      username: ""
    }
  });

  const onSubmit = (values: z.infer<typeof usernameSchema>) => {
    startTransition(() => {
      username(values)
        .then(data => {
          if (data.error) toast.error(data.error);
          if (data.success) router.push(LOBBY_URL);
        });
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nom :
        <input
          type="text"
          placeholder="Gabin"
          disabled={isPending}
          {...register("username")} />
        {errors.username && <span>{errors.username.message}</span>}
      </label>
      <button
        type="submit"
        disabled={isPending}>Confirmer mon pseudonyme</button>
    </form>
  );
}
