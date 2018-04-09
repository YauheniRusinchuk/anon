import React from 'react';
import './style/main.css';
import {Route, Switch} from 'react-router-dom';


import Home from './home';
import Addpost from './addpost';


export default () => {
  return(
    <div className='main'>
    <Switch>
      <Route exact path ='/' component={Home} />
      <Route exact path='/addpost' component={Addpost} />
      <Route render={()=><p> Page not found </p>} />
    </Switch>
    </div>
  );
}
