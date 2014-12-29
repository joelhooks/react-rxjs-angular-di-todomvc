var React           = require('react/addons'),
    Rx              = require('rx'),
    ReactRouter     = require('react-router'),
    {Link}          = require('react-router'),
    di              = require('di'),
    _               = require('lodash'),
    EventHandler    = require('../utils/EventHandler'),
    TodoActions     = require('../actions/TodoActions'),
    pluralize       = require('pluralize');

var Footer = function(TodoActions, EventHandler) {
  return React.createClass({
  propTypes: {
    todoList: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  },

  componentWillMount: function() {
    var clearAllClicked = EventHandler.create();

    clearAllClicked.subscribe(TodoActions.clearCompleted)

    this.handlers = {
      clearAllClicked: clearAllClicked
    }
  },

  render: function() {
    var cx = React.addons.classSet; //a little shorthand
    
    var todos = this.props.todoList;

    var completedTodoCount = _.size(_.filter(todos, "isComplete")),
        totolTodoCount = _.size(todos),
        activeTodoCount = totolTodoCount - completedTodoCount;

    var completedLabel = "Clear completed (" + completedTodoCount + ")",
        itemsLeftLabel = pluralize('items', activeTodoCount) + ' left';

    var clearButtonClass = cx({hidden: completedTodoCount < 1}),
        footerClass = cx({hidden: !totolTodoCount });

    return (
      <footer id="footer" className={footerClass}>
        <span id="todo-count"><strong>{activeTodoCount} </strong>{itemsLeftLabel}</span>
        <ul id="filters">
          <li>
            <Link activeClassName="selected" to="All">All</Link>
          </li>
          <li>
            <Link activeClassName="selected" to="Active">Active</Link>
          </li>
          <li>
            <Link activeClassName="selected" to="Complete">Complete</Link>
          </li>
        </ul>
        <button id="clear-completed" className={clearButtonClass} onClick={this.handlers.clearAllClicked}>{completedLabel}</button>
      </footer>
    );
  }
});
}

di.annotate(Footer, new di.Inject(TodoActions, EventHandler));

module.exports = Footer;