document.getElementById('generate-btn').addEventListener('click', function() {
    fetch('/generate-superhero')
        .then(response => response.json())
        .then(data => {
            document.getElementById('superhero-profile').textContent = data;
        })
        .catch(error => {
            console.error('Error fetching superhero profile:', error);
            document.getElementById('superhero-profile').textContent = 'Failed to load superhero profile. Please try again.';
        });
});
