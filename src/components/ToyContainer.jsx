import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {

  // console.log(props)

  return(
    <div id="toy-collection">
      {props.toyData.map((toyObj) => <ToyCard toyData={toyObj} getLikes={props.getLikes} deleteToy={props.deleteToy}/>)}
    </div>
  );
}

export default ToyContainer;
