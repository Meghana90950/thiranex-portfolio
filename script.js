const themeToggleBtn = document.getElementById('themeToggleBtn');

themeToggleBtn.addEventListener('click', () => {
    // Check current active configuration theme tag status 
    const currentTheme = document.body.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        document.body.removeAttribute('data-theme');
    } else {
        document.body.setAttribute('data-theme', 'dark');
    }
});
