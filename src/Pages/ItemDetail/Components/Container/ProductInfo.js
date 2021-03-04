import React from "react";
import styled from "styled-components";

function ProductInfo({ product }) {
  const date = product?.release_date.split("").slice(0, 10).join("");
  return (
    <Form>
      <ProductDetail>
        <div className="product_info">
          <span className="info_style">STYLE</span>
          <span>{product?.style}</span>
        </div>
        <div className="product_info">
          <span className="info_style">COLORWAY</span>
          <span>{product?.color}</span>
        </div>
        <div className="product_info">
          <span className="info_style">RETAIL PRICE</span>
          <span>${product?.retail_price}</span>
        </div>
        <div className="product_info">
          <span className="info_style">RELEASE DATE</span>
          <span>
            {date}
            {/* {product?.release_date} */}
          </span>
        </div>
      </ProductDetail>
      <p>{product?.description}</p>
    </Form>
  );
}
export default ProductInfo;

const Form = styled.div`
  ${({ theme }) => theme.flexCenter};
  justify-content: space-between;
  width: 100%;
  height: 217px;
  overflow: auto;
  p {
    width: 80%;
    line-height: 150%;
  }
`;

const ProductDetail = styled.div`
  width: 340px;
  margin-right: 40px;

  .product_info {
    margin-bottom: 10px;
    .info_style {
      font-weight: 800;
    }
  }

  span {
    margin-right: 10px;
  }
`;
