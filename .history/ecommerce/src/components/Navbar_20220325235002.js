import React from "react";
import circle from "../images/halfCircle.svg";
import cart from "../images/cartIcon.svg";
import bag from "../images/logo.svg";
import cartLeg from "../images/cartLeg.svg";
import arrow from "../images/arrow.svg";
import {
    Nav,
    NavLink,
    NavMenu,
    Right,
    Center,
    Header,
    ShoppingCartIcon,
  } from "../styles/Navbar.style";
class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Header>
        <Nav>
          <NavMenu>
            <NavLink
              to="/"
            //   className={links[0] === true ? "active" : ""}
            //   onClick={() => this.handleOnLinkClick(0)}
            >
              ALL
            </NavLink>
            <NavLink
              to="/clothes"
            //   className={links[1] === true ? "active" : ""}
              onClick={() => this.handleOnLinkClick(1)}
            >
              Clothing
            </NavLink>
            <NavLink
            //   className={links[2] === true ? "active" : ""}
              to="/tech"
              onClick={() => this.handleOnLinkClick(2)}
            >
              Tech
            </NavLink>
          </NavMenu>
          <Center>
           <img
              src={bag}
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
      </Header>
    );
  }
}
export default Navbar;
