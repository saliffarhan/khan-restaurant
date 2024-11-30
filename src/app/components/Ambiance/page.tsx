import Image from "next/image"

export default function Ambiance() {
    return (
        <div id="Ambiance">
        <main className="">
            <section className="  bg-Banner2Image bg-repeat bg-cover bg-bottom w-[100%] md:h-[85vh] h-auto  bg-fixed    ">
                <h2 className="flex  justify-center text-center  text-3xl font-sans font-bold  text-yellow-400 hover:underline cursor-pointer">Ambiance</h2>
                <p className="flex justify-center text-center py-2 md:text-2xl font-sans font-bold  text-yellow-400" >𝒞𝓇𝑒𝒶𝓉𝑒 𝒟𝒾𝓃𝓃𝒾𝓃𝑔 𝓔𝓍𝓅𝑒𝓇𝒾𝑒𝓃𝒸𝑒</p>

                <div className="md:inline-flex inline-grid   md:px-24 md:pt-7 px-5 py-5 gap-9">
                <Image className="md:hover:scale-95 duration-500 transition-transform cursor-pointer " width={700} height={100} src="/a-4.png" alt="" />
                    <Image className="md:hover:scale-95 duration-500 transition-transform cursor-pointer" width={700} height={100} src="/a-1.png" alt="" />
                    <Image className="md:hover:scale-95 duration-500 transition-transform cursor-pointer" width={700} height={100} src="/a-3.png" alt="" />

                </div>
            </section>
        </main>
        </div>
    )
}