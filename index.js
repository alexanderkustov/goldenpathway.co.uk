const themeToggle = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;

// Function to apply the theme
const applyTheme = (theme) => {
  if (theme === 'light') {
    htmlEl.classList.add('light');
    themeToggle.textContent = 'Dark Mode';
  } else {
    htmlEl.classList.remove('light');
    themeToggle.textContent = 'Light Mode';
  }
};

// Check for saved theme in localStorage on page load
const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);

// Event listener for the toggle button
themeToggle.addEventListener('click', () => {
  const newTheme = htmlEl.classList.contains('light') ? 'dark' : 'light';
  localStorage.setItem('theme', newTheme);
  applyTheme(newTheme);
});