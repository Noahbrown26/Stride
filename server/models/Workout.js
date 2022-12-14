const { Schema, model } = require('mongoose');

const workoutSchema = new Schema(
  {
  bodyPart: {
    type: String,
  },
  equipment: {
    type: String,
  },
  gifUrl: {
    type: String,
  },
  name: {
    type: String,
  },
  target: {
    type: String,
  }
});

const Workout = model('Workout', workoutSchema);

module.exports = Workout;
