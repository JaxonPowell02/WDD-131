document.addEventListener('DOMContentLoaded', function() {
    const themeToggleButton = document.getElementById('theme-toggle');
    const logo = document.getElementById('logo');

    function toggleTheme() {
        // Toggle the dark class on the body
        document.body.classList.toggle('dark');

        // Check if the body now has the dark class
        if (document.body.classList.contains('dark')) {
            // If it's dark mode, change the logo to the dark version
            logo.src = logo.getAttribute('data-dark');
        } else {
            // If it's light mode, revert back to the light version
            logo.src = logo.getAttribute('data-light');
        }
    }

    // Add event listener to the button
    themeToggleButton.addEventListener('click', toggleTheme);
});
