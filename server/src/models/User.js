const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: 3,
    maxlength: 15,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
  },
},{
    timestamps:true
});

const User = mongoose.model("User", userSchema);

module.exports = User;
 