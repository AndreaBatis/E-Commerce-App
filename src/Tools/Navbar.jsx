import { Link } from "react-router-dom";
import { useCart } from "./Cartcont";

function Navbar() {
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
 
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>
        Lux-Store
      </Link>

      <div style={styles.links}>
        <Link to="/home" style={styles.navLink}>Home</Link>
        <Link to="/favorites" style={styles.navLink}>Favorites</Link>
        <Link to="/cart" style={styles.navLink}>Cart ({totalItems})</Link>
</div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    background: "Beige",
    color: "light",
    alignItems: "center"
  },
  links: {
    display: "flex",
    gap: "15px"
  },
  navLink: {
    color: "brown",
  },
  logo: {
    color: "Brown",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "28px"
  }
};

export default Navbar;