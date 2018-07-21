import React from 'react'

class SingleElement extends React.Component {

  state = {
    clicked: false
  }

  click = () => {
    if(!this.props.pause) {
      this.setState({clicked: !this.state.clicked}, () => {this.props.clean(this.props.s)})
    }
  }

  render() {

    return(
      <div>
        {this.state.clicked ? this.props.end()
          : <div className={this.props.clicked} onClick= {this.click}>{this.props.s}</div>}
      </div>
    )
  }
}

export default SingleElement
