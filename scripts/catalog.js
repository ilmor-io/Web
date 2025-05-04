document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('.search input');
  const cards = document.querySelectorAll('.card');
  const container = document.querySelector('.container_cards');
  
  // Создаем сообщение "Товар не найден"
  const noResultsMessage = document.createElement('div');
  noResultsMessage.className = 'no-results-message';
  noResultsMessage.textContent = 'Товар не найден';
  noResultsMessage.style.display = 'none';
  container.appendChild(noResultsMessage);

  let searchTimeout;

  searchInput.addEventListener('input', function() {
    clearTimeout(searchTimeout);
    
    searchTimeout = setTimeout(() => {
      const searchTerm = this.value.trim().toLowerCase();
      let foundItems = 0;
      
      // Перебираем все карточки
      cards.forEach(card => {
        const title = card.querySelector('.card_title').textContent.toLowerCase();
        const matches = title.includes(searchTerm);
        
        if (searchTerm === '' || matches) {
          card.style.display = 'block';
          if (matches) foundItems++;
        } else {
          card.style.display = 'none';
        }
      });

      // Показываем сообщение, если нет результатов
      if (searchTerm.length > 0 && foundItems === 0) {
        noResultsMessage.style.display = 'block';
      } else {
        noResultsMessage.style.display = 'none';
      }
    }, 300); // Задержка 300 мс
  });
});