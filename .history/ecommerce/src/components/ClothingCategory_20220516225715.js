import React from "react";
import { Title, ProductList, Container } from "../styles/Category.style";
import ProductItem from "./ProductItem";
class ClothingCategory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    let{category}=this.props;

    return (
      <Container>
        <Title>Category {category.name}</Title>
        <ProductList>
          {this.props.category.products.map((item, i) => {
            return (
              <ProductItem
                product={item}
                categoryId={1}
                selectedCurrencyIndex={this.props.selectedCurrencyIndex}

                key={i}
              
              ></ProductItem>
            );
          })}
        </ProductList>
      </Container>
    );
  }
}
export default ClothingCategory;
