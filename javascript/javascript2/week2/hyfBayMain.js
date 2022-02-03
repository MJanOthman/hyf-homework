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
    prodListEle.className = "product-li";
  }
}
renderProducts(products);
//sort by name
let sortByNameInput = document.querySelector(".sort-by-name");
sortByNameInput.addEventListener("input", function () {
  console.log(sortByNameInput.value);
  const filterdByName = products.filter((ele) => {
    return ele.name.toLowerCase().includes(sortByNameInput.value);
  });

  console.log(filterdByName);
  productsList.innerHTML = " ";
  renderProducts(filterdByName);
});
//max price
let maxPriceInput = document.querySelector(".max-by-price");
maxPriceInput.addEventListener("input", function () {
  console.log(maxPriceInput.value);
  const filterdByPrice = products.filter((ele) => {
    return ele.price <= maxPriceInput.value;
  });

  console.log(filterdByPrice);
  productsList.innerHTML = " ";
  renderProducts(filterdByPrice);
});
//when we delete the number inside max price, we can not see the products anymore,
//so I made this to show them when we click outside the input field
maxPriceInput.addEventListener("blur", function () {
  productsList.innerHTML = " ";
  renderProducts(products);
});

//Minimum Rating
let minRating = document.querySelector(".min-rating");
minRating.addEventListener("input", function () {
  const filterdByRating = products.filter((ele) => {
    return ele.rating >= minRating.value;
  });

  productsList.innerHTML = " ";
  renderProducts(filterdByRating);
});

// sorting the products by click on radio button
//products will be sorted from high price to less price and visa versa.
h2lRadioButton = document.querySelector("#h2l");
l2hRadioButton = document.querySelector("#l2h");

h2lsorted = [];
l2hsorted = [];

h2lRadioButton.addEventListener("click", function () {
  products.sort((a, b) => b.price - a.price);
  products.forEach((ele) => {
    h2lsorted.push(ele);
  });
  productsList.innerHTML = " ";
  renderProducts(h2lsorted);
});
l2hRadioButton.addEventListener("click", function () {
  products.sort((a, b) => a.price - b.price);
  products.forEach((ele) => {
    l2hsorted.push(ele);
  });
  productsList.innerHTML = " ";
  renderProducts(l2hsorted);
});
