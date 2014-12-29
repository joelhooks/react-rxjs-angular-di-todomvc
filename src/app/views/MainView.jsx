var React           = require('react/addons'),
    Rx              = require('rx'),
    {RouteHandler}  = require('react-router'),
    {State}         = require('react-router'),
    di              = require('di'),
    TodoList        = require('./TodoList.jsx'),
    Header          = require('./Header.jsx'),
    Footer          = require('./Footer.jsx'),
    TodoStore       = require('../stores/TodoStore'),
    _               = require('lodash');

var MainView = function(Header, Footer, TodoList, TodoStore) {
  return React.createClass({
  mixins: [ State ],
  getInitialState: function() {
    return {};
  },
  componentWillMount: function() {
    TodoStore.todoList
      .map((todoList) => {
        return {
          todoList: todoList
        }
      })
      .subscribe(this.setState.bind(this))
  },
  render: function() {
    var showing = this.getRoutes()[1].name,
        todoList = this.state.todoList,
        filteredList;
        
    switch(showing){
        case 'Complete':
            filteredList = _.filter(todoList, (item) => item.isComplete);
            break;
        case 'Active':
            filteredList = _.filter(todoList, (item) => !item.isComplete);
            break;
        default:
            filteredList = todoList;
    }
    return (
      <div>
        <Header/>
        <RouteHandler todoList={filteredList} />
        <Footer todoList={todoList}/>
      </div>
    )
  }
})
}

di.annotate(MainView, new di.Inject(Header, Footer, TodoList, TodoStore));

module.exports = MainView;