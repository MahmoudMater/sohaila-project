/**
 * book-details.js — BookVerse · Enchanted Library
 * ══════════════════════════════════════════════════
 * Handles all logic for book-details.html
 * Depends on: BookPage.js (booksData) + book-details-data.js (bookDetailsData)
 * ══════════════════════════════════════════════════
 */
 
'use strict';
 
/* ═══════════════════════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════════════════════ */
let currentBook       = null;   // merged book object
let previewPageIndex  = 0;      // current index in modal
let reviewsShown      = 0;      // how many reviews are rendered
let reviewRatingPicked = 0;     // star selected in write-review form
let descExpanded      = false;  // description toggle state
 
const REVIEWS_PER_BATCH = 4;
const FAV_KEY           = 'enchanted_favourites';
const REVIEWS_KEY       = 'bookverse_reviews';
const CART_KEY          = 'bookverse_cart';
const ORDER_KEY         = 'bookverse_order';

/* ─── Persistent reviews helpers ─── */
function loadUserReviews(bookId) {
  try {
    const all = JSON.parse(localStorage.getItem(REVIEWS_KEY) || '{}');
    return all[bookId] || [];
  } catch { return []; }
}
function saveUserReview(bookId, review) {
  try {
    const all = JSON.parse(localStorage.getItem(REVIEWS_KEY) || '{}');
    if (!all[bookId]) all[bookId] = [];
    all[bookId].unshift(review);
    localStorage.setItem(REVIEWS_KEY, JSON.stringify(all));
  } catch { /* storage unavailable */ }
}

/* ─── Cart helpers ─── */
function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY) || '[]'); }
  catch { return []; }
}
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}
function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (!badge) return;
  const count = getCart().reduce((s, i) => s + (i.quantity || 1), 0);
  badge.textContent = count;
  badge.setAttribute('data-count', count);
}
 
 
/* ═══════════════════════════════════════════════════════════════
   1. URL HELPERS
═══════════════════════════════════════════════════════════════ */
 
/**
 * Reads the `id` query-param from the current URL.
 * @returns {number|null} numeric book id or null
 */
function getBookIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  const raw    = params.get('id');
  return raw ? parseInt(raw, 10) : null;
}
 
/**
 * Merges base book from booksData with extended details from bookDetailsData.
 * @param {number} id
 * @returns {object|null}
 */
function getFullBook(id) {
  if (typeof booksData === 'undefined' || typeof bookDetailsData === 'undefined') {
    console.error('book-details.js: booksData or bookDetailsData not found.');
    return null;
  }
  const base    = booksData.find(b => b.id === id);
  const details = bookDetailsData[id];
  if (!base) return null;
  return { ...base, ...(details || {}) };
}
 
 
/* ═══════════════════════════════════════════════════════════════
   2. STAR RENDERER (shared utility)
═══════════════════════════════════════════════════════════════ */
 
/**
 * Generates star HTML from a numeric rating (0–5, supports halves).
 * @param {number} rating
 * @returns {string} HTML string of star spans
 */
function buildStarHTML(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      html += '<span class="star-filled">★</span>';
    } else if (rating >= i - 0.5) {
      html += '<span class="star-half">★</span>';
    } else {
      html += '<span class="star-empty">☆</span>';
    }
  }
  return html;
}
 
/**
 * Returns a string of star characters for a review card.
 * @param {number} rating integer 1–5
 * @returns {string}
 */
function buildReviewStars(rating) {
  return '★'.repeat(Math.max(0, Math.min(5, rating))) +
         '☆'.repeat(5 - Math.max(0, Math.min(5, rating)));
}
 
 
/* ═══════════════════════════════════════════════════════════════
   3. HERO SECTION
═══════════════════════════════════════════════════════════════ */
 
/**
 * Renders all hero-section elements for the given book.
 * @param {object} book
 */
function renderHeroSection(book) {
  // Page / browser title
  document.title = `${book.title} — BookVerse`;
  const pageTitle = document.getElementById('pageTitle');
  if (pageTitle) pageTitle.textContent = `${book.title} — BookVerse`;
 
  // Breadcrumb
  const crumb = document.getElementById('breadcrumbTitle');
  if (crumb) crumb.textContent = book.title;
 
  // Ambient background gradient from book's color palette
  const heroBg = document.getElementById('heroHeroBg');
  if (heroBg && book.color && book.color.length >= 2) {
    heroBg.style.background = `
      radial-gradient(ellipse 60% 80% at 30% 50%, ${book.color[0]}55 0%, transparent 65%),
      radial-gradient(ellipse 40% 60% at 80% 20%, ${book.color[1]}44 0%, transparent 55%),
      linear-gradient(160deg, var(--dark) 0%, var(--deep) 50%, var(--dark) 100%)
    `;
  }
 
  // Cover image
  const coverImg = document.getElementById('bookCover');
  if (coverImg) {
    coverImg.src = book.image || '';
    coverImg.alt = `${book.title} cover`;
  }
 
  // Badge
  const badge = document.getElementById('bookBadge');
  if (badge) {
    if (book.badge) {
      badge.textContent = `✦ ${book.badge.charAt(0).toUpperCase() + book.badge.slice(1)}`;
      badge.style.display = 'block';
    } else {
      badge.style.display = 'none';
    }
  }
 
  // Genre tag
  const genreTag = document.getElementById('bookGenreTag');
  if (genreTag) genreTag.textContent = capitalise(book.genre || '');
 
  // Title
  const titleEl = document.getElementById('bookTitle');
  if (titleEl) titleEl.textContent = book.title || 'Unknown Title';
 
  // Author
  const authorEl  = document.getElementById('bookAuthor');
  const authorLink = document.getElementById('bookAuthorLink');
  if (authorEl)  authorEl.textContent = book.author || '—';
  if (authorLink) authorLink.href = `AuthorsPage.html?author=${encodeURIComponent(book.author || '')}`;
 
  // Meta chips
  const publisherEl = document.getElementById('bookPublisher');
  const yearEl      = document.getElementById('bookYear');
  const langEl      = document.getElementById('bookLanguage');
  const pagesEl     = document.getElementById('bookPages');
  if (publisherEl) publisherEl.textContent = book.publisher || 'Unknown Publisher';
  if (yearEl)      yearEl.textContent      = formatYear(book.year);
  if (langEl)      langEl.textContent      = book.language || 'English';
  if (pagesEl)     pagesEl.textContent     = book.pages ? `${book.pages} pages` : 'Classic Edition';
 
  // Rating stars + number
  const starsEl  = document.getElementById('heroRatingStars');
  const ratingEl = document.getElementById('heroRatingValue');
  if (starsEl)  starsEl.innerHTML  = buildStarHTML(book.rating || 0);
  if (ratingEl) ratingEl.textContent = (book.rating || 0).toFixed(1);
 
  // Reviews count pill
  const reviewsPill = document.getElementById('heroReviewsCount');
  if (reviewsPill) {
    const count = book.reviewsCount || (book.reviews ? book.reviews.length : 0);
    reviewsPill.textContent = `${count.toLocaleString()} reviews`;
  }
 
  // Starting price (cheapest available)
  const priceEl = document.getElementById('heroMainPrice');
  if (priceEl) {
    if (book.prices && book.prices.length > 0) {
      const available = book.prices.filter(p => p.available !== false);
      const cheapest  = available.length > 0
        ? Math.min(...available.map(p => p.price))
        : Math.min(...book.prices.map(p => p.price));
      priceEl.textContent = cheapest > 0 ? cheapest.toLocaleString() : 'Free';
    } else {
      priceEl.textContent = '—';
    }
  }
 
  // Favourite button state
  updateFavouriteButtons(isFavourite(book.id));
 
  // Tags from genre + badge
  renderHeroTags(book);
}
 
/**
 * Renders genre/badge tags in hero section.
 */
