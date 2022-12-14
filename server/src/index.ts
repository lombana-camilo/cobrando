import "reflect-metadata";
import server from "./server";
import config from "config";
import { MikroORM } from "@mikro-orm/core";
import { EntityManager } from "@mikro-orm/postgresql";
import mikroConfig from "./mikro-orm.config";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import {
  ApolloServerPluginLandingPageProductionDefault,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core";
import { Context } from "./types/context";
import { EmpleadoResolver } from "./resolvers/empleado.resolver";
import { DptoResolver } from "./resolvers/departamento.resolver";
import { exec } from "child_process";
import { Seed } from "./seeds/seed";

const port = config.get<string>("port");

async function main() {
  try {
      console.log({mikroConfig})
    // Mikroorm
    const orm = await MikroORM.init(mikroConfig);
    const em = orm.em as EntityManager;
    // Run Migrations
    await orm.getMigrator().up();

    // Schema
    const schema = await buildSchema({
      resolvers: [EmpleadoResolver,DptoResolver],
    });

    // Apollo Server
    const apolloServer = new ApolloServer({
      schema,
      context: (ctx: Context) => {
        ctx.em = em;
        return ctx;
      },
      plugins: [
        process.env.NODE_ENV === "production"
          ? ApolloServerPluginLandingPageProductionDefault()
          : ApolloServerPluginLandingPageGraphQLPlayground(),
      ],
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app: server, cors:false });

      //Seed
      console.log("Seeding ______________")
      const seeder = orm.getSeeder()
      await seeder.seed(Seed)

    server.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  } catch (e) {
    console.error(e);
  }
}

main();
