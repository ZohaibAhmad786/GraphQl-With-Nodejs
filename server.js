const path = require('path');
const express = require('express');
// var { graphql, buildSchema } = require('graphql');
var { graphqlHTTP } = require('express-graphql');
var { makeExecutableSchema } = require('@graphql-tools/schema');
var { loadFilesSync } = require('@graphql-tools/load-files');
// ! => Required

// var schema = buildSchema(`
//   type Query {
//     products: [Product]
//     orders: [Order]
//   }

//   type Product {
//     id: ID!
//     description: String!
//     reviews: [Review]
//     price: Float!
//   }

//   type Review {
//       rating: Int!
//       comment: String
//   }

//   type Order {
//       date: String!
//       subtotal: Float!
//       items: [OrderItem]
//   }

//   type OrderItem {
//       product: Product!
//       qutatity: Int!
//   }
// `);

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'));

const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray
})

// -- Resolver automatically handle this
// var root = { 
//     products: require('./products/products.model'),
//     orders: require('./orders/orders.model')
// };

const app = express();

// -- Resolver automatically handle this if  you don't wait to use resolver uncomment the rootValue line

app.use('/graphql', graphqlHTTP({
    schema: schema,
    // rootValue: root,
    graphiql: true,
}));

app.listen(3000, () => {
    console.log("Running Graphql Server...")
})