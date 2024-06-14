document.getElementById('btn-cart').addEventListener('click', (event) => {
    event.preventDefault();
    console.log('click');
    const jerseyId = window.location.pathname.split('/').pop();
    const quantity = document.getElementById('quantity').value;
    const taille = document.querySelector('.taille input[name="taille"]:checked').value;
    console.log(jerseyId, quantity, taille);
    addToCart(jerseyId, quantity, taille);
});

function addToCart(jerseyId, quantity, taille) {
    console.log('add to cart');
    let cart = localStorage.getItem('cart');
    cart = cart ? JSON.parse(cart) : [];
    cart.push({jerseyId: jerseyId, quantity: quantity, taille: taille});
    localStorage.setItem('cart', JSON.stringify(cart));
    // alert('Article ajouté au panier'); 
}

document.getElementById ('btn-fav').addEventListener('click', (event) => {
    event.preventDefault();
    console.log('click');
    const jerseyId = window.location.pathname.split('/').pop();
    addToFav(jerseyId);
});

function addToFav(jerseyId) {
    console.log('add to fav');
    let fav = localStorage.getItem('fav');
    fav = fav ? JSON.parse(fav) : [];
    fav.push({jerseyId: jerseyId});
    localStorage.setItem('fav', JSON.stringify(fav));
    //alert('Article ajouté aux favoris');
}


document.addEventListener('DOMContentLoaded', function() {
    const descriptionElement = document.querySelector('.description p');
    const originalDescription = descriptionElement.innerText;

    if (originalDescription.length > 150) {
        descriptionElement.innerText = originalDescription.substring(0, 150) + '...';

        
        const showMoreButton = document.createElement('button');
        showMoreButton.innerText = 'Show More';
        descriptionElement.parentNode.appendChild(showMoreButton); 

       
        showMoreButton.addEventListener('click', function() {
            if (showMoreButton.innerText === 'Show More') {
                descriptionElement.innerText = originalDescription;
                showMoreButton.innerText = 'Show Less';
            } else {
                descriptionElement.innerText = originalDescription.substring(0, 150) + '...';
                showMoreButton.innerText = 'Show More';
            }
        });
    }
});