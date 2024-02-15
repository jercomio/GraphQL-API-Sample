import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./GraphQL/schema/typeDefs.js";
import { resolvers } from "./GraphQL/resolvers/resolvers.js";
import { GraphQLError } from "graphql";
import dotenv from "dotenv";

dotenv.config()

const apollo_token = `Bearer ${process.env.APOLLO_TOKEN}`
const userConnected = { id: 1, name: 'John' }

type Token = {
    token: string;
}

interface Context {
    token?: Token;
}

const server = new ApolloServer<Context>({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => {
        // get the user token from the headers
        const token = req.headers.authorization || '';
    
        // try to retrieve a user with the token
        const user = token === apollo_token ? `User connected: ${userConnected.name}, id: ${userConnected.id}` : null;
        console.log(user)
        // optionally block the user
        // we could also check user roles/permissions here
        if (!user)
          // throwing a `GraphQLError` here allows us to specify an HTTP status code,
          // standard `Error`s will have a 500 status code by default
          throw new GraphQLError('User is not authenticated', {
            extensions: {
              code: 'UNAUTHENTICATED',
              http: { status: 401 },
            },
          });
          
        // add the user to the context
        return { user };
      },
    listen: { port: 3000 } 
});

console.log(`🚀 Server listening at: ${url}`);