function renderHeroTags(book) {
  const container = document.getElementById('heroTags');
  if (!container) return;
 
  const tags = [];
  if (book.genre)  tags.push(capitalise(book.genre));
  if (book.badge)  tags.push(capitalise(book.badge));
  if (book.year)   tags.push(formatYear(book.year));
  if (book.author) tags.push(book.author);
 
  container.innerHTML = tags
    .map(t => `<span class="hero-tag">${escapeHTML(t)}</span>`)
    .join('');
}
 
 
/* ═══════════════════════════════════════════════════════════════
   4. DESCRIPTION SECTION
═══════════════════════════════════════════════════════════════ */
 
/**
 * Renders book description and details grid.
 * @param {object} book
 */
function renderDescription(book) {
  const descEl = document.getElementById('bookDescription');
  if (descEl) descEl.textContent = book.desc || 'No description available for this volume.';
 
  // Details grid
  const grid = document.getElementById('detailsGrid');
  if (!grid) return;
 
  const items = [
    { label: 'Author',    value: book.author    || '—' },
    { label: 'Publisher', value: book.publisher || '—' },
    { label: 'Year',      value: formatYear(book.year) },
    { label: 'Genre',     value: capitalise(book.genre || '—') },
    { label: 'Language',  value: book.language  || 'English' },
    { label: 'Format',    value: book.format    || 'Paperback & Digital' },
  ];
 
  grid.innerHTML = items.map(item => `
    <div class="detail-item">
      <span class="detail-label">${escapeHTML(item.label)}</span>
      <span class="detail-value">${escapeHTML(item.value)}</span>
    </div>
  `).join('');
}
 
/**
 * Toggles description expand / collapse.
 * Called by onclick="toggleDescription()" in HTML.
 */
function toggleDescription() {
  const wrap   = document.querySelector('.description-text-wrap');
  const btnTxt = document.getElementById('readMoreBtnText');
  const arrow  = document.getElementById('readMoreArrow');
  const btn    = document.getElementById('readMoreBtn');
 
  if (!wrap) return;
  descExpanded = !descExpanded;
 
  wrap.classList.toggle('expanded', descExpanded);
  if (btnTxt)  btnTxt.textContent  = descExpanded ? 'Read Less' : 'Read More';
  if (arrow)   arrow.classList.toggle('rotated', descExpanded);
  if (btn)     btn.setAttribute('aria-expanded', descExpanded);
}
 
 
/* ═══════════════════════════════════════════════════════════════
   5. COMPARE PRICES
═══════════════════════════════════════════════════════════════ */
 
// Internal sorted copy used for rendering
let _sortedPrices = [];
 
/**
 * Renders the compare-prices table.
 * @param {object} book
 */
function renderPrices(book) {
  const prices = book.prices;
  const tbody  = document.getElementById('pricesTableBody');
  if (!tbody) return;
 
  if (!prices || prices.length === 0) {
    tbody.innerHTML = `
      <tr class="table-placeholder">
        <td colspan="5">
          <span class="placeholder-icon">⚖</span>
          <span>No price information available for this volume.</span>
        </td>
      </tr>`;
    return;
  }
 
  // Find cheapest available price
  const available = prices.filter(p => p.available !== false);
  const minPrice  = available.length > 0
    ? Math.min(...available.map(p => p.price))
    : null;
 
  // Cheapest note banner
  const noteEl   = document.getElementById('cheapestNote');
  const noteText = document.getElementById('cheapestNoteText');
  if (noteEl && noteText && minPrice !== null) {
    const bestStore = available.find(p => p.price === minPrice);
    noteEl.style.display  = 'flex';
    noteText.textContent  = `Best price: ${bestStore.store} at ${minPrice.toLocaleString()} EGP`;
  }
 
  // Store sorted copy
  _sortedPrices = [...prices];
 
  // Apply current sort
  const sortSel = document.getElementById('sortPricesSelect');
  if (sortSel) applySortPrices(sortSel.value, minPrice);
  else         renderPriceRows(_sortedPrices, minPrice);
}
 
/**
 * Sorts prices and re-renders rows.
 * Called by onchange="sortPrices(this.value)" in HTML.
 * @param {string} mode 'asc' | 'desc' | 'store'
 */
function sortPrices(mode) {
  applySortPrices(mode, getMinPrice());
}
 
function applySortPrices(mode, minPrice) {
  if (mode === 'asc') {
    _sortedPrices.sort((a, b) => a.price - b.price);
  } else if (mode === 'desc') {
    _sortedPrices.sort((a, b) => b.price - a.price);
  } else if (mode === 'store') {
    _sortedPrices.sort((a, b) => a.store.localeCompare(b.store));
  }
  renderPriceRows(_sortedPrices, minPrice != null ? minPrice : getMinPrice());
}
 
function getMinPrice() {
  if (!currentBook || !currentBook.prices) return null;
  const avail = currentBook.prices.filter(p => p.available !== false);
  return avail.length > 0 ? Math.min(...avail.map(p => p.price)) : null;
}
 
/**
 * Renders table rows for a given prices array.
 */
function renderPriceRows(prices, minPrice) {
  const tbody = document.getElementById('pricesTableBody');
  if (!tbody) return;
 
  tbody.innerHTML = prices.map(p => {
    const isCheapest = p.available !== false && p.price === minPrice;
    const rowClass   = isCheapest ? 'cheapest-row' : '';
    const storeName  = isCheapest
      ? `<span class="store-name">${escapeHTML(p.store)} <span class="cheapest-star">Best Price</span></span>`
      : `<span class="store-name">${escapeHTML(p.store)}</span>`;
    const availability = p.available !== false
      ? '<span class="avail-yes">In Stock</span>'
      : '<span class="avail-no">Out of Stock</span>';
    const price = p.price === 0
      ? '<span class="price-cell">Free</span>'
      : `<span class="price-cell">${p.price.toLocaleString()} <small style="font-size:13px;color:rgba(201,168,76,0.6)">EGP</small></span>`;
    const buyBtn = p.available !== false
      ? `<button class="btn-buy-store" onclick="buyFromStore('${escapeHTML(p.store)}')">🛒 Buy</button>`
      : `<button class="btn-buy-store" disabled style="opacity:0.35;cursor:not-allowed;">Unavailable</button>`;
 
    return `
      <tr class="${rowClass}">
        <td>${storeName}</td>
        <td>${price}</td>
        <td style="font-size:15px;color:rgba(247,237,216,0.55)">${escapeHTML(p.delivery || '—')}</td>
        <td>${availability}</td>
        <td>${buyBtn}</td>
      </tr>`;
  }).join('');
}
 
/**
 * Simulates buying from a specific store.
 */
function buyFromStore(storeName) {
  if (!currentBook) return;
  const storePrice = (currentBook.prices || []).find(p => p.store === storeName);
  const order = {
    id: currentBook.id, title: currentBook.title, author: currentBook.author,
    image: currentBook.image, price: storePrice ? storePrice.price : 0,
    store: storeName, currency: 'EGP'
  };
  localStorage.setItem(ORDER_KEY, JSON.stringify(order));
  window.location.href = 'checkout.html?mode=buynow';
}
 
 
/* ═══════════════════════════════════════════════════════════════
   6. PREVIEW SECTION & MODAL
═══════════════════════════════════════════════════════════════ */
 
/**
 * Renders preview thumbnail cards.
 * @param {object} book
 */
function renderPreview(book) {
  const grid = document.getElementById('previewThumbsGrid');
  if (!grid) return;
 
  const pages = book.previewPages;
  if (!pages || pages.length === 0) {
    grid.innerHTML = `
      <div class="preview-thumb-placeholder glass-card">
        <span class="preview-thumb-icon">📄</span>
        <span>No preview available</span>
      </div>`;
    return;
  }
 
  grid.innerHTML = pages.map((pg, idx) => `
    <div class="preview-thumb-card glass-card" onclick="openPreviewModal(${idx})" role="button" tabindex="0"
         aria-label="Open preview at page ${pg.page}">
      <div class="preview-thumb-text">${escapeHTML(pg.text.substring(0, 200))}…</div>
      <div class="preview-thumb-footer">Page ${pg.page}</div>
      <div class="preview-thumb-overlay">
        <button class="preview-thumb-open-btn">Open ✦</button>
      </div>
    </div>
  `).join('');
 
  // Keyboard accessibility for thumb cards
  grid.querySelectorAll('.preview-thumb-card').forEach((card, idx) => {
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') openPreviewModal(idx);
    });
  });
}
 
