import React, {Fragment} from 'react';
import './style/header.css';

import Addpostbtn from './addpostbtn';
import Homepage from './homepage';


export default () => {
  return(
    <Fragment>
      <div className="header">
        <Homepage />
        <Addpostbtn />
      </div>
    </Fragment>
  )
}
