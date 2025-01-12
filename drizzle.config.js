import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./config/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:tcYjAE65arIx@ep-winter-bread-a57yywyy.us-east-2.aws.neon.tech/neondb?sslmode=require",
  },
});
