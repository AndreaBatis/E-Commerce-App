import { useNavigate } from "react-router-dom";
import { useCart } from "../Tools/Cartcont";

function Cart() {
  const navigate = useNavigate();
  const {
    cart,
    removeFromCart,
    decreaseQty,
    addToCart,
    clearCart,
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} style={styles.card}>
            <h3>{item.name}</h3>
            <p>${item.price}</p>

            <div style={styles.qty}>
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => addToCart(item)}>+</button>
            </div>

            <button onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        ))
      )}

      <hr />

      <h2>Total: USD {total.toFixed(2)}</h2>

      <button onClick={clearCart} style={styles.clearBtn}>Clear Cart</button>
      <button style={styles.saveBtn}>
          Save for Later
        </button>
        <button
          onClick={() => navigate("/checkout")}
          style={styles.payBtn}
          disabled={cart.length === 0}
        >
          Proceed to Payment
        </button>

    </div>
  );
}

const styles = {
  card: {
    border: "5px solid #9d6969",
    padding: "10px",
    marginBottom: "10px",
  },
  qty: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  actions: {
    display: "flex",
    gap: "20px",
    marginTop: "20px",
    flexWrap: "wrap",
  },
  clearBtn: {
    padding: "10px 20px",
    border: "2px solid #111",
    background: "white",
    cursor: "pointer",
  },
  saveBtn: {
    padding: "10px 20px",
    cursor: "pointer",
    border: "2px solid #111",
    background: "white",
  },
  payBtn: {
    padding: "15px 20px",
    cursor: "pointer",
    background: "#111",
    color: "white",
    border: "2px solid",
  },
};

export default Cart;