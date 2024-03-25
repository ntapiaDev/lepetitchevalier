import { redirect } from "next/navigation";
import { LOBBY_URL } from "@/routes";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Nav from "@/components/layout/nav";
import { currentCamp } from "@/modules/camp/camp.utils";
import { updateCamp } from "@/modules/camp/actions/updateCamp";

export default async function GameLayout({ children, params }: { children: React.ReactNode, params: { kingdom: string } }) {
  const camp = await currentCamp(params.kingdom);
  if (!camp) redirect(LOBBY_URL);

  const update = await updateCamp(camp);
  // TODO: updateCamp --> getCamp dans la fonction pour vérifier si legit??
  const updatedCamp = update.success;

  return (
    <>
      <Header camp={updatedCamp} />
      <div className="nav-main">
        <Nav baseUrl={params.kingdom} />
        {children}
      </div>
      <Footer />
    </>
  );
}
