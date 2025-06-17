import { sanityClient } from "./sanity";

export async function getPosts() {
    return sanityClient.fetch(`*[_type == "post"]{
    _id,
    title,
    slug,
    publishedAt,
    body
  } | order(publishedAt desc)`)
}