import { GlobalConfig } from "payload/types";

const Menu: GlobalConfig = {
  slug: "menu",
  label: { en: "Menu", lt: "Meniu" },
  access: {
    read: (): boolean => true, // Everyone can read Tean
  },
  fields: [
    {
      name: "menuItems",
      type: "array",
      minRows: 1,
      fields: [
        {
          name: "catalog",
          type: "relationship",
          relationTo: "catalogs",
        },
      ],
    },
  ],
};

export default Menu;
