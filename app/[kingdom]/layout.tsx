import { redirect } from "next/navigation";
import { LOBBY_URL } from "@/routes";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Nav from "@/components/nav";
import { currentCamp } from "@/modules/camp/camp.utils";
import { updateCamp } from "@/modules/camp/actions/updateCamp";

export default async function GameLayout({ children, params }: { children: React.ReactNode, params: { kingdom: string } }) {
  const camp = await currentCamp(params.kingdom);
  if (!camp) redirect(LOBBY_URL);

  const update = await updateCamp(camp);
  const updatedCamp = update.success;

  return (
    <>
      <Header camp={updatedCamp} />
      <div className="main">
        <Nav baseUrl={params.kingdom} />
        {children}
      </div>
      <Footer />
    </>
  );
}
