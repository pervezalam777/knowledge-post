# Knowledge Post
This is a sample project to showcase blog post functionality, it uses react and redux as underline functionality.

## Scope of work

### User Authentication
* Signup
* Login

NOTE: Use local Storage to store the Authentication token. 

### Articles:-
* Seeing the feed of all articles (route: /articles )
* Open and read an article (route: /articles/{article-name})
* Write a new article
* Edit own older articles
* Delete own articles

### Comments:-
* See comments under articles
* Write your own comment under an article
* Delete own comments
* Edit own comments **(API end point not available)**

### Bonus Functionality:-
Adding these gets you extra points
* Support for tags, and seeing articles of only particular tag
* Setting articles as favourites and browsing own favourite articles


## Development approach
The following are the approaches of this project.

* [Thinking in react](https://reactjs.org/docs/thinking-in-react.html)
* Make it work, Make it right (Never ship first thing that works)
* Clean Code: SRP, DRY

## Framework and libraries used
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [React-route](https://reactrouter.com/web/guides/quick-start)
* [Real-world API](https://github.com/gothinkster/realworld/tree/master/api)
* [@reduxjs/toolkit](https://github.com/reduxjs/redux-toolkit)

## TODO
* Add unit testing (code is somewhat unit testable)
* Add code coverage matrix ( traceability matrix)
* CI/CD for deployment
* Error handling framework can be added. This will provide intuitive msg and log the same error on log server for further analyses.
* Use react suspense component for loading state.
* See if module lazy loading required *(Not require as on 17 July 2020 since bundle size is under threshold value)*
* End to end testing (could us protractor)
* Try to use [normalizr](https://github.com/paularmstrong/normalizr)
* Naming convention *(Naming variable is alway hard problem, so check if names are not descriptive or has some ambiguity)*
* Use symbol primitive type in place of string constant
* Client side form validations
* Loading/processing indications for service request
