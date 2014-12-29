var React           = require('react/addons'),
    Rx              = require('rx'),
    TodoItem        = require('./TodoItem.jsx'),
    di              = require('di'),
    EventHandler        = require('../utils/EventHandler'),
    TodoActions         = require('../actions/TodoActions');

var TodoList = function(TodoItem, TodoActions, EventHandler) {
  return React.createClass({

  componentWillMount: function () {
    var toggleAllChange = EventHandler.create();
    toggleAllChange
      .map( (event) => {
        console.log('TOGGLE ALL', event.target, event.target.checked)
          return event.target.checked;
      })
      .subscribe(TodoActions.toggleAll);

    this.handlers = {
        toggleAllChange: toggleAllChange
    }
  },

  render: function() {
    var todoList = this.props.todoList,
        todoItems = todoList.map((todo) => {
            return (
                <TodoItem key={todo.id} todo={todo} />
            );
        }),
        classes = React.addons.classSet({
                "hidden": todoList.length < 1
        });
    return (
      <section id="main" className={classes}>
        <input id="toggle-all" type="checkbox" onChange={this.handlers.toggleAllChange} />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul id="todo-list">
            { todoItems }
        </ul>
      </section>
    )
  }
})
}
di.annotate(TodoList, new di.Inject(TodoItem, TodoActions, EventHandler));
module.exports = TodoList;