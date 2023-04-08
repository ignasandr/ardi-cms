import { CollectionConfig } from "payload/types";

const Catalogs: CollectionConfig = {
  slug: "catalogs",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
    },
    {
      name: "items",
      type: "array",
      minRows: 4,
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "images",
          required: true,
        },
      ],
    },
  ],
};

export default Catalogs;
