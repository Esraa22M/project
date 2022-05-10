import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache } from "@apollo/client";
/*project custom components */
import AllCategory from "./components/AllCategory";
import Navbar from "./components/Navbar";
import TechCategory from "./components/TechCategory";
import ClothingCategory from "./components/ClothingCategory";
import ErrorPage from "./components/ErrorPage";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
/*graphql queries */
import { LOAD_PRODUCTS } from "./graphql/queries";

/* create apollo client to fetch data */
const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      /* check if data is ready to render */
      DataisLoaded: false,
    };
  }
  componentDidUpdate() {
    // localStorage.setItem(
    //   "itemsAddedToCart",
    //   JSON.stringify(this.state.itemsAddedToCart)
    // );
    localStorage.setItem("items", JSON.stringify(this.state.items));
  }
  /*fetch data from backend */
  fetch = () => {
    client
      .query({
        query: LOAD_PRODUCTS,
      })
      .then((result) => {
        console.log(result.data);
        this.setState({
          items: result.data,
          DataisLoaded: true,
        });
      });
  };
  componentDidMount() {
    /*don't fetch data if it's already exist in localstorage */
    let data = JSON.parse(localStorage.getItem("items"));
    if (!data) {
      this.fetch();
    } else {
      this.setState({ items: data, DataisLoaded: true });
    }
  }
  render() {
    let {
      DataisLoaded,
      items,
      productDetailsObject,
      productSelected,
      itemsAddedToCart,
      isCartIconClickToPopUpProduct,
      isCartClicked,
      selectedCurrencyIndex,
      categoryId,
      productId,
    } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Loading.... </h1>
        </div>
      );
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<AllCategory products={items.categories[0].products} />}
          ></Route>
          <Route path="/clothes" element={<ClothingCategory products={items.categories[1].products} />}></Route>
          <Route path="/tech" element={<TechCategory  products={items.categories[2].products} />}></Route>
          <Route path="/details/:id" element={<ProductDetails />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    );
  }
}

// #endregion

export default App;
