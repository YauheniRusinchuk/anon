import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
  return(
    <div className='homepage'>
      <Link  className='homepagebtn' to='/'> homepage </Link>
    </div>
  );
}
