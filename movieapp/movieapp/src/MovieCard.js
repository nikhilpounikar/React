import './index.css';
import { Component } from "react";

export default class MovieCard extends Component {

  constructor(){
      super();
      this.state = {
        title:"Avengers",
        plot:"The best movie has ever created by marvel studies Starring Tony Stark",
        price:19.99,
        ratings:9.8,
        stars:0,
      }
  }
  
  render() {
    const {title,plot, price,ratings,stars} =  this.state;
    return (
      <>
        <div className="main">
          <div className="movie-card">
            <div className="left">
              <img src="	https://cdn.marvel.com/content/1x/themarvels_lob_crd_04.jpg" alt=""></img>
            </div>
            <div className="right">
              <div className="title">{title}</div>
              <div className="plot">{plot}</div>
              <div className="price">$ {price}</div>
              <div className="footer">
                <div className="rating">{ratings}</div>
                <div className="star-dis">
                    //decrease image goes here
                    <img alt="decrease" src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" className="str-btn" />
                    // Star images goes here
                    <img alt="stars" src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" className="stars" />
                    // increase images goes here
                    <img alt="increase" src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png" className="str-btn" />
                    //count goes here
                    <span className="starCount">{stars}</span>
                </div>
                <button className="favourite-btn">Like</button>
                <button className="cart-btn">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
