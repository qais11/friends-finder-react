import React, {Component} from "react";
import {connect} from "react-redux"
import friends from "../friends"


class friendDetails extends Component {
//     constructor(){
//       super();
//
//       this.state = { activeFriend: {} };
//     }
//     componentDidMount(){
//       this.setState({
//           activeFriend: friends.find(friend => friend._id === this.props.match.params.friendId)
//       })
//   }


  render() {

     return (
       <div>
         <h3>{ this.props.activeFriend.name }</h3>
         <p>{ this.props.activeFriend.age }</p>
         <img src={ this.props.activeFriend.picture } alt=""/>
       </div>
     )
  }
}

function mapStateToProps(state , ownProps){
  return {
    activeFriend: state.friends.find(friend => friend._id === ownProps.match.params.friendId)
  }
}
export default connect(mapStateToProps)(friendDetails);
