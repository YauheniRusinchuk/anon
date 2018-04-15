import React from 'react';
import Addpostview from './addpostview';


class Addpost extends React.Component {


  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log('onsubmit addpost')
  }

  render(){
    return(
      <Addpostview onSubmit={this.handleOnSubmit}  />
    )
  }
}

export default Addpost;
