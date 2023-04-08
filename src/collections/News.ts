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
      required: true,
    },
    {
      name: "body",
      type: "richText",
      admin: {
        elements: ["link"],
        leaves: ["bold", "italic", "underline"],
      },
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "images",
      required: true,
    },
  ],
};

export default News;
