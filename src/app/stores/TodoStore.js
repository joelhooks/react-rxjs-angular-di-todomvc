var Rx = require('rx'),
    LocalStorage      = require('../utils/LocalStorage'),
    di              = require('di');

class TodoStore { 
  constructor(LocalStorage) {
    var key = 'todomvc-0.0.5';
    // a BehaviorSubject has an initial value and monitors for updates
    // in this case it is an array (empty or from local storage)
    // this Observable operates as the "onNext" handler for corresponding
    // actions
    this.updates = new Rx.BehaviorSubject(LocalStorage.save(key))

    // the "notes" parameter is the current array of notes and
    // the return value is the updated array of notes to be stored
    // the operation is an ACTION that returns a modified array
    // of notes. 
    this.todoList = this.updates.scan((todoList, operation) => {
      console.log("OPERATION")
      return operation(todoList);
    })

    // each updated note array is stored in local storage
    this.todoList.subscribe((update) => {
      console.log('SAVE', update)
      LocalStorage.save(key, update)
    })
  }
}

di.annotate(TodoStore, new di.Inject(LocalStorage));

module.exports = TodoStore