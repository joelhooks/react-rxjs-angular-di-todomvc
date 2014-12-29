## React + RxJS + Angular 2.0's di.js TodoMVC Example

React provides the blazing fast dome rendering. RxJS allows us to deal with events and user interaction as "Arrays over time" that we are able to filter over with `map`, `filter`, and their related friends. Finally, Angular 2.0's di.js dependency injection tool allows us to bring in some measure of testability to the application (not yet demonstrated here).

This exists simply because I think these tools are interesting, and wanted to see them all playing together.

Inspired by (by this I mean liberally borrowed from):
* [React + Angular DI](http://merrickchristensen.com/articles/react-angular-di.html)
* [React Rx TodoMVC](https://github.com/fdecampredon/react-rxjs-todomvc)
* [React Reflux TodoMVC](https://github.com/spoike/refluxjs-todo)

Todo:
* Add some tests!


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

## Learning RxJS

> The Reactive Extensions for JavaScript (RxJS) is a set of libraries for composing asynchronous and event-based programs using observable sequences and fluent query operators modeled after Language Integrated Queries (LINQ).

> _[RxJS](http://reactive-extensions.github.io/RxJS/)_

* [The introduction to Reactive Programming you've been missing](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754)
* [LearnRX](http://jhusain.github.io/learnrx/)
* [Creating Observables (RxJAva)](https://github.com/ReactiveX/RxJava/wiki/Creating-Observables)
* [Which Operator to Use?](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/gettingstarted/which-static.md)

## Learning Angular 2.0's di.js library

> Dependency Injection Framework for the future generations...

> _[Angular 2.0's di.js](https://github.com/angular/di.js)_

Well... This one is a bit sticky ;)

## Implementation

This application follows the Flux architecture that is recommended for react. We work in the `src` folder, where we will find the entry point to the application `index.js`.

The application is built with es6, only using minor features (primarily the `=>` fat-arrow notation for functions). Where React is involved, we are using JSX (and liking it).

## Running

This application is assembled via gulp. You will need to `npm install` in the project folder to install dependencies, and then the application can be launched via `gulp watch`. This will build the project, start the web server, and open a browser page. It uses BrowserSync to monitor for changes and reload the page when they are detected.


## Credit

This TodoMVC application was created by [@jhooks](https://twitter.com/jhooks).
