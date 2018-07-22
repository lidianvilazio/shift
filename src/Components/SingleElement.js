import React from 'react'

class SingleElement extends React.Component {

  state = {
    selected: false
  }

  selectNumber = () => {
    if(!this.props.pause) {
      if(this.props.select === undefined) {
        this.setState({selected: true}, () => {this.props.clean(this.props.element)})
      }
    }
  }

  render() {

    return(
      <div className='SingleElement'>
        <ul className='list'>
          <li className='element'>{this.state.selected ? this.props.end() :
            <div className={this.props.buttonOn} onClick= {this.selectNumber}><h1>{this.props.select === undefined ? this.props.element : this.props.select}</h1></div>}</li>
        </ul>
      </div>

    )
  }
}

export default SingleElement
