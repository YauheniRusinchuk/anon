import React from 'react';
import './style/main.css';
import {Route, Switch} from 'react-router-dom';




export default () => {
  return(
    <div className='main'>


    <Switch>
      <Route exact path ='/' render={()=><h1> Home </h1>} />
      <Route render={()=><p> Page not found </p>} /> 
    </Switch>
    </div>
  );
}
