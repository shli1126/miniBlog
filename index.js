const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose')
const { MONGODB } = require('./config.js');
const resolvers = require('./graphql/resolvers')
const typeDefs =  require('./graphql/typeDefs')

const server = new  ApolloServer({
    typeDefs,
    resolvers
});

mongoose
    .connect(MONGODB, { useNewUrlParser: true})
    .then(() => {
        console.log('MongoDB Connected');
        return server.listen({ port: 3000});
    })
    .then((res) => {
        console.log(`Server running at port ${res.url}`)
    })
