import React from 'react';
import {connect} from 'react-redux';


const mapToStateProps = (state) => {
  return {
    addPost : state.addPost,
  }
}

class Home extends React.Component {

  render(){
    const {addPost} = this.props
    return(
      <div>
          {console.log(addPost)}
      </div>
    );
  }
}

export default connect(mapToStateProps)(Home);
