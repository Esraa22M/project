import React from "react";
import ProductDetails from "./components/ProductDetails";
import { LOAD_PRODUCTS } from "./graphql/queries";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllCategory from "./components/AllCategory";
import ClothingCategory from "./components/ClothingCategory";
import TechCategory from "./components/TechCategory";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import ErrorPage from "./components/ErrorPage";
import { ApolloClient, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      DataisLoaded: false,
      productDetailsObject: {},
      productSelected: {},
      itemsAddedToCart: JSON.parse(localStorage.getItem("itemsAddedToCart"))
        ? JSON.parse(localStorage.getItem("itemsAddedToCart"))
        : [],
      isCartClicked: false,
      selectedCurrencyIndex: 0,
      productId: "",
      categoryId: "",
      isCartIconClickToPopUpProduct:false
    };
  }
  handleCartIconClickToPopUpProduct=()=>{
    this.setState({isCartIconClickToPopUpProduct:true});
  }
  handleProductIdAndCategoryId = (id, categoryId) => {
    this.setState({ productId: id, categoryId });
  };
  handleCartClicked = () => {
    let isClicked = this.state.isCartClicked;
    this.setState({ isCartClicked:!isClicked });
  };
  componentDidUpdate() {
    localStorage.setItem(
      "itemsAddedToCart",
      JSON.stringify(this.state.itemsAddedToCart)
    );
    localStorage.setItem("items", JSON.stringify(this.state.items));
  }
  getProductByIdAndCategoryId = (id, categoryId) => {
    let products = [...this.state.items.categories[categoryId].products];
    let product = products.find((x) => x.id === id);
    return product;
  };
  getCartProductById = (id) => {
    let products = [...this.state.itemsAddedToCart];
    let product = products.find((x) => x.id === id);
    return product;
  };
  getObjIndex = (arr, id) => {
    let index = arr.findIndex((object) => {
      return object.id === id;
    });
    console.log(index);
    return index;
  };
  /* get clicked product details  */
  handleProductDetails = (id, categoryId) => {
    let product = this.getProductByIdAndCategoryId(id, categoryId);
    // //Check if the product is inCart
    // let productAddedToCart = [...this.state.itemsAddedToCart];
    // let index = this.getObjIndex(productAddedToCart,id);
    // console.log(index)
    // if(index > -1){
    //   product["inCart"]=true;
    // }else{
    //   product["inCart"]=false;

    // }
    // index>-1?product["inCart"]=productAddedToCart[index].inCart:product["inCart"]=false;
    this.setState({ productDetailsObject: product });
    return product;
  };
  /*here we get product's added to cart attributes selected*/
  getItemAddedToCartAttributes = (obj) => {
    let attributes = [];
    attributes.push(obj);
    return attributes;
  };
  /* handle user press add to cart button  get product to be added*/
  handleAddToCart = (id, categoryId) => {
    let product = this.getProductByIdAndCategoryId(id, categoryId);

    let itemSelected = {};
    itemSelected["id"] = product.id;
    itemSelected["brand"] = product.brand;
    itemSelected["name"] = product.name;
    itemSelected["gallery"] = product.gallery;
    itemSelected["prices"] = product.prices;
    itemSelected["categoryId"] = categoryId;
    return itemSelected;
    // this.setState({ productSelected: itemSelected });
  };
  handlePlusCounter = (id) => {
    let product = this.getCartProductById(id);
    product.counter++;
    let index = this.getObjIndex(this.state.itemsAddedToCart, id);
    let cartProducts = [...this.state.itemsAddedToCart];
    cartProducts[index] = product;
    this.setState({ itemsAddedToCart: cartProducts });
  };
  handleMinusCounter = (id) => {
    let product = this.getCartProductById(id);
    if (!product.counter <= 0) {
      product.counter--;
      let index = this.getObjIndex(this.state.itemsAddedToCart, id);
      console.log(index);
      let cartProducts = [...this.state.itemsAddedToCart];
      cartProducts[index] = product;
      this.setState({ itemsAddedToCart: cartProducts });
    }
  };
  /*here we get all the cart products */
  getItemsAddedToCart = (id, categoryId, attributes) => {
    let productAddedToCart = [...this.state.itemsAddedToCart];
    let product = this.handleAddToCart(id, categoryId);
    product["attributes"] = attributes;
    product["counter"] = 1;
    console.log("here");
    let index = this.getObjIndex(productAddedToCart, id);
    console.log(index);
    if (index > -1) {
      product["inCart"] = true;
    } else {
      product["inCart"] = false;

      productAddedToCart.push(product);
    }
    // productAddedToCart.push(product);

    this.setState({ itemsAddedToCart: productAddedToCart });
  };
  /*get selected currency index */
  handleCurrencyIndex = (index) => {
    this.setState({ selectedCurrencyIndex: index });
  };

  /* delete cart item */
  handleRemoveFromCart = (id) => {
    let products = [...this.state.itemsAddedToCart];
    let index = this.getObjIndex(products, id);
    products.splice(index, 1);
    this.setState({ itemsAddedToCart: products });
  };
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
          <h1> Loading.... </h1>{" "}
        </div>
      );

    return (
      <Router>
        <Navbar
          onCartClick={this.handleCartClicked}
          cartItemsCount={itemsAddedToCart.length}
          handleCurrencyIndexSelection={this.handleCurrencyIndex}
        />
        {/* <OverLayDiv clicked={isCartClicked ? "block" : "none"}></OverLayDiv> */}
       {/* { isCartIconClickToPopUpProduct? <ProductItemPopUp
          categoryId={categoryId}
          productId={productId}
          selectedCurrencyIndex={selectedCurrencyIndex}
          isCartIconClickToPopUpProduct={isCartIconClickToPopUpProduct}
          getProductByIdAndCategoryId={this.getProductByIdAndCategoryId}
        />:<></> } */}
        {/* <MiniCart clicked={isCartClicked ? "block" : "none"}>esraa</MiniCart> */}
        <Routes>
          <Route
            path="/"
            element={
              <AllCategory
              handleCartIconClickToPopUpProduct={this.handleCartIconClickToPopUpProduct}
                products={items.categories[0]}
                selectedCurrencyIndex={selectedCurrencyIndex}
                handleProductIdAndCategoryId={this.handleProductIdAndCategoryId}
              />
            }
          >
            {" "}
          </Route>
          <Route
            path="/clothes"
            element={
              <ClothingCategory
              handleCartIconClickToPopUpProduct={this.handleCartIconClickToPopUpProduct}

                products={items.categories[1]}
                selectedCurrencyIndex={selectedCurrencyIndex}
                handleProductIdAndCategoryId={this.handleProductIdAndCategoryId}
              />
            }
          ></Route>
          <Route
            path="/tech"
            element={
              <TechCategory
              handleCartIconClickToPopUpProduct={this.handleCartIconClickToPopUpProduct}

                products={items.categories[2]}
                selectedCurrencyIndex={selectedCurrencyIndex}
                handleProductIdAndCategoryId={this.handleProductIdAndCategoryId}
              />
            }
          ></Route>
          <Route
            path="/details/:id"
            element={
              <ProductDetails
                getProductDetailsObject={this.handleProductDetails}
                product={productDetailsObject}
                getItemsAddedToCart={this.getItemsAddedToCart}
                selectedCurrencyIndex={selectedCurrencyIndex}
                // getProductToBeAddedToCart={this.handleAddToCart}
              />
            }
          ></Route>
          <Route
            path="/cart"
            selectedCurrencyIndex={selectedCurrencyIndex}
            element={
              <Cart
                itemsAddedToCart={itemsAddedToCart}
                onIncrement={this.handlePlusCounter}
                onDecrement={this.handleMinusCounter}
                onRemove={this.handleRemoveFromCart}
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
