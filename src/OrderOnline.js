
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import menuItems from "../Menu/menuData";
import "./OrderOnline.css";

const OrderOnline = () => {
  const [cart, setCart] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const totalPrice = cart.reduce((total, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return total + price;
  }, 0);

  const handleCheckout = () => {
    setShowPopup(true);
    setCart([]);

    setTimeout(() => {
      setShowPopup(false);
    }, 3000); 
  };

  return (
    <section className="order-section">
      <h1>Order Online</h1>
      <p>
        Skip the line and order your favorite dishes from Little Lemon right
        here. Fast, easy, and fresh to your door.
      </p>

      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div key={index} className="order-card">
            <img src={item.image} alt={item.name} className="order-img" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <span className="price">{item.price}</span>
            <button onClick={() => addToCart(item)}>Add to Order</button>
          </div>
        ))}
      </div>

      <div className="cart-section">
        <h2>
          <FaShoppingCart style={{ marginRight: "10px" }} />
          Your Order
        </h2>
        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} - {item.price}
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </li>
              ))}
            </ul>
            <p className="total">Total: ${totalPrice.toFixed(2)}</p>
            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </>
        )}
      </div>

      {showPopup && (
        <div className="popup">
          <p>✅ Your order has been placed! Thank you!</p>
        </div>
      )}
    </section>
  );
};

export default OrderOnline;
