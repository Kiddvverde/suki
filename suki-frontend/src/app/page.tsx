import { getPosts } from "@/lib/queries";
import Link from 'next/link'

export default async function Home() {
  const posts = await getPosts()

  return (
    <main>
      <h1>leo kernel's personal blog!</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post._id}>
            <Link href={`/post/${post.slug.current}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
