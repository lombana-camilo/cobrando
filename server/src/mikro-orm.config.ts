import { MikroORM } from "@mikro-orm/core";
import config from "config";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    glob: "!(*.d).{js,ts}", // how to match migration files
  },
  dbName: config.get<string>("dbName"),
  user: config.get<string>("dbUser"),
  password: config.get<string>("dbPassword"),
  type: "postgresql",
  debug: process.env.NODE_ENV !== "production",

  //database tables
  entities: ["./src/entities/**/*.ts"],
   seeder:{
    path: path.join(__dirname, "./seeds"),
    defaultSeeder: 'Seed', // default seeder class name
    glob: '!(*.d).{js,ts}', // how to match seeder files (all .js and .ts files, but not .d.ts)
    emit: 'ts', // seeder generation mode
    fileName: (className: string) => className, // seeder file naming convention
  },
} as Parameters<typeof MikroORM.init>[0];
