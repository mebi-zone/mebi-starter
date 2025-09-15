// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    date: { type: "date", required: true },
    lang: { type: "string", required: false, default: "vi" },
    cover: { type: "string", required: false },
    tags: { type: "list", of: { type: "string" } }
  },
  computedFields: {
    slug: { type: "string", resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "") },
    url: { type: "string", resolve: (doc) => `/blog/${doc._raw.flattenedPath.replace("blog/", "")}` }
  }
}));
var Change = defineDocumentType(() => ({
  name: "Change",
  filePathPattern: `changelog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    version: { type: "string", required: false },
    lang: { type: "string", required: false, default: "vi" }
  },
  computedFields: {
    slug: { type: "string", resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "") },
    url: { type: "string", resolve: (doc) => `/changelog/${doc._raw.flattenedPath.replace("changelog/", "")}` }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Change],
  mdx: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] }
});
export {
  Change,
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-ERSHBXLI.mjs.map
