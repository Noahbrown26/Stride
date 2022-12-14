const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { Workout } = require('../models/');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {

    getWorkouts: async (parent, args) => {
      const workoutData = await Workout.find({});
      return workoutData
    },

  },

  Mutation: {
    
    createWorkout: (parent, args) => {
    const randomId = Math.random().toString().split('.')[1];
    const newWorkout = {args, _id: randomId }
      Workout.push(newWorkout);
    return newWorkout;
    }
  },
};

module.exports = resolvers;
