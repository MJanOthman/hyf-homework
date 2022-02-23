let body = document.querySelector("body");
let searchButtton = document.querySelector("#gif-btn");
let gifInputBar = document.querySelector("#search-gif");
let output = document.querySelector(".output");
let gifsNumber = document.querySelector("#gifs-number");
let gifss = [];

searchButtton.addEventListener("click", () => {
  output.innerHTML = "";
  async function giphy() {
    const giphyResponse = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=q9JDHqRvcsK20ufFG7eoQ6mQyCyZ4EK1&q=${gifInputBar.value}`
    );
    const giphyData = await giphyResponse.json();
    console.log(giphyData);
    if (gifsNumber.value) {
      for (let i = 0; i < gifsNumber.value; i++) {
        gifss[i] = document.createElement("img");
        gifss[i].src = giphyData.data[i].images.downsized_large.url;
        output.appendChild(gifss[i]);
        gifss[i].style.cssText = `width:200px; heigh=200px`;
      }
    } else {
      for (let i = 0; i < giphyData.data.length; i++) {
        gifss[i] = document.createElement("img");
        gifss[i].src = giphyData.data[i].images.downsized_large.url;
        output.appendChild(gifss[i]);
      }
    }
  }
  giphy();
  gifInputBar.value = "";
});
gifsNumber.addEventListener("click", () => {
  gifsNumber.value = "";
});
