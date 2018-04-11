import React from 'react';


export default () => {
  return(
    <div className='addpostview'>
      <div className="container">
		     <form>
			     <input className="one" type="text" placeholder="Title...." />
		 	     <textarea placeholder="Content..." className="two"></textarea>
			     <div className="button_add_post">
				      <input  className="three" type="submit" value="Add" / >
			     </div>
		    </form>
	   </div>
  </div>
  );
}
