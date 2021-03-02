import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { itemListHOST } from "../../../Config";
import { CategoriesData } from "../data/CategoriesData";
import { PRICEDATA } from "../data/CategoriesData";

const LIMIT = 20;

const useFetch = () => {
  const [productInfoList, setProductInfoList] = useState([]);
  const history = useHistory();
  const [size, setSize] = useState(0);
  const [lowest, setLowest] = useState(0);
  const [highest, setHighest] = useState(0);
  const [query, setQuery] = useState("");
  const [sizeBtn, setSizeBtn] = useState("");
  const [priceBtn, setPriceBtn] = useState("");

  const handleClick = (e) => {
    const SET = {
      sizeBtn: setSizeBtn,
      priceBtn: setPriceBtn,
    };
    const setState = SET[e.target.name];
    setState(e.target.innerText);

    const sizeArr = CategoriesData.sizeCategories.sizeDetail;
    let makeSizeQuery = "";

    for (let i = 0; i < sizeArr.length; i++) {
      if (
        sizeArr[i].sizeName === e.target.innerText &&
        `${e.target.id}` === "size"
      ) {
        makeSizeQuery += `${Number(sizeArr[i].size)}`;
      }
    }

    if (e.target.id === "size") {
      setSize(Number(makeSizeQuery));
      makeQuery({ size: Number(makeSizeQuery), lowest, highest });
    } else {
      setLowest(PRICEDATA[e.target.id - 1].lowest);
      setHighest(PRICEDATA[e.target.id - 1].highest);
      makeQuery({
        size,
        lowest: PRICEDATA[e.target.id - 1].lowest,
        highest: PRICEDATA[e.target.id - 1].highest,
      });
    }
  };

  const makeQuery = (option) => {
    const obj = {
      size: !option.size ? 0 : option.size,
      lowest: !option.lowest ? 0 : option.lowest,
      highest: !option.highest ? 0 : option.highest,
    };

    const filteredArr = Object.entries(obj).filter((e) => e[1] !== 0);
    const filteredStr = filteredArr.map((e) => e.join("="));
    if (filteredStr.length > 0) {
      const queryStr = "&" + filteredStr.join("&");
      setQuery(queryStr);
      history.push(`?limit=${LIMIT}${query}`);
    }
  };

  useEffect(() => {
    return fetch(`${itemListHOST}?limit=${LIMIT}`)
      .then((res) => res.json())
      .then((data) => {
        setProductInfoList(data.products);
      });
  }, []);

  useEffect(() => {
    return fetch(`${itemListHOST}?limit=${LIMIT}${query}`)
      .then((res) => res.json())
      .then((data) => {
        setProductInfoList(data.products);
      });
  }, [query]);

  const fetchOffset = (e) => {
    const offset = e?.target.dataset.idx;

    fetch(`${itemListHOST}?limit=${LIMIT}&offset=${offset * LIMIT}`)
      .then((res) => res.json())
      .then((res) => setProductInfoList(res.products))
      .then(window.scrollTo(0, 250));
  };

  return {
    sizeBtn,
    priceBtn,
    productInfoList,
    fetchOffset,
    handleClick,
  };
};

export default useFetch;
