import { GlobalConfig } from "payload/types";

const Contacts: GlobalConfig = {
  slug: "contacts",
  label: { en: "Contacts", lt: "Kontaktai" },
  access: {
    read: (): boolean => true, // Everyone can read Tean
  },
  fields: [
    {
      name: "requisites",
      type: "richText",
      admin: {
        elements: ["link"],
        leaves: ["bold", "italic", "underline"],
      },
    },
    {
      name: "phone",
      label: "Phone",
      type: "text",
    },
    {
      name: "mphone",
      label: "Mobile Phone",
      type: "text",
    },
    {
      name: "email",
      type: "text",
    },
    {
      name: "background",
      type: "upload",
      relationTo: "images",
    },
  ],
};

export default Contacts;
