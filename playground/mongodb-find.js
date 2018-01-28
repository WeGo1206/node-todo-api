//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if(err) {
    console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

// db.collection('ToDos').find({
//   _id: new ObjectID('5a6dac446ae99d11041ced7f')
// }).toArray().then((docs) => {
//   console.log('Todos');
//   console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
//   console.log('Unable to fetch todos', err);
// });

// db.collection('ToDos').find().count().then((count) => {
//   console.log('Todos count:', count);
// }, (err) => {
//   console.log('Unable to fetch todos', err);
// });

db.collection('Users').find({
  location: 'Philadelphia'
}).count().then((count) => {
  console.log('Todos count:', count);
}, (err) => {
  console.log('Unable to fetch todos', err);
});

  //db.close();
});
