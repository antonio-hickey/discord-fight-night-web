import { Fighter } from "../types/main";

type FightCardProps = {
  name: string
  hash: string
  fighters: Fighter[]
};

export default function FightCard({
  name,
  hash,
  fighters,
}: FightCardProps) {
  return (
    <section className="flex flex-col justify-center rounded border-2 p-6 shadow-xl duration-500 motion-safe:hover:scale-110 bg-[#333333]">
      <h2 className="text-md font-bold">{name}</h2>

      <div className="flex flex-col justify-center mt-5">
        <div className="flex flex-row">
          <img
            src={fighters[0]?.imageUrl!}
            className="h-[8rem] w-full object-cover object-top"
          ></img>
          <div className="flex flex-col justify-center">
            <h3 className="text-sm font-bold">#{fighters[0]?.rank!}</h3>
            <h3 className="text-sm font-bold">{fighters[0]?.name!}</h3>
          </div>
          <h3 className="text-sm font-bold">VS.</h3>
          <div className="flex flex-col justify-center">
            <h3 className="text-sm font-bold">#{fighters[1]?.rank!}</h3>
            <h3 className="text-sm font-bold">{fighters[1]?.name!}</h3>
          </div>
          <img
            src={fighters[1]?.imageUrl!}
            className="h-[8rem] w-full object-cover object-top"
          ></img>
        </div>
        <button
          className="w-1/2 mx-auto rounded-3xl border border-white bg-white/40 mt-5 px-4 py-2 text-xl shadow-lg hover:bg-red-400"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href + "fight/"+ hash);
          }}
        >
          Copy Link
        </button>
      </div>
    </section>
  )
}


