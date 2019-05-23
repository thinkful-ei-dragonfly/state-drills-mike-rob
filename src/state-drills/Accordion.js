import React from 'react';

class Accordion extends React.Component {

  static defaultProps = {
    sections: []
  };

  state = {
    currentSelection: -1
  }

  handleClick = (index) => {
    this.setState( { 
      currentSelection: index
    } );

  }


  render() {
    return ( 
      <div>
        <ul>
            {this.props.sections.map((item, index) => {
              return <li key={index}>
                <button onClick={() => this.handleClick(index)}>{item.title}</button>
                {(this.state.currentSelection === index) && (<p>{item.content}</p>)}
              </li>
            })}
        </ul>
      </div>
    )

    
  }

}

export default Accordion;