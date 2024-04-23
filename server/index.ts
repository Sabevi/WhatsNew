import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
import {typeDefs} from "./src/schema.js";
import {resolvers} from "./src/resolver.js";
import db from "./src/datasrouces/db.js";

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async () => {
        const {cache} = server
        return {
            dataSources: {
                db
            }
        }

    }
});

console.log(`🚀  Server ready at: ${url}`);