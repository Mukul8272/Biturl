import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-purple-300 to-purple-100">
      <section className="grid grid-cols-2 h-[91vh]">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className={`text-3xl font-bold ${poppins.className}`}>
          The Best URL shortner in the market
          </p>
          <p className="px-25 text-center">
            We are the most straightforward URL shortener, designed for simplicity and speed. No clutter, no unnecessary features—just paste your long link, and get a short one instantly. Whether you're sharing on social media, in emails, or anywhere else, our tool keeps it fast, reliable, and hassle-free. Try it now!
          </p>
          <Link href="/shorten"><button className='text-white font-bold bg-purple-500 rounded-lg shadow-lg p-3 py-1.5 shadow-purple-800'>Try Now</button></Link>

        </div>
        <div className=" flex justify-start relative">
          <Image className="mix-blend-darken" alt="an image of vector" src={"/vector.jpg"} fill={true} ></Image>

        </div>

      </section>
    </main>
  );
}

