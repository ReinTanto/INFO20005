//Reinhart Aristeo Tanto - 1376786

//function to open cart
function openCart() {
    fetch('../repeated_sections/cart.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('cart_overlay').innerHTML = html;
        document.getElementById('cart_overlay').style.display = "block";
      });
  }
  
//function to close cart
function closeCart() {
    document.getElementById('cart_overlay').style.display = "none";
}