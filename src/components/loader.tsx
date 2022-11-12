import Image from "next/image";

import Logo from "../assets/logo.svg"

export default function Loader() {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <Image 
        src={Logo.src}
        height={250}
        width={250}
        className="duration-500 animate-ping"
        alt="loader"
      />
    </div>
  )
}
