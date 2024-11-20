// Function to fetch the products data from the JSON file and display them on the page
function loadProducts() {
  // Fetch the JSON file containing the product data
  fetch("products.json")
    //This method returns a new Promise allows changing multiple.then()calls
    .then((response) => response.json()) //converts the response to Json format
    .then((data) => {
      //selects the container where products will be display using querySelector
      const productContainer = document.querySelector(".product-container");

      // Iterate through the products array and create a card for each product
      data.forEach((product) => {
        //creates a new div element for each product card
        const productCard = document.createElement("div");
        //adds 'product-card' class to the new div for styling
        productCard.classList.add("product-card");

        //set the inner html of the producr card, populating the data from the json
        productCard.innerHTML = `  
                    <img src="${product.image}" alt="${product.name}"> //
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p class="price">$${product.price}</p>
                    <button class="add-to-cart-btn">Add to Cart</button>
                `;
        //append the newly created product card to the product container on the pg
        productContainer.appendChild(productCard);
      });
    })
    //handle any errors in fetching the data
    .catch((error) => console.error("Error loading product data:", error));
}

// Call the function to load products when the page loads
document.addEventListener("DOMContentLoaded", loadProducts);
