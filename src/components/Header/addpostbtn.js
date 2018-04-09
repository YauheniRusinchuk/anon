import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
  return(
    <div className='addpostbtn'>
      <Link  className='btn' to='/addpost'>addpost</Link>
    </div>
  );
}
