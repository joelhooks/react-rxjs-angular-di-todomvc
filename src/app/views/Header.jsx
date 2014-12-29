var React           = require('react/addons'),
    TodoActions     = require('../actions/TodoActions'),
    EventHandler    = require('../utils/EventHandler'),
    di              = require('di');

var ENTER_KEY = 13;

var Header = function(TodoActions, EventHandler) {
    return React.createClass({
    componentWillMount: function () {
        var newFieldKeyDown = EventHandler.create();
        var enterEvent = newFieldKeyDown.filter(event => event.keyCode === ENTER_KEY)

        console.log(newFieldKeyDown)
        
        enterEvent.forEach(function (event) {
            event.stopPropagation();
            event.preventDefault();
        });

        enterEvent
            .map(function (event) {
                return event.target.value.trim();
            })
            .filter(function (value) {
                return !!value;
            }).subscribe(TodoActions.create);

        enterEvent
            .forEach(function (event) {
                event.target.value = '';
            });
        

        this.handlers = {
            newFieldKeyDown: newFieldKeyDown
        };
    },
    
    render: function () {
        return (
            <header id="header">
                <h1>Todos</h1>
                <input
                    id="new-todo"
                    placeholder="What needs to be remembered?"
                    autoFocus={true}
                    onKeyDown={this.handlers.newFieldKeyDown}
                />
            </header>
        );
    }
});
}

di.annotate(Header, new di.Inject(TodoActions, EventHandler));

module.exports = Header;