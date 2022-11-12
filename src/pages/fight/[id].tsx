import { type NextPage } from "next";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";

import { FaDiscord } from "react-icons/fa";

import Background from "../../assets/dfn-background.svg"
import { trpc } from "../../utils/trpc";
import Header from "../../components/header";
import FighterCard from "../../components/fighterCard";
import Footer from "../../components/footer";
import type { Fighter } from "../../types/main";

const FightPage: NextPage = () => {
  const {data: session} = useSession()
  const router = useRouter()
  const fightId = router.query.id?.toString()

  const fight = trpc.fights.getFight.useQuery({
    fightId: fightId,
  });

  let prediction: string | null = null
  if (session && session.user && fightId) {
    const prediction_ = trpc.game.getPrediction.useQuery({
      fightId: fightId,
      userId: session.user.id,
    })

    if (prediction_ && prediction_.data) {
      prediction = prediction_.data
    }
  }
  
  return (
    <div 
      className="relative flex h-screen w-screen flex-col justify-between"
      style={{backgroundImage: 'url(' + Background.src + ')'}}
    >
      <Header />
        <main className="container mx-auto flex h-full w-full flex-col items-center p-4">
          <h3 className="-mt-10 text-[1.25rem]">
            Pick Your Fighter:
          </h3>
          <section className="mt-10 flex flex-col w-full">
            <div className="flex justify-center space-x-10">
              {fight?.data?.fighters.map((val: Fighter, idx: number) => {
                return  <FighterCard 
                          fighter={val} 
                          key={idx} 
                          userId={
                            session && session.user ? 
                              session.user.id
                              : null
                          } 
                          prediction={prediction}
                        />
              })}
            </div>
          </section>
          { !session && 
            <button
              className="w-1/2 lg:w-1/4 mx-auto rounded-3xl border border-white bg-white/70 mt-10 px-4 py-2 text-xl shadow-lg hover:bg-red-400 duration-300 motion-safe:hover:scale-110"
              onClick={() => signIn("discord")}
            >
              <div className="flex items-center justify-center text-zinc-900 duration-75 motion-safe:hover:scale-125 hover:text-white">
                <FaDiscord /> &nbsp; Sign In To Pick
              </div>
            </button>
          }
        </main>
      <Footer />
    </div>
  );
};

export default FightPage;

