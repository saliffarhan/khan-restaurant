import Image from "next/image"

export default function Fotter() {
    return (
        <div id="fotter">
            <footer className="text-gray-600 ">
                <div className="container px-5  py-24 md:mx-[63px] flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0  text-center md:text-left">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <Image width={80} height={100} src="/k-logo.png" alt="" />
                            
                            <span className="ml-3 text-xl font-bold">Khan Saab Restuarant</span>
                        </a>
                    </div>
                    
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font uppercase text-gray-900 tracking-widest text-sm mb-3 font-bold">
                                Contact Us
                            </h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-orange-500 font-bold cursor-pointer ">marketing@unknown.com</a>
                                </li>
                                <li className="py-4">
                                    <a className="text-gray-600 hover:text-orange-500 font-bold cursor-pointer">📞 021 1*1 000 1*1</a>
                                </li>
                            </nav>
                        </div>

                        <div className="lg:w-1/4 md:w-1/2 w-full px-14">
                            <h2 className="title-font font-bold uppercase text-gray-900 tracking-widest text-sm mb-3">
                                Services
                            </h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-orange-500 font-bold cursor-pointer">7:pm to 1:am</a>
                                </li>
                             
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-bold uppercase text-gray-900 tracking-widest text-sm mb-3">
                            Location
                            </h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-orange-500 font-bold cursor-pointer">Karachi</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-orange-500 font-bold cursor-pointer">Lahore</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-orange-500 font-bold cursor-pointer">Islamabad</a>
                                </li>
                               
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-teal-50">
                    <div className="container md:mx-[63px]  py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left font-semibold">
                            © 2024 khan saab All Right reserved —
                            <a
                                href="https://twitter.com/knyttneve"
                                rel="noopener noreferrer"
                                className="text-gray-600 ml-1"
                                target="_blank"
                            >
                                @MadeBy Salif-Farhan
                            </a>
                        </p>
                        <span className="inline-flex ml-40">
                            <a className="text-gray-700 hover:bg-orange-500 cursor-pointer ">
                                <svg
                                    fill="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                    
                                >
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                </svg>
                            </a>
                        
                            <a className="ml-3 text-gray-700 hover:bg-orange-500 cursor-pointer">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                                </svg>
                            </a>
                          
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}