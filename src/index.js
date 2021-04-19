const { ApolloServer, addResolveFunctionsToSchema } = require('apollo-server');
const { PrismaClient, Prisma } = require('@prisma/client')


let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Full stack tutorial for GraphQL'
}]


let idCount = links.length
const resolvers = {
    Query: {
        info: () => `This is the API of a hacker news clone`,
        feed: async (parent, args, context) => {
            return context.prisma.link.findMany()
        },
        link: (root, { id }) => links.find(link => link.id === id)
    },

    Mutation: {
        post: (parent, args, context, info) => {
            const newLink = context.prisma.link.create({
                data: {
                    url: args.url,
                    description: args.description,
                },
            })
            return newLink
        },


        /*
        updateLink: (root, args) => {
            links.forEach((link) => {
                if(link.id === args.id) {
                    link.id = args.id;
                    link.url = args.url;
                    link.description = args.description;
                }
                return link;
            });  
        },

        deleteLink: (root, args) => {
            const removeIndex = links.findIndex(item => item.id == args.id);
            const removedLink = links[removeIndex];
            links.splice(removeIndex, 1);

            return removedLink;
        } */
    },
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
  context: {
      prisma,
  }
})

server
    .listen()
    .then(({ url }) =>
        console.log(`Server is running on ${url}`)
    )