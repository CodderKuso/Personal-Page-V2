document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');

    function performSearch() {
        const searchTerm = searchInput.value.trim();

        if (searchTerm !== '') {
            const searchURL = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
            window.location.href = searchURL;
        } else {
            alert('Please enter a search term.');
        }
    }

    searchButton.addEventListener('click', performSearch);

    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            performSearch();
        }
    });
});

