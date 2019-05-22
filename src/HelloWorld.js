import React from 'react';

class HelloWorld extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      who: 'world',
    };

  }

  render() {
    return ( 
      <div>
        <p>'Hello, {this.state.who}'</p>
        <button onClick={e => this.handleClick('World')}>World</button>
        <button onClick={e => this.handleClick('Friend')}>Friend</button>
        <button onClick={e => this.handleClick('React')}>React</button>
      </div>
    );
  }


  handleClick(word) {
    this.setState( {
      who: word,
    });
  }

 

}

export default HelloWorld;