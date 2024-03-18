import Providers from "@/modules/auth/components/providers";
import styles from "../lobby.module.css";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      {children}
      <Providers />
    </main>
  );
}
