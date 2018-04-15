import React from 'react';


export default ({onSubmit, onChange}) => {
  return(
    <div className='addpostview'>
      <div className="container">
		     <form onSubmit={onSubmit}>
			     <input className="one" type="text"
            name = "title"
            onChange={onChange}
            placeholder="Title...." />
		 	     <textarea placeholder="Content..."
            name = "content"
            onChange={onChange}
           className="two"></textarea>
			     <div className="button_add_post">
				      <input  className="three" type="submit" value="Add" / >
			     </div>
		    </form>
	   </div>
  </div>
  );
}
