import styled from "styled-components";
export let Container = styled.section`
 margin:auto 7.32vw;
`;
export let Title = styled.h2`
  font-size: 2.625rem;
  line-height: 4.2rem;
  font-weight:400;
  margin-top:5rem;
  /* margin-bottom:6.438rem; */
`;
export let ProductList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2.5rem;
`;
export let OverLayDiv = styled.div`
  position: absolute;
  width: 100vw;
  height: 350vh;
  top:5rem;
  bottom:0;
  background: rgba(57, 55, 72, 0.22);
  display: ${props => props.clicked ==="none" ? "none" : "flex"};
  z-index: 10;
 /* .productItem{
    background-color:var(--clr-white);
    width:fit-content;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin-top:20%;
    height:fit-content;
    padding:2vw;

  }
  
  .picture img{
    width:20vw;
    height:30vw;
  }*/
`;
export let MiniCartContainer = styled.div`
  position: absolute;
  background-color: #5ece7b;

  top:5rem;
  z-index: 12;
  width: 45.14vw;
  right: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  display: ${props => props.clicked ==="none" ? "none" : "flex"};
`;
