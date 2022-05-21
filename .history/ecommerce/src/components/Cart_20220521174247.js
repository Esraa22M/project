import React from "react";
import { Container } from "../styles/Category.style";
import CartSlider from "./CartSlider";
import {
  CartTitle,
  ProductContainer,
  ItemContainer,
  CartItemBrand,
  CartItemName,
  CartItemPrice,
  Counter,
} from "../styles/Cart.style";
import { AddToCartButton } from "../styles/Details.style";
import trashIcon from "../images/trash.svg";

import { ButtonDefault } from "../styles/Details.style";
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.props.getTotal();
    this.props.getTax();

    this.state = {};
  }
  componentDidUpdate(prevProps) {
    if (
      JSON.stringify(this.props.itemsAddedToCart) !==
        JSON.stringify(prevProps.itemsAddedToCart) &&
      this.props.itemsAddedToCart.length
    ) {
      this.props.getTotal();
      this.props.getTax();
      
    }
  }
  componentWillUnmount(){
    this.props.getTotal();

  }
  render() {
    let { itemsAddedToCart ,Tax} = this.props;
    return (
      <Container>
        <CartTitle>CART</CartTitle>
        <hr />
        {itemsAddedToCart.map((item, index) => {
          return (
            <div key={index}>
              <ProductContainer key={index} className="flex flex-space-between">
                <div className="column flex-column ">
                    <h2 className="title"> {item.brand}</h2>
                    <p className="name">{item.name}</p>
                    <CartItemPrice>
                      {item.prices[0].currency.symbol}
                      {item.prices[0].amount}
                    </CartItemPrice>
                    <div>
                      {item.selectedattributes.map((item, index) => {
                        return item.type !== "swatch" ? (
                          <ButtonDefault key={index}>
                            {item.Itemid}
                          </ButtonDefault>
                        ) : (
                          <ButtonDefault
                            key={index}
                            style={{
                              background: item.value,
                              borderColor: item.value,
                            }}
                          >
                            {}
                          </ButtonDefault>
                        );
                      })}
                    </div>
                </div>
                <div className="column flex">
                    <Counter>
                      <div
                        className="square"
                        onClick={() => this.props.onIncrement(item)}
                      >
                        <div className="counter-sign"> +</div>
                      </div>
                      <div className="count-value">{item.counter}</div>
                      <div
                        className="square"
                        onClick={() => this.props.onDecrement(item)}
                      >
                        <div className="counter-sign">-</div>
                      </div>
                    </Counter>
                    <CartSlider images={item.gallery} />
                    <div
                      className="trash"
                      onClick={() => this.props.onRemove(item)}
                    >
                      <img src={trashIcon} alt="trash" />
                    </div>
                    <div className="trash">
                      <AddToCartButton
                        to={`/details/${item.id}${item.categoryId}`}
                      >
                        Go To Details
                      </AddToCartButton>
                    </div>
                </div>
              </ProductContainer>
              <hr />
            </div>
          );
        })}
        <div>
          {itemsAddedToCart.length ? (
           <div> 
             <p>Tax 21%:{
                itemsAddedToCart[0].prices[this.props.selectedCurrencyIndex]
                  .currency.symbol
              }{Tax}</p>
             <p className="total text-uppercase">
              total:{" "}
              {
                itemsAddedToCart[0].prices[this.props.selectedCurrencyIndex]
                  .currency.symbol
              }
              {this.props.total}
            </p></div>
          ) : (
            <></>
          )}
        </div>
      </Container>
    );
  }
}
export default Cart;
