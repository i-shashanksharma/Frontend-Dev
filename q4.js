const usersSpan = document.getElementById("usersCount");
const ordersSpan = document.getElementById("ordersCount");
const productsSpan = document.getElementById("productsCount");
const warning = document.getElementById("warning");

function loadDashboard() {
  const usersReq = fetch("http://localhost:3004/users");
  const ordersReq = fetch("http://localhost:3004/orders");
  const productsReq = fetch("http://localhost:3004/products");
  Promise.all([usersReq, ordersReq, productsReq])
    .then(responses => {
      let failed = false;
      responses.forEach(r => {
        if (!r.ok) failed = true;
      });
      return Promise.all(responses.map(r => r.ok ? r.json() : []))
        .then(([users, orders, products]) => {
          usersSpan.textContent = users.length || 0;
          ordersSpan.textContent = orders.length || 0;
          productsSpan.textContent = products.length || 0;
          if (failed) warning.style.display = "block";
        });
    })
    .catch(() => {
      warning.style.display = "block";
      usersSpan.textContent = 0;
      ordersSpan.textContent = 0;
      productsSpan.textContent = 0;
    });
}

loadDashboard();