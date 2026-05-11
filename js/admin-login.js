document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('admin-login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const submitBtn = document.getElementById('submit-btn');

    // Simple Admin Auth Simulation
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Basic validation
        if (!email || !password) {
            showToast("Please provide your admin credentials.");
            return;
        }

        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;

        // Simulate authentication
        setTimeout(() => {
            if (email === 'admin' || email.includes('admin')) {
                showToast("Access Granted. Welcome, Guardian.");
                localStorage.setItem('el-admin-auth', 'true');

                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 1500);
            } else {
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
                document.getElementById('email-error').classList.add('show');
                showToast("Access Denied. Only librarians may enter.");
            }
        }, 1500);
    });

    function showToast(msg) {
        const toast = document.getElementById('toast');
        toast.textContent = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }
});
