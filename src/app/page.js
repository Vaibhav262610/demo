import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className=" flex-col h-screen w-full gap-4 flex justify-center items-center">
        <h1 className="element text-9xl mb-12">🎀</h1>
        <h1 className="text-5xl pb-14">Heyyyyyy 😭</h1>
        <h2 className="">first of all I deeply APPOLOGIZE</h2>
        <h2 className="font-semibold">I know I&apos;m stupid</h2>
        <h2>but the fact is I really MISSED you everyday</h2>
        <Link href='/gif'>
        <button className="mt-24 text-2xl font-semibold border-2 hover:bg-black hover:text-white border-black py-2 px-4 text-gray-600">NEXT</button>
        </Link>
      <h2>CLICK NEXT</h2>
      </div>

    </>
  );
}
