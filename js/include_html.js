//Reinhart Aristeo Tanto - 1376786

//function incluides a specified html file when called
function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');
    elements.forEach(element => {
      const filePath = element.getAttribute('data-include');
      fetch(filePath)
        .then(response => response.text())
        .then(html => {
          element.innerHTML = html;
        })
        .catch(error => console.error('Error loading included HTML:', error));
    });
  }
  
  document.addEventListener('DOMContentLoaded', includeHTML);
  