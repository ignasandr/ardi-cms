import { CollectionConfig } from "payload/types";

const News: CollectionConfig = {
  slug: "news",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "heading",
  },
  fields: [
    {
      name: "heading",
      type: "text",
    },
    {
      name: "body",
      type: "richText",
      admin: {
        elements: ["link"],
        leaves: ["bold", "italic", "underline"],
      },
    },
    {
      name: "image",
      type: "upload",
      relationTo: "images",
    },
  ],
};

export default News;
