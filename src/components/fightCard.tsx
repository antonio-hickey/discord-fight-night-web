import Image from "next/image";
import type { Fighter } from "../types/main";

type FightCardProps = {
  id: string
  fighters: Fighter[]
};

export default function FightCard({
  id,
  fighters,
}: FightCardProps) {
  if (fighters[0] && fighters[1]) {
    return (
      <section className="flex flex-col justify-center rounded border-2 p-6 shadow-xl duration-500 motion-safe:hover:scale-110 bg-[#333333]">
        <div className="flex flex-col justify-center mt-5">
          <div className="flex flex-row">
            <Image
              src={fighters[0].imageUrl}
              width={250}
              height={250}
              className="object-cover object-top"
              alt="fighter-image"
            ></Image>
            <div className="flex flex-col justify-center">
              {fighters[0].rank && <h3 className="text-sm font-bold">#{fighters[0].rank}</h3>}
              <h3 className="text-sm font-bold">{fighters[0].name}</h3>
            </div>
            <h3 className="text-sm font-bold">VS.</h3>
            <div className="flex flex-col justify-center">
              {fighters[1].rank && <h3 className="text-sm font-bold">#{fighters[1].rank}</h3>}
              <h3 className="text-sm font-bold">{fighters[1].name}</h3>
            </div>
            <Image
              src={fighters[1].imageUrl}
              width={250}
              height={250}
              className="object-cover object-top"
              alt="fighter-image"
            ></Image>
          </div>
          <button
            className="w-1/2 mx-auto rounded-3xl border border-white bg-white/40 mt-5 px-4 py-2 text-xl shadow-lg hover:bg-red-400"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href + "fight/"+ id);
            }}
          >
            Copy Link
          </button>
        </div>
      </section>
    )
  } else {
    return <></>
  }
}


