import Link from "next/link"
import Image from "next/image"

export default function Hero(){
    return(
        <section className="bg-BannerImage bg-repeat bg-cover bg-bottom md:w-[100%] md:h-[92vh]  ">

            <div className="md:w-full md:h-screen  flex flex-col py-[149px] items-center w-[100%] mx-1 h-[75vh]">
                <h1 className="font-bold md:text-5xl text-2xl  my-5 text-white ">Khan Saab Restaurant</h1>
                <p className="font-sans text-sm md:text-1xl font-bold text-teal-50">Where Tradition Meets Perfection in Every Bite</p>
                <button className="py-2 md:px-7 px-5 font-semibold border border-white text-teal-50 mt-8 hover:bg-yellow-100 hover:text-black hover:animate-pulse ">Discover</button>
            </div>
        </section>

    )
}

