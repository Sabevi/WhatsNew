import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./src/schema.js";
import { resolvers } from "./src/resolver.js";
import db from "./src/datasources/db.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req }) => {
    const token = req.headers.authorization || "";
    const { cache } = server;
    return {
      token,
      dataSources: {
        db,
      },
    };
  },
});

console.log(`🚀  Server ready at: ${url}`);
