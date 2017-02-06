//libs imports
var express = require('express');
var bodyParser = require('body-parser');

//Local imports
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/Todo');
var {User} = require('./models/User');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    var todo = new Todo({
      text : req.body.text
    });

    todo.save().then((result)=>{
      res.send(result);
    },(error)=>{
      res.status(400).send(error);
    });
});

app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
      res.send({todos});
    },(error)=>{
      res.status(400).send(error);
    });

});

app.listen(3000,()=>{
  console.log('Started on port: 3000');
});

module.exports = {
  app
};
