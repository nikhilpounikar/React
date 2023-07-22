import './index.css';
import { Component } from "react";

export default class MovieCard extends Component {
  render() {
    return (
      <>
        <div className="main">
          <div className="movie-card">
            <div className="left">
              <img src="	https://cdn.marvel.com/content/1x/themarvels_lob_crd_04.jpg" alt=""></img>
            </div>
            <div className="right">
              <div className="title">Avengers Infinity War</div>
              <div className="plot">The best movie has ever created by marvel studies Starring Tony Stark</div>
              <div className="price">$ 19.99</div>
              <div className="footer">
                <div className="rating">9.8</div>
                <div className="star-dis">
                    //decrease image goes here
                    // Star images goes here
                    // increase images goes here
                    //count goes here
                    <span>0</span>
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
