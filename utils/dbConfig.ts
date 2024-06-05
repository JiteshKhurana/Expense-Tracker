import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
import * as dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});

const sql = neon(
  "postgresql://expensedb_owner:jCXE7qyIoON6@ep-wild-breeze-a5g0edwz.us-east-2.aws.neon.tech/Expenses-Tracker?sslmode=require"
);
export const db = drizzle(sql, { schema });