/**
 * Opens the preview modal at a given page index.
 * @param {number} [startIndex=0]
 */
function openPreviewModal(startIndex = 0) {
  const modal = document.getElementById('previewModal');
  if (!modal || !currentBook) return;
 
  previewPageIndex = startIndex;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
 
  renderModalPage();
}
 
/**
 * Closes the preview modal.
 * Called by onclick="closePreviewModal()" in HTML.
 */
function closePreviewModal() {
  const modal = document.getElementById('previewModal');
  if (!modal) return;
  modal.style.display = 'none';
  document.body.style.overflow = '';
}
 
/**
 * Renders the currently active preview page inside the modal.
 */
function renderModalPage() {
  if (!currentBook || !currentBook.previewPages) return;
 
  const pages   = currentBook.previewPages;
  const page    = pages[previewPageIndex];
  const total   = pages.length;
  const container = document.getElementById('previewPagesContainer');
  const counterCurrent = document.getElementById('previewCurrentPage');
  const counterTotal   = document.getElementById('previewTotalPages');
  const prevBtn        = document.getElementById('prevPageBtn');
  const nextBtn        = document.getElementById('nextPageBtn');
  const modalTitle     = document.getElementById('previewModalTitle');
 
  if (modalTitle) modalTitle.textContent = `Sample Preview — ${currentBook.title}`;
  if (counterCurrent) counterCurrent.textContent = previewPageIndex + 1;
  if (counterTotal)   counterTotal.textContent   = total;
  if (prevBtn) prevBtn.disabled = previewPageIndex === 0;
  if (nextBtn) nextBtn.disabled = previewPageIndex === total - 1;
 
  if (container) {
    container.innerHTML = page
      ? `<div class="preview-page-content">
           <span class="preview-page-label">Page ${page.page}</span>
           ${escapeHTML(page.text)}
         </div>`
      : `<div class="preview-page-placeholder">
           <span class="page-placeholder-icon">📖</span>
           <p>No content for this page.</p>
         </div>`;
  }
}
 
/** Navigate to previous preview page. */
function previewPrevPage() {
  if (previewPageIndex > 0) {
    previewPageIndex--;
    renderModalPage();
  }
}
 
/** Navigate to next preview page. */
function previewNextPage() {
  if (!currentBook || !currentBook.previewPages) return;
  if (previewPageIndex < currentBook.previewPages.length - 1) {
    previewPageIndex++;
    renderModalPage();
  }
}
 
 
/* ═══════════════════════════════════════════════════════════════
   7. RATINGS SECTION
═══════════════════════════════════════════════════════════════ */
 
/**
 * Renders rating analytics (average, stars, bar chart).
 * Derives star distribution from reviews array.
 * @param {object} book
 */
function renderRatings(book) {
  const avgEl    = document.getElementById('ratingsAvgValue');
  const starsEl  = document.getElementById('ratingsAvgStars');
  const totalEl  = document.getElementById('ratingsAvgTotal');
 
  const avg = book.rating || 0;
  if (avgEl)   avgEl.textContent  = avg.toFixed(1);
  if (starsEl) starsEl.innerHTML  = buildStarHTML(avg);
  if (totalEl) totalEl.textContent = `${(book.reviewsCount || 0).toLocaleString()} ratings`;
 
  // Derive distribution percentages from reviews (or use realistic estimates)
  const userRevs = loadUserReviews(book.id);
  const reviews = [
    ...(book.reviews || []),
    ...userRevs
  ];
 
  const dist = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  if (reviews.length > 0) {
    reviews.forEach(r => {
      const key = Math.round(Math.max(1, Math.min(5, r.rating)));
      if (dist[key] !== undefined) dist[key]++;
    });
  } else {
    // Estimate realistic distribution based on average rating
    const a = avg;
    dist[5] = Math.round(a >= 4.5 ? 70 : a >= 4 ? 50 : 30);
    dist[4] = Math.round(a >= 4   ? 20 : 30);
    dist[3] = Math.round(a >= 4   ? 7  : 15);
    dist[2] = Math.round(3);
    dist[1] = 100 - dist[5] - dist[4] - dist[3] - dist[2];
  }
 
  const total = Object.values(dist).reduce((s, v) => s + v, 0) || 1;
 
  [5, 4, 3, 2, 1].forEach(star => {
    const count = dist[star];
    const pct   = Math.round((count / total) * 100);
    const bar   = document.getElementById(`ratingBar${star}`);
    const pctEl = document.getElementById(`ratingPct${star}`);
    const cntEl = document.getElementById(`ratingCount${star}`);
 
    if (bar)   bar.style.width   = `${pct}%`;
    if (pctEl) pctEl.textContent = `${pct}%`;
    if (cntEl) cntEl.textContent = reviews.length > 0 ? `(${count})` : '';
  });
}
 
 
/* ═══════════════════════════════════════════════════════════════
   8. REVIEWS SECTION
═══════════════════════════════════════════════════════════════ */
 
/**
 * Renders review cards.
 * @param {object} book
 */
function renderReviews(book) {
  const userRevs = loadUserReviews(book.id);
  const all = [
    ...userRevs,
    ...(book.reviews || [])
  ];
 
  reviewsShown = 0;
  updateReviewsCount(all.length);
  displayReviewsBatch(all, 'newest');
}
 
/**
 * Updates the reviews count badge.
 */
function updateReviewsCount(count) {
  const el = document.getElementById('reviewsCount');
  if (el) el.textContent = count;
}
 
/**
 * Applies sort + renders first batch of reviews.
 * @param {object[]} reviews
 * @param {string}   sortMode
 */
function displayReviewsBatch(reviews, sortMode) {
  const sorted = sortReviewsArray([...reviews], sortMode);
  const container = document.getElementById('reviewsContainer');
  const placeholder = document.getElementById('reviewsPlaceholder');
  const loadMore    = document.getElementById('loadMoreReviews');
 
  if (!container) return;
 
  // Remove placeholder
  if (placeholder) placeholder.remove();
 
  // Clear existing cards (but not placeholder)
  container.querySelectorAll('.review-card').forEach(el => el.remove());
 
  reviewsShown = Math.min(REVIEWS_PER_BATCH, sorted.length);
 
  if (sorted.length === 0) {
    container.innerHTML = `
      <div class="reviews-placeholder" id="reviewsPlaceholder">
        <span class="placeholder-icon">💬</span>
        <p>No reviews yet — be the first to share your thoughts!</p>
      </div>`;
    if (loadMore) loadMore.style.display = 'none';
    return;
  }
 
  const fragment = document.createDocumentFragment();
  sorted.slice(0, reviewsShown).forEach(r => {
    fragment.appendChild(buildReviewCard(r));
  });
  container.appendChild(fragment);
 
  if (loadMore) {
    loadMore.style.display = sorted.length > reviewsShown ? 'block' : 'none';
  }
 
  // Store sorted array on DOM for load-more
  container.dataset.sortedReviews = JSON.stringify(sorted);
}
 
/**
 * Builds a single review card element.
 * @param {object} r review object
 * @returns {HTMLElement}
 */
