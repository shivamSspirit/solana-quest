import { defineDocumentType, makeSource } from "contentlayer/source-files"

import rehypeAutolinkHeadings from "rehype-autolink-headings";
/// import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import GithubSlugger from "github-slugger";



/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
  headings: {
    type: "json",
    resolve: async (doc) => {
      const regXHeader = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
      const slugger = new GithubSlugger();
      const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
        ({ groups }) => {
          const flag = groups?.flag;
          const content = groups?.content;
          return {
            level:
              flag.length == 1 ? "one" : flag.length == 2 ? "two" : "three",
            text: content,
            slug: content ? slugger.slug(content) : undefined,
          };
        }
      );
      return headings;
    },
  },
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
