import { defineDocumentType, makeSource } from "contentlayer/source-files"

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
    description: {
      type: "string",
      required: true
    }
  },
  computedFields,
}))


export default makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Challenge],
})
