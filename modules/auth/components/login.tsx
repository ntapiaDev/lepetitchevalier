"use client";

import { useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "../actions/login";
import { loginSchema } from "../schemas/login";
import styles from "../auth.module.css";

export default function Login() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const [isPending, startTransition] = useTransition();

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    startTransition(() => {
      login(values, callbackUrl)
        .then(data => {
          if (data?.error) toast.error(data.error);
        });
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email :
        <input
          type="email"
          placeholder="gabin@yahoo.fr"
          disabled={isPending}
          {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}
      </label>
      <label>Mot de passe :
        <input
          type="password"
          placeholder="********"
          disabled={isPending}
          {...register("password")} />
        {errors.password && <span>{errors.password.message}</span>}
      </label>
      <button
        type="submit"
        disabled={isPending}>Se connecter</button>
    </form>
  );
}
