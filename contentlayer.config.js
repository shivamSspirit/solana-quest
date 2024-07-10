import { defineDocumentType, makeSource } from "contentlayer/source-files"

import rehypeAutolinkHeadings from "rehype-autolink-headings";
/// import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import rehypePrism from 'rehype-prism-plus';
import rehypeCodeTitles from 'rehype-code-titles';


/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  }
}

export const Challenge = defineDocumentType(() => ({
  name: "Challenge",
  filePathPattern: `challenges/**/*.mdx`,
  contentType: "mdx",
  fields: {
    serial: {
      type: "number",
      required: true,
    },
    title: {
      type: "string",
      required: true,
    },
    icon: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true
    },
    author:{
      type: "string",
      required: true
    },
    github_link: {
      type: "string",
      required: true
    }
  },
  computedFields,
}))


export default makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Challenge],
  md: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeCodeTitles,
      rehypePrism,
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  },
})
