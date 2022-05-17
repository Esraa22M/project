import styled from "styled-components";
import { Link } from "react-router-dom";

export let Nav = styled.nav`
  padding: 0;
  height:5rem;
  .bage{
    min-width:1.35vw;
    position:absolute;
    top:1.563rem;
    /* right:6.44vw; */
    left:97.51098096632504vw;
    border-radius:50%;
    min-height:1.35vw;
  }
`;

export let NavLink = styled(Link)`
  color: var(--clr-black);
  padding:0 1.17vw ;
  padding-top:1.75rem;
  padding-bottom:2rem;
  text-decoration: none;
   line-height: 1.2rem;
  text-align: center;
  cursor: pointer;
`;
export let Center = styled.div`
  display: flex;
  height:12.8vh;
  position:relative;
  margin-left:27vw;
  .circle,
  .upArrow ,.logo-part1,.logo-part2{
    position: absolute;
  }
.logo-part1,.logo-part2{
 max-width: 1.949rem;
 width:1.949rem;
}
.logo-part1{
  top:1.838rem;
  z-index:5;
}
.logo-part2{
  top:1.92rem;
  z-index:10;
}  
  .upArrow {
    /* top: 1.5072vh; */
    /* right: 0.429rem; */
    top:2.428rem;
    z-index:30;
    left:1.1rem;

  }
  .circle {
    top:2.607rem;
    max-width: 0.88rem;
    width:0.88rem;
    height:8.99px;
    left:7.96px;
    z-index:25;
  }
 
`;


export let ShoppingCartIcon = styled.div`
  position: relative;
  cursor:pointer;
  width: 1.25rem;
  height: 0.813rem;
  margin-left: 1.375rem;
  .cart-icon {
    width: 100%;
    height: 100%;
  }
  .cart-leg-1,
  .cart-leg-2 {
    position: absolute;
    width: 0.274rem;
    height: 0.262rem;
    display: inline-block;
    top: 100%;
  }
  .cart-leg-2 {
    right: 0.133rem;
  }

`;
