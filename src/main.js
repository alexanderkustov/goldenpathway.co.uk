import './styles/main.css';

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const htmlEl = document.documentElement;

  if (!themeToggle) {
    return;
  }

  const applyTheme = (theme) => {
    if (theme === 'light') {
      htmlEl.classList.add('light');
      themeToggle.textContent = 'Dark Mode';
    } else {
      htmlEl.classList.remove('light');
      themeToggle.textContent = 'Light Mode';
    }
  };

  const savedTheme = localStorage.getItem('theme') || 'dark';
  applyTheme(savedTheme);

  themeToggle.addEventListener('click', () => {
    const newTheme = htmlEl.classList.contains('light') ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  });
});