function buildReviewCard(r) {
  const article = document.createElement('article');
  article.className = 'review-card glass-card reveal';
 
  const name    = escapeHTML(r.user || r.username || 'Anonymous');
  const initial = (r.avatar || name.charAt(0) || 'A').toUpperCase();
  const date    = formatReviewDate(r.date);
  const stars   = buildReviewStars(r.rating || 5);
  const comment = escapeHTML(r.comment || '');
 
  article.innerHTML = `
    <div class="review-card-header">
      <div class="reviewer-avatar" aria-label="User avatar">
        <span class="avatar-initials">${initial}</span>
      </div>
      <div class="reviewer-meta">
        <span class="reviewer-name">${name}</span>
        <span class="reviewer-date">${date}</span>
      </div>
      <div class="review-stars" aria-label="Rating ${r.rating} out of 5">${stars}</div>
    </div>
    <p class="review-body">${comment}</p>
    <div class="review-helpful-row">
      <button class="helpful-btn" onclick="markHelpful(this)">👍 Helpful</button>
      <button class="helpful-btn" onclick="markHelpful(this, false)">👎 Not Helpful</button>
    </div>`;
 
  return article;
}
 
/**
 * Marks a review as helpful / not helpful.
 */
function markHelpful(btn, helpful = true) {
  btn.disabled = true;
  btn.style.opacity = '0.5';
  showToast(helpful ? 'Thanks for your feedback! 👍' : 'Feedback noted.');
}
 
/**
 * Sort reviews by a given mode.
 * Called by onchange="sortReviews(this.value)" in HTML.
 * @param {string} mode
 */
function sortReviews(mode) {
  if (!currentBook) return;
  const userRevs = loadUserReviews(currentBook.id);
  const all = [
    ...userRevs,
    ...(currentBook.reviews || [])
  ];
  displayReviewsBatch(all, mode);
}
 
/**
 * Sorts a reviews array in-place.
 */
function sortReviewsArray(arr, mode) {
  switch (mode) {
    case 'newest':
      return arr.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
    case 'oldest':
      return arr.sort((a, b) => new Date(a.date || 0) - new Date(b.date || 0));
    case 'highest':
      return arr.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    case 'lowest':
      return arr.sort((a, b) => (a.rating || 0) - (b.rating || 0));
    default:
      return arr;
  }
}
 
/**
 * Loads the next batch of reviews.
 * Called by onclick="loadMoreReviews()" in HTML.
 */
function loadMoreReviews() {
  const container = document.getElementById('reviewsContainer');
  const loadMore  = document.getElementById('loadMoreReviews');
  if (!container) return;
 
  let sorted = [];
  try { sorted = JSON.parse(container.dataset.sortedReviews || '[]'); } catch { return; }
 
  const nextBatch = sorted.slice(reviewsShown, reviewsShown + REVIEWS_PER_BATCH);
  reviewsShown   += nextBatch.length;
 
  const fragment = document.createDocumentFragment();
  nextBatch.forEach(r => fragment.appendChild(buildReviewCard(r)));
  container.appendChild(fragment);
 
  // Trigger reveal on new cards
  container.querySelectorAll('.review-card.reveal').forEach(el => {
    if (!el.classList.contains('visible')) {
      setTimeout(() => el.classList.add('visible'), 50);
    }
  });
 
  if (loadMore) {
    loadMore.style.display = reviewsShown >= sorted.length ? 'none' : 'block';
  }
}
 
/**
 * Toggles the write-review panel.
 * Called by onclick="toggleWriteReview()" in HTML.
 */
function toggleWriteReview() {
  const panel  = document.getElementById('writeReviewForm');
  const toggle = document.getElementById('writeReviewToggleBtn');
  if (!panel) return;
 
  const isHidden = panel.style.display === 'none' || panel.style.display === '';
  panel.style.display   = isHidden ? 'block' : 'none';
  panel.setAttribute('aria-hidden', !isHidden);
  if (toggle) toggle.setAttribute('aria-expanded', isHidden);
 
  if (isHidden) {
    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}
 
/**
 * Handles star selection in the write-review form.
 * Called by onclick="pickStar(n)" in HTML.
 * @param {number} value 1–5
 */
function pickStar(value) {
  reviewRatingPicked = value;
  const ratingInput  = document.getElementById('reviewRatingValue');
  if (ratingInput) ratingInput.value = value;
 
  document.querySelectorAll('.star-pick-btn').forEach(btn => {
    const v = parseInt(btn.dataset.value, 10);
    btn.classList.toggle('active', v <= value);
  });
}
 
/**
 * Submits a new review from the write-review form.
 * Called by onclick="submitReview()" in HTML.
 */
function submitReview() {
  const username = (document.getElementById('reviewUsername')?.value || '').trim();
  const comment  = (document.getElementById('reviewComment')?.value  || '').trim();
  const rating   = reviewRatingPicked;
 
  // Validation
  if (!username) { showToast('Please enter your name. ✏'); return; }
  if (!comment)  { showToast('Please write something about the book. 📝'); return; }
  if (!rating)   { showToast('Please select a star rating. ★'); return; }
 
  const newReview = {
    user:    username,
    avatar:  username.charAt(0).toUpperCase(),
    rating,
    date:    new Date().toISOString().split('T')[0],
    comment,
  };
 
  // Persist to localStorage
  if (currentBook) saveUserReview(currentBook.id, newReview);
 
  // Reset form
  document.getElementById('reviewUsername').value = '';
  document.getElementById('reviewComment').value  = '';
  reviewRatingPicked = 0;
  document.querySelectorAll('.star-pick-btn').forEach(b => b.classList.remove('active'));
 
  // Hide panel and re-render
  toggleWriteReview();
  if (currentBook) {
    renderReviews(currentBook);
    renderRatings(currentBook);
  }
 
  showToast('Your review has been published! ✦');
}
 
 
/* ═══════════════════════════════════════════════════════════════
   9. RELATED BOOKS SECTION
═══════════════════════════════════════════════════════════════ */
 
/**
 * Renders the related books grid.
 * @param {object} book
 */
function renderRelatedBooks(book) {
  const grid = document.getElementById('relatedBooksGrid');
  if (!grid) return;
 
  const relatedIds = book.relatedBooks || [];
  if (relatedIds.length === 0 || typeof booksData === 'undefined') {
    grid.innerHTML = '<p style="color:rgba(247,237,216,0.3);font-style:italic;">No related volumes found.</p>';
    return;
  }
 
  const related = relatedIds
    .map(id => booksData.find(b => b.id === id))
    .filter(Boolean)
    .slice(0, 6);
 
  if (related.length === 0) {
    grid.innerHTML = '<p style="color:rgba(247,237,216,0.3);font-style:italic;">No related volumes found.</p>';
    return;
  }
 
  grid.innerHTML = related.map(rb => `
    <article class="related-book-card glass-card" onclick="goToBook(${rb.id})"
             role="button" tabindex="0" aria-label="View details for ${escapeHTML(rb.title)}">
      <div class="related-cover-wrap">
        <img src="${escapeHTML(rb.image || '')}" alt="${escapeHTML(rb.title)} cover"
             class="related-cover-img" loading="lazy"
             onerror="this.style.background='var(--warm)'; this.style.display='block';" />
        <div class="related-cover-overlay">
          <button class="related-view-btn">View Details</button>
        </div>
      </div>
      <div class="related-book-info">
        <span class="related-genre-tag">${escapeHTML(capitalise(rb.genre || ''))}</span>
        <h4 class="related-book-title">${escapeHTML(rb.title)}</h4>
        <p class="related-book-author">${escapeHTML(rb.author || '')}</p>
        <div class="related-book-rating" aria-label="Rating ${rb.rating}">
          ${buildStarHTML(rb.rating || 0)} ${(rb.rating || 0).toFixed(1)}
        </div>
      </div>
    </article>
  `).join('');
 
  // Keyboard accessibility
  grid.querySelectorAll('.related-book-card').forEach((card, idx) => {
    const rb = related[idx];
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') goToBook(rb.id);
    });
  });
}
 
/**
 * Navigates to another book's details page.
 * @param {number} id
 */
function goToBook(id) {
  window.location.href = `book-details.html?id=${id}`;
}
 
 
/* ═══════════════════════════════════════════════════════════════
   10. FAVOURITES
═══════════════════════════════════════════════════════════════ */
 
/**
 * Checks whether a book id is in localStorage favourites.
 * @param {number} id
 * @returns {boolean}
 */
