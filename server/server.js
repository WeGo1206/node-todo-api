var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

var User = mongoose.model('User', {
  email: {
  type: String,
  required: true,
  trim: true,
  minlength: 1
  }
});

var newTodo = new Todo({
  text: 'Eat again dinner',
  // completed: true,
  // completedAt: 20180128
});

var newUser = new User({
  email: '  marc@hotmail.com'
})

// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });

newUser.save().then((doc) => {
  console.log('saved user', doc);
  }, (e) => {
  console.log('Unable to save user',e);
});
