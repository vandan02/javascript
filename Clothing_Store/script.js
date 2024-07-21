 document.addEventListener('DOMContentLoaded', () => {
    const menProducts = document.getElementById('men-products');
    const womenProducts = document.getElementById('women-products');

    const products = [
        {
            id: 1,
            name: 'Men T-Shirt',
            category: 'men',
            price: '20 USD',
            photos: [
                'aseets/Screenshot (1).png',
                'aseets/Screenshot 2024-04-03 114207.png',
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

    products.forEach(product => {
        addProductToPage(product);
    });

    function addProductToPage(product) {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <img src="${product.photos[0]}" alt="${product.name}">
            <p>Price: ${product.price}</p>
            <a href="product.html?id=${product.id}">View Details</a>
            <button onclick="sendInquiry(${product.id})">WhatsApp Inquiry</button>
        `;

        if (product.category === 'men') {
            menProducts.appendChild(productDiv);
        } else {
            womenProducts.appendChild(productDiv);
        }
    }

    window.sendInquiry = function(productId) {
        const product = products.find(p => p.id === productId);
        const phoneNumber =+918469693771; // Replace with your WhatsApp number
        const message = `I'm interested in the product:\n\nName: ${product.name}\nPrice: ${product.price}\nCategory: ${product.category}`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };
});
