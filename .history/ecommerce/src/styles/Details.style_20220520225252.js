import styled from "styled-components";
import { Link } from "react-router-dom";
export let ProductDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 3fr;
  margin-top:5rem;
  column-gap:2.5rem;
.column-3{
  margin-left:4.167vw;
}
.product-brand,  .product-name{
font-size:1.875rem;
line-height:1.688rem;
}
.product-brand{
font-weight:600;

}
cursor: pointer;
.product-name{
margin-top:1rem;
margin-bottom:1.188rem;
}
.attributes-container .attribute-header , .product-price{
  font-family:var( --ff-roboto);
  font-size:1.125rem;
}
.attributes-container .attribute-header{
font-weight:700;
margin-bottom:0.5rem;
}
.column1-img{
max-width:4.938rem;
height:5rem;
margin-bottom:2.5rem;
}
.column-2-img{
max-width:42.361vw;
width:42.361vw;

}
.product-price{
  margin-top:0.875rem;
}
.product-price-value{
margin-top:0.625rem;
font-weight:700;
font-size:1.5rem;
width:fit-content;
height:2.875rem;
}
.product-description{
font-family:var( --ff-roboto);
width:20.278vw;
line-height:1.599rem;
margin-top:2.5rem;
}
`;

  
export let ButtonDefault = styled.button`
  border: 1px solid var(--clr-black);
  background-color: var(--clr-white);
  color: var(--clr-black);
  letter-spacing: 0.05em;
  font-family:var(--ff-source);
  width:4.375vw;
  height:2.813rem;
  margin-bottom:1.5rem;

  cursor: pointer;
  margin-right:0.833vw;
`;
export let ButtonDefaultSwatch = styled.button`
  cursor: pointer;
  width:2rem;
  height:2.222vw;
  margin-right:0.556vw;
  outline:none;
  border:none;
  box-shadow: 0 0 5px grey;

`

export let AddToCartButton = styled(Link)`
 display:block;
 padding: 1rem 0;
 max-width:18.25rem;
 background-color:var(--clr-primary);
 color:var(--clr-white);
 text-decoration:none;
 font-weight:600;
 line-height:1.2rem;
 text-align:center;
 margin-top:1.25rem;
`;
