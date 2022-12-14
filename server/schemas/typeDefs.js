const { gql } = require('apollo-server-express');

const typeDefs = gql`
 
  type Workout {
    _id: ID!
    bodyPart: String
    equipment: String
    gifUrl: String
    name: String
    target: String
  }

  type Query {
    getWorkouts: [Workout!]!
  }

  type Mutation {
    createWorkout(bodyPart: String, equipment: String, gifUrl: String, name: String, target: String): Workout!
  }
`;

module.exports = typeDefs;
