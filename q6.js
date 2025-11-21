async function fetchProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error("Bad response");
    const products = await res.json();
    products.forEach(p => {
      console.log("Product:", p.title);
      console.log("Price: $" + p.price);
      console.log("Image:", p.image);
      console.log("-----");
    });
  } catch (err) {
    console.error("Failed to load products.");
  }
}
fetchProducts();