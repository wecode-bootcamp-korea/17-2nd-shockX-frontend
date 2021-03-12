/* eslint-disable prettier/prettier */
import React from "react";
import styled from "styled-components";

export default function ItemImage({ images, imageIdx }) {
  // const [images, setImages] = useState(0);
  // useEffect(() => {
  //   getImages();
  // }, []);

  // const getImages = () => {
  //   fetch("./Data/ImageData.json")
  //     .then(res => res.json())
  //     .then(res => setImages(res));
  // };

  return (
    <Item>
      <div className="item_image_box">
        <img src={images?.[imageIdx]} alt="Jordan" />
      </div>
    </Item>
  );
}

const Item = styled.div`
  .item_image_box {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    height: 760px;
    img {
      height: 100%;
    }
  }
`;
