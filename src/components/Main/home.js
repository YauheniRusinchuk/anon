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
    const body = result.map((item)=>{
      return(
          <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.content}</p>
          </div>
      );
    })
    return(
      <div>
        {body}
      </div>
    );
  }
}

export default connect(mapToStateProps)(Home);
