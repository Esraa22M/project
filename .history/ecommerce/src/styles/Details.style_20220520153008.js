import styled from "styled-components";
import { Link } from "react-router-dom";
export let ProductDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 4fr;
  margin-top:5rem;
  column-gap:2.5rem;
.column-3{
  margin-left:4.167vw;
  background-color:red;
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
font-weight:400;
margin-top:1rem;
margin-bottom:1.188rem;
}
.attributes-container .attribute-header{
font-family:var( --ff-roboto);
font-weight:700;
font-size:1.125rem;
margin-top:1.5rem;
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
font-family:var( --ff-roboto);
font-size:var(--fs-18);
line-height:1.125rem;
}
.product-price-value{
margin-top:0.625rem;
font-weight:700;
font-size:var(--fs-24);
line-height:1.125rem;
}
.product-description{
font-family:var( --ff-roboto);
font-weight:400;
line-height:1.599rem;
margin-top:2.5rem;
}
`;

  
export let ButtonDefault = styled.button`
  border: 1px solid var(--clr-black);
  background-color: var(--clr-white);
  color: black;
  letter-spacing: 0.05em;
  margin-right:0.75rem;
  margin-top:0.5rem;
  margin-bottom:2.688rem;
  font-family: 'Source Sans Pro', sans-serif;
  width:3.938rem;
  padding-top:0.813rem;
  padding-bottom:0.875rem;
  line-height:1.125rem;
  cursor: pointer;
  color: var(--clr-black);
 
`;

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
