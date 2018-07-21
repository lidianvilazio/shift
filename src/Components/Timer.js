import React from 'react'
import SingleElement from './SingleElement'

class  Timer  extends React.Component {

  state = {
    num: 0,
    clicked: false,
    split: null,
    list: [],
    interval: null,
    select: undefined,
    pause: false
  }

  click = () => {
    this.setState({
      interval: setInterval(() => {this.setState({num: this.state.num+1})}, 1000),
      clicked: !this.state.clicked,
      pause: false,
    })
  }

  clicking = () => {
    let num = this.state.num / 2
    this.setState({list: [...this.state.list, num].sort(function(a, b){return b - a})})
  }

  otherSet = () => {
    this.clicking()
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
      clicked: false,
      pause: true,
      select: undefined
    }, () => {clearInterval(this.state.interval)})
  }


  render() {
    let s = this.state.list.map((i) => <SingleElement s={i} clean={this.clean} end={this.end} pause={this.state.pause}/>)

    return(
      <div className='main'>
        {this.state.num > 0 ? this.state.num : null}<br/>
        {this.state.clicked ? <button onClick={this.clicking}>Count</button> : <button onClick={this.click}>Count</button>}<br/><br/>
        {this.state.split ? this.state.split : null}
        {this.state.list.length > 0 ? s : null}
        {this.state.select ? <SingleElement s={this.state.select} end={this.end} clicked={'clicked'} pause={this.state.pause}/> : null}
      </div>
    )
  }
}

export default Timer
