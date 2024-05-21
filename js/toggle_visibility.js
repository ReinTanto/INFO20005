//Reinhart Aristeo Tanto - 1376786

//function is used to toggle the visibility of a div with the same divId
function toggleVisibility(divId) {
    var div = document.getElementById(divId);
    if (div.style.display === "none") {
      div.style.display = "block"; 
    } else {
      div.style.display = "none";
}
}