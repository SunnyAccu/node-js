const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  email: {
    type: String,
  },
  password: {
    type: String,
  },
})

const User = new mongoose.model('User', userSchema)

module.exports = User
