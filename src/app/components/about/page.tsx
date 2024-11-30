import Image from "next/image"

export default function About() {
    return (
        <div id="about">
        <main className="w-[100%] md:h-[90vh] bg-neutral-900 h-auto">
            <section className=" flex-1 md:flex md:py-20 md:px-24 md:gap-16 px-2 py-2 pb-11 ">
                {/* left-side */}
                <p className="text-zinc-400 mt-20 font-sans leading-8">We welcome you to explore our taste of the world, in continental and Chinese delights and thats even before you get to the variety and excellence, of our barbecue grill. With warmth service rarely experienced, it is a perfect place of rejoice with family, to soak in the relaxing decor and with deep desire to revisit for once, in never enough! Now with our network of four branches across the city of lights, it is possible to experience the magic, whilst collect the best of memories much more close to home.

                    Now you can have the goodness of Khan Saab Restuarant delivered at home by just ringing us a bell. Call 111-666-111 for more information</p>
                {/* rightside */}
                <Image className="" width={470} height={200} src="/about.png" alt="" />
            </section>
        </main>
        </div>
    )
}

