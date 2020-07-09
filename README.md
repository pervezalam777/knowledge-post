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
* Edit own comments

### Bonus Functionality:-
* Adding these gets you extra points
* Support for tags, and seeing articles of only particular tag
* Setting articles as favourites and browsing own favourite articles


## Development approach
The following are the approaches of this project.

* [Thinking in react](https://reactjs.org/docs/thinking-in-react.html)
* Make it work, Make it right, Make it fast
* Clean Code
* SRP and DRY principles

## References
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [React-route](https://reactrouter.com/web/guides/quick-start)
* [React Bootstrap](https://react-bootstrap.github.io/)
* [Realworld API](https://github.com/gothinkster/realworld/tree/master/api)


## TODO
* Add unit testing (code is somewhat unit testable)
* Add code coverage matrix ( traceability matrix)
* CI/CD for deployment
* Error handling framework can be added. This will provide intuitive msg and log the same error on log server for further analyses.
* Linter for : double quote vs single quote
* After Authentication reload state
* On token expire should redirect to login or update component with some message (use react portal).
* Use react suspense component for loading state.
* See if module lazy loading required.
