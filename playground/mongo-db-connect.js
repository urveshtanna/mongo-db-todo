//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

//ES6 destructuring
var user = {
  name :'Urevesh',
  location :'Mumbai',
  gender :'Male'};
var {name} = user;
console.log(name);

// MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{
//     if(error){
//       return console.log('Unable to connect to database');
//     }
//     console.log('Connect to database');
//
//     db.collection('Todos').insertOne({
//       text : 'Something todo',
//       completed : false
//     },(error,result)=>{
//       if(error){
//         return console.log('Something went wrong! '+ error);
//       }
//       console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
//     });
//     db.close();
// })
