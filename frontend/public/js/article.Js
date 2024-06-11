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
    alert('Article ajouté au panier');
}

