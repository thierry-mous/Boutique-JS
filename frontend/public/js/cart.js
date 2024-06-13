document.addEventListener('DOMContentLoaded', function() {
    displayCart();
});

function displayCart() {
    const jerseysDisplay = document.querySelector('.jerseys__display');
    const totalPrice = document.getElementById('total__price');
    const totalQuantityText = document.getElementById('total__quantity');
    let cart = localStorage.getItem('cart');
    let total = 0;
    let totalQuantity = 0;
    if (cart) {
        cart = JSON.parse(cart);
        cart.forEach(element => {
            totalQuantity +=  parseInt(element.quantity);
            fetch(`http://localhost:3000/api/jerseys/${element.jerseyId}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    total += data.data.product.price * element.quantity;
                    totalPrice.innerHTML = `
                        <h2>Total : ${total.toFixed(2)} €</h2>
                    `;
                    totalQuantityText.innerHTML = `
                        <p>${totalQuantity}</p>
                    `;
                    const jersey = document.createElement('div');
                    jersey.classList.add('jersey');
                    jersey.innerHTML = `
                        <div class="box2">
                        <img src="/public/img/${data.data.product.image}" alt="${data.data.product.name}" class="jersey__img">
                        <div class="jersey__info">
                            <h3>${data.data.product.name}</h3>
                            <p>Prix : ${(data.data.product.price * element.quantity).toFixed(2)} €</p> 
                            <p>Quantité : ${element.quantity}</p>
                            <p>Taille : ${element.taille}</p>
                        </div>
                        
                    `;
                    jerseysDisplay.appendChild(jersey);   
                });
            
        });
    } else {
        console.log('Cart is empty');
    }
}

function getRandomJerseyIds(jerseyIds) {
    let randomIds = [];
    for(let i = 0; i < 3; i++) {
        let randomIndex = Math.floor(Math.random() * jerseyIds.length);
        randomIds.push(jerseyIds[randomIndex]);
    }
    return randomIds;
}8