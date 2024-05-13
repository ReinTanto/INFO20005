function includeFooter() {
    fetch('repeated_sections/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching footer:', error);
        });
}

// Call the function to include the footer
includeFooter();