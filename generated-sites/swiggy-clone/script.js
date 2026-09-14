document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-bar input');
    const searchBtn = document.querySelector('.search-btn');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const restaurantCards = document.querySelectorAll('.restaurant-card');
    const cartPanel = document.getElementById('cart-panel');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalEl = document.getElementById('cart-total');
    const openCartBtns = document.querySelectorAll('.icon-cart, .search-btn');
    const closeCartBtn = document.getElementById('close-cart');
    const checkoutBtn = document.getElementById('checkout-btn');
    let cart = [];

    // Open cart
    openCartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (e.target.closest('.search-btn')) return;
            cartPanel.classList.add('active');
        });
    });

    // Close cart
    closeCartBtn.addEventListener('click', () => {
        cartPanel.classList.remove('active');
    });

    // Render cart
    function renderCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        cart.forEach((item, index) => {
            total += item.price * item.qty;
            const div = document.createElement('div');
            div.className = 'cart-item';
            div.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <div>
                    <h4>${item.name}</h4>
                    <p>₹${item.price} × ${item.qty}</p>
                </div>
                <button class="remove" data-index="${index}">&times;</button>
            `;
            cartItemsContainer.appendChild(div);
        });
        cartTotalEl.textContent = `Total: ₹ ${total}`;

        document.querySelectorAll('.remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = parseInt(e.target.dataset.index);
                cart.splice(idx, 1);
                renderCart();
            });
        });
    }

    // Add to cart
    document.querySelectorAll('.btn-add').forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.restaurant-card');
            const name = card.querySelector('h3').textContent;
            const priceText = card.querySelector('.price').textContent.replace('₹', '').trim();
            const price = parseInt(priceText);
            const img = card.querySelector('img').src;
            const existing = cart.find(i => i.name === name);
            if (existing) {
                existing.qty += 1;
            } else {
                cart.push({ name, price, img, qty: 1 });
            }
            renderCart();
            cartPanel.classList.add('active');
        });
    });

    // Category filter
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            restaurantCards.forEach(card => {
                const category = card.dataset.category;
                card.style.display = (filter === 'all' || category === filter) ? 'block' : 'none';
            });
        });
    });

    // Search
    function searchMenu() {
        const query = searchInput.value.toLowerCase();
        restaurantCards.forEach(card => {
            const name = card.querySelector('h3').textContent.toLowerCase();
            const category = card.dataset.category.toLowerCase();
            card.style.display = (name.includes(query) || category.includes(query)) ? 'block' : 'none';
        });
    }

    searchBtn.addEventListener('click', searchMenu);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') searchMenu();
    });

    // Checkout
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty.');
            return;
        }
        alert('Thank you! Your order has been placed.');
        cart = [];
        renderCart();
        cartPanel.classList.remove('active');
    });
});