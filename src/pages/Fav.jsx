import { useCart } from "../Tools/Cartcont";

function Fav() {
  const { favorites, removeFromFavorites, clearFavorites } = useCart();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Favorites</h1>

      {favorites.length === 0 ? (
        <p>No favorite products yet</p>
      ) : (
        favorites.map((item) => (
          <div key={item.id} style={styles.card}>
            <h3>{item.name}</h3>
            <p>${item.price}</p>

            <button onClick={() => removeFromFavorites(item.id)}>
              Remove 
            </button>
          </div>
        ))
      )}

      {favorites.length > 0 && (
        <button onClick={clearFavorites} style={styles.clearBtn}>
          Clear Favorites
        </button>
      )}
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid ",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
  },
  clearBtn: {
    marginTop: "20px",
    padding: "10px",
    background: "black",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default Fav;