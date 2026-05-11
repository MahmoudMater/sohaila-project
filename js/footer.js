/* ============================================================
   footer.js — Injects the shared homepage-style footer
   into any page that has <div id="site-footer-mount"></div>
============================================================ */
(function injectFooter() {
  const mount = document.getElementById('site-footer-mount');
  if (!mount) return;

  // Determine relative root path based on page depth
  const depth = window.location.pathname.split('/').length - 2;
  const root = depth > 0 ? '../'.repeat(depth) : './';

  mount.innerHTML = `
  <footer class="site-footer">
    <div class="footer-top">
      <div class="footer-brand">
        <a href="${root}index.html" class="footer-logo" data-en="✦ The Enchanted Library ✦" data-ar="✦ المكتبة المسحورة ✦">✦ The Enchanted Library ✦</a>
        <p data-en="Your magical destination for books, stories, and literary adventures. Explore, connect, and discover." data-ar="وجهتك السحرية للكتب والقصص والمغامرات الأدبية. استكشف وتواصل واكتشف.">Your magical destination for books, stories, and literary adventures. Explore, connect, and discover.</p>
        <div class="footer-social">
          <a href="#" title="Facebook"><i class="fa-brands fa-facebook"></i></a>
          <a href="#" title="Twitter / X"><i class="fa-brands fa-twitter"></i></a>
          <a href="#" title="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a href="#" title="Goodreads"><i class="fa-brands fa-goodreads"></i></a>
          <a href="#" title="YouTube"><i class="fa-brands fa-youtube"></i></a>
        </div>
      </div>
      <div class="footer-col">
        <h4 data-en="Explore" data-ar="استكشف">Explore</h4>
        <ul>
          <li><a href="${root}pages/SearchPage.html" data-en="Search Books" data-ar="البحث عن كتب">Search Books</a></li>
          <li><a href="${root}pages/book-details.html" data-en="New Releases" data-ar="الإصدارات الجديدة">New Releases</a></li>
          <li><a href="${root}pages/SearchPage.html" data-en="Browse Genres" data-ar="تصفح الأنواع">Browse Genres</a></li>
          <li><a href="${root}pages/authors.html" data-en="Authors" data-ar="المؤلفون">Authors</a></li>
          <li><a href="${root}pages/publishers.html" data-en="Publishers" data-ar="الناشرون">Publishers</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4 data-en="Community" data-ar="المجتمع">Community</h4>
        <ul>
          <li><a href="${root}pages/book-details.html" data-en="Reviews" data-ar="المراجعات">Reviews</a></li>
          <li><a href="${root}pages/community.html" data-en="Book Club" data-ar="نادي الكتاب">Book Club</a></li>
          <li><a href="${root}pages/blog.html" data-en="Blog" data-ar="المدونة">Blog</a></li>
          <li><a href="${root}pages/events.html" data-en="Events" data-ar="الفعاليات">Events</a></li>
          <li><a href="${root}pages/MyLibrary.html" data-en="My Bookshelf" data-ar="رف كتبي">My Bookshelf</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4 data-en="Account" data-ar="الحساب">Account</h4>
        <ul>
          <li><a href="${root}pages/login.html" data-en="Login" data-ar="تسجيل الدخول">Login</a></li>
          <li><a href="${root}pages/registration.html" data-en="Register" data-ar="إنشاء حساب">Register</a></li>
          <li><a href="${root}pages/profile.html" data-en="My Profile" data-ar="ملفي الشخصي">My Profile</a></li>
          <li><a href="${root}pages/contactus.html" data-en="Contact Us" data-ar="اتصل بنا">Contact Us</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-copy" data-en="🌹 &nbsp; © 2026 Enchanted Library &nbsp;·&nbsp; All Rights Reserved &nbsp; 🌹" data-ar="🌹 &nbsp; © 2026 المكتبة المسحورة &nbsp;·&nbsp; جميع الحقوق محفوظة &nbsp; 🌹">🌹 &nbsp; © 2026 Enchanted Library &nbsp;·&nbsp; All Rights Reserved &nbsp; 🌹</p>
      <p class="footer-tagline" data-en='"There\\'s something there that wasn\\'t there before."' data-ar='"ثمة شيء هناك لم يكن موجوداً من قبل."'>"There's something there that wasn't there before."</p>
    </div>
  </footer>`;

  // Re-apply language to newly injected elements
  if (typeof applyLanguage === 'function') applyLanguage();
})();
