## React + RxJS + Angular 2.0's di.js TodoMVC Example

React provides the blazing fast DOM rendering. RxJS allows us to deal with events and user interaction as "Arrays over time" that we are able to filter over with `map`, `filter`, and their related friends. Finally, Angular 2.0's di.js dependency injection tool allows us to bring in some measure of testability to the application (not yet demonstrated here).

This exists simply because these tools are interesting, and seeing them all playing together is fun.

Inspired by (by this I mean liberally borrowed from):
* [React + Angular DI](http://merrickchristensen.com/articles/react-angular-di.html)
* [React Rx TodoMVC](https://github.com/fdecampredon/react-rxjs-todomvc)
* [React Reflux TodoMVC](https://github.com/spoike/refluxjs-todo)

Todo:
* Add some tests!

## Learning RxJS

> The Reactive Extensions for JavaScript (RxJS) is a set of libraries for composing asynchronous and event-based programs using observable sequences and fluent query operators modeled after Language Integrated Queries (LINQ).

> _[RxJS](http://reactive-extensions.github.io/RxJS/)_

Before you continue, you should watch this [Async JavaScript at Netflix](https://www.youtube.com/watch?v=FAZJsxcykPs) talk from Jafar Husain ([@jhusain](https://twitter.com/jhusain)). It's really great.

### Why use RxJS?

"It's Underscore for events."

In a lot of ways, this is valid enough reason to use Rx. If events are OK, and promises are "pretty cool", Rx Observables bring it to the next level. You eliminate the need for passing around strings and dealing with callbacks with events. You remove the hassle of dealing with memory leaks when you forget to remove a listener.

Promises are a big step up from events. They can help solve these problems too, but they don't take it as far as they can. We are dealing with objects, that agree to do one thing and deliver the results when they are available. Rain, sleet or snow. There is no stopping the resolution of a promise once it has been set.

Rx Observables allow us to subscribe to an event, and to all of the events that follow. We are attaching to a stream of events flowing through a pipe. We can use tools like `map`, `filter`, and `reduce` (this is [just the beginning](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/gettingstarted/which-instance.md)) to **modify** the event stream, removing the need for gross control flow logic in our code. We eliminate "callback hell" start thinking about our data in more interesting ways. Data **is** the state of our applications.

### RxJS Resources

* [The introduction to Reactive Programming you've been missing](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754)
* [LearnRX](http://jhusain.github.io/learnrx/)
* [Creating Observables (RxJAva)](https://github.com/ReactiveX/RxJava/wiki/Creating-Observables)
* [Which Operator to Use? (static)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/gettingstarted/which-static.md)
* [Which Operator to Use? (instance)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/gettingstarted/which-instance.md)

_Just as a note, Rx took quite some time to get my head around. I've been giving it passing attention for at least two years because my good friend [Paul Taylor](https://twitter.com/trxcllnt) has been **super** excited about it for quite some time. The work he gets to do with Jafar at Netflix is pretty nuts. Pushing the envelope in big, interesting ways, and I take notice when really smart people are tackling difficult problems in interesting ways. I even spent my 40th birthday in 2014 at Jafar Husain's house for a day of instruction (which was an awesome experience). Even with that it took sitting down and doing this project to really get to the "ah-ha" tipping point moment :sparkles::punch::sparkles:_

## Learning React

> React uses a virtual DOM diff implementation for ultra-high performance. It can also render on the server using Node.js — no heavy browser DOM required.

> _[React](http://facebook.github.io/react/)_

The [React getting started documentation](http://facebook.github.io/react/docs/getting-started.html) is a great way to get started.

Here are some links you may find helpful:

* [Documentation](http://facebook.github.io/react/docs/getting-started.html)
* [API Reference](http://facebook.github.io/react/docs/reference.html)
* [Blog](http://facebook.github.io/react/blog/)
* [React on GitHub](https://github.com/facebook/react)
* [Support](http://facebook.github.io/react/support.html)

Articles and guides from the community:

* [Philosophy](http://www.quora.com/Pete-Hunt/Posts/React-Under-the-Hood)
* [How is Facebook's React JavaScript library](http://www.quora.com/React-JS-Library/How-is-Facebooks-React-JavaScript-library)
* [React: Under the hood](http://www.quora.com/Pete-Hunt/Posts/React-Under-the-Hood)

Get help from other React users:

* [React on StackOverflow](http://stackoverflow.com/questions/tagged/reactjs)
* [Mailing list on Google Groups](https://groups.google.com/forum/#!forum/reactjs)

## Learning Angular 2.0's di.js library

> Dependency Injection Framework for the future generations...

> _[Angular 2.0's di.js](https://github.com/angular/di.js)_

Well... This one is a bit sticky ;)

### Why use Angular's future dependency injection library?

This is *bleeding edge* for sure, but it is interesting and useful. While we don't have tests yet, having DI in place makes it a LOT easier. One of the goals of this project is to explore how testable this approach is.

It was inspired by this [React + Angular DI](http://merrickchristensen.com/articles/react-angular-di.html) article from Merrick Christensen ([@iammerrick)(https://https://twitter.com/iammerrick)) which pokes at the surface of using Angular DI with React. It would be **really freaking awesome** to get annotation support in React, or that is to say in JS generally. It makes DI so much nicer, and you can use it for other interesting things as well.

## Implementation

This application follows the [Flux architecture](https://facebook.github.io/flux/) that is recommended for react. We work in the `src` folder, where we will find the entry point to the application `index.js`.

By the nature of it, the use of RxJS changes some of the event-centric ideas in Flux, but it keeps the spirit of it for the most part.

The application is built with es6, only using minor features (primarily the `=>` [fat-arrow notation](https://egghead.io/lessons/arrow-function) for functions). Where React is involved, we are using JSX (and liking it).

## Running

This application is assembled via gulp. You will need to `npm install` in the project folder to install dependencies, and then the application can be launched via `gulp watch`. This will build the project, start the web server, and open a browser page. It uses BrowserSync to monitor for changes and reload the page when they are detected.

The es6 is converted to es5 using the [6to5 library](https://github.com/6to5/6to5) via [Browserify](http://browserify.org/). Browserify bundles everything together for us and converts from the [commonjs](http://wiki.commonjs.org/wiki/Modules/1.1) node style `require`ing, into straight JS the browser can understand. It's been **browserified**!

## What's the point of all this? (a disclaimer)

The point was to have fun and explore some cool technologies. This isn't here to serve as a recommendation! There is a **huge amount of potential** in these tools. You could even be successful with them today, given the right team and project. This approach is fun and interesting. There isn't a ton of boilerplate. The idea of eliminating control flow logic with declarative functional reactive style programming is an **important concept** that we should all be paying attention to. It solves some very hard problems that tradtional imperetive approaches can struggle to accomplish, or accomplish in ways that are difficult to reason about.

## Credit

This TodoMVC application was created by [@jhooks](https://twitter.com/jhooks).
