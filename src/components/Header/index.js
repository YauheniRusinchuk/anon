import React, {Fragment} from 'react';
import './style/header.css';

import Addpostbtn from './addpostbtn';


export default () => {
  return(
    <Fragment>
      <div className="header">
        <Addpostbtn />
      </div>
    </Fragment>
  )
}
