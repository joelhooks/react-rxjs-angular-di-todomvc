var React           = require('react/addons'),
    Router          = require('./app/router'),
    di              = require('di');

var injector = new di.Injector([]);

var router = injector.get(Router);

router.run((Handler, state) => {
  React.render(<Handler state={state} />, document.getElementById('todoapp'));
});




