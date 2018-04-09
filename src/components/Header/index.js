import React, {Fragment} from 'react';
import './style/header.css';

import Addpostbtn from './addpostbtn';
import Homepage from './homepage';
import Searchform from './searchform';


export default () => {
  return(
    <Fragment>
      <div className="header">
        <Homepage />
        <Searchform />
        <Addpostbtn />
      </div>
    </Fragment>
  )
}
