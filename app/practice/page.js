"use client"

import Image from "next/image";
import rectangleImage from "../../public/600x400.svg";
import { useState } from "react";

export default function Page() {
    // const [isEven, setIsEven] = useState(true);         

    const data = [
        {
            year: "2023",
            title: "[We're Humble enough to consider the viewpoint]",
            description: "[Supporting copy] Nulls fringila lorem in tortor tincident, sample lowerest audio transition",
            image: rectangleImage
        },
        {
            year: "2021",
            title: "[We're Humble enough to consider the viewpoint]",
            description: "[Supporting copy] Nulls fringila lorem in tortor tincident, sample lowerest audio transition",
            image: rectangleImage
        },
        {
            year: "2019",
            title: "[We're Humble enough to consider the viewpoint]",
            description: "[Supporting copy] Nulls fringila lorem in tortor tincident, sample lowerest audio transition",
            image: rectangleImage
        },
        {
            year: "2017",
            title: "[We serve clients better by working together]",
            description: "[Supporting copy] Nulls fringila lorem in tortor tincident, sample lowerest audio transition",
            // image: rectangleImage
        },
        {
            year: "2015",
            title: "[We're Humble enough to consider the viewpoint]",
            description: "[Supporting copy] Nulls fringila lorem in tortor tincident, sample lowerest audio transition",
            image: rectangleImage
        },
    ]



    return (

        <div className="wrapper grid justify-center items-center pt-10">
            <div className="header text-center">
                <h1 className="text-3xl font-semibold">[PJT mission statement based on discovery]</h1>
            </div>
            {data.map((item, index) => {
                const isLast = index === data.length - 1;
                const isEven = isLast ? false : index % 2 === 0;


                if (item.image) {

                    return (


                        <div key={index}>
                            <div className="grid justify-center items-center py-5">
                                <div className="grid justify-center"><p className="h-20 w-0.5 bg-gray-400"></p></div>
                                <p>{item.year}</p>
                                <div className="grid justify-center"><p className="h-20 w-0.5 bg-gray-400"></p></div>
                            </div>

                            <div className="card grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5">

                                <div className={`px-2 sm:px-4 ${isEven ? 'order-2 md:order-1' : 'order-2 '}`}>
                                    <h1 className="text-xl md:text-3xl font-bold mb-5 ">{item.title}</h1>
                                    <p>{item.description}</p>
                                </div>



                                <div className={`${isEven ? 'order-1 md:order-2  ' : 'order-1 md:order-1'}`}>
                                    <Image
                                        src={item.image}
                                        width={600}
                                        height={300}
                                        alt="placeholder"
                                        className="w-full"
                                    />
                                </div>
                            </div>
                        </div>

                    )
                } else {
                    return (
                        <div key={index}>
                            <div className="grid justify-center items-center py-5">
                                <div className="grid justify-center"><p className="h-20 w-0.5 bg-gray-400"></p></div>
                                <p>{item.year}</p>
                                <div className="grid justify-center"><p className="h-20 w-0.5 bg-gray-400"></p></div>
                            </div>


                            <div className="grid justify-center">
                                <h1 className="text-xl md:text-3xl font-bold mb-5 ">{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    )
                }


            }
            )}

        </div>
    );
}