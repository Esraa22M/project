import React from "react";

import {
    Nav,
    NavLink,
    NavMenu,
    Right,
    Center,
    ShoppingCartIcon,
  } from "../styles/Navbar.style";
class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Nav>
          <NavMenu>
            <NavLink
              to="/"
              className={links[0] === true ? "active" : ""}
              onClick={() => this.handleOnLinkClick(0)}
            >
              ALL
            </NavLink>
            <NavLink
              to="/clothes"
              className={links[1] === true ? "active" : ""}
              onClick={() => this.handleOnLinkClick(1)}
            >
              Clothing
            </NavLink>
            <NavLink
              className={links[2] === true ? "active" : ""}
              to="/tech"
              onClick={() => this.handleOnLinkClick(2)}
            >
              Tech
            </NavLink>
          </NavMenu>
          <Center>
            <img
              src={bag}
              width="31.18px"
              height="28.62px"
              className="bag"
              alt="shopping-bag"
            />
            <img src={arrow} alt="up-arrow" className="upArrow" />
            <img src={circle} alt="circle" className="circle" />
          </Center>
          <Right>
            {/* <CustomDropDownMenu
              handleCurrencyIndexSelection={
                this.props.handleCurrencyIndexSelection
              }
            /> */}
            <ShoppingCartIcon>
              <img src={cart} alt="cart" className="cart-icon" />
              <img src={cartLeg} alt="cart" className="cart-leg-1 " />
              <img src={cartLeg} alt="cart" className="cart-leg-2 " />
              {/* {this.props.cartItemsCount > 0 ? (
                <span className="circle">{this.props.cartItemsCount}</span>
              ) : (
                ""
              )} */}
            </ShoppingCartIcon>
          </Right>
        </Nav>
      </>
    );
  }
}
export default Navbar;
