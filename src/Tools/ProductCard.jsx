import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/product/${product.id}`)}>
      <img src={product.image} alt={product.name} style={{width: "130px"}} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
    </div>
  );
}

export default ProductCard;