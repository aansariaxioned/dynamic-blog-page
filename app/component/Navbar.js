import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <ul className="bg-gray-500 shadow-2xl py-4 flex gap-10 pl-10 font-bold text-white fixed w-[100%]">
        <Link href="/">Home</Link>
        <Link href="/post">Post</Link>
      </ul>
    </div>
  )
}