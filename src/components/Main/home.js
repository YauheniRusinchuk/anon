import React from 'react';
import {connect} from 'react-redux';


const mapToStateProps = (state) => {
  return {
    addPost : state.addPost,
  }
}

class Home extends React.Component {

  render(){
    return(
      <div>
        {console.log(this.props.addPost)}
        <h1> HOME </h1>
      </div>
    );
  }
}

export default connect(mapToStateProps)(Home);
