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
      required: true,
    },
    {
      name: "phone",
      label: "Phone",
      type: "text",
      required: true,
    },
    {
      name: "mphone",
      label: "Mobile Phone",
      type: "text",
      required: true,
    },
    {
      name: "email",
      type: "text",
      required: true,
    },
    {
      name: "background",
      type: "upload",
      relationTo: "images",
      required: true,
    },
  ],
};

export default Contacts;
