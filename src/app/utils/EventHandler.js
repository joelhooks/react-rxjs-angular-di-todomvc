var Rx = require('rx');

function getEnumerablePropertyNames(target) {
    var result = [];
    for (var key in target) {
        result.push(key);
    }
    return result;
}

/**
    creates an event handler that is an Rx subject
*/
class EventHandler {
    create() {
        var subject = function() {
            subject.onNext.apply(subject, arguments);
        };
        
        getEnumerablePropertyNames(Rx.Subject.prototype)
            .forEach(function (property) {
                subject[property] = Rx.Subject.prototype[property];
            });
        Rx.Subject.call(subject);
        
        return subject;    
    }
}

module.exports = EventHandler;




