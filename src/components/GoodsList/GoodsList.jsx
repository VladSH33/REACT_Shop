import React from "react";
import GoodsItem from "../GoodsItem/GoodsItem";
import "./GoodsList.css";

const GoodsList = ({ goods, addToBasket }) => {
  if (!goods.length) {
    <h3>список товаров пуст</h3>;
  }
  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem key={item.mainId} {...item} {...item.displayAssets[0]} addToBasket={addToBasket} />
      ))}
    </div>
  );
};

export default GoodsList;
