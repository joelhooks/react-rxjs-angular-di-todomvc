var React           = require('react/addons'),
    MainView        = require('./views/MainView.jsx'),
    TodoList        = require('./views/TodoList.jsx'),
    { Route }       = require('react-router'),
    di              = require('di');

console.log(require('react-router').Routes)

var AppRoutes = (MainView, TodoList) => {
  return (
    <Route handler={MainView}>
      <Route name="All" path="/" handler={TodoList} />
      <Route name="Complete" path="/completed" handler={TodoList} />
      <Route name="Active" path="/active" handler={TodoList} />
    </Route>
  )
 }

di.annotate(AppRoutes, new di.Inject(MainView, TodoList));

module.exports = AppRoutes


