//import DB models and authorization utils//
const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { Workout } = require('../models/');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {

    //query to get all available workouts from DB//
    getWorkouts: async (parent, args) => {
      const workoutData = await Workout.find({});
      return workoutData
    },

    //query to get user from id//
    getMe: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id });
        return userData;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

  },

  Mutation: {

    //mutation to create a new user with 3 args//
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      //sign user token upon user creation//
      const token = signToken(user);
      return { token, user };
    },

    //mutation to login a user after checking args//
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      //throw error message if no user email was found in DB//
      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    //mutation to create a new workout//
    createWorkout: (parent, args) => {
    //generate random id//
    const randomId = Math.random().toString().split('.')[1];
    const newWorkout = {args, _id: randomId }
    //push new workout to Workout collection//
    Workout.push(newWorkout);
    return newWorkout;
    },

  },
};

//export resolvers for use in server.js//
module.exports = resolvers;
