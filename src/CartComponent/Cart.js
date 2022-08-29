import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Cart() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  const [total, setTotal] = useState(0);

  const changeQty = (id, qty) => {
    dispatch({ type: "CHANGE_CART_QTY", payload: { id, qty } });
  };

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty , 0))
  },[cart])

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 10,
        margin: 10,
        width: "20%",
        borderRadius: "5px",
        backgroundColor: "#ececec",
      }}
    >
      <b style={{ fontSize: 30, alignSelf: "center" }}>Cart</b>
      <b style={{ alignSelf: "center" }}>SubTotal : ${total}</b>

      {cart.length > 0 ? (
        cart.map((prod) => {
          return (
            <div
              key={prod.title}
              style={{
                display: "flex",
                padding: 10,
                margin: 5,
                border: "1px solid gray",
                borderRadius: "10px",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", gap: 10 }}>
                <img
                  src={prod.thumbnail}
                  alt={prod.title}
                  style={{ width: 70, objectFit: "cover", borderRadius: "5px" }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    marginTop: 5,
                  }}
                >
                  <span>{prod.title}</span>
                  <b> ${prod.price} </b>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <button style={{cursor: "pointer" }} onClick={() => changeQty(prod.id, prod.qty - 1)}>
                  -
                </button>
                <span>{prod.qty}</span>
                <button style={{cursor: "pointer" }} onClick={() => changeQty(prod.id, prod.qty + 1)}>
                  +
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <span
          style={{
            padding: 20,
            alignSelf: "center",
            fontWeight: 700,
            color: "red",
          }}
        >
          Cart is Empty
        </span>
      )}
    </div>
  );
}

export default Cart;
