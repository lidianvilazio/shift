import React from 'react'
import SingleElement from './SingleElement'

class  Timer  extends React.Component {

  state = {
    num: 0,
    buttonOn: false,
    list: [],
    interval: null,
    select: undefined,
    pause: false,
  }

  start = () => {
    if(this.state.select) {
      this.setState({
        interval: setInterval(() => {this.setState({num: this.state.num+1})}, 1000),
        buttonOn: !this.state.buttonOn,
        pause: false,
        list: [...this.state.list, this.state.select],
        select: undefined
      })
    } else {
      this.setState({
        interval: setInterval(() => {this.setState({num: this.state.num+1})}, 1000),
        buttonOn: !this.state.buttonOn,
        pause: false,
      })

    }
  }

  gettingNumber = () => {
    let num = this.state.num / 2
    if(this.state.list.indexOf(num) === -1) {
      this.setState({list: [num, ...this.state.list]})
    }
  }

  clean = (num) => {
    this.setState({
      list: this.state.list.slice(0,this.state.list.indexOf(num)),
      select: num
    })
  }

  end = () => {
    this.setState({
      num: 0,
      buttonOn: false,
      pause: true,
    }, () => {clearInterval(this.state.interval)})
  }


  render() {

    let element = this.state.list.map((element, elementKey) => {
      return <SingleElement key={elementKey} element={element} clean={this.clean} end={this.end} pause={this.state.pause}/>
    })

    return(

      <div id='grid'>
        <div>
          <h1 id='title'>Timer</h1>
          {this.state.buttonOn ? <button onClick={this.gettingNumber}>{this.state.num}</button> : <button onClick={this.start}>Start</button>}
        </div>
        <div id='single'>
         {this.state.list.length > 0 ? element : null}
         {this.state.select ? <SingleElement select={this.state.select} end={this.end} buttonOn={'buttonOn'} pause={this.state.pause}/> : null}
        </div>
      </div>
      
    )
  }
}

export default Timer
