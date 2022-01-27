console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);
let productsList = document.querySelector(".products-list");

function renderProducts(ourProducts) {
  for (let i = 0; i < ourProducts.length; i++) {
    let product = ourProducts[i];
    let titleProd = document.createElement("h2");
    let priceProd = document.createElement("p");
    let ratingProd = document.createElement("p");
    titleProd.innerHTML = product.name;
    priceProd.innerHTML = `price: ${product.price}`;
    ratingProd.innerHTML = ` rating: ${product.rating}`;

    let prodListEle = document.createElement("li");
    prodListEle.appendChild(titleProd);
    prodListEle.appendChild(priceProd);
    prodListEle.appendChild(ratingProd);
    productsList.appendChild(prodListEle);
  }
}
renderProducts(products);
