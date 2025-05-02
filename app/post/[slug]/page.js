"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function PostPage() {
  const id = useParams();

  console.log("id", id.slug);

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  
  async function fetchPost(id) {
    try {
      const res = await fetch(`https://dummyjson.com/recipes/${id}`);
      const data = await res.json();
      setPost(data);
      setLoading(false);


    } catch (err) {
      console.error("Failed to fetch post", err);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPost(id.slug);
  }, [id]);

  return (
    <div className="p-10 max-w-3xl mx-auto">
      {loading ? (
        <div className="h-96 flex justify-center items-center">
          <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent border-b-transparent rounded-full animate-spin"></div>
        </div>

      ) : (
        <div>
          <div>
            <Image src={post.image} width={600} height={400} alt={post.name} className="rounded-xl mb-6" />
          </div>



          <h1 className="text-4xl font-bold mb-4">{post.name}</h1>
          <p className="text-xl mb-2">Cuisine: {post.cuisine}</p>
          <p className="text-lg mb-4">Difficulty: {post.difficulty}</p>
          <h2 className="text-2xl font-semibold mt-6 mb-2">Ingredients:</h2>
          <ul className="list-disc pl-5">
            {post.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Instructions:</h2>
          <p>{post.instructions}</p>
        </div>
      )
      }
    </div>
  );
}