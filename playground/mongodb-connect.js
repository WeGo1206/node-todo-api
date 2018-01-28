const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if(err) {
    console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

  // db.collection('ToDos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
  name: 'Andrew',
  age: 25,
  location: 'Philladelphia'
  }, (err, result) => {
     if (err) {
       return console.log('Unable to insert user', err);
     }
     console.log(JSON.stringify(result.ops, undefined, 2));
   });

  db.close();
});
