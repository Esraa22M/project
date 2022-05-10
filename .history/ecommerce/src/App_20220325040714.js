import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllCategory from "./components/AllCategory";
import Navbar from "./components/Navbar";
import TechCategory from "./components/TechCategory";
import ClothingCategory from "./components/ClothingCategory";
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
