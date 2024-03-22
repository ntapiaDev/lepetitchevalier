import { redirect } from "next/navigation";
import { LOBBY_URL } from "@/routes";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Nav from "@/components/nav";
import { currentCamp } from "@/modules/camp/camp.utils";

export default async function GameLayout({ children, params }: { children: React.ReactNode, params: { kingdom: string } }) {
  const camp = await currentCamp(params.kingdom);
  // TODO: Redirection via le middleware?
  if (!camp) redirect(LOBBY_URL);

  return (
    <>
      <Header />
      <div className="main">
        <Nav baseUrl={params.kingdom} />
        {children}
      </div>
      <Footer />
    </>
  );
}
