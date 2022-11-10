import Head from "next/head";


export default function Header() {
  return (
    <>
      <Head>
        <title>Discord Fight Night</title>
        <meta name="description" content="Pick which fighter you think will win, and keep a leaderboard with your server." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex w-full flex-col items-center justify-center p-4">
        <div className="relative mb-8 text-4xl md:text-6xl font-bold">
          Discord Fight Night
          <sup className="absolute top-0 left-full text-xs text-red-400">
            [BETA]
          </sup>
        </div>
      </div>
    </>
  )
}
