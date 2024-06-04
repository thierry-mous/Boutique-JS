let addToCartButtons = document.querySelectorAll('.button');

 addToCartButtons.forEach(button => {
    button.addEventListener('click', function(event) {

        let jerseyId = this.dataset.id;

        addToCart(jerseyId);
    });
}); 

document.querySelector( '#btn-get').addEventListener('click',() => {
    getCart();
})

document.querySelector( '#btn-add').addEventListener('click',(event) => {
    console.log(event.target.dataset.id);
    addToCart(+event.target.dataset.id);
})

function addToCart(jerseyId) {
    let cart = localStorage.getItem('cart');
    cart = cart ? JSON.parse(cart) : [];
    console.log(cart)
    cart.push(jerseyId);
    console.log(cart)
    localStorage.setItem('cart', JSON.stringify(cart));
}

function getCart() {
    let cart = localStorage.getItem('cart');
    console.log(cart ? JSON.parse(cart) : []);
}