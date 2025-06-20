import styles from './PostPage.module.css'
import { sanityClient } from "@/lib/sanity";
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';

type Params = {
    params: {
        slug: string
    }
}

export default async function PostPage({ params } : Params) {
    const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    publishedAt,
    body
  }`

    const post = await sanityClient.fetch(query, { slug: params.slug })

    if (!post) {
        notFound()
    }

    return (
        <main className={styles.container}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.date}>
          {new Date(post.publishedAt).toLocaleDateString()}
        </p>
        <div className={styles.body}>
          <PortableText value={post.body} />
        </div>
      </main>
    )
}