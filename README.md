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

### Extra Functionality (Pending):-
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


## Steps to deploy with Firebase
You should have firebase account (gmail account) <br/><br/>

Following are the steps
1) Generate production ready build via **npm run build** command.
2) Login to [firebase](https://console.firebase.google.com/) hosting site
3) Create a project (I have create knowledgepost-e9776)
4) **npm install -g firebase-tools** Install firebase node package globally on your local machine
5) **firebase login** run this command in terminal/console of your local machine

6)  **firebase init** run this command on your application folder and follow the instruction
7) Select **Hosting: Configure and Deploy firebase hosting site** 
8) Select project name you have created on step three
9) Give the name of public directory as **build** that is where your production ready code is available.
10) Type 'y' (yes) if it ask you to build it as single page application
11) Type 'n' (no) if it ask you to override existing index.html file
12) Run **firebase deploy** command once all the set up is done.
<br/><br/>

**You do not need to do step 6 to 11 if you are going to use this application code. you need to change project name in '.firebaserc' file**




## Deployed on
[Knowledge Post](https://knowledgepost-e9776.web.app)


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

