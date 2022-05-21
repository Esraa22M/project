import styled from "styled-components";
export let CartTitle = styled.h1`
  margin-top: 5rem;
  font-weight:700;
  margin-bottom:3.688rem;
  font-size: 2rem;
  line-height: 2.5rem;
`;
export let ProductContainer = styled.section`
  .column{
    background-color:red;
  }
  padding:1.5rem 0;
  .title , .name{
    font-size:1.875rem;
    line-height:1.688rem;
    min-width:20.278vw;
    background-color:blue;
    text-align:left;
  }
  .title{
    font-weight:600;
  }
  .name{
    margin-top:1rem;
  }
`;
export let ItemContainer = styled.div`
  display: flex;
  flex-direction: ${props=>props.direction==="row"?"row":"column"};
  align-items: ${props => props.position ==="left" ? "flex-start" : "flex-end"};
 justify-content:center;
  .trash img{
    width:11vw;
   height:7vw;
   }
 .trash{
   width:fit-content;
   height:18vw;
   cursor: pointer;
   display:flex;
   justify-content:center;
   align-items:center;
 }
`;
export let CartItemPrice = styled.div`
font-weight:700;
font-size:1.5rem;
line-height:2rem;
`
export let Counter = styled.div`
display:flex;
flex-direction:column;
 justify-content:center;
 .square{
   height:2.813rem;
   width:2.813rem;
   display:flex;
   align-items:center;
   justify-content:center;
   border:1px solid black;
   cursor: pointer;
   
 }
 .count-value{
   display:flex;
   justify-content:center;
   align-items:center;
   padding:3vw 0;
 }
`
export let CartSliderContainer = styled.div`
 width:19.58vw;
 height:20vw;
 display:flex;
 justify-content:center;
 align-items:center;
 margin-left:1vw;
 position:relative;
 .next , .prev{
   position:absolute;
   display:flex;
   justify-content:center;
   align-items:center;
   width:10%;
   height:100%;
   
   cursor: pointer; }
 .next{
   left:25%;
 }
 .prev{
   right:25%;
 }
`

