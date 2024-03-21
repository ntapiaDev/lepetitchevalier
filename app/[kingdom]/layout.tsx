import { redirect } from "next/navigation";
import { LOBBY_URL } from "@/routes";
import { currentUser } from "@/modules/auth/user.utils";
import { getCampByUserAndKingdomId } from "@/modules/camp/camp.repository";
import { getKingdomByName } from "@/modules/kingdom/kingdom.repository";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Nav from "@/components/nav";

export default async function GameLayout({ children, params }: { children: React.ReactNode, params: { kingdom: string } }) {
  const user = await currentUser();
  const kingdom = await getKingdomByName(params.kingdom);
  if (!user?.id || !kingdom?.users.find(u => u.userId === user.id)) redirect(LOBBY_URL);

  const camp = await getCampByUserAndKingdomId(user.id, kingdom.id);
  if (!camp) redirect(LOBBY_URL);

  return (
    <>
      <Header camp={camp} />
      <div className="main">
        <Nav baseUrl={params.kingdom} />
        {children}
      </div>
      <Footer />
    </>
  );
}
