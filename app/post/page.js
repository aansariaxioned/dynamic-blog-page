import Image from "next/image";
import star from "../../public/star.png"
import Link from "next/link";

async function fetchData() {
    const res = await fetch("https://dummyjson.com/recipes")
    const data = await res.json()

    return data.recipes;
}

export default async function Page() {
    const carts = await fetchData();
    console.log("response", carts);
    return (
        <div className="wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-20 ">
            {carts.map((item, index) => (
                <div key={index} className="bg-gray-200 rounded-2xl py-10 px-5 sm:px-10 grid gap-5 shadow-2xl">
                    <div className="hover:scale-95 hover:transition-all ease-in duration-300 cursor-pointer">
                        <Image
                            src={item.image}
                            width={350}
                            height={200}
                            alt="placeholder"
                            className=" w-full h-72 object-cover rounded-2xl" />
                    </div>
                    <h1 className="text-3xl">{item.name}</h1>

                    <p className="text-xl">{item.cuisine}</p>

                    <div className="flex items-center justify-end gap-2">

                        <p className="">{item.rating}</p>
                        <Image
                            src={star}
                            width={25}
                            height={10}
                            alt="placeholder"
                            className="object-cover " />
                    </div>

                    {/* {item.tags.map((list, index) => (
                        <div key={index}>
                            <p>{list}</p>
                        </div>
                    ))} */}
                    <div className="grid justify-center items-center">

                        <Link href={`/post/${item.id}`} className="bg-red-400 px-4 text-white cursor-pointer py-2 rounded-xl hover:bg-red-500">View</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}


