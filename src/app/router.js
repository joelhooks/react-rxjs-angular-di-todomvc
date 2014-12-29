var Routes          = require('./routes'),
    ReactRouter     = require('react-router'),
    di              = require('di');
    

var Router = (Routes) => ReactRouter.create({
    routes: Routes
  })

di.annotate(Router, new di.Inject(Routes));

module.exports = Router;