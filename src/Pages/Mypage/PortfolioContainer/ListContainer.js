/* eslint-disable prettier/prettier */
import React from "react";
import styled from "styled-components";

function ListContainer({ data }) {
  return (
    <ChartContainer>
      <table>
        <thead>
          <tr className="tablehead">
            <th>NAME</th>
            <th>PURCHASE DATE</th>
            <th>PURCHASE PRICE</th>
            <th>MARKET VALUE</th>
            <th>GAIN/LOSS</th>
          </tr>
        </thead>
        <tbody>
          {data.portfolio?.map((list, idx) => {
            return (
              <tr className="tablebody">
                <td className="img_td">
                  <ImgBox>
                    <img
                      className="product_image"
                      src="https://stockx-360.imgix.net/Air-Jordan-1-Retro-High-Turbo-Green/Images/Air-Jordan-1-Retro-High-Turbo-Green/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1606324093&fit=clip&fm=webp&ixlib=react-9.0.3&w=1246"
                      alt=""
                    />
                  </ImgBox>
                  <p>{list.name}</p>
                </td>
                <td>{list.purchase_date}</td>
                <td>{list.market_value}</td>
                <td>{list.purchase_price}</td>
                <GainLoss>{list.purchase_price - list.market_value}%</GainLoss>
              </tr>
            );
          })}
        </tbody>
      </table>
    </ChartContainer>
  );
}

export default ListContainer;

const ChartContainer = styled.div`
  margin-top: 36px;
  font-size: 14px;
  table {
    width: 100%;

    th,
    td {
      text-align: center;
      padding: 5px;
      text-align: start;
      vertical-align: middle;
    }
    .tablehead {
      border-bottom: 2px solid lightgray;
      font-weight: 700;
      background-color: white;
      font-size: 16px;
    }
    .tablebody {
      font-size: 16px;
      .img_td {
        display: flex;
        align-items: center;
        p {
          padding-left: 16px;
        }
      }
    }
    /* .tablebody:nth-child(odd) {
      background-color: #f5f5f5;
    } */
  }
`;

const GainLoss = styled.td`
  color: ${props => props.theme.colors.green};
`;

const ImgBox = styled.div`
  width: 80px;
  height: 58px;
  .product_image {
    width: 100%;
  }
`;
