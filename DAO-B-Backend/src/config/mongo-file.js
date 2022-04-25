const mongoose = require('mongoose');
const { mongoUrl, mongoUser, mongoPassword } = require('./vars');

mongoose.connect(mongoUrl, {
  auth: { authSource: 'admin' },
  user: mongoUser,
  pass: mongoPassword,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});
