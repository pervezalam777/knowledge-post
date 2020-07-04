import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import Articles from '../pages/articles-page';


function ArticleRoute() {
  let match = useRouteMatch();

  return <Switch>
    <Route path={`${match.path}/:articleId`}>
      <h3>show specific article</h3>
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