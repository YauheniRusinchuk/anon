import React from 'react';
import {connect} from 'react-redux';
import {AddPost} from '../../actions/index';


class Addpostview extends React.Component {

  state = {
    title: '',
    content: '',
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {title,content} = this.state;
    if(title && content) {
        this.props.AddPost(this.state);
        this.setState({title: "", content: ""})
    }else {
      return false
    }

  }

  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
      })
  }

  render(){
    const {title,content} = this.state
      return(
      <div className='addpostview'>
        <div className="container">
  		     <form onSubmit={this.onSubmit}>
  			     <input className="one" type="text"
              onChange={this.onChange}
              value = {title}
              name = "title"
              placeholder="Title...." />
  		 	     <textarea placeholder="Content..."
              onChange={this.onChange}
              value = {content}
              name = "content"
             className="two"></textarea>
  			     <div className="button_add_post">
                <input  style={{display:'none'}}
                        type="file"
                        ref={fileInput=>this.fileInput = fileInput}
                        />
                <button className="addfile" onClick={()=>this.fileInput.click()}>add file</button>
  				      <input  className="three" type="submit" value="Add Post" / >
             </div>
  		    </form>
  	   </div>
    </div>
    );
  }
}

export default connect(null,{AddPost})(Addpostview);
