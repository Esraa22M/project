import styled from "styled-components";
import { Link } from "react-router-dom";

export let Nav = styled.nav`
  padding: 0;
  height:5rem;
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
    top:6.2144vh;
    z-index:30;
    left:1.181rem;

  }
  .circle {
    top:6.6736vh;
    max-width: 0.88rem;
    width:0.88rem;
    height:8.99px;
    left:7.96px;
    z-index:25;
  }
 
`;
export let Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export let ShoppingCartIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
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

  /* .circle {
    position: absolute;
    display: flex;
    display:none;
    justify-content: center;
    align-items: center;
    color: var(--color-white);
    background-color: var(--color-black);
    border-radius: 100%;
    bottom: 1.5vw;
    font-weight: 700;
    font-size: 1.5vw;
    line-height: 2.28vw;
    text-align: center;
  }
  .cart-leg-1 , .cart-leg-2{
    position:absolute;
  }
  .cart-leg-1{
    top:1rem;
    right:0.1rem;
  }
  .cart-leg-2{
    top:1rem;

  } */
`;
