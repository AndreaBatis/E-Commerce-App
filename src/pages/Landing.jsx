import { useNavigate } from "react-router-dom";
import sunglassescat from "../assets/moda4.png";
import readingcat from "../assets/ree.png";
import childrencat from "../assets/kid.png";
import accessoriescat from "../assets/acc4.png";

function Landing() {
  const navigate = useNavigate();
  const categories = [
    { label: "Sunglasses", value: "sunglasses", image: sunglassescat },
    { label: "Reading", value: "reading", image: readingcat },
    { label: "Children", value: "children", image: childrencat },
    { label: "Accesories", value:"accesories", image: accessoriescat },
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "70px", background: "#f5f0e8", minHeight: "100vh", width: "100%" }}>
      <h1>Find the best glasses for you</h1>
      <h5>Start shopping now</h5>

      <div style={styles.categoryContainer}>
        {categories.map((cat) => (
          <div
            key={cat.value}
            onClick={() => navigate(`/home/${cat.value}`)}
            style={styles.categoryCard}
          >
            <img src={cat.image} alt={cat.label} style={styles.categoryImage} />
            <p style={styles.categoryLabel}>{cat.label}</p>
          </div>
        ))}
      </div>

      <button onClick={() => navigate("/home")} style={styles.allButton}>
        See All Products
      </button>
      
    </div>
  ); 
}
const styles = {
  categoryContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginTop: "20px",
    flexWrap: "wrap",
  },
  categoryCard: {
    cursor: "pointer",
    border: "3px solid",
    borderRadius: "20px",
    padding: "8px",
    width: "160px",
    transition: "transform 0.4s",
  },
  categoryImage: {
    width: "100px",
    height: "110px",
    objectFit: "cover",
    borderRadius: "0px",
  },
  categoryLabel: {
    marginTop: "10px",
    fontWeight: "bold",
    fontSize: "16px",
  },
  
  categoryButton: {
    padding: "20px 30px",
    fontSize: "16px",
    cursor: "pointer",
    border: "1px solid #ddd",
    borderRadius: "8px",
    background: "white",
  },
  allButton: {
    marginTop: "30px",
    padding: "10px 20px",
    cursor: "pointer",
  },
};
export default Landing;