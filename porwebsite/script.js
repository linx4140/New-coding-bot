// Store cart items
let cart = [];

// Add product to cart
function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    alert(productName + " added to cart!");
}

// Contact form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if (name && email && message) {
        alert("Thank you, " + name + "! Your message has been received.");
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill all fields.");
    }
});