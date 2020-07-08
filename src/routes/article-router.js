import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import Articles from '../pages/articles-page';
import ArticlePage from '../pages/article-page';
import ArticleForm from '../components/article-form';


function ArticleRoute() {
  let match = useRouteMatch();

  return <Switch>
    <Route path={`${match.path}/:articleId/edit`}>
      <ArticleForm />
    </Route>
    <Route path={`${match.path}/new`}>
      <ArticleForm />
    </Route>
    <Route path={`${match.path}/:articleId`}>
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