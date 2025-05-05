import Image from "next/image";

async function fetchPost(id) {
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);
  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
}


export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/recipes");
  const data = await res.json();

  return data.recipes.map((recipe) => ({
    slug: recipe.id.toString(),
  }));
}

export default async function PostPage({ params }) {

  const { slug } = await params;
  const post = await fetchPost(slug);

  return (
    <div className="p-10 max-w-3xl mx-auto">

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
  );
}

