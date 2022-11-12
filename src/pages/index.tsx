
import { type NextPage } from "next";

import Background from "../assets/dfn-background.svg"

import { trpc } from "../utils/trpc";
import Header from "../components/header";
import Footer from "../components/footer";
import FightCard from "../components/fightCard";

const Home: NextPage = () => {
  const fights = trpc.fights.getFights.useQuery();
  
  if (!fights) {
    return <></>
  }

  return (
    <div 
      className="relative flex min-h-screen min-w-screen h-full w-full flex-col justify-between"
      style={{backgroundImage: 'url(' + Background.src + ')'}}
    >
      <Header />
      <main className="container mx-auto flex h-full w-full flex-col items-center p-4">
        <div className="flex flex-col h-full w-full items-center p-1 justify-between">
          <div className="mt-[1rem] grid gap-3 pt-3 text-center md:grid-cols-2 lg:w-2/3">
            {fights.data &&
              Object.values(fights.data).map((val, idx) => {
                return (
                  <FightCard
                    id={val.id}
                    fighters={val.fighters}
                    key={idx}
                  />
                )
              })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;



