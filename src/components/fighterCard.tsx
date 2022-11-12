import Image from "next/image";
import type { Fighter } from "./../types/main";

type FighterCardProps = {
  fighter: Fighter
  isSignedIn: boolean
};

export default function FighterCard({ fighter, isSignedIn }: FighterCardProps) {
  return (
    <section className="flex flex-col w-[25rem] justify-center rounded-3xl border-2 p-6 shadow-xl duration-300 motion-safe:hover:scale-110 bg-[#333333]">
      <div className="flex flex-col justify-center mt-5">
          <Image
            src={fighter.imageUrl}
            width={250}
            height={250}
            className="self-center object-cover object-top"
            alt="fighter-image"
          ></Image>
          <div className="flex flex-col">
            <h2 className="mx-auto mt-5">{fighter.name}</h2>
            {isSignedIn &&
              <button
                className="w-3/4 mx-auto rounded-3xl border border-white bg-white/40 mt-5 px-4 py-2 text-xl shadow-lg hover:bg-red-400 duration-300 motion-safe:hover:scale-110"
              >
                <div className="duration-75 motion-safe:hover:scale-125">
                  Pick
                </div>
              </button>
            }
          </div>
      </div>
    </section>
  );
}
