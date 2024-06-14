document.addEventListener('DOMContentLoaded', function() {
    displayFav();
});

function displayFav() {
    const jerseysDisplay = document.querySelector('.jerseys__display');
    let fav = localStorage.getItem('fav');
    if (fav) {
        fav = JSON.parse(fav);
        fav.forEach((element, index) => {
            fetch(`http://localhost:3000/api/jerseys/${element.jerseyId}`)
                .then(response => response.json())
                .then(data => {
                    const jersey = document.createElement('div');
                    jersey.classList.add('jersey');
                    jersey.innerHTML = `
                        <div class="box2">
                        <img src="/public/img/${data.data.product.image}" alt="${data.data.product.name}" class="jersey__img">
                        <div class="jersey__info">
                            <h3>${data.data.product.name}</h3>
                            <p>Prix : ${data.data.product.price} €</p>
                        </div>
                        <div>
                            <button class="delete-fav" id="delete-fav-${element.jerseyId}">Delete Fav</button>
                        </div>
                        </div>
                    `;
                    jerseysDisplay.appendChild(jersey);

                    document.getElementById(`delete-fav-${element.jerseyId}`).addEventListener('click', function() {
                        fav = fav.filter(item => item.jerseyId !== element.jerseyId);
                        localStorage.setItem('fav', JSON.stringify(fav));
                        jerseysDisplay.removeChild(jersey);
                    });
                });
        });
    } else {
        jerseysDisplay.innerHTML = '<h2>Aucun article en favoris</h2>';
    }
}