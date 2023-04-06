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
    },
    {
      name: "items",
      type: "array",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "images",
        },
      ],
    },
  ],
};

export default Catalogs;
