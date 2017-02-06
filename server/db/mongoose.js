var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://urvesh:t^K57wfqJsI@155$@ds145039.mlab.com:45039/todoapp');


module.exports = {
  mongoose
};
