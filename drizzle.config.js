import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./config/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://roomdb_owner:npg_S1qHebWF2zxd@ep-raspy-firefly-a8snj6e7-pooler.eastus2.azure.neon.tech/roomdb?sslmode=require",
  },
});
