import { useState } from "react";
import { useParams } from "react-router-dom";
import products from "./products";
import ProductCard from "../Tools/ProductCard";

function Home() {
  const { category } = useParams();
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category
      ? p.category.toLowerCase() === category.toLowerCase()
      : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>{category ? category : "Best Sellers"}</h1>

      <input
        placeholder="Search products"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div style={styles.grid}>
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
};

export default Home;