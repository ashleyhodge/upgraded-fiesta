const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Query {
    products: [Product]
    product(_id: ID!): Product
    order(_id: ID!): Order
    user: User
  }
`;

module.exports = typeDefs;