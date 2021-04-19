const { ApolloServer, addResolveFunctionsToSchema } = require('apollo-server');
const { PrismaClient, Prisma } = require('@prisma/client');
const { getUserId } = require('./utils');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const User = require('./resolvers/User');
const Link = require('./resolvers/Link');
const { PubSub } = require('apollo-server');
const Subscription = require('./resolvers/Subscription')
const Vote = require('./resolvers/Vote')
const pubsub = new PubSub();


let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Full stack tutorial for GraphQL'
}]


let idCount = links.length
const resolvers = {
    Query,
    Mutation,
    Subscription,
    User,
    Link,
    Vote,
  }

// Prisma Client instantiation
const prisma = new PrismaClient()

const fs = require('fs');
const path = require('path');

const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf8'
  ),
  resolvers,
  context: ({ req }) => {
    return {
      ...req,
      prisma,
      pubsub,
      userId:
        req && req.headers.authorization
          ? getUserId(req)
          : null
    };
  }
});

server
    .listen()
    .then(({ url }) =>
        console.log(`Server is running on ${url}`)
    )