document.addEventListener('DOMContentLoaded', function() {
    displayFav();
});

function displayFav() {
    const jerseysDisplay = document.querySelector('.jerseys__display');
    let fav = localStorage.getItem('fav');
    if (fav) {
        fav = JSON.parse(fav);
        fav.forEach(element => {
            fetch(`http://localhost:3000/api/jerseys/${element.jerseyId}`)
                .then(response => response.json())
                .then(data => {
                    const jersey = document.createElement('div');
                    jersey.classList.add('jersey');
                    jersey.innerHTML = `
                        <div class="box2">
                        <img src="/public/img/${data.data.image}" alt="${data.data.name}" class="jersey__img">
                        <div class="jersey__info">
                            <h3>${data.data.name}</h3>
                            <p>Prix : ${data.data.price} €</p>
                        </div>
                        </div>
                    `;
                    jerseysDisplay.appendChild(jersey);
                });
        });
    } else {
        console.log('Fav is empty');
    }
}