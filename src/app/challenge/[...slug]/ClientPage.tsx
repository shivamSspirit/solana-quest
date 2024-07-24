'use client'

import { Mdx } from "components/mdx-components"
import { Button } from "@components/ui/button"
import { Github } from "@lib/icons"
import SubmitChallenge from "./SubmitChallenge"
import Link from 'next/link'
import React, { useEffect } from 'react'
import Prism from 'prismjs'

require("prismjs/components/prism-rust");
require("prismjs/components/prism-typescript");
require("prismjs/components/prism-bash");


function ClientPage({ post }: { post: any }) {

    useEffect(() => {
        Prism.highlightAll();
    }, [post]);
    

    return (
        <article className="py-6 prose dark:prose-invert mx-auto">
            <p>Challenge #{post.serial}</p>
            <h1 className="mb-2">{post.title}</h1>
            <hr className="block my-6 lg:my-10 border-muted-foreground/30" />
            <Mdx code={post.body.code} />
            <div className={`flex flex-col sm:flex-row sticky mt-8 lg:mt-16 bottom-28 sm:bottom-8 w-fit ml-auto sm:mx-auto gap-4 lg:gap-8`}>
                <Button className="gap-2 w-full" variant="outline">
                    <Github className="stroke-foreground" />
                    <Link className="no-underline" href={`${post.github_link}`} target="_blank">View on Github</Link>
                </Button>
                <SubmitChallenge serial={post.serial} title={post.title} />
            </div>
        </article>
    )
}

export default ClientPage
