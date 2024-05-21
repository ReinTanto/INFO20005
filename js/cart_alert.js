//Reinhart Aristeo Tanto - 1376786

document.getElementById("addToCartButton").addEventListener("click", function() {
    var alertMessage = document.getElementById("alertMessage");
    alertMessage.innerText = "Successfully added to cart";
    alertMessage.classList.add("fadeIn");

    // Automatically fade out after 2 seconds
    setTimeout(function() {
        alertMessage.classList.remove("fadeIn");
    }, 1000);
});