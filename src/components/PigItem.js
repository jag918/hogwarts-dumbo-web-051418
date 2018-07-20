import React from 'react'

class PigItem extends React.Component {

  handleClick = () => {
      this.props.clickMe(this.props.hog)

  }

  render() {
    return (
      <div  onClick={this.handleClick} className = " ui eight wide column pigTile">{this.props.hog.name}
      <img src={require(`../hog-imgs/${this.props.hog.name.replace(/\s/g,'_').toLowerCase()}.jpg`)}
        alt="this.props.name"/></div>
    )
  }
}

export default PigItem;
