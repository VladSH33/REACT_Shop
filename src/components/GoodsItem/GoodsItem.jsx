import React from "react";
import "./GoodsItem.css"

const GoodsItem = ({ mainId, displayName, displayDescription, price, full_background, addToBasket }) => {
  const priceReg = price.regularPrice;
  return (
    <div className="card">
      {full_background === "N/A" ? (
        <img
          src={"https://placehold.jp/150x150.png"}
          alt={displayName}
          className="card-image"
        />
      ) : (
        <img src={full_background} alt={displayName} className="card-image" />
      )}

      <div className="desc">
        <div className="title">{displayName}</div>
        <div className="desc_text">{displayDescription}</div>
        <div className="desc-footer">
          <button className="btn" onClick={() => addToBasket({
              mainId,
              displayName,
              priceReg,
            })}>Купить</button>
          <div className="price">{priceReg} руб.</div>
        </div>
      </div>
    </div>
  );
};

export default GoodsItem;