function isFavourite(id) {
  try {
    const fav = JSON.parse(localStorage.getItem(FAV_KEY) || '[]');
    return fav.includes(id);
  } catch { return false; }
}
 
/**
 * Adds a book to localStorage favourites.
 * @param {object} book
 */
function addToFavorites(book) {
  try {
    const fav = JSON.parse(localStorage.getItem(FAV_KEY) || '[]');
    if (!fav.includes(book.id)) {
      fav.push(book.id);
      localStorage.setItem(FAV_KEY, JSON.stringify(fav));
    }
  } catch { /* storage unavailable */ }
}
 
/**
 * Removes a book from localStorage favourites.
 * @param {object} book
 */
function removeFromFavorites(book) {
  try {
    const fav = JSON.parse(localStorage.getItem(FAV_KEY) || '[]');
    localStorage.setItem(FAV_KEY, JSON.stringify(fav.filter(id => id !== book.id)));
  } catch { /* storage unavailable */ }
}
 
/**
 * Toggles favourite state.
 * Called by onclick="toggleFavourite()" in HTML.
 */
function toggleFavourite() {
  if (!currentBook) return;
  const wasFav = isFavourite(currentBook.id);
 
  if (wasFav) {
    removeFromFavorites(currentBook);
    showToast(`Removed "${currentBook.title}" from favourites. 💔`);
  } else {
    addToFavorites(currentBook);
    showToast(`"${currentBook.title}" added to favourites! ♡`);
  }
 
  updateFavouriteButtons(!wasFav);
}
 
/**
 * Updates both the hero and cover favourite buttons.
 * @param {boolean} isFav
 */
function updateFavouriteButtons(isFav) {
  const heroIcon  = document.getElementById('heroFavIcon');
  const heroText  = document.getElementById('heroFavText');
  const quickBtn  = document.getElementById('quickFavBtn');
  const heroBtn   = document.getElementById('heroFavBtn');
  const quickIcon = quickBtn ? quickBtn.querySelector('.quick-icon') : null;
 
  if (heroIcon) heroIcon.textContent = isFav ? '♥' : '♡';
  if (heroText) heroText.textContent = isFav ? 'In Favourites' : 'Add to Favourites';
  if (quickIcon) quickIcon.textContent = isFav ? '♥' : '♡';
  if (quickBtn) quickBtn.classList.toggle('fav-active', isFav);
  if (heroBtn)  heroBtn.classList.toggle('fav-active', isFav);
}
 
 
/* ═══════════════════════════════════════════════════════════════
   11. CTA BUTTON HANDLERS
═══════════════════════════════════════════════════════════════ */
 
/**
 * Buy Now — redirects to cheapest store link (or shows toast).
 * Called by onclick="buyNow()" in HTML.
 */
function buyNow() {
  if (!currentBook) return;
  const avail = (currentBook.prices || []).filter(p => p.available !== false);
  const cheapest = avail.length > 0 ? avail.reduce((a,b) => a.price < b.price ? a : b) : null;
  const order = {
    id: currentBook.id, title: currentBook.title, author: currentBook.author,
    image: currentBook.image, price: cheapest ? cheapest.price : 0,
    store: cheapest ? cheapest.store : 'BookVerse', currency: 'EGP'
  };
  localStorage.setItem(ORDER_KEY, JSON.stringify(order));
  window.location.href = 'checkout.html?mode=buynow';
}
 
/**
 * Share the book page.
 * Called by onclick="shareBook()" in HTML.
 */
function shareBook() {
  const url   = window.location.href;
  const title = currentBook ? currentBook.title : 'Book Details';
  if (navigator.share) {
    navigator.share({ title, url }).catch(() => {});
  } else {
    navigator.clipboard.writeText(url)
      .then(() => showToast('Link copied to clipboard! ⎘'))
      .catch(() => showToast('Copy this link: ' + url));
  }
}
 
/**
 * Opens print dialog.
 * Called by onclick="printDetails()" in HTML.
 */
function printDetails() {
  window.print();
}
 
/**
 * Scrolls smoothly to a section by ID.
 * Called by onclick="scrollToSection('comparePricesSection')" in HTML.
 * @param {string} sectionId
 */
function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
 
/**
 * Newsletter subscription handler.
 * Called by onclick="subscribeNewsletter()" in HTML.
 */
function subscribeNewsletter() {
  const input = document.getElementById('newsletterEmail');
  const email = input ? input.value.trim() : '';
  if (!email || !email.includes('@')) {
    showToast('Please enter a valid email address. 📬');
    return;
  }
  if (input) input.value = '';
  showToast('You\'re subscribed! Enchanted reads await. ✦');
}
 
/**
 * Buys from a store (table button).
 * Defined separately for table rows.
 */
// Already defined above as buyFromStore()
 
 
/* ═══════════════════════════════════════════════════════════════
   12. TOAST NOTIFICATION
═══════════════════════════════════════════════════════════════ */
 
let _toastTimer = null;
 
/**
 * Shows a toast notification message.
 * @param {string} message
 * @param {number} [duration=3000] ms
 */
function showToast(message, duration = 3000) {
  const toast   = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  if (!toast || !toastMsg) return;
 
  if (_toastTimer) clearTimeout(_toastTimer);
 
  toastMsg.textContent = message;
  toast.classList.add('show');
 
  _toastTimer = setTimeout(() => {
    toast.classList.remove('show');
    _toastTimer = null;
  }, duration);
}
 
 
/* ═══════════════════════════════════════════════════════════════
   13. FLOATING PARTICLES
═══════════════════════════════════════════════════════════════ */
 
/**
 * Creates animated floating particles in the background.
 */
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
 
  const count = window.innerWidth < 768 ? 18 : 30;
  const colors = [
    'rgba(201,168,76,0.6)',
    'rgba(201,168,76,0.3)',
    'rgba(247,237,216,0.2)',
    'rgba(139,26,58,0.3)',
    'rgba(201,168,76,0.15)',
  ];
 
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
 
    const size  = Math.random() * 4 + 1;
    const left  = Math.random() * 100;
    const delay = Math.random() * 20;
    const dur   = Math.random() * 15 + 10;
    const color = colors[Math.floor(Math.random() * colors.length)];
 
    Object.assign(p.style, {
      width:               `${size}px`,
      height:              `${size}px`,
      left:                `${left}%`,
      animationDelay:      `${delay}s`,
      animationDuration:   `${dur}s`,
      background:          color,
    });
 
    container.appendChild(p);
  }
}
 
 
/* ═══════════════════════════════════════════════════════════════
   14. SCROLL REVEAL
═══════════════════════════════════════════════════════════════ */
 
/**
 * Sets up IntersectionObserver to fade-in .reveal elements on scroll.
 */
function initScrollReveal() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
 
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
 
/**
 * Re-observes any dynamically added .reveal elements.
 */
function observeNewRevealElements() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
}
 
 
/* ═══════════════════════════════════════════════════════════════
   15. NAVIGATION (mobile hamburger + drawer)
═══════════════════════════════════════════════════════════════ */
 
/**
 * Sets up hamburger menu and nav drawer behaviour.
 */
function setupNavigation() {
  const hamburger = document.getElementById('navHamburger');
  const drawer    = document.getElementById('navDrawer');
  const close     = document.getElementById('navDrawerClose');
 
  if (hamburger && drawer) {
    hamburger.addEventListener('click', () => drawer.classList.add('open'));
  }
  if (close && drawer) {
    close.addEventListener('click', () => drawer.classList.remove('open'));
  }
  // Close drawer on outside click
  document.addEventListener('click', e => {
    if (drawer && drawer.classList.contains('open')) {
      if (!drawer.contains(e.target) && !hamburger?.contains(e.target)) {
        drawer.classList.remove('open');
      }
    }
  });
}
 
 
/* ═══════════════════════════════════════════════════════════════
   16. MODAL KEYBOARD & OUTSIDE-CLICK
═══════════════════════════════════════════════════════════════ */
 
