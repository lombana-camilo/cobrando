"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const server_1 = __importDefault(require("./server"));
const config_1 = __importDefault(require("config"));
const core_1 = require("@mikro-orm/core");
const mikro_orm_config_1 = __importDefault(require("./mikro-orm.config"));
const type_graphql_1 = require("type-graphql");
const apollo_server_express_1 = require("apollo-server-express");
const apollo_server_core_1 = require("apollo-server-core");
const empleado_resolver_1 = require("./resolvers/empleado.resolver");
const departamento_resolver_1 = require("./resolvers/departamento.resolver");
const seed_1 = require("./seeds/seed");
const port = config_1.default.get("port");
async function main() {
    try {
        console.log({ mikroConfig: mikro_orm_config_1.default });
        const orm = await core_1.MikroORM.init(mikro_orm_config_1.default);
        const em = orm.em;
        await orm.getMigrator().up();
        const schema = await (0, type_graphql_1.buildSchema)({
            resolvers: [empleado_resolver_1.EmpleadoResolver, departamento_resolver_1.DptoResolver],
        });
        const apolloServer = new apollo_server_express_1.ApolloServer({
            schema,
            context: (ctx) => {
                ctx.em = em;
                return ctx;
            },
            plugins: [
                process.env.NODE_ENV === "production"
                    ? (0, apollo_server_core_1.ApolloServerPluginLandingPageProductionDefault)()
                    : (0, apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground)(),
            ],
        });
        await apolloServer.start();
        apolloServer.applyMiddleware({ app: server_1.default, cors: false });
        console.log("Seeding ______________");
        const seeder = orm.getSeeder();
        await seeder.seed(seed_1.Seed);
        server_1.default.listen(port, () => {
            console.log(`listening on port ${port}`);
        });
    }
    catch (e) {
        console.error(e);
    }
}
main();
