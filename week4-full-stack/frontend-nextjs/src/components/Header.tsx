import Image from "next/image"

export default function Header({ className = "" }) {
  return (
    <header
      className={`${className} mx-auto border-b-[3px] border-[#000400] bg-white`}
    >
      <div className="font mx-auto flex max-w-4xl items-center justify-between py-3">
        <span className="font-paytone block text-[26px] leading-9">
          MetaWall
        </span>
        <span className="flex items-center gap-2.5 ">
          {/* Add API Later */}
          <Image
            className="rounded-full border-2 border-[#000400]"
            src="/images/user99.png"
            alt="User's Image"
            width={30}
            height={30}
          />
          <span className="font-azeretMono flex border-b-2 border-[#000400] pb-1 leading-[19px]">
            Member
          </span>
        </span>
      </div>
    </header>
  )
}
