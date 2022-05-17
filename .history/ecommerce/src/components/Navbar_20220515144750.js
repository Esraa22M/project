import React from "react";
import circle from "../images/halfCircle.svg";
import cart from "../images/cartIcon.svg";
import bag from "../images/logo.svg";
import cartLeg from "../images/cartLeg.svg";
import arrow from "../images/arrow.svg";
import CustomDropDownMenu from "./CustomDropDownMenu";
import {
    Nav,
    NavLink,
    NavMenu,
    Right,
    Center,
    Header,
    ShoppingCartIcon,
  } from "../styles/Navbar.style";
  import {Container} from "../styles/Category.style";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.getInitalRouteValue();
    this.state = {
      
      links: this.getInitalRouteValue(),
  
    };
  }
  getInitalRouteValue=()=>{
    let url= window.location.pathname;
    let index = 0;
    if(url==='/clothes'){
      index=1;
    }else if(url ==='/tech'){
      index=2;
    }else{
      index=0;
    }
    let tempLinks = [false];
    tempLinks[index] = true;
    return tempLinks;
  }
  handleOnLinkClick = (index) => {
    let tempLinks = [...this.state.links];
    for (var i = 0; i < tempLinks.length; i++) {
      tempLinks[i] = false;
    }

    tempLinks[index] = true;
    this.setState({ links: tempLinks });
  };
  render() {
    let links = this.state.links;
     
    return (
      <Header>
        <Nav>
          <NavMenu>
            <NavLink

              to="/"
              className={links[0] === true ? "active" : ""}
               onClick={() => {this.handleOnLinkClick(0)
                this.props.onCartClick(false)

              }}
            >
              ALL
            </NavLink>
            <NavLink
              to="/clothes"

              className={links[1] === true ? "active" : ""}
              onClick={() => {this.handleOnLinkClick(1)
                this.props.onCartClick(false)

              }}
            >
              Clothing
            </NavLink>
            <NavLink
              className={links[2] === true ? "active" : ""}
              to="/tech"
              onClick={() => {this.handleOnLinkClick(2)
                this.props.onCartClick(false)

              }}
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
             <CustomDropDownMenu
              handleCurrencyIndexSelection={
                this.props.handleCurrencyIndexSelection
              }
            /> 
            <ShoppingCartIcon 
            onClick={()=>this.props.onCartClick("esraa")}
            >
              <img src={cart} alt="cart" className="cart-icon" />
              <img src={cartLeg} alt="cart" className="cart-leg-1 " />
              <img src={cartLeg} alt="cart" className="cart-leg-2 " />

              {/* <img src={cartLeg} alt="cart" className="cart-leg-1 " />
              <img src={cartLeg} alt="cart" className="cart-leg-2 " />
              {/* {this.props.cartItemsCount > 0 ? ( *
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
