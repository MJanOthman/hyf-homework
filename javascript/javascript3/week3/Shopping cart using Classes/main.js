class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  convertToCurrency(curr) {
    const currencies = {
      name: ["dollar", "euro", "pound"],
      value: [6.8, 7.44, 8.94],
    };
    for (let i = 0; i < 3; i++) {
      if (curr === currencies.name[i]) {
        console.log(currencies.value[i]);
        return (this.price = this.price / currencies.value[i]);
      }
    }
  }
}
const plant = new Product("plant", 680);
console.log(plant.convertToCurrency("dollar"));

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    for (let i = 0; i < this.products.length; i++) {
      if (product === this.products[i]) {
        this.products.splice(i, 1);
      }
    }
  }

  searchProduct(productName) {
    let searchedProducts = [];
    for (let i = 0; i < this.products.length; i++) {
      if (productName === this.products[i].name) {
        searchedProducts.push(this.products[i]);
      }
    }
    return searchedProducts;
  }

  getTotal() {
    let x = 0;
    for (let i = 0; i < 5; i++) {
      x = x + this.products[i].price;
    }
    return x;
  }

  renderProducts() {
    const body = document.querySelector("body");
    const listOfProducts = document.createElement("ul");
    body.appendChild(listOfProducts);
    for (let i = 0; i < this.products.length; i++) {
      const productListItem = document.createElement("li");
      productListItem.textContent =
        this.products[i].name + ": " + this.products[i].price;
      listOfProducts.appendChild(productListItem);
    }
  }

  getUser(user) {
    return new Promise((resolve) => {
      resolve(fetch("https://jsonplaceholder.typicode.com/users/" + user));
    })
      .then((output) => {
        return output.json();
      })
      .catch(console.log.bind(console));
  }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
const iPhone13Pro = new Product("iPhone13Pro", 9000);
const SamsungS22 = new Product("SamsungS22", 6500);
const MacBook = new Product("MacBook Pro", 9500);
const HP = new Product("HP Laptop", 8000);
const PlayStation4 = new Product("PlayStation4", 3500);
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(iPhone13Pro);
shoppingCart.addProduct(SamsungS22);
shoppingCart.addProduct(MacBook);
shoppingCart.addProduct(HP);
shoppingCart.addProduct(PlayStation4);
shoppingCart.removeProduct(SamsungS22);
shoppingCart.renderProducts();

console.log(shoppingCart);

const r = shoppingCart.getTotal();
console.log(r);
console.log(shoppingCart.getUser("2"));

function mass(s) {
  const cu = {
    name: ["dollar", "euro", "pound"],
    value: [6.8, 7.44, 8.94],
  };
  for (let i = 0; i < 3; i++) {
    if (cu.name[i] === s) {
      console.log(cu.value[i]);
    }
  }
}
mass("dollar");
