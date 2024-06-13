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