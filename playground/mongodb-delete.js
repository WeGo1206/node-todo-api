//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if(err) {
    console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

db.collection('Users').deleteMany({name: 'Andrew'}).then((result) => {
    console.log(result);
  });


db.collection('Users').findOneAndDelete({_id: new ObjectID('5a6dbc77f925a09549ba2722')}).then((result) => {
    console.log(result);
  });

  //db.close();
});
