import React, { Component } from 'react';

class ToyCard extends Component {

  state={
    likes: this.props.toyData.likes
  }

  handleLikes = () => {
    // let newLikes = this.state.likes + 1
    this.props.getLikes(this.props.toyData.id)
  }

  handleDelete = () => {
    this.props.deleteToy(this.props.toyData.id)
  }

  render() {

    let {name, image, likes} = this.props.toyData

    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt="" className="toy-avatar" />
        <p>{likes} Likes </p>
        <button onClick={this.handleLikes} className="like-btn">Like {'<3'}</button>
        <button onClick={this.handleDelete}className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
