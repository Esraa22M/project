import React from "react";
import { Container } from "../styles/Category.style";
import CartSlider from "./CartSlider";
import {
  CartTitle,
  ProductContainer,
  Column,
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

    this.state = {};
  }

  render() {
    let { itemsAddedToCart } = this.props;
    return (
      <Container>
        <CartTitle>CART</CartTitle>
        <hr />
        {itemsAddedToCart.map((item, index) => {
          return (
            <>
              {" "}
              <ProductContainer key={index}>
                <Column>
                  <ItemContainer position="left">
                    <CartItemBrand> {item.brand}</CartItemBrand>
                    <CartItemName>{item.name}</CartItemName>
                    <CartItemPrice>
                      {item.prices[0].currency.symbol}
                      {item.prices[0].amount}
                    </CartItemPrice>
                    <div>
                      {item.selectedAttributes.map((item, index) => {
                        return item.type !== "swatch" ? (
                          <ButtonDefault key={index}>
                            {item.value}
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
                  </ItemContainer>
                </Column>
                <Column>
                  <ItemContainer direction="row">
                    <Counter>
                      <div
                        className="square"
                        onClick={() => this.props.onIncrement(item.id)}
                      >
                       <div className="counter-sign"> +</div>
                      </div>
                      <div className="count-value">{item.counter}</div>
                      <div
                        className="square"
                        onClick={() => this.props.onDecrement(item.id)}
                      >
                        <div className="counter-sign">-</div>
                      </div>
                    </Counter>
                    <CartSlider images={item.gallery} />
                    <div
                      className="trash"
                      onClick={() => this.props.onRemove(item.id)}
                    >
                      {" "}
                      <img src={trashIcon} alt="trash" />
                    </div>
                  <div className="trash">
                    <AddToCartButton to={`/details/${item.id}${item.categoryId}`}>
                      Go To Details
                    </AddToCartButton></div>
                  </ItemContainer>
                </Column>
              </ProductContainer>
              <hr />
            </>
          );
        })}
      </Container>
    );
  }
}
export default Cart;
