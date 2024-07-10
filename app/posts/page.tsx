import Link from "next/link";
import { Comments } from "./comments";

// const Posts = async () => {
//   const posts = await fetch(
//     "https://jsonplaceholder.typicode.com/posts/1"
//   ).then((response) => response.json());

//   return (
//     <div>
//       <Link href="/">home</Link>
//       <br />
//       {JSON.stringify(posts)}
//       <hr />
//       <Comments />
//       <hr />
//       <Comments />
//     </div>
//   );
// };

async function ProductQuantity() {
  let res = await fetch("https://api.vercel.app/products/1");
  let data = await res.json();

  return <h1>{data.stock}</h1>;
}

export default function Page() {
  return (
    <div>
      <h1>product</h1>
      <Link href="/">home</Link>
      <ProductQuantity />
    </div>
  );
}

// export default Posts;
