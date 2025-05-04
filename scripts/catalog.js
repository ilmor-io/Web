document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('.search input');
  const cards = document.querySelectorAll('.card');

  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.trim().toLowerCase();
      
    cards.forEach(card => {
      const title = card.querySelector('.card_title').textContent.toLowerCase();
      if (title.includes(searchTerm)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

let searchTimer;
searchInput.addEventListener('input', function() {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    document.addEventListener('DOMContentLoaded', function() {
      const searchInput = document.querySelector('.search input');
      const cards = document.querySelectorAll('.card');

      searchInput.addEventListener('input', function() {
        const searchTerm = this.value.trim().toLowerCase();
      
        cards.forEach(card => {
          const title = card.querySelector('.card_title').textContent.toLowerCase();
          if (title.includes(searchTerm)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }, 300); // задержка 300 мс
});