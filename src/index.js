const { ApolloServer, addResolveFunctionsToSchema } = require('apollo-server');

// 1
let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Full stack tutorial for GraphQL'
}]

// 1
let idCount = links.length
const resolvers = {
    Query: {
        info: () => `This is the API of a hacker news clone`,
        feed: () => links,
        link: (root, { id }) => links.find(link => link.id === id)
    },
 



    Mutation: {
        // 2
        post: (parent, args) => {
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url,
            }
            links.push(link)
            return link
        },

        // updateLink: (root, args) => {
        //     links.forEach((link) => {
        //         if(link.id === args.id) {
        //             link.id = args.id;
        //             link.url = args.url;
        //             link.description = args.description;
        //         }
        //         return link;
        //     });  
        // },

        // deleteLink: (root, args) => {
        //     const removeIndex = links.findIndex(item => item.id == args.id);
        //     const removedLink = links[removeIndex];
        //     links.splice(removeIndex, 1);

        //     return removedLink;
        // }
    },
}

const fs = require('fs');
const path = require('path');

const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf8'
  ),
  resolvers,
})

server
    .listen()
    .then(({ url }) =>
        console.log(`Server is running on ${url}`)
    )