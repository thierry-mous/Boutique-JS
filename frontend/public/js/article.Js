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
