import React from 'react';

class Bomb extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      output: ''
    }
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
       if (this.state.count%2 === 0 && this.state.count <= 8) {
        this.setState({
          output: 'tick'
        })
      }
      if (this.state.count%2 !== 0 && this.state.count <= 8) {
        this.setState({
          output: 'tock'
        })
      }
      if (this.state.count > 8) {
        this.componentWillUnmount(this.interval)
        this.setState({
          output: 'BOOM!!!!'
        })
      }
      // clearInterval(componentDidMount)
      console.log(this.interval)
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
      //     'BOOM!!!!'
      //   </div>
      // )}


      // <div>
      //   {(this.state.count%2 === 0 && this.state.count <=8) && ('tick')}
      //   {(this.state.count%2 !== 0 && this.state.count <=8) && ('tock')}
      //   {(this.state.count > 8) && ('BOOM!!!!')}
      // </div>

      <div>
        {this.state.output}
      </div>

      )
  }

}

export default Bomb;