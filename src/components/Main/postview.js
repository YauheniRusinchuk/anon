import React from 'react';
import {Link} from 'react-router-dom';


class PostView extends React.Component {

  state = {
    views: 0
  }

  handlePostViews = () => {
    this.setState({
      views: this.state.views + 1
    })
  }

  render(){
    const {title,content} = this.props
    return(
      <div className= "postview">
        <Link onClick={this.handlePostViews} className="postview_title" to='/' >{title}</Link>
        <p className="postview_content">{content}</p>
        <p className="postview_count"> views: {this.state.views} </p>
      </div>
    );
  }
}

export default PostView;
