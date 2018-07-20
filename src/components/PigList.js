import React from 'react'
import PigItem from './PigItem'

class PigList extends React.Component {



  greasedPigs = () => {
    let greasedPigArray = this.props.hogs.filter((hog) => hog.greased)
    return greasedPigArray.map((hog) => {
      return < PigItem clickMe={this.props.getPig} hog={hog} />
  })
}

  renderPigs = () => {
    return this.props.hogs.map((hog)=> {
      return < PigItem clickMe={this.props.getPig} hog={hog} />
    })
  }
  render () {

    let condition = this.props.clickedGrease ? <div> {this.greasedPigs()} </div> : <div className = "ui grid container"> {this.renderPigs()}</div>
    console.log(condition)
    return(
      <div>
        {condition}
      </div>
    )
    }


}
export default PigList;
