document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/api/teams')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
});