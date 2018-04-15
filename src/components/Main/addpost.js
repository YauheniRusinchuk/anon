import React from 'react';
import Addpostview from './addpostview';


class Addpost extends React.Component {

  state = {
    title: '',
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value,
    })
  }


  handleSubmit = (e) => {
    e.preventDefault();
  }

  render(){
    return(
      <Addpostview
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
      />
    )
  }
}

export default Addpost;
