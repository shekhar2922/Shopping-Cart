import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Products() {
  const dispatch = useDispatch();
  const { products, cart, searchQuery } = useSelector((state) => state);

  const updatedProducts = () => {
    let newProducts = products
    if(searchQuery){
      newProducts = newProducts.filter((prod) => prod.title.toLowerCase().includes(searchQuery))
    }
    return newProducts
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "80%",
      }}
    >
      <div>
        <input onChange={(e) => dispatch({type: "SEARCH_QUERY", payload: e.target.value})} style={{padding: 5, marginTop: 5, borderRadius: 5}} type="text" placeholder="Search Products" size={50}/>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        {updatedProducts().map((prod) => {
          return (
            <div
              key={prod.id}
              style={{
                display: "flex",
                flexDirection: "column",
                width: "30%",
                padding: 10,
                marginTop: 10,
                border: "1px solid gray",
                borderRadius: "10px",
              }}
            >
              <img
                src={prod.thumbnail}
                alt={prod.title}
                style={{ height: 200, objectFit: "cover", borderRadius: "5px" }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 5,
                }}
              >
                <span>{prod.title}</span>
                <b> ${prod.price} </b>
              </div>
              {cart.some((p) => p.id === prod.id) ? (
                <button
                  style={{
                    padding: 5,
                    border: 0,
                    backgroundColor: "#ff0000c2",
                    color: "white",
                    borderRadius: 5,
                    cursor: "pointer",
                    marginTop: 10,
                  }}
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_CART", payload: prod })
                  }
                >
                  Remove from Cart
                </button>
              ) : (
                <button
                  style={{
                    padding: 5,
                    border: 0,
                    backgroundColor: "green",
                    color: "white",
                    borderRadius: 5,
                    cursor: "pointer",
                    marginTop: 10,
                  }}
                  onClick={() =>
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: {
                        id: prod.id,
                        title: prod.title,
                        thumbnail: prod.thumbnail,
                        price: prod.price,
                        qty: 1,
                      },
                    })
                  }
                >
                  Add to Cart
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
