import React from "react";
import {connect} from "react-redux";
import friends from "../friends";

function PossibleFriends(props){
  console.log(props);
  const friendElement = friends.map(friend => (
    <li key={friend._id}>
    <span onClick ={() => props.history.push(`/posible-freinds/${friend._id}` ) }>
      {friend.name}
    </span>

  </li>
  ));
  return (
    <ul>
      {friendElement}
    </ul>
  )
}

export default connect(state => state)(PossibleFriends)
