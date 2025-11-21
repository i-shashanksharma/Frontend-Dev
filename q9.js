class Cart {
  constructor() {
    this.items = [];
  }

  addItem(name, price, qty) {
    this.items.push({ name, price, qty });
  }

  getTotal() {
    return this.items.reduce((s, i) => s + i.price * i.qty, 0);
  }

  applyCoupon(code) {
    const reg = /^(SAVE|DISC)(\d{2})$/;
    const match = code.match(reg);

    if (!match) return "Invalid coupon";

    const discount = Number(match[2]);
    const total = this.getTotal();

    return total - (total * discount) / 100;
  }
}

const cart = new Cart();
cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 500, 2);

console.log("Total:", cart.getTotal());
console.log("After Coupon:", cart.applyCoupon("SAVE20"));