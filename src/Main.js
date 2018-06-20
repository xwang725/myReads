import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import BookList from './components/BookList';
import Search from './components/Search';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={BookList} />
      <Route path="/search" component={Search} />
    </Switch>
  </main>
)

export default Main