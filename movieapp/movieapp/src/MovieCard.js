import "./index.css";
import { Component } from "react";

export default class MovieCard extends Component {
  constructor() {
    super();
    this.state = {
      title: "Avengers",
      plot: "The best movie has ever been created by marvel studies Starring Tony Stark",
      price: 19.99,
      ratings: 9.8,
      stars: 0,
      fav: false,
      cartState: false,
    };
  }

  decreaseCount = () => {
    if (this.state.stars === 0) return;
    //set state method update field and re-renderes component
    // setState() form1
    this.setState({
      stars: this.state.stars + 0.5,
    });
  };
  // direct calling function in onClick has a limitation it does not recognize state variable because it works on reference
  // which may be lost hence binding is required but the arrow function implicitly binds the function than writing this.increaseCount,bind(this)
  increaseCount = () => {
    if (this.state.stars === 5) return;
    //set state method update field and re-rendered component
    // setState() form2
    this.setState((prevState) => ({
      stars: prevState.stars + 0.5,
    }));
  };

  handleAddCart = () => {
    this.setState({
      cartState: !this.state.cartState,
    });
  };

  handleFavorite = () => {
    this.setState({
      fav: !this.state.fav,
    });
  };

  render() {
    const { title, plot, price, ratings, stars, fav, cartState } = this.state;
    return (
      <>
        <div className="main">
          <div className="movie-card">
            <div className="left">
              <img
                src="	https://cdn.marvel.com/content/1x/themarvels_lob_crd_04.jpg"
                alt=""
              ></img>
            </div>
            <div className="right">
              <div className="title">{title}</div>
              <div className="plot">{plot}</div>
              <div className="price">$ {price}</div>
              <div className="footer">
                <div className="rating">{ratings}</div>
                <div className="star-dis">
                  {/* //decrease image goes here */}
                  <img
                    onClick={this.decreaseCount}
                    alt="decrease"
                    src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                    className="str-btn"
                  />
                   {/* Star images goes here */}
                  <img
                    alt="stars"
                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                    className="stars"
                  />
                  {/* // increase images goes here */}
                  <img
                    alt="increase"
                    onClick={this.increaseCount}
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png"
                    className="str-btn"
                  />
                  {/* //count goes here */}
                  <span className="starCount">{stars}</span>
                </div>
                <button
                  className={fav ? "unfavourite-btn" : "favourite-btn"}
                  onClick={this.handleFavorite}
                >
                  {fav ? "UnLike" : "Like"}
                </button>
                <button
                  className={cartState ? "unfavourite-btn" : "cart-btn"}
                  onClick={this.handleAddCart}
                >
                  {cartState ? "Remove From Cart" : "Add To Cart"}
                </button>
                {/* <button className="cart-btn">Add to cart</button> */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
