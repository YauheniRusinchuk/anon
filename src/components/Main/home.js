import React from 'react';
import {connect} from 'react-redux';

import PostView from './postview';



const mapToStateProps = (state) => {
  return {
    addPost : state.addPost,
  }
}

class Home extends React.Component {

  render(){
    const {addPost} = this.props
    return(
      <div className="homepageview">
        {
          addPost.map((item,index)=>{
            return(
                <PostView key={item.id}
                          id={item.id}
                          title={item.title}
                          content={item.content}
                />
            );
          })
        }
      </div>
    );
  }
}

export default connect(mapToStateProps)(Home);
