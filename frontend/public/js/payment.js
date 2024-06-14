document.getElementById('card-number').addEventListener('input', function (e) {
    let value = e.target.value;
    // Supprimer tous les caractères qui ne sont pas des chiffres
    value = value.replace(/\D/g, '');
    // Limiter à 16 caractères
    if (value.length > 16) {
        value = value.substring(0, 16);
    }
    e.target.value = value;
});

document.getElementById('expiry-date').addEventListener('input', function (e) {
    let value = e.target.value;
    value = value.replace(/[^\d\/]/g, '');
    if (value.length === 2 && !value.includes('/')) {
        value = value + '/';
    }
    if (value.length > 5) {
        value = value.substring(0, 5);
    }
    e.target.value = value;
});

document.getElementById('cvv').addEventListener('input', function (e) {
    let value = e.target.value;
    value = value.replace(/\D/g, '');
    if (value.length > 3) {
        value = value.substring(0, 3);
    }
    e.target.value = value;
});


document.getElementById('address').addEventListener('input', function(e) {
    let value = e.target.value;
    if (value.length > 2) {
        fetch(`https://api-adresse.data.gouv.fr/search/?q=${value}`)
            .then(response => response.json())
            .then(data => {
                let suggestions = document.getElementById('address-suggestions');
                suggestions.innerHTML = '';
                if (data.features && data.features.length > 0) {
                    data.features.forEach(feature => {
                        let suggestion = document.createElement('div');
                        suggestion.textContent = feature.properties.label;
                        suggestion.addEventListener('click', function() {
                            document.getElementById('address').value = feature.properties.label;
                            suggestions.innerHTML = '';
                        });
                        suggestions.appendChild(suggestion);
                    });
                } else {
                    suggestions.innerHTML = 'Invalid address';
                    document.getElementById('address-suggestions').innerHTML = 'Invalid address';
                }
            });
    }
});