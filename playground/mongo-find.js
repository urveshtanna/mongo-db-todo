const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{
    if(error){
      return console.log('Unable to connect to database');
    }
    console.log('Connect to database');

    // db.collection('Todos').find({completed: false}).toArray().then((docs)=>{
    //   console.log(JSON.stringify(docs,undefined,2));
    // },(error) =>{
    //   console.log("Unable to fetch data",error);
    // });
    db.collection('Todos').find().count().then((count)=>{
      console.log(`Total Records : ${count}`);
    },(error) =>{
      console.log("Unable to fetch data",error);
    });
    db.close();
})
