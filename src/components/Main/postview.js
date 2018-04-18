import React from 'react';
import {Link} from 'react-router-dom';


class PostView extends React.Component {

  render(){
    const {title,content} = this.props
    return(
      <div className= "postview">
        <Link className="postview_title" to='/' >{title}</Link>
        <p className="postview_content">{content}</p>
      </div>
    );
  }
}

export default PostView;
