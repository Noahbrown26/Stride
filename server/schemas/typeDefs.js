const { gql } = require('apollo-server-express');

const typeDefs = gql`

 type User {
    _id: ID!
    username: String
    email: String!
    password: String
  }

  type Workout {
    _id: ID!
    bodyPart: String
    equipment: String
    gifUrl: String
    name: String
    target: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getWorkouts: [Workout!]!
    getMe: User
  }

  type Mutation {
    createWorkout(bodyPart: String, equipment: String, gifUrl: String, name: String, target: String): Workout!
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
