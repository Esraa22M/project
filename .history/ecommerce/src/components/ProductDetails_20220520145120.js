import React from "react";
import {
  ProductDetailsContainer,
  ButtonDefault,
  AddToCartButton,
} from "../styles/Details.style";
import { Container } from "../styles/Category.style";

let idPlusCategoryIndex;
let id;
class ProductDetails extends React.Component {
   constructor(props)  {
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
    };
  }
  /* change product image on image click */
  handleImageClick = (index) => {
    this.setState({
      imageIndex: index,
    });
  };

componentDidUpdate(prevProps){
  if(prevProps.product!== this.props.product&& this.props.product.inStock){

  this.props.getDefaultAttributesSelection(this.props.product);
  }

}
  render() {
    let { product, selectedCurrencyIndex } = this.props;
    if (Object.keys(product).length === 0)
      return (
        <div>
          <h1> Loading.... </h1>{" "}
        </div>
      );
    return (
      <Container>
        <ProductDetailsContainer>
          <div className="flex flex-column">
            {product.gallery.map((item, index) => {
              return (
                <div key={index}>
                  <img
                    className="column1-img"
                    src={item}
                    alt="slider-item"
                    onClick={() => this.handleImageClick(index)}
                  />
                </div>
              );
            })}
          </div>
          <div className="flex flex-column ">
            <div>
              <img
                className="column-2-img"
                src={product.gallery[this.state.imageIndex]}
                alt="product-item"
              />
            </div>
          </div>
          <article className="flex flex-column column-3">
            <div>
              <h2 className="product-brand">{product.brand}</h2>
              <p className="product-name">{product.name}</p>
            </div>
            <div className="attributes-container">
              {product.attributes.map((item, index) => {
                let getId = item.id;
                return [
                  <h2 key={index} className="attribute">
                    {item.name + ":"}
                  </h2>,
                  item.type !== "swatch"
                    ? item.items.map((item, index) => {
                        return (
                          <ButtonDefault
                            key={item.id}
                            className={
                              this.props.keepButtonActive(item.id, getId , this.props.attributes)?"activeButton":""
                            }
                            onClick={() =>{
                              this.props.getSelectedProductSelectedAttributes({
                                id: getId,
                                Itemid: item.id,
                              })}
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
                            // className={
                            //   this.state.activeButtonSwatchIndex === index &&
                            //   this.state.AttributeIndex === getTopIndex
                            //     ? "activeSwatchButton"
                            //     : ""
                            // }
                            className={
                              this.props.keepButtonActive(item.id, getId, this.props.attributes)?"activeSwatchButton":""
                            }

                            style={{
                              background: item.value,
                              borderColor: item.value,
                            }}
                            onClick={() =>
                              this.props.getSelectedProductSelectedAttributes({
                                id: getId,
                                itemIndex: item.index,
                                Itemid: item.id,
                              })
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
                {
                  product.prices[selectedCurrencyIndex].currency
                    .symbol
                }
                {product.prices[selectedCurrencyIndex].amount}
              </h2>
            </div>
            <div>
              {product.inStock?<AddToCartButton
                // product={product}
                onClick={
                 ()=> this.props.getItemsAddedToCart(
                  id,
                  idPlusCategoryIndex.charAt(idPlusCategoryIndex.length - 1),
                  this.props.attributes
                )
              }
                to={"/cart"}

              >
                ADD TO CART
              </AddToCartButton>:<></>}
            </div>
            <div
              className="product-description"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </article>
        </ProductDetailsContainer>
      </Container>
    );
  }
}
export default ProductDetails;
