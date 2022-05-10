import styled from "styled-components";
import { Link } from "react-router-dom";
export let Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  padding: 0;
  height: 5rem;
  margin: 0 6.313rem;
`;

export const NavMenu = styled.div`
  & > * {
    margin-right: 20px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1.75rem;
  padding-bottom: 2rem;
  .active {
    border-bottom: 2px solid var(--color-main-green);
  }
`;
export const NavLink = styled(Link)`
  color: var(--color-black);
  text-decoration: none;
  display: flex;
  font-weight: 600;
  line-height: 1.2rem;
  font-size:var(--fs-16);
  text-align: center;
  cursor: pointer;
`;
export const Center = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  .circle,
  .upArrow {
    position: absolute;
  }
  .bag {
    width: 1.949rem;
    height: 1.789rem;
  }
  .upArrow {
    top: 0.507rem;
    right: 0.429rem;
  }
  .circle {
    top: 0.687rem;
    right: 0.571rem;
    
  }
`;
export const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;`

  

export let ShoppingCartIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width:1.25rem;
  margin-left: 1.375rem;
  .circle {
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

  }
  
`;


