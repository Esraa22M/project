import styled from "styled-components";
import {Link} from "react-router-dom";

export let ProductItemContainer = styled.div`
margin-bottom:6.438rem;
padding:1rem;
background-color:red;
&:hover{
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);

}

.card-icon{
  position:absolute;
  width:3.25rem;
  display:none;

  height:3.25rem;
  background-color:var(--clr-primary);
  z-index:20;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  right:1.938rem;
  bottom:4.5rem;
  cursor: pointer;
  border-radius:50%;
  .cart-leg{
    position:absolute;
    bottom:0.875rem ;
  } 
  .cart-leg:last-of-type{
    right:1.034rem;
  }
  
}
&:hover .card-icon{
  display:flex;
}
  display: flex;
  position: relative;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 24.125rem;
  height:26.25rem;
  align-items:flex-start;
  justify-content: space-between;
  z-index:4;
  img {
    width:100%;
    height: 20.625rem;
    display: inline-block;
  }
  .picture{
    display:flex;
    align-items:center;
    flex-grow:1;
    justify-content:center;
  }
  p{
    font-weight:300;
    margin-top: 1.5rem;
  }
  h2{
    font-weight:500;
  }
  
 p ,h2{
   padding-left:1rem;
  padding-right:1rem; 
  line-height:1.8rem;
  color:var(--clr-black);

  font-size:var(--fs-18);

 }
  .div-1,
  .div-2 {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .div-2{
    display:flex;
    align-items:center;
    justify-content:center;
    opacity:0.5;
    font-size:var(--fs-24);
    font-weight:400;
    text-transform:uppercase;
    line-height:2.4rem;
    background-color:var(--clr-white);
    color:var( --clr-light-grey);
  } 
`;
export let LinkContainer = styled(Link)`
 text-decoration:none;
 color:var(--color-black);
 cursor: pointer;
`