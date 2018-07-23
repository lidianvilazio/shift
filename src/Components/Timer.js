import React from 'react'
import SingleElement from './SingleElement'

class  Timer  extends React.Component {

  state = {
    num: 0,
    buttonOn: false,
    list: [],
    interval: null,
    select: undefined,
  }

  start = () => {  //start timer
      this.setState({
        interval: setInterval(() => {this.setState({num: this.state.num+1})}, 1000),
        buttonOn: true,
      })
  }

  gettingNumber = () => {
    let num = this.state.num / 2        // after buttonOn is true this function starts working getting the chosen number and splitting and saving on array list.
    if(this.state.list.indexOf(num) === -1) {
      this.setState({list: [num, ...this.state.list]})
    }
  }

  clean = (num) => {  // when a number is seleted on the unordered list this function is called by the child
    this.setState({   //Component SingleElement and removes the numbers below the seleted number, keeps seleted number highlighted, and
      num: num,       // resets the timer equal to the seleted number.
      list: this.state.list.slice(0,this.state.list.indexOf(num)),
      select: num
    })
  }


  render() {

    let element = this.state.list.map((element, elementKey) => <SingleElement key={elementKey} element={element} clean={this.clean}/>)

    return(

      <div id='grid'>
        <div>
          <h1 id='title'>Timer</h1>
          {this.state.buttonOn ? <button onClick={this.gettingNumber}>{this.state.num}</button> : <button onClick={this.start}>Start</button>}
        </div>
        <div id='single'>
         {this.state.list.length > 0 ? element : null}
         {this.state.select ? <SingleElement select={this.state.select} buttonOn={'buttonOn'}/> : null}
        </div>
      </div>

    )
  }
}

export default Timer
