const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{
    if(error){
      return console.log('Unable to connect to database');
    }
    console.log('Connect to database');

    //FindOneAndUpdate
    db.collection('Todos').findOneAndUpdate({
      _id : new ObjectID("5896b1cf91386a8087ee6172")
    },{
        $set:{
          completed : false,
          text : 'First Task'
        }
    },{
      returnOriginal : false
    }).then((result)=>{
      console.log(result);
    })

    db.close();
})
