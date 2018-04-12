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
        {addPost.map((item)=>{
          return(
            <div key={item.id}>
              <p>{item.title}</p>
              <p>{item.content}</p>
              < hr />
            </div>
          )
        })}
      </div>
    );
  }
}

export default connect(mapToStateProps)(Home);