/**
 * Sets up modal close behaviour (outside click, Escape key).
 */
function setupModalBehaviour() {
  const overlay = document.getElementById('previewModal');
  if (!overlay) return;
 
  // Close on click outside modal card
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closePreviewModal();
  });
 
  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.style.display === 'flex') {
      closePreviewModal();
    }
    // Arrow key navigation inside modal
    if (overlay.style.display === 'flex') {
      if (e.key === 'ArrowRight') previewNextPage();
      if (e.key === 'ArrowLeft')  previewPrevPage();
    }
  });
}
 
 
/* ═══════════════════════════════════════════════════════════════
   17. RATINGS BAR ANIMATION TRIGGER
═══════════════════════════════════════════════════════════════ */
 
/**
 * Animates rating bars into view when ratings section is visible.
 */
function setupRatingBarAnimation() {
  const ratingsSection = document.getElementById('ratingsSection');
  if (!ratingsSection) return;
 
  const bars = document.querySelectorAll('.bar-fill');
  // Store target widths then reset to 0 for animation
  const targets = Array.from(bars).map(b => b.style.width);
  bars.forEach(b => { b.dataset.targetWidth = b.style.width; b.style.width = '0%'; });
 
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        bars.forEach(b => {
          requestAnimationFrame(() => { b.style.width = b.dataset.targetWidth || '0%'; });
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
 
  observer.observe(ratingsSection);
}
 
 
/* ═══════════════════════════════════════════════════════════════
   18. FALLBACK UI (book not found)
═══════════════════════════════════════════════════════════════ */
 
/**
 * Renders a graceful "book not found" state.
 */
function renderNotFound() {
  document.title = 'Book Not Found — BookVerse';
 
  const heroSection = document.getElementById('heroSection');
  if (heroSection) {
    heroSection.innerHTML = `
      <div class="hero-bg" aria-hidden="true"></div>
      <div class="hero-inner" style="justify-content:center;text-align:center;flex-direction:column;gap:24px;min-height:400px;">
        <div style="font-size:64px;opacity:0.3;">📚</div>
        <h1 class="hero-title" style="font-size:40px;">Volume Not Found</h1>
        <p class="hero-author" style="max-width:500px;margin:0 auto;">
          This page in the enchanted library seems to have vanished. Please return to the library.
        </p>
        <div class="hero-buttons" style="justify-content:center;">
          <a href="BookPage.html" class="btn-primary" style="display:inline-flex;align-items:center;gap:8px;text-decoration:none;">
            <span>← Return to Library</span>
          </a>
        </div>
      </div>`;
    heroSection.classList.add('visible');
  }
 
  // Hide all other sections
  ['descriptionSection','comparePricesSection','previewSection',
   'ratingsSection','reviewsSection','relatedSection'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
  document.querySelectorAll('.section-divider').forEach(el => el.style.display = 'none');
}
 
 
/* ═══════════════════════════════════════════════════════════════
   19. UTILITY HELPERS
═══════════════════════════════════════════════════════════════ */
 
/**
 * Capitalises the first letter of a string.
 * @param {string} str
 * @returns {string}
 */
function capitalise(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
 
/**
 * Escapes HTML special characters to prevent XSS.
 * @param {string} str
 * @returns {string}
 */
function escapeHTML(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g,  '&amp;')
    .replace(/</g,  '&lt;')
    .replace(/>/g,  '&gt;')
    .replace(/"/g,  '&quot;')
    .replace(/'/g,  '&#39;');
}
 
/**
 * Formats a year number, handling BCE dates.
 * @param {number} year
 * @returns {string}
 */
function formatYear(year) {
  if (year == null) return '—';
  if (year < 0)    return `${Math.abs(year)} BC`;
  return String(year);
}
 
/**
 * Formats a date string for display in review cards.
 * @param {string} dateStr  e.g. '2024-11-10'
 * @returns {string}
 */
function formatReviewDate(dateStr) {
  if (!dateStr) return '—';
  try {
    return new Date(dateStr).toLocaleDateString('en-GB', {
      day: 'numeric', month: 'long', year: 'numeric'
    });
  } catch { return dateStr; }
}
 
 
/* ═══════════════════════════════════════════════════════════════
   20. ADD TO CART
═══════════════════════════════════════════════════════════════ */

function addToCart() {
  if (!currentBook) return;
  const avail = (currentBook.prices || []).filter(p => p.available !== false);
  const cheapest = avail.length > 0 ? avail.reduce((a,b) => a.price < b.price ? a : b) : null;
  const cart = getCart();
  const existing = cart.find(i => i.id === currentBook.id);
  if (existing) {
    existing.quantity = (existing.quantity || 1) + 1;
  } else {
    cart.push({
      id: currentBook.id, title: currentBook.title, author: currentBook.author,
      image: currentBook.image, price: cheapest ? cheapest.price : 0,
      store: cheapest ? cheapest.store : 'BookVerse', currency: 'EGP', quantity: 1
    });
  }
  saveCart(cart);
  updateCartBadge();
  showToast(`🛒 "${currentBook.title}" added to cart!`);
}


/* ═══════════════════════════════════════════════════════════════
   21. VIDEO PREVIEW
═══════════════════════════════════════════════════════════════ */



function renderVideoSection(book) {
  const section = document.getElementById('videoSection');
  const divider = document.getElementById('videoDivider');
  const wrapper = document.getElementById('videoWrapper');

  if (!section || !wrapper) return;

  if (!book.video) {
    section.style.display = 'none';
    if (divider) divider.style.display = 'none';
    return;
  }

  section.style.display = '';
  if (divider) divider.style.display = '';

  // Extract video ID from embed URL
  const videoId = book.video.split('/embed/')[1]?.split('?')[0];
  const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const youtubeLink = `https://www.youtube.com/watch?v=${videoId}`;

  wrapper.innerHTML = `
    <div onclick="window.open('${youtubeLink}', '_blank')" style="
      position: relative;
      cursor: pointer;
      border-radius: 12px;
      overflow: hidden;
      aspect-ratio: 16/9;
      width: 100%;
      max-height: 400px;
    ">
      <img src="${thumbnail}" alt="Video preview for ${book.title}" style="
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      ">
      <div style="
        position: absolute;
        inset: 0;
        background: rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.3s;
      " onmouseover="this.style.background='rgba(0,0,0,0.15)'"
         onmouseout="this.style.background='rgba(0,0,0,0.3)'">
        <div style="
          width: 72px;
          height: 72px;
          background: rgba(255,0,0,0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <div style="
            width: 0;
            height: 0;
            border-top: 14px solid transparent;
            border-bottom: 14px solid transparent;
            border-left: 24px solid white;
            margin-left: 5px;
          "></div>
        </div>
      </div>
    </div>
  `;
}


/* ═══════════════════════════════════════════════════════════════
   22. LANGUAGE SYSTEM (Arabic / English)
═══════════════════════════════════════════════════════════════ */

const LANG_KEY = 'lang';

const UI_TRANSLATIONS = {
  // Nav
  'nav.home': { en: 'Home', ar: 'الرئيسية' },
  'nav.browse': { en: 'Browse', ar: 'تصفح' },
  'nav.search': { en: 'Search', ar: 'بحث' },
  'nav.library': { en: 'My Library', ar: 'مكتبتي' },
  'nav.moments': { en: 'Moments', ar: 'لحظات' },
  'lang.toggle': { en: 'Arabic', ar: 'English' },
  // Back bar
  'back.return': { en: 'Return to Library', ar: 'العودة للمكتبة' },
  'bread.home': { en: 'Home', ar: 'الرئيسية' },
  'bread.browse': { en: 'Browse', ar: 'تصفح' },
  // Hero
  'hero.by': { en: 'by', ar: 'بقلم' },
  'hero.starting': { en: 'Starting from', ar: 'يبدأ من' },
  'hero.currency': { en: 'EGP', ar: 'ج.م' },
  'hero.preview': { en: 'Preview Sample', ar: 'معاينة' },
  'hero.compare': { en: 'Compare Prices', ar: 'مقارنة الأسعار' },
  'hero.fav': { en: 'Add to Favourites', ar: 'أضف للمفضلة' },
  'hero.fav.in': { en: 'In Favourites', ar: 'في المفضلة' },
  'hero.buy': { en: 'Buy Now', ar: 'اشترِ الآن' },
  'hero.cart': { en: 'Add to Cart', ar: 'أضف للسلة' },
  // Sections
  'sec.about.eye': { en: '✦ About This Volume', ar: '✦ عن هذا المجلد' },
  'sec.about.title': { en: 'The Story', ar: 'القصة' },
  'sec.prices.eye': { en: '✦ Best Deals', ar: '✦ أفضل العروض' },
  'sec.prices.title': { en: 'Compare Prices', ar: 'مقارنة الأسعار' },
  'sec.preview.eye': { en: '✦ Flip Through', ar: '✦ تصفّح' },
  'sec.preview.title': { en: 'Sample Preview', ar: 'معاينة' },
  'sec.video.eye': { en: '✦ Watch', ar: '✦ شاهد' },
  'sec.video.title': { en: 'Video Preview', ar: 'معاينة فيديو' },
  'sec.video.sub': { en: 'A cinematic glimpse into this timeless tale.', ar: 'لمحة سينمائية عن هذه الرواية الخالدة.' },
  'sec.ratings.eye': { en: '✦ Community Voice', ar: '✦ صوت القرّاء' },
  'sec.ratings.title': { en: 'Ratings Overview', ar: 'نظرة على التقييمات' },
  'sec.reviews.eye': { en: '✦ Reader Stories', ar: '✦ قصص القرّاء' },
  'sec.reviews.title': { en: 'Reviews', ar: 'المراجعات' },
  'sec.related.eye': { en: '✦ You May Also Love', ar: '✦ قد يعجبك أيضاً' },
  'sec.related.title': { en: 'Related Books', ar: 'كتب مشابهة' },
  'sec.related.sub': { en: 'Curated from the same enchanted shelves.', ar: 'مختارة من نفس الرفوف الساحرة.' },
  // Table
  'th.store': { en: 'Store', ar: 'المتجر' },
  'th.price': { en: 'Price', ar: 'السعر' },
  'th.delivery': { en: 'Delivery', ar: 'التوصيل' },
  'th.availability': { en: 'Availability', ar: 'التوفر' },
  'th.action': { en: 'Action', ar: 'إجراء' },
  // Sort
  'sort.by': { en: 'Sort by:', ar: 'ترتيب:' },
  'sort.low': { en: 'Price: Low to High', ar: 'السعر: من الأقل' },
  'sort.high': { en: 'Price: High to Low', ar: 'السعر: من الأعلى' },
  'sort.store': { en: 'Store Name', ar: 'اسم المتجر' },
  'sort.newest': { en: 'Newest First', ar: 'الأحدث أولاً' },
  'sort.oldest': { en: 'Oldest First', ar: 'الأقدم أولاً' },
  'sort.highest': { en: 'Highest Rating', ar: 'الأعلى تقييماً' },
  'sort.lowest': { en: 'Lowest Rating', ar: 'الأقل تقييماً' },
  // Review form
  'review.write': { en: '✏ Write a Review', ar: '✏ اكتب مراجعة' },
  'review.title': { en: 'Your Review', ar: 'مراجعتك' },
  'review.name': { en: 'Your Name', ar: 'اسمك' },
  'review.name.ph': { en: 'Enter your name', ar: 'أدخل اسمك' },
  'review.text': { en: 'Your Review', ar: 'مراجعتك' },
  'review.text.ph': { en: 'Share your thoughts about this book…', ar: 'شارك أفكارك عن هذا الكتاب…' },
  'review.submit': { en: 'Submit Review ✦', ar: 'إرسال المراجعة ✦' },
  'review.cancel': { en: 'Cancel', ar: 'إلغاء' },
  'review.load': { en: 'Load More Reviews ✦', ar: 'عرض المزيد ✦' },
  // Description
  'desc.more': { en: 'Read More', ar: 'اقرأ المزيد' },
  'desc.less': { en: 'Read Less', ar: 'اقرأ أقل' },
  // Preview
  'preview.open': { en: 'Open Full Preview', ar: 'فتح المعاينة الكاملة' },
  // Ratings
  'ratings.label': { en: 'ratings', ar: 'تقييم' },
  'reviews.label': { en: 'reviews', ar: 'مراجعة' },
  // Footer
  'footer.nav': { en: 'Navigation', ar: 'التنقل' },
  'footer.services': { en: 'Services', ar: 'الخدمات' },
  'footer.newsletter': { en: 'Newsletter', ar: 'النشرة البريدية' },
  'footer.subscribe': { en: 'Subscribe ✦', ar: 'اشترك ✦' },
  'footer.nospam': { en: 'No spam. Unsubscribe anytime.', ar: 'بدون إزعاج. إلغاء الاشتراك في أي وقت.' },
};

function getCurrentLang() {
  return localStorage.getItem(LANG_KEY) || 'en';
}

function toggleLanguage() {
  const cur = getCurrentLang();
  const next = cur === 'en' ? 'ar' : 'en';
  localStorage.setItem(LANG_KEY, next);
  applyLanguage(next);
}

function t(key) {
  const lang = getCurrentLang();
  const entry = UI_TRANSLATIONS[key];
  return entry ? (entry[lang] || entry.en) : key;
}

function applyLanguage(lang) {
  const isAr = lang === 'ar';
  document.documentElement.lang = isAr ? 'ar' : 'en';
  document.documentElement.dir  = isAr ? 'rtl' : 'ltr';

  // Nav links
  const navLinks = document.querySelectorAll('.nav-links > li > a:not(.lang-toggle):not(.cart-nav-link)');
  const navKeys = ['nav.home', 'nav.browse', 'nav.search', 'nav.library', 'nav.moments'];
  navLinks.forEach((a, i) => { if (navKeys[i]) a.textContent = UI_TRANSLATIONS[navKeys[i]][lang]; });

  // Lang toggle text
  const lt = document.getElementById('langToggleText');
  if (lt) lt.textContent = UI_TRANSLATIONS['lang.toggle'][lang];

  // Back bar
  const backSpan = document.querySelector('.back-btn span:last-child');
  if (backSpan) backSpan.textContent = UI_TRANSLATIONS['back.return'][lang];
  const breadLinks = document.querySelectorAll('.breadcrumb a');
  if (breadLinks[0]) breadLinks[0].textContent = UI_TRANSLATIONS['bread.home'][lang];
  if (breadLinks[1]) breadLinks[1].textContent = UI_TRANSLATIONS['bread.browse'][lang];

  // Hero
  const authorLabel = document.querySelector('.hero-author-label');
  if (authorLabel) authorLabel.textContent = UI_TRANSLATIONS['hero.by'][lang];
  const priceLabel = document.querySelector('.price-label');
  if (priceLabel) priceLabel.textContent = UI_TRANSLATIONS['hero.starting'][lang];
  const priceCur = document.querySelector('.price-currency');
  if (priceCur) priceCur.textContent = UI_TRANSLATIONS['hero.currency'][lang];

  // Hero buttons
  const heroBtns = document.querySelectorAll('.hero-buttons button');
  const btnMap = [
    { match: 'openPreviewModal', key: 'hero.preview' },
    { match: 'scrollToSection', key: 'hero.compare' },
  ];
  heroBtns.forEach(btn => {
    const oc = btn.getAttribute('onclick') || '';
    if (oc.includes('openPreviewModal')) btn.querySelector('span:last-child').textContent = UI_TRANSLATIONS['hero.preview'][lang];
    else if (oc.includes('scrollToSection')) btn.querySelector('span:last-child').textContent = UI_TRANSLATIONS['hero.compare'][lang];
    else if (oc.includes('buyNow')) btn.querySelector('span:last-child').textContent = UI_TRANSLATIONS['hero.buy'][lang];
    else if (oc.includes('addToCart')) btn.querySelector('span:last-child').textContent = UI_TRANSLATIONS['hero.cart'][lang];
  });
  // Fav button
  const favText = document.getElementById('heroFavText');
  if (favText) {
    const isFav = currentBook ? isFavourite(currentBook.id) : false;
    favText.textContent = isFav ? UI_TRANSLATIONS['hero.fav.in'][lang] : UI_TRANSLATIONS['hero.fav'][lang];
  }

  // Section eyebrows + titles
  const sections = [
    { id: 'descriptionSection', eye: 'sec.about.eye', title: 'sec.about.title' },
    { id: 'comparePricesSection', eye: 'sec.prices.eye', title: 'sec.prices.title' },
    { id: 'previewSection', eye: 'sec.preview.eye', title: 'sec.preview.title' },
    { id: 'videoSection', eye: 'sec.video.eye', title: 'sec.video.title' },
    { id: 'ratingsSection', eye: 'sec.ratings.eye', title: 'sec.ratings.title' },
    { id: 'reviewsSection', eye: 'sec.reviews.eye', title: 'sec.reviews.title' },
    { id: 'relatedSection', eye: 'sec.related.eye', title: 'sec.related.title' },
  ];
  sections.forEach(s => {
    const sec = document.getElementById(s.id);
    if (!sec) return;
    const eye = sec.querySelector('.section-eyebrow');
    const ttl = sec.querySelector('.section-title');
    if (eye) eye.textContent = UI_TRANSLATIONS[s.eye][lang];
    if (ttl) {
      // Keep the reviews badge if present
      const badge = ttl.querySelector('.reviews-total-badge');
      const text = UI_TRANSLATIONS[s.title][lang];
      if (badge) { ttl.childNodes[0].textContent = text + ' '; }
      else { ttl.textContent = text; }
    }
  });
  // Subtitles
  const videoSub = document.querySelector('#videoSection .section-subtitle');
  if (videoSub) videoSub.textContent = UI_TRANSLATIONS['sec.video.sub'][lang];
  const relatedSub = document.querySelector('#relatedSection .section-subtitle');
  if (relatedSub) relatedSub.textContent = UI_TRANSLATIONS['sec.related.sub'][lang];
  const previewSub = document.querySelector('#previewSection .section-subtitle');
  if (previewSub) previewSub.textContent = isAr ? 'ألقِ نظرة قبل أن تلتزم.' : 'Peek inside before you commit your heart to it.';

  // Table headers
  const thEls = document.querySelectorAll('.prices-table th');
  const thKeys = ['th.store', 'th.price', 'th.delivery', 'th.availability', 'th.action'];
  thEls.forEach((th, i) => { if (thKeys[i]) th.textContent = UI_TRANSLATIONS[thKeys[i]][lang]; });

  // Sort selects
  const priceSortSel = document.getElementById('sortPricesSelect');
  if (priceSortSel) {
    priceSortSel.options[0].text = UI_TRANSLATIONS['sort.low'][lang];
    priceSortSel.options[1].text = UI_TRANSLATIONS['sort.high'][lang];
    priceSortSel.options[2].text = UI_TRANSLATIONS['sort.store'][lang];
  }
  const reviewSortSel = document.getElementById('sortReviewsSelect');
  if (reviewSortSel) {
    reviewSortSel.options[0].text = UI_TRANSLATIONS['sort.newest'][lang];
    reviewSortSel.options[1].text = UI_TRANSLATIONS['sort.oldest'][lang];
    reviewSortSel.options[2].text = UI_TRANSLATIONS['sort.highest'][lang];
    reviewSortSel.options[3].text = UI_TRANSLATIONS['sort.lowest'][lang];
  }
  // Sort labels
  document.querySelectorAll('.sort-label').forEach(el => el.textContent = UI_TRANSLATIONS['sort.by'][lang]);

  // Review form
  const writeBtn = document.getElementById('writeReviewToggleBtn');
  if (writeBtn) writeBtn.querySelector('span').textContent = UI_TRANSLATIONS['review.write'][lang];
  const wrTitle = document.querySelector('.write-review-title');
  if (wrTitle) wrTitle.textContent = UI_TRANSLATIONS['review.title'][lang];
  const nameLabel = document.querySelector('label[for="reviewUsername"]');
  if (nameLabel) nameLabel.textContent = UI_TRANSLATIONS['review.name'][lang];
  const nameInput = document.getElementById('reviewUsername');
  if (nameInput) nameInput.placeholder = UI_TRANSLATIONS['review.name.ph'][lang];
  const commentLabel = document.querySelector('label[for="reviewComment"]');
  if (commentLabel) commentLabel.textContent = UI_TRANSLATIONS['review.text'][lang];
  const commentInput = document.getElementById('reviewComment');
  if (commentInput) commentInput.placeholder = UI_TRANSLATIONS['review.text.ph'][lang];
  const submitBtn = document.querySelector('.btn-submit-review');
  if (submitBtn) submitBtn.textContent = UI_TRANSLATIONS['review.submit'][lang];
  const cancelBtn = document.querySelector('.btn-cancel-review');
  if (cancelBtn) cancelBtn.textContent = UI_TRANSLATIONS['review.cancel'][lang];
  const loadMoreBtn = document.querySelector('.btn-load-reviews span');
  if (loadMoreBtn) loadMoreBtn.textContent = UI_TRANSLATIONS['review.load'][lang];

  // Read More / Less
  const rmBtn = document.getElementById('readMoreBtnText');
  if (rmBtn) rmBtn.textContent = descExpanded ? UI_TRANSLATIONS['desc.less'][lang] : UI_TRANSLATIONS['desc.more'][lang];

  // Preview button
  const openPrevBtn = document.querySelector('.btn-preview-open span:last-child');
  if (openPrevBtn) openPrevBtn.textContent = UI_TRANSLATIONS['preview.open'][lang];

  // Footer
  const footerTitles = document.querySelectorAll('.footer-col-title');
  const ftKeys = ['footer.nav', 'footer.services', 'footer.newsletter'];
  footerTitles.forEach((ft, i) => { if (ftKeys[i]) ft.textContent = UI_TRANSLATIONS[ftKeys[i]][lang]; });
  const subBtn = document.querySelector('.newsletter-btn');
  if (subBtn) subBtn.textContent = UI_TRANSLATIONS['footer.subscribe'][lang];
  const noSpam = document.querySelector('.newsletter-note');
  if (noSpam) noSpam.textContent = UI_TRANSLATIONS['footer.nospam'][lang];

  // Mobile drawer
  const drawerLinks = document.querySelectorAll('.nav-drawer ul a');
  const drawerKeys = ['nav.home', 'nav.browse', 'nav.search', 'nav.library'];
  drawerLinks.forEach((a, i) => { if (drawerKeys[i]) a.textContent = UI_TRANSLATIONS[drawerKeys[i]][lang]; });
}


/* ═══════════════════════════════════════════════════════════════
   23. MAIN INITIALIZER
═══════════════════════════════════════════════════════════════ */

function initPage() {
  const id   = getBookIdFromURL();
  const book = id ? getFullBook(id) : null;

  // Apply theme + language early
  if (typeof applyStoredTheme === 'function') applyStoredTheme();
  updateCartBadge();

  if (!book) {
    renderNotFound();
    initParticles();
    setupNavigation();
    applyLanguage(getCurrentLang());
    return;
  }

  currentBook = book;

  renderHeroSection(book);
  renderDescription(book);
  renderPrices(book);
  renderPreview(book);
  renderVideoSection(book)
  renderRatings(book);
  renderReviews(book);
  renderRelatedBooks(book);

  initParticles();
  initScrollReveal();
  setupNavigation();
  setupModalBehaviour();

  setTimeout(setupRatingBarAnimation, 300);
  setTimeout(observeNewRevealElements, 400);

  // Apply language after all content is rendered
  applyLanguage(getCurrentLang());
}

/* ─── Bootstrap ─────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', initPage);