import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Router>
        <Navbar
          
        />
       
        <Routes>
          <Route
            path="/"
            element={
              <AllCategory
                
              />
            }
          >
          </Route>
          <Route
            path="/clothes"
            element={
              <ClothingCategory
               
              />
            }
          ></Route>
          <Route
            path="/tech"
            element={
              <TechCategory
               
              />
            }
          ></Route>
          <Route
            path="/details/:id"
            element={
              <ProductDetails
                
              />
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <Cart
                
              />
            }
          ></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    );
  }
}

// #endregion

export default App;
