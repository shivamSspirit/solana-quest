import { notFound } from "next/navigation"
import { allChallenges } from "contentlayer/generated"
import { Metadata } from "next"
import { Mdx } from "components/mdx-components"
import { Button } from "@components/ui/button"
import { Github } from "@lib/icons"
import SubmitChallenge from "./SubmitChallenge"
import Link from 'next/link'
import NewSideBar from "@components/NewSideBar"

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
    <>
        <div className="flex flex-col md:flex-row min-h-screen py-6 dark:prose-invert">
        {/* Sidebar */}
        <div className="md:w-1/3 lg:w-1/4 text-white p-4 md:p-6 lg:p-8 sticky top-0 md:h-screen">
          <NewSideBar headings={post.headings} />
        </div>

        {/* Main Content */}
        <div className="md:w-3/4 lg:w-4/5 p-4 md:p-6 lg:p-8">
          <article className="py-6 prose px-4 dark:prose-invert mx-auto">
            <p>Challenge #{post.serial}</p>
            <h1 className="mb-2">{post.title}</h1>

            <hr className="block my-6 lg:my-10 border-muted-foreground/30" />

            <Mdx code={post.body.code}/>

            <div className={`flex flex-col sm:flex-row sticky mt-8 lg:mt-16 bottom-28 sm:bottom-8 w-fit ml-auto sm:mx-auto gap-4 lg:gap-8`}>
              <Button className="gap-2 w-full" variant="outline">
                <Github className="stroke-foreground" />
                <Link className="no-underline" href={`${post.github_link}`} target="_blank">View on Github</Link>
              </Button>
              <SubmitChallenge serial={post.serial} title={post.title} />
            </div>
          </article>
        </div>
      </div>


    </>
  )
}
