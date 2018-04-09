import React from 'react';
import './style/main.css';
import {Route, Switch} from 'react-router-dom';


import Home from './home';


export default () => {
  return(
    <div className='main'>
    <Switch>
      <Route exact path ='/' component={Home} />
      <Route render={()=><p> Page not found </p>} />
    </Switch>
    </div>
  );
}
