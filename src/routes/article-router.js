import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import Articles from '../pages/articles-page';
import ArticlePage from '../pages/article-page';
import ArticleFormContainer from '../containers/article-form-container'


function ArticleRoute() {
  let match = useRouteMatch();

  return <Switch>
    <Route path={`${match.path}/:slug/edit`}>
      <ArticleFormContainer />
    </Route>
    <Route path={`${match.path}/new`}>
      <ArticleFormContainer />
    </Route>
    <Route path={`${match.path}/:slug`}>
      <ArticlePage />
    </Route> 
    <Route path={`${match.path}/tags/:tagsList`}>
      <h3>show tags based articles</h3>
    </Route>
    <Route path={match.path}>
      <Articles />
    </Route>
  </Switch>

}

export default ArticleRoute;