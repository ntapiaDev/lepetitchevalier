"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signup } from "../actions/signup";
import { registerSchema } from "../schemas/register";
import styles from "../auth.module.css";

export default function Signup() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  });

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    startTransition(() => {
      signup(values)
        .then(data => {
          if (data.error) toast.error(data.error);
          if (data.success) {
            toast.success(data.success);
            router.push("/serveur");
          }
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
          {...register("name")} />
        {errors.name && <span>{errors.name.message}</span>}
      </label>
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
        disabled={isPending}>S'inscrire</button>
    </form>
  );
}