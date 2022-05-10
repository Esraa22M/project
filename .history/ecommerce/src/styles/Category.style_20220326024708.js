import styled from "styled-components";
export let Container = styled.div`
 padding-left:6.25rem;
 padding-right:15.125rem;
`;
export let Title = styled.h2`
  font-weight:400;
  font-size: var(--fs-42);
  line-height: 4.2rem;
  padding-left:6.313rem;
  margin-top:5rem;
`;
export let ProductList = styled.div`
  display: grid;
  padding-left:6.25rem;
  padding-right:6.375rem;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2.5rem;
  /* Media Query for Tablets Ipads portrait mode */
  /* @media (min-width: 400px) and (max-width: 1024px) {
    grid-template-columns: 1fr;
  } */
`;
export let OverLayDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top:5rem;
  background: rgba(57, 55, 72, 0.22);
  display: ${props => props.clicked ==="none" ? "none" : "flex"};
  justify-content:center;
  z-index: 10;
  .productItem{
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
  }
`;
export let MiniCart = styled.div`
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
