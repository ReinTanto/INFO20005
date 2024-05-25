//Reinhart Aristeo Tanto - 1376786

//Function for displaying add to cart alert
document.getElementById("addToCartButton").addEventListener("click", function() {
    var alertMessage = document.getElementById("alertMessage");
    alertMessage.innerText = "Successfully added to cart";
    alertMessage.classList.add("fadeIn");
    setTimeout(function() {
        alertMessage.classList.remove("fadeIn");
    }, 1000);
});