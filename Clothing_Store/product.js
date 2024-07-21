document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const productDetails = document.getElementById('product-details');

    const products = [
        {
            id: 1,
            name: 'Men T-Shirt',
            category: 'men',
            price: '20 USD',
            photos: [
                'photo1.jpg',
                'photo2.jpg',
                'photo3.jpg'
            ]
        },
        {
            id: 2,
            name: 'Women Dress',
            category: 'women',
            price: '50 USD',
            photos: [
                'photo4.jpg',
                'photo5.jpg',
                'photo6.jpg'
            ]
        }
    ];

    const product = products.find(p => p.id == productId);

    if (product) {
        productDetails.innerHTML = `
            <h2>${product.name}</h2>
            <p>Category: ${product.category}</p>
            <p>Price: ${product.price}</p>
            <div class="photos">
                <img src="${product.photos[0]}" alt="${product.name}">
                <img src="${product.photos[1]}" alt="${product.name}">
                <img src="${product.photos[2]}" alt="${product.name}">
            </div>
            <button onclick="sendInquiry('${product.id}')">WhatsApp Inquiry</button>
        `;
    }

    window.sendInquiry = function(productId) {
        const product = products.find(p => p.id == productId);
        const phoneNumber = +918469693771; // Replace with your WhatsApp number
        const message = `I'm interested in the product:\n\nName: ${product.name}\nPrice: ${product.price}\nCategory: ${product.category}`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };
});


