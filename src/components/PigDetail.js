import React from 'react'

class PigDetail extends React.Component {

  render () {
    return (
      <div>

        <h3>{this.props.hog.name}</h3>
        <p>Weight: {this.props.hog.weight}</p>
        <p>Medal: {this.props.hog.medal}</p>
      </div>
    )
  }

}
export default PigDetail;
