import Image from "next/image"

export default function Menu() {
    return (
        <div id="Menu">
        <main className="mx-w-[100%] h-auto bg-black md:px-24 md:py-10 py-6 ">
            <Image className="ml-[520px] md:block hidden py-4 "  width={100} height={100} src="/k-logo.png" alt="" />
            <h1 className="text-orange-400 text-center uppercase font-sans font-bold text-4xl py-3">Menu</h1>
            <p className="text-white md:text-lg text-sm text-center font-sans pb-8">꧁༺ 𝓣𝓻𝓪𝓷𝓼𝓯𝓸𝓻𝓶𝓼 𝓔𝓿𝓮𝓻𝔂 𝓑𝓲𝓽𝓮 𝓘𝓷𝓽𝓸 𝓪𝓷 𝓔𝔁𝓹𝓮𝓻𝓲𝓮𝓷𝓬𝓮 ༻꧂</p>

            <div className="">
                <Image width={1180} height={100} src="/menu-1.webp" alt="" />
            </div>


            <div className="md:gap-3  md:inline-flex  inline-grid md:mx-0 mx-3 ">
                {/* menu-1 */}
                <div className=" mt-10 border border-black  rounded-3xl md:w-[33.333333%] flex bg-neutral-900 hover:scale-110 duration-500 transition-transform cursor-pointer ">
                    <Image className="rounded-3xl " width={160} height={100} src="/menu-2.webp" alt="" />
                    <div>
                        <h2 className="font-sans font-bold text-lg px-3 pt-5 text-white underline">Crispy Fish</h2>
                        <p className="font-sans text-xs px-3 pt-2 text-white">fried wings tossed in sweet and tangy Mexican sauce.</p>
                        <p className="px-3 font-bold text-red-700 pt-3">Rs: 1395</p>
                    </div>
                </div>
                {/* menu-2 */}
                <div className=" mt-10 border border-black rounded-3xl md:w-[33.333333%] flex bg-neutral-900 hover:scale-110 duration-500 transition-transform cursor-pointer">
                    <Image className="rounded-3xl" width={160} height={100} src="/men-3.webp" alt="" />
                    <div>
                        <h2 className="font-sans font-bold text-lg px-3 pt-5 text-white underline">Mexican Wings</h2>
                        <p className="font-sans text-xs px-3 pt-2 text-white">Mouth watering fried wings tossed in sweet and tangy Mexican sauce.</p>
                        <p className="px-3 font-bold text-red-700 pt-3">Rs: 999</p>
                    </div>
                </div>
                {/* menu-3 */}
                <div className=" mt-10 border border-black rounded-3xl md:w-[33.333333%] flex bg-neutral-900 hover:scale-110 duration-500 transition-transform cursor-pointer">
                    <Image className="rounded-3xl" width={160} height={100} src="/menu-4.webp" alt="" />
                    <div>
                        <h2 className="font-sans font-bold text-lg px-3 pt-5 text-white underline">Dhaka Chicken</h2>
                        <p className="font-sans text-xs px-3 pt-2 text-white">Crispy, flavorful chicken topped with sesame seeds</p>
                        <p className="px-3 font-bold text-red-700 pt-3">Rs: 1195</p>
                    </div>
                </div>

            </div>



            {/* next menu part-2 with d/f div */}
            <div className="md:gap-3  md:inline-flex  inline-grid md:mx-0 mx-3">
                {/* menu-4 */}
                <div className=" mt-10 border border-black rounded-3xl md:w-[33.333333%] flex bg-neutral-900 hover:scale-110 duration-500 transition-transform cursor-pointer">
                    <Image className="rounded-3xl" width={160} height={100} src="/m-5.webp" alt="" />
                    <div>
                        <h2 className="font-sans font-bold text-lg px-3 pt-5 text-white underline">Mayo Garlic Fries</h2>
                        <p className="font-sans text-xs px-3 pt-2 text-white">Crispy fries drizzled with Kababjees in-house mayo garlic sauce.

</p>
                        <p className="px-3 font-bold text-red-700 pt-3">Rs: 450</p>
                    </div>
                </div>

                {/* menu-5 */}
                <div className=" mt-10 border border-black rounded-3xl md:w-[33.333333%] flex bg-neutral-900 hover:scale-110 duration-500 transition-transform cursor-pointer">
                    <Image className="rounded-3xl" width={160} height={100} src="/m-6.webp" alt="" />
                    <div>
                        <h2 className="font-sans font-bold text-lg px-3 pt-5 text-white underline">Supreme Nachos</h2>
                        <p className="font-sans text-xs px-3 pt-2 text-white">Delightful Mexican starter  Imported tortilla chips topped with cheese</p>
                        <p className="px-3 font-bold text-red-700 pt-3">Rs: 990</p>
                    </div>
                </div>
                {/* menu-6 */}
                <div className=" mt-10 border border-black rounded-3xl md:w-[33.333333%] flex bg-neutral-900 hover:scale-110 duration-500 transition-transform cursor-pointer">
                    <Image className="rounded-3xl" width={160} height={100} src="/m-7.webp" alt="" />
                    <div>
                        <h2 className="font-sans font-bold text-lg px-3 pt-5 text-white underline">Spicy Wings</h2>
                        <p className="font-sans text-xs px-3 pt-2 text-white">Crispy, flavorful chicken topped with sesame seeds</p>
                        <p className="px-3 font-bold text-red-700 pt-3">Rs: 1295</p>
                    </div>
                </div>

            </div>

            <button className="ml-[495px] md:block hidden py-2 px-6 font-semibold border rounded-xl border-red-600 text-teal-50 mt-8 hover:bg-gray-200 hover:text-black hover:animate-pulse ">View More</button>

        </main>
        </div>
    )
}