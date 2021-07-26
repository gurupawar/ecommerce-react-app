import React, { useState } from "react";
import "./Products.css";
import { useCart } from "react-use-cart";
import { MagnifyingGlass } from "phosphor-react";
function Products({ itemsData, loading }) {
  const [serachKey, setSerachKey] = useState("");

  const { addItem } = useCart();
  if (loading) {
    return <div className="loading"></div>;
  }
  return (
    <>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Serach products.."
          onChange={(event) => {
            setSerachKey(event.target.value);
          }}
        />
        <div className="searchIcon">
          <MagnifyingGlass className="searchIconIcon" size={18} />
        </div>
      </div>
      <div className="container">
        <div className="card__wrapper">
          {itemsData
            // eslint-disable-next-line array-callback-return
            .filter((ele) => {
              if (serachKey === "") {
                return ele;
              } else if (
                ele.title.toLowerCase().includes(serachKey.toLowerCase())
              ) {
                return ele;
              }
            })
            .map((item) => (
              <div className="card" key={item.id}>
                <img src={item.image} alt="" />
                <div className="card__group">
                  <p className="title">{item.title.slice(0, 25)}</p>
                  <p className="price">$ {item.price}</p>
                  <button className="addtoCart" onClick={() => addItem(item)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Products;
