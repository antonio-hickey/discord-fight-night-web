import { Fighter } from "./../types/main";

type FighterCardProps = {
  fighter: Fighter
  isSignedIn: boolean
};

export default function FighterCard({ fighter, isSignedIn }: FighterCardProps) {
  return (
    <section className="flex flex-col w-[25rem] justify-center rounded-3xl border-2 p-6 shadow-xl duration-300 motion-safe:hover:scale-110 bg-[#333333]">
      <div className="flex flex-col justify-center mt-5">
          <img
            src={fighter.imageUrl}
            className="h-[20rem] object-cover object-top"
          ></img>
          <div className="flex flex-col">
            <h2 className="mx-auto mt-5">{fighter.name}</h2>
            {isSignedIn &&
              <button
                className="w-3/4 mx-auto rounded-3xl border border-white bg-white/40 mt-5 px-4 py-2 text-xl shadow-lg hover:bg-red-400"
              >
                Pick
              </button>
            }
          </div>
      </div>
    </section>
  );
};
