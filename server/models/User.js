var mongoose = require('mongoose');
var User = mongoose.model('User',{
  user_name : {
    type: String,
    required : true,
    minlength: 1,
    trim : true
  },
  email :{
    type: String,
    minlength: 1,
    trim : true
  }
});

module.exports = {
  User
};
