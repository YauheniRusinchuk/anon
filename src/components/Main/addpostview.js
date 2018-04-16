import React from 'react';
import {connect} from 'react-redux';
import {AddPost} from '../../actions/index';


class Addpostview extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    title: '',
    content: '',
  }

  onSubmit = (e) => {
    this.props.onSubmit(e)
    this.setState({title: '', content: ''})
    this.props.AddPost(this.state);
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
  				      <input  className="three" type="submit" value="Add" / >
  			     </div>
  		    </form>
  	   </div>
    </div>
    );
  }
}

export default connect(null,{AddPost})(Addpostview);
