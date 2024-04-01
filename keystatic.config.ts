import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "github",
    repo: {
      owner: "JeremyPittard",
      name: "jpittard.net-astro",
    },
  },
  collections: {
    posts: collection({
      label: "Thoughts",
      slugField: "title",
      path: "src/content/thoughts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
  },
});
