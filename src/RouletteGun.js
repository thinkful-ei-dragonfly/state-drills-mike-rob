import React from 'react';

class RouletteGun extends React.Component {

  // console.log(this.props);
  // console.log(this.props.randomNumber);
  // console.log(this.randomNumber);

  state = {
    bulletInChamber: this.props.randomNumber,
    spinningTheChamber: false,
    isYouDead: "",
  };


  handleSpinChamber = e => {

    // may not even need to store??
    setTimeout(() => {
      this.setState( {
        spinningTheChamber: false,
      } )
    }, 2000);

    

    let newChamber = Math.ceil(Math.random() * 8);

    let result = "";



    if (this.state.bulletInChamber === newChamber ) {
      result = <p>BANG!!! You lost :( try again?</p>
    } else {
      result = <p>you're safe!</p>
    }

    console.log(newChamber);
    console.log(this.state.bulletInChamber);

    this.setState( { 
      bulletInChamber: newChamber,     
      spinningTheChamber: true,
      isYouDead: result,
    } );



    // return result;
  }


  

  render() {
    // console.log(this.props.randomNumber);

    

    return ( 
      <div>
        {this.state.spinningTheChamber && (<p>spinning the chamber and pulling the trigger!...</p>)}
        <button onClick={this.handleSpinChamber}>pull the trigger</button>
        {this.state.isYouDead}
      </div>
    )

    
  }


  // handleClick(word) {
  //   this.setState( {
  //     who: word,
  //   });
  // }

}

export default RouletteGun;