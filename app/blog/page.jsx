
import { posts } from "@/lib/posts";
import Link from "next/link";


export default function BlogPage(){
  return (
    <article>
      <h1> My Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key = {post.slug}>
            <Link href = {`/blog/${post.slug}`}>
              <h2 className="no-underline text-black hover:text-black">{post.title}</h2>
            </Link>
          </li>
        ))
      }
      </ul>
    </article>
  );
}