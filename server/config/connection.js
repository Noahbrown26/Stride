const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://Noahb26:!26Christmas@stride.xtqj5t5.mongodb.net/test', {
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false,
});

module.exports = mongoose.connection;