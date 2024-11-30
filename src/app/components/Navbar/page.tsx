import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"







export default function Navbar() {
    return (
        <main className="w-[100%] h-14 sticky top-0 bg-black text-teal-50   " >
            <div className="md:hidden block px-4 flex  ">
                <Image width={110} height={100} src="/k-logo.png" alt="" />
                <Menu className="md:hidden block ml-auto my-5  " />

            </div>



            <ul className="px-24 hidden md:block">
                <li className="flex pb-4 py- space-x-5 gap-7 justify-self-center  font-medium uppercase ml-10">

                    <Link className="hover:underline hover:text-yellow-600 py-5" href="/">Home</Link>
                    <Link className="hover:underline hover:text-yellow-600 py-5" href="#about">About</Link>
                    <Link className="hover:underline hover:text-yellow-600 py-5" href="#Menu">Menu</Link>
                    <Image width={120} height={100} src="/k-logo.png" alt="" />

                    <Link className="hover:underline hover:text-yellow-600 py-5" href="#Ambiance">Ambiance</Link>
                    <Link className="hover:underline hover:text-yellow-600 py-5" href="#">Oder</Link>
                    <Link className="hover:underline hover:text-yellow-600 py-5" href="#fotter">Contact</Link>
                </li>
            </ul>
      

        </main>
    )
}