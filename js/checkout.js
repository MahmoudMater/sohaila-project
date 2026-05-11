/**
 * checkout.js — BookVerse Enchanted Checkout
 * Reads order/cart from localStorage, renders summary, handles placement.
 */
'use strict';

const ORDER_KEY = 'bookverse_order';
const CART_KEY  = 'bookverse_cart';
const ORDERS_KEY = 'bookverse_orders';

function getMode() {
  return new URLSearchParams(window.location.search).get('mode') || 'cart';
}

function getOrder() {
  try { return JSON.parse(localStorage.getItem(ORDER_KEY) || 'null'); } catch { return null; }
}
function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY) || '[]'); } catch { return []; }
}

function renderCheckout() {
  const wrap = document.getElementById('checkoutContent');
  if (!wrap) return;

  const mode  = getMode();
  const items = [];

  if (mode === 'buynow') {
    const order = getOrder();
    if (order) items.push({ ...order, quantity: 1 });
  } else {
    const cart = getCart();
    cart.forEach(c => items.push(c));
  }

  if (items.length === 0) {
    wrap.innerHTML = `
      <div class="empty-cart">
        <span class="empty-cart-icon">🛒</span>
        <h2 style="font-family:'Playfair Display',serif;font-style:italic;color:var(--cream);margin-bottom:12px">Your cart is empty</h2>
        <p style="color:var(--cream-dim);margin-bottom:24px">Add some enchanted volumes to get started.</p>
        <a href="book-details.html?id=101" class="btn-back">← Browse Books</a>
      </div>`;
    return;
  }

  const total = items.reduce((s, i) => s + (i.price || 0) * (i.quantity || 1), 0);

  const itemsHtml = items.map(i => `
    <div class="order-item">
      <img src="${i.image || ''}" alt="${i.title}" onerror="this.style.display='none'">
      <div class="order-item-info">
        <div class="order-item-title">${i.title}</div>
        <div class="order-item-author">${i.author || ''} · ${i.store || ''}</div>
        ${i.quantity > 1 ? `<div class="order-item-qty">Qty: ${i.quantity}</div>` : ''}
      </div>
      <div class="order-item-price">${(i.price * (i.quantity||1)).toLocaleString()} <small style="font-size:13px;opacity:0.6">EGP</small></div>
    </div>
  `).join('');

  wrap.innerHTML = `
    <div class="checkout-grid">
      <div class="order-card">
        <h3>Order Summary</h3>
        ${itemsHtml}
        <div class="order-total">
          <span class="order-total-label">Total</span>
          <span class="order-total-value">${total.toLocaleString()} <small style="font-size:14px;opacity:0.6">EGP</small></span>
        </div>
      </div>
      <div class="checkout-form-card">
        <h3>Shipping Details</h3>
        <form id="checkoutForm" onsubmit="placeOrder(event)">
          <div class="form-group">
            <label class="form-label" for="coName">Full Name</label>
            <input class="form-input" id="coName" type="text" placeholder="Your full name" required>
          </div>
          <div class="form-group">
            <label class="form-label" for="coEmail">Email</label>
            <input class="form-input" id="coEmail" type="email" placeholder="your@email.com" required>
          </div>
          <div class="form-group">
            <label class="form-label" for="coAddress">Address</label>
            <input class="form-input" id="coAddress" type="text" placeholder="Street, city, country" required>
          </div>
          <div class="form-group">
            <label class="form-label" for="coPhone">Phone</label>
            <input class="form-input" id="coPhone" type="tel" placeholder="+20 xxx xxx xxxx">
          </div>
          <div class="form-group">
            <label class="form-label" for="coPayment">Payment Method</label>
            <select class="form-select" id="coPayment">
              <option value="cod">Cash on Delivery</option>
              <option value="card">Credit / Debit Card</option>
              <option value="wallet">E-Wallet</option>
            </select>
          </div>
          <button type="submit" class="btn-place-order">✦ Place Order ✦</button>
        </form>
      </div>
    </div>`;
}

function placeOrder(e) {
  e.preventDefault();
  const name    = document.getElementById('coName')?.value?.trim();
  const email   = document.getElementById('coEmail')?.value?.trim();
  const address = document.getElementById('coAddress')?.value?.trim();
  const phone   = document.getElementById('coPhone')?.value?.trim();
  const payment = document.getElementById('coPayment')?.value;

  if (!name || !email || !address) return;

  const mode  = getMode();
  const items = mode === 'buynow' ? [getOrder()] : getCart();
  const total = items.reduce((s, i) => s + ((i?.price || 0) * (i?.quantity || 1)), 0);

  const order = {
    id: Date.now(),
    date: new Date().toISOString(),
    items, total, name, email, address, phone, payment,
  };

  // Save to order history
  try {
    const history = JSON.parse(localStorage.getItem(ORDERS_KEY) || '[]');
    history.unshift(order);
    localStorage.setItem(ORDERS_KEY, JSON.stringify(history));
  } catch { /* storage full */ }

  // Clear the source
  if (mode === 'buynow') localStorage.removeItem(ORDER_KEY);
  else localStorage.setItem(CART_KEY, '[]');

  // Show confirmation
  const wrap = document.getElementById('checkoutContent');
  wrap.innerHTML = `
    <div class="confirmation">
      <span class="confirmation-icon">✨</span>
      <h2>Order Placed!</h2>
      <p>Thank you, <strong>${name}</strong>. Your enchanted volumes are on their way.<br>
      Order #${order.id} · Total: <strong>${total.toLocaleString()} EGP</strong></p>
      <a href="book-details.html?id=101" class="btn-back">← Continue Browsing</a>
    </div>`;
}

/* Theme support */
function applyStoredTheme() {
  const saved = localStorage.getItem('enchanted_theme');
  const icon  = document.getElementById('themeIconCo');
  if (saved === 'light') {
    document.body.classList.add('light-theme');
    if (icon) icon.textContent = '🌙';
  } else {
    document.body.classList.remove('light-theme');
    if (icon) icon.textContent = '☀️';
  }
}
function toggleTheme() {
  document.body.classList.toggle('light-theme');
  const isLight = document.body.classList.contains('light-theme');
  const icon = document.getElementById('themeIconCo');
  if (icon) icon.textContent = isLight ? '🌙' : '☀️';
  localStorage.setItem('enchanted_theme', isLight ? 'light' : 'dark');
}

document.addEventListener('DOMContentLoaded', () => {
  applyStoredTheme();
  renderCheckout();
});
