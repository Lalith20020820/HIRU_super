const products = [
    
    { id: 1, name: 'Fresh Apple', price: 995, category: 'fruits', image: 'Images/apple.jpg' },
    { id: 2, name: 'Banana', price: 745, category: 'fruits', image: 'Images/banana.jpg' },
    { id: 3, name: 'Oranges', price: 1495, category: 'fruits', image: 'Images/oranges.jpg' },
    { id: 4, name: 'Grapes', price: 2095, category: 'fruits', image: 'Images/grapes.jpg' },
    { id: 5, name: 'Strawberries', price: 1795, category: 'fruits', image: 'Images/strawberries.jpg' },
    { id: 6, name: 'Pineapple', price: 2395, category: 'fruits', image: 'Images/pineapple.jpg' },
    { id: 7, name: 'Peaches', price: 1345, category: 'fruits', image: 'Images/peaches.jpg' },
    { id: 8, name: 'Watermelon', price: 2695, category: 'fruits', image: 'Images/watermelon.jpg' },
    { id: 9, name: 'Green Kiwi', price: 1045, category: 'fruits', image: 'Images/kiwi.jpg' },
    { id: 10, name: 'Fresh Mango', price: 1645, category: 'fruits', image: 'Images/mango.jpg' },
    { id: 11, name: 'Carrots', price: 895, category: 'vegetables', image: 'Images/carrots.jpg' },
    { id: 12, name: 'Green Broccoli', price: 1045, category: 'vegetables', image: 'Images/broccoli.jpg' },
    { id: 13, name: 'Tomatoes', price: 1495, category: 'vegetables', image: 'Images/tomatoes.jpg' },
    { id: 14, name: 'Bell Peppers', price: 1795, category: 'vegetables', image: 'Images/bell-peppers.jpg' },
    { id: 15, name: 'Lettuce', price: 745, category: 'vegetables', image: 'Images/lettuce.jpg' },
    { id: 16, name: 'Red Onions', price: 595, category: 'vegetables', image: 'Images/onions.jpg' },
    { id: 17, name: 'Spinach', price: 1195, category: 'vegetables', image: 'Images/spinach.jpg' },
    { id: 18, name: 'Corn', price: 895, category: 'vegetables', image: 'Images/corn.jpg' },
    { id: 19, name: 'Fresh Cucumber', price: 745, category: 'vegetables', image: 'Images/cucumber.jpg' },
    { id: 20, name: 'Purple Eggplant', price: 1345, category: 'vegetables', image: 'Images/eggplant.jpg' },
    { id: 21, name: 'Whole Milk', price: 1195, category: 'dairy', image: 'Images/milk.jpg' },
    { id: 22, name: 'Fresh Butter', price: 1345, category: 'dairy', image: 'Images/butter.jpg' },
    { id: 23, name: 'Cheddar Cheese', price: 2095, category: 'dairy', image: 'Images/cheese.jpg' },
    { id: 24, name: 'Greek Yogurt', price: 1795, category: 'dairy', image: 'Images/yogurt.jpg' },
    { id: 25, name: 'Fresh Cream', price: 1045, category: 'dairy', image: 'Images/cream.jpg' },
    { id: 26, name: 'Mozzarella Cheese', price: 2395, category: 'dairy', image: 'Images/mozzarella.jpg' },
    { id: 27, name: 'Fresh Eggs', price: 1495, category: 'dairy', image: 'Images/eggs.jpg' },
    { id: 28, name: 'Sour Cream', price: 895, category: 'dairy', image: 'Images/sour-cream.jpg' },
    { id: 29, name: 'Cottage Cheese', price: 1345, category: 'dairy', image: 'Images/cottage-cheese.jpg' },
    { id: 30, name: 'Heavy Cream', price: 1645, category: 'dairy', image: 'Images/heavy-cream.jpg' },
    { id: 31, name: 'Orange Juice', price: 1495, category: 'beverages', image: 'Images/orange-juice.jpg' },
    { id: 32, name: 'Sparkling Water', price: 745, category: 'beverages', image: 'Images/sparkling-water.jpg' },
    { id: 33, name: 'Green Tea', price: 2095, category: 'beverages', image: 'Images/green-tea.jpg' },
    { id: 34, name: 'Coffee Beans', price: 3895, category: 'beverages', image: 'Images/coffee-beans.jpg' },
    { id: 35, name: 'Energy Drink', price: 1195, category: 'beverages', image: 'Images/energy-drink.jpg' },
    { id: 36, name: 'Apple Juice', price: 1045, category: 'beverages', image: 'Images/apple-juice.jpg' },
    { id: 37, name: 'Coconut Water', price: 1345, category: 'beverages', image: 'Images/coconut-water.jpg' },
    { id: 38, name: 'Sports Drink', price: 895, category: 'beverages', image: 'Images/sports-drink.jpg' },
    { id: 39, name: 'Herbal Tea', price: 2395, category: 'beverages', image: 'Images/herbal-tea.jpg' },
    { id: 40, name: 'Smoothie Mix', price: 2695, category: 'beverages', image: 'Images/smoothie-mix.jpg' },
    { id: 41, name: 'Fresh Bread', price: 495, category: 'bakery', image: 'Images/bread.jpg' },
    { id: 42, name: 'Croissants', price: 895, category: 'bakery', image: 'Images/croissants.jpg' },
    { id: 43, name: 'Muffins', price: 695, category: 'bakery', image: 'Images/muffins.jpg' },
    { id: 44, name: 'Bagels', price: 795, category: 'bakery', image: 'Images/bagels.jpg' },
    { id: 45, name: 'Cake', price: 2495, category: 'bakery', image: 'Images/cake.jpg' },
    { id: 46, name: 'Chicken Breast', price: 1895, category: 'meat', image: 'Images/chicken.jpg' },
    { id: 47, name: 'Beef Steak', price: 3295, category: 'meat', image: 'Images/beef.jpg' },
    { id: 48, name: 'Pork Chops', price: 2195, category: 'meat', image: 'Images/pork.jpg' },
    { id: 49, name: 'Lamb Chops', price: 3895, category: 'meat', image: 'Images/lamb.jpg' },
    { id: 50, name: 'Fish Fillet', price: 2795, category: 'meat', image: 'Images/fish.jpg' }
];


