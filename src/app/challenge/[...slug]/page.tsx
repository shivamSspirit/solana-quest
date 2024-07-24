import { notFound } from "next/navigation"
import { allChallenges } from "contentlayer/generated"
import { Metadata } from "next"
import ClientPage from "./ClientPage"

interface ChallengeProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: ChallengeProps["params"]) {
  console.log("params", params)
  const slug = params?.slug?.join("/")
  const post = allChallenges.find((post) => post.slugAsParams === slug);

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}: ChallengeProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export async function generateStaticParams(): Promise<ChallengeProps["params"][]> {
  return allChallenges.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

export default async function PostPage({ params }: ChallengeProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound()
  }



  return (
     <ClientPage post={post}/>
  )
}
