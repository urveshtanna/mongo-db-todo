const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{
    if(error){
      return console.log('Unable to connect to database');
    }
    console.log('Connect to database');

    //deleteMany
    // db.collection('Todos').deleteMany({text:'Something todo'}).then((result)=>{
    //   console.log(result);
    // });
    //
    // //deleteOne
    // db.collection('Todos').deleteOne({completed: true}).then((result)=>{
    //   console.log(result);
    // })

    //findanddelete
    // db.collection('Todos').findOneAndDelete({text:'Anoasfiohifa'}).then((result)=>{
    //   console.log(result);
    // });
    db.close();
})
