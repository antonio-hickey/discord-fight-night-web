import Image from "next/image";
import { useEffect } from "react";

import { trpc } from "../utils/trpc";
import type { Fighter } from "./../types/main";

type FighterCardProps = {
  fighter: Fighter
  userId: string | null
  prediction: string | null | undefined
  predictionMade: (fighterId: string) => void
};

export default function FighterCard({ fighter, userId, prediction, predictionMade }: FighterCardProps) {
  const { mutate: makePrediction } = trpc.game.makePrediction.useMutation();

  return (
    <section 
      className="flex flex-col w-[25rem] justify-center rounded-3xl border-2 p-6 shadow-xl duration-300 motion-safe:hover:scale-110 bg-[#333333]"
    >
      <div className="flex flex-col justify-center mt-5">
          <div className="relative h-64 w-56 mx-auto">
            <Image
              src={fighter.imageUrl}
              fill={true}
              className="fixed self-center object-cover object-top"
              alt="fighter-image"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="mx-auto mt-5">{fighter.name}</h2>
            {userId &&
              prediction ? (
                fighter.id == prediction && (
                  <button
                    className="w-3/4 mx-auto rounded-3xl border border-white bg-red-400 mt-5 px-4 py-2 text-xl shadow-lg"
                  >
                    Picked
                  </button>
                )
              ) : userId && (
                <button
                  className="w-3/4 mx-auto rounded-3xl border border-white bg-white/40 mt-5 px-4 py-2 text-xl shadow-lg hover:bg-red-400"
                  onClick={() => {
                    makePrediction({
                     fighterId: fighter.id,
                     fightId: fighter.fightId,
                     userId: userId, 
                    })
                    predictionMade(fighter.id)
                  }}
                >
                  <div className="duration-500 motion-safe:hover:scale-125">
                    Pick
                  </div>
                </button>
              )
            }
          </div>
      </div>
    </section>
  );
}
