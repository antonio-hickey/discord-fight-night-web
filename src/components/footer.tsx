export default function Footer() {
  return (
    <div className="flex w-full py-4 px-8">
      <span className="w-full">
        <span>
        Made with 
        </span>
        <span className="ml-1 text-red-800">
          &hearts;
        </span>
      </span>

      <div>
        <a
          href="https://github.com/antonio-hickey/discord-fight-night-web"
          className="font-bold text-red-400 hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
    </div>
  )
}
