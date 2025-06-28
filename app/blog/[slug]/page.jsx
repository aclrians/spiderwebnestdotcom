
import { posts } from "@/lib/posts";

export default function PostPage({params}){
  const post = posts.find((p) => p.slug === params.slug);

  if (!posts) return <p>Post not found</p>

  return (
    <article>
      <h1>{post.title}
      </h1>
      <p><em>{post.date}</em></p>
      <p>{post.content}</p>
    </article>
  );
}
  
