import React from "react";
import {
  ProductDetailsContainer,
  Column,
  ButtonDefault,
  AddToCartButton,
} from "../styles/Details.style";
let idPlusCategoryIndex;
let id;
class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    var url = window.location.href;
    idPlusCategoryIndex = url.substring(url.lastIndexOf("/") + 1);
    id = idPlusCategoryIndex.slice(0, -1);
    this.props.getProductDetailsObject(
      id,
      idPlusCategoryIndex.charAt(idPlusCategoryIndex.length - 1)
    );
    this.state = {
      imageIndex: 0,
      attributes: [],
      isAllAttributesSelected: false,
      activeButtonIndex: -1,
      activeButtonSwatchIndex: -1,
      AttributeIndex: [false],
    };
  }
  /* change product image on image click */
  handleImageClick = (index) => {
    this.setState({
      imageIndex: index,
    });
  };
  getObjIndex = (arr, id) => {
    let index = arr.findIndex((object) => {
      return object.id === id;
    });
    return index;
  };
  getSelectedProductSelectedAttributes = (obj , e) => {
    let attributesArray = [...this.state.attributes];
    let index = this.getObjIndex(attributesArray, obj.id);
    if (index > -1) {
      attributesArray[index] = obj;
    } else {
      attributesArray.push(obj);
    }
    if (obj.type !== "swatch") {
      this.setState({ activeButtonIndex: obj.index });
      this.setState({ AttributeIndex: obj.topIndex });
    } else {
      this.setState({ activeButtonSwatchIndex: obj.index });
      this.setState({ AttributeIndex: obj.topIndex });
    }

    this.setState({ attributes: attributesArray });
  };
  checkIfAllAttributesSelected = (attributes) => {
    let getAllAttributes = this.state.attributes;
    return attributes.length === getAllAttributes.length;
    
  };
  render() {
    let i =-1;
    let { product, selectedCurrencyIndex } = this.props;
    if (Object.keys(product).length === 0)
      return (
        <div>
          <h1> Loading.... </h1>{" "}
        </div>
      );
    return (
      <>
        <ProductDetailsContainer>
          <Column>
            {product.gallery.map((item, index) => {
              return (
                <div key={index}>
                  <img
                    className="column1-img"
                    src={item}
                    onClick={() => this.handleImageClick(index)}
                  />
                </div>
              );
            })}
          </Column>
          <Column>
            <div>
              <img
                className="column-2-img"
                src={product.gallery[this.state.imageIndex]}
              />
            </div>
          </Column>
          <Column>
            <div>
              <h2 className="product-brand">{product.brand}</h2>
              <p className="product-name">{product.name}</p>
            </div>
            <div className="attributes-container">
              {product.attributes.map((item, index) => {
                let getId = item.id;
                let getTopIndex = index;
                return [
                  <h2 key={index} className="attribute">
                    {item.name + ":"}
                  </h2>,
                  item.type !== "swatch"
                    ? item.items.map((item, index) => {
                        return (
                          <ButtonDefault
                          
                          aria-test={++i}

                            key={item.id}
                            className={
                              this.state.activeButtonIndex === index &&
                              this.state.AttributeIndex === getTopIndex
                                ? "activeButton"
                                : ""
                            }
                            onClick={(e) =>
                              this.getSelectedProductSelectedAttributes({
                                id: getId,
                                value: item.value,
                                index: index,
                                topIndex: getTopIndex,
                              },e)
                            }
                          >
                            {item.value}
                          </ButtonDefault>
                        );
                      })
                    : item.items.map((item, index) => {
                        return (
                          <ButtonDefault
                            key={index}
                            className={
                              this.state.activeButtonSwatchIndex === index &&
                              this.state.AttributeIndex === getTopIndex
                                ? "activeSwatchButton"
                                : ""
                            }
                            style={{
                              background: item.value,
                              borderColor: item.value,
                            }}
                            onClick={(e) =>
                              this.getSelectedProductSelectedAttributes({
                                id: getId,
                                value: item.value,
                                index: index,
                                topIndex: getTopIndex,
                              },e)
                            }
                          >
                            {}
                          </ButtonDefault>
                        );
                      }),
                ];
              })}
            </div>
            <div>
              <h2 className="product-price">PRICE:</h2>
              <h2 className="product-price-value">
                {product.prices[0].currency.symbol}
                {product.prices[0].amount}
              </h2>
            </div>
            <div>
              {product.inCart ? (
                <AddToCartButton to={"/cart"} product={product}>
                  GO TO CART
                </AddToCartButton>
              ) : (
                <AddToCartButton
                  to={
                    this.checkIfAllAttributesSelected(product.attributes)
                      ? "/cart"
                      : `/details/${idPlusCategoryIndex}`
                  }
                  product={product}
                  onClick={
                    this.checkIfAllAttributesSelected(product.attributes)
                      ? () =>
                          this.props.getItemsAddedToCart(
                            id,
                            idPlusCategoryIndex.charAt(
                              idPlusCategoryIndex.length - 1
                            ),

                            this.state.attributes
                          )
                      : () => {}
                  }
                >
                  ADD TO CART
                </AddToCartButton>
              )}
              {this.checkIfAllAttributesSelected(product.attributes) ? (
                <></>
              ) : (
                <p>Select all options please</p>
              )}
            </div>
            <div
              className="product-description"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </Column>
        </ProductDetailsContainer>
      </>
    );
  }
}
export default ProductDetails;
