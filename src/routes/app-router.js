import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ArticleRoute from './article-router';
import LoginPage from '../pages/login-page';
import SignUpPage from '../pages/signup-page';
import UserSettingsPage from '../pages/user-settings-page';

function AppRouter(){
  return (
    <Switch>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/register">
        <SignUpPage />
      </Route>
      <Route path="/settings">
        <UserSettingsPage /> 
      </Route>
      <Route path="/articles">
        <ArticleRoute />
      </Route>
      <Route path="/">
        <Redirect to="/articles"/>
      </Route>
    </Switch>
  )
}

export default AppRouter;