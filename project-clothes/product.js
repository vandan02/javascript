document.addEventListener('DOMContentLoaded', () => {
    const product = JSON.parse(localStorage.getItem('product'));
    if (!product) {
        alert('No product found');
        window.location.href = 'index.html';
        return;
    }

    const productName = document.getElementById('product-name');
    const productDetails = document.getElementById('product-details');
    const backBtn = document.getElementById('backBtn');

    productName.textContent = product.name;
 
   


    backBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});