let cart = JSON.parse(localStorage.getItem('cart')) || [];


document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
   
    if (document.getElementById('productsGrid')) {
        displayProducts('all');
        
      
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        if (category) {
            filterProducts(category);
        }
    }
    
    
    if (document.getElementById('cartItems')) {
        displayCart();
    }
});


function displayProducts(category) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);
    
    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" 
     onerror="handleImageError(this)">
            </div>
            <div class="product-title">${product.name}</div>
            <div class="product-price">Rs ${product.price.toFixed(2)}</div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}


function filterProducts(category) {
    
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    
    displayProducts(category);
    
   
    if (!document.getElementById('productsGrid')) {
        window.location.href = `products.html?category=${category}`;
    }
}


function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    
    showNotification(`${product.name} added to cart!`);
}


function showNotification(message) {
    
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        z-index: 9999;
        animation: slideIn 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}


function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}


function displayCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!cartItems) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; padding: 2rem;">Your cart is empty</p>';
        cartTotal.style.display = 'none';
        return;
    }
    
    let total = 0;
    
    cartItems.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        return `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop'">
                </div>
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>Rs ${item.price.toFixed(2)}</p>
                </div>
                <div class="cart-item-quantity">
                    <button onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <div class="cart-item-total">
                    Rs ${itemTotal.toFixed(2)}
                </div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">✕</button>
            </div>
        `;
    }).join('');
    
    cartTotal.textContent = `Total: Rs ${total.toFixed(2)}`;
    cartTotal.style.display = 'block';
}


function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            displayCart();
            updateCartCount();
        }
    }
}


function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    updateCartCount();
}


function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    alert('Thank you for your order! Total: Rs ' + cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2));
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    updateCartCount();
}


function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    alert(`Thank you ${name}! Your message has been received. We'll get back to you at ${email} soon.`);
    
    
    document.getElementById('contact-form').reset();
}

function handleImageError(img) {
    console.log('Image failed to load:', img.src);
    
    
    const productName = img.alt.toLowerCase();
    let placeholderColor = '#f8f9fa';
    
    if (productName.includes('fruit') || productName.includes('apple') || productName.includes('banana')) {
        placeholderColor = '#ffebee';
    } else if (productName.includes('vegetable') || productName.includes('carrot') || productName.includes('tomato')) {
        placeholderColor = '#e8f5e9';
    } else if (productName.includes('dairy') || productName.includes('milk') || productName.includes('cheese')) {
        placeholderColor = '#e3f2fd';
    } else if (productName.includes('drink') || productName.includes('juice') || productName.includes('water')) {
        placeholderColor = '#e0f2f1';
    }
    
    
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
            <rect width="400" height="300" fill="${placeholderColor}"/>
            <text x="200" y="150" text-anchor="middle" fill="#666" font-size="20">${img.alt}</text>
        </svg>
    `;
    
    img.src = 'data:image/svg+xml;base64,' + btoa(svg);
}