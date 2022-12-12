const { Schema } = require('mongoose');

const workoutSchema = new Schema({
  bodyPart: {
    type: String,
  },
  equipment: {
    type: String,
  },
  gifUrl: {
    type: String,
  },
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  target: {
    type: String,
  }
});

module.exports = workoutSchema;
