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
  host: config.get<string>("host"),
   type: "postgresql",
  debug: process.env.NODE_ENV !== "production",

  //database tables
  entities: ["./build/src/entities/**/*.*","./entities/**/*.*"],
  seeder: {
    path: path.join(__dirname, "./seeds"),
    /* path: "./build/src/seeds", */
    defaultSeeder: "Seed", // default seeder class name
    glob: "!(*.d).{js,ts}", // how to match seeder files (all .js and .ts files, but not .d.ts)
    emit: process.env.NODE_ENV === "production"? "js" : "ts", // seeder generation mode
    fileName: (className: string) => className, // seeder file naming convention
  },
} as Parameters<typeof MikroORM.init>[0];
