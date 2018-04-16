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
    const result = addPost.reverse()
    return(
      <div>
          {console.log(result)}
      </div>
    );
  }
}

export default connect(mapToStateProps)(Home);
