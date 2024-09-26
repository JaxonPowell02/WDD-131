document.addEventListener('DOMContentLoaded', function() {
    const themeToggleButton = document.getElementById('theme-toggle');

    function toggleTheme() {
        document.body.classList.toggle('dark'); // Toggle between light and dark
    }

    // Add event listener to the button
    themeToggleButton.addEventListener('click', toggleTheme);
});
