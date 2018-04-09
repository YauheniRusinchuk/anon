import React from 'react';


class Searchform extends React.Component {
  onSubmit = (e) => {
    e.preventDefault();
  }

  render(){
    return(
      <div className='searchform'>
        <form onSubmit={this.onSubmit}>
          <input type='text'  placeholder="Search..." />
        </form>
      </div>
    );
  }
}

export default Searchform;
