import { buildConfig } from "payload/config";
import path from "path";
import News from "./collections/News";
import Contacts from "./globals/Contacts";
import Menu from "./globals/Menu";
import Catalogs from "./collections/Catalogs";
import Images from "./collections/Images";
import Users from "./collections/Users";

export default buildConfig({
  serverURL: "http://localhost:3000",
  admin: {
    user: Users.slug,
    css: path.resolve(__dirname, "./utilities/cms.css"),
  },
  collections: [
    Users,
    News,
    Catalogs,
    Images,
    // Add Collections here
    // Examples,
  ],
  globals: [Menu, Contacts],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
