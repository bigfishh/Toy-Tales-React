import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


import data from './data'


class App extends React.Component{

  state={
    toyData: data
  }

  addToyFunction = (newToy) => {
    // console.log("from app", newToy)
    // let newToyWithLikes = newToy
    // newToyWithLikes.likes = 0
    // console.log(newToyWithLikes)

    let newToyWithLikes = {id: newToy.name, ...newToy, likes: 0}
    // console.log(newToyWithLikes)

    let newToyArr = [...this.state.toyData, newToyWithLikes]
    this.setState({
      toyData: newToyArr
    })
  }

  updateLikes = (id) => {
    let updatedArray = this.state.toyData.map((toy) => {
      if(toy.id===id){
        let newLikes = toy.likes + 1
        let newObj = {...toy, likes: newLikes}
        return newObj
      } else {
        return toy
      }
    })
    this.setState({
      toyData: updatedArray
    })
  }

  deleteToy = (id) => {
    let updatedArray = this.state.toyData.filter((toy) => {
      return toy.id !== id
    })
    this.setState({
      toyData: updatedArray
    })
  }


  render(){
    return (
      <>
        <Header/>
        <ToyForm addToy={this.addToyFunction}/>
        <ToyContainer toyData={this.state.toyData} getLikes={this.updateLikes} deleteToy={this.deleteToy} />
      </>
    );
  }

}

export default App;
