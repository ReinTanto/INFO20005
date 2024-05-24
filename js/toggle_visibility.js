//Reinhart Aristeo Tanto - 1376786

//function is used to toggle the visibility of a div with the same divId
function toggleVisibility(divId) {
  var div = document.getElementById(divId);
  div.classList.toggle('show');
}

//function is used to toggle the visibility of the pages in the cart
function toggleVisibility2(div1, div2) {
  var pageToShowElement = document.getElementById(div1);
  var pageToHideElement = document.getElementById(div2);

  if (pageToShowElement && pageToHideElement) {
    pageToShowElement.classList.remove('hidden_page');
    pageToHideElement.classList.add('hidden_page');
  }
}
