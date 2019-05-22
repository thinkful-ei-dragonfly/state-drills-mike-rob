import React from 'react';

class Bomb extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      // {(this.state.count%2 === 0) && (this.state.count <= 8) && (
      //   <div>
      //     'tick'
      //   </div>
      // )}
      // {(this.state.count%2 !== 0 && this.state.count <= 8) && (
      //   <div>
      //     'tock'
      //   </div>
      // )}
      // {(this.state.count > 8) && (
      //   <div>
      //     'BOOM!'
      //   </div>
      // )}


      <div>{(this.state.count%2 === 0 && this.state.count <=8) && ('tick')}
      {(this.state.count%2 !== 0 && this.state.count <=8) && ('tock')}
      </div>

      )
  }

}

export default Bomb;