//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if(err) {
    console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a6cde6ec7da3f08ec390d61')
  }, {
      $inc: {
        age: 1
      },
      $set: {
          name: 'Henry'
          }
        }, {
        returnOriginal: false
      }).then((result) => {
        console.log(result);
      });

  //db.close();
});
