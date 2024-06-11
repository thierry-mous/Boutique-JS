document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/api/teams')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
});

var counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 2) {
        counter = 1;
    }
}, 3000);
