// Function to fetch the products data from the JSON file and display them on the page
function loadProducts() {
    // Fetch the JSON file containing the product data
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            const productContainer = document.querySelector('.product-container');
            
            // Iterate through the products array and create a card for each product
            data.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');

                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p class="price">$${product.price}</p>
                     <button class="add-to-cart-btn">Add to Cart</button>
                `;

                productContainer.appendChild(productCard);
            });
        })
        .catch(error => console.error('Error loading product data:', error));
}

// Call the function to load products when the page loads
document.addEventListener('DOMContentLoaded', loadProducts);
