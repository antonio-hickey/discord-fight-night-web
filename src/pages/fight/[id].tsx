import { type NextPage } from "next";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";

import Background from "../../assets/dfn-background.svg"
import { trpc } from "../../utils/trpc";
import Header from "../../components/header";
import FighterCard from "../../components/fighterCard";
import Footer from "../../components/footer";

const FightPage: NextPage = () => {
  const router = useRouter()
  const fight = trpc.fights.getFight.useQuery({
    fightId: router.query.hash?.toString()
  });

  return (
    <div 
      className="relative flex h-screen w-screen flex-col justify-between"
      style={{backgroundImage: 'url(' + Background.src + ')'}}
    >
      <Header />
      <main className="container mx-auto flex h-full w-full flex-col items-center p-4 justify-between">
        <h3 className="font-bold px-[10rem] text-[0rem] lg:text-[2rem]">
          {fight?.data?.name}
        </h3>
        <h3 className="mt-3 px-[10rem] text-[1.25rem]">
          Pick Your Fighter:
        </h3>
        <section className="flex flex-col w-full">
          <div className="mt-[1rem] flex justify-center space-x-10">
            {fight?.data?.fighters.map((val, idx) => {
              return <FighterCard fighter={val} key={idx} />
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FightPage;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {sessionData && (
        <p className="text-2xl text-blue-500">
          Logged in as {sessionData?.user?.name}
        </p>
      )}
      {secretMessage && (
        <p className="text-2xl text-blue-500">{secretMessage}</p>
      )}
      <button
        className="rounded-md border border-black bg-violet-50 px-4 py-2 text-xl shadow-lg hover:bg-violet-100"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};

