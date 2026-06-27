import { useParams } from "react-router-dom";
import products from "../pages/products";
import { useCart } from "../Tools/Cartcont";

function ProductDetail() {
  const { id } = useParams();
  const { addToCart, addToFavorites, isFavorite } = useCart();

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h2>Product not available</h2>;

  return (
    <div style={styles.container}>
      <img src={product.image} alt={product.name} style={styles.image} />

      <div> 
        <h1 style={styles.title}>{product.name}</h1>
      

      <div style={styles.info}>
        <p>Price: USD{product.price}</p>
        <p>Ratings: {product.rating}</p>
        <p>Reviews: {product.reviews}</p>
        <p>In Stock: {product.stock}</p>
        <p>Discounts: {product.discount}%</p>

        <div style={styles.buttons}>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          <button onClick={() => addToFavorites(product)}>
            {isFavorite(product.id) ? "In Favorites" : "Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "40px",
    padding: "20px",
    marginTop: "40px",
    flexWrap: "wrap",
  },
  title: {
    marginBottom: "30px",
  },
  image: {
    width: "300px",
    height: "230px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    border: "3px solid beige",
    fontWeight: "600",
  },
  buttons: {
    display: "flex",
    gap: "80px",
    marginTop: "15px",
  },
};

export default ProductDetail;