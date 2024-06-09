 document.getElementById('btn-cart').addEventListener('click', () => {
    const url = window.location.href;
    const regex = /\/article\/(\d+)/;
    const jerseyId = url.match(regex)?.[1];
    document.getElementById('form-article')
    const form = document.getElementById('form-article');
    const quantity = document.getElementById('Quantity').value;
     const taille = document.getElementById('taille').value;
    addToCart(jerseyId, quantity, taille);
   

}); 

document.querySelector( '#btn-get').addEventListener('click',() => {
    getCart();
})

document.querySelector( '#btn-add').addEventListener('click',(event) => {
    console.log(event.target.dataset.id);
    addToCart(+event.target.dataset.id);
})

function addToCart(jerseyId, quantity, taille) {
    let cart = localStorage.getItem('cart');
    cart = cart ? JSON.parse(cart) : [];
    console.log(cart)
    cart.push({jerseyId: jerseyId, quantity: quantity, taille: taille});
    console.log(cart)
    localStorage.setItem('cart', JSON.stringify(cart));
}

function getCart() {
    let cart = localStorage.getItem('cart');
    console.log(cart ? JSON.parse(cart) : []);
}