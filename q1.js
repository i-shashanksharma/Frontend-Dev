const input = $("#searchBox");
const results = $("#results");
const loading = $("#loading");
let timer;

function renderProducts(list) {
  results.empty();
  if (!list.length) {
    results.text("No products found");
    return;
  }
  list.forEach(p => {
    const div = $("<div>").addClass("product");
    const img = $("<img>").attr("src", p.image);
    const info = $("<div>").text(p.name + " - ₹" + p.price);
    div.append(img, info);
    results.append(div);
  });
}

function searchProducts(q) {
  loading.show();
  $.ajax({
    url: "http://localhost:3001/products",
    method: "GET",
    data: { q },
    success: data => {
      loading.hide();
      renderProducts(data);
    },
    error: () => {
      loading.hide();
      results.text("Error loading products");
    }
  });
}

input.on("input", () => {
  const value = input.val().trim();
  clearTimeout(timer);
  timer = setTimeout(() => {
    if (value === "") {
      results.empty();
      return;
    }
    searchProducts(value);
  }, 300);
});
