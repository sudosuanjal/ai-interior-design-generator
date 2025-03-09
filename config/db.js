import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL);
export const db = drizzle(sql);

//export const db = drizzle(
//  "postgresql://room_owner:npg_3CXUxkft9Vui@ep-tiny-bread-a5pfaobo-pooler.us-east-2.aws.neon.tech/room?sslmode=require"
//);
console.log();
