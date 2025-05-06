document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.for_products > div');
  
  // Функция для проверки видимости элемента
  function checkVisibility() {
    const windowHeight = window.innerHeight;
    const triggerPoint = windowHeight * 0.8; // Элемент появится, когда останется прокрутить 20% его высоты
    
    cards.forEach(card => {
      const cardPosition = card.getBoundingClientRect().top;
      
      if (cardPosition < triggerPoint) {
        card.classList.add('visible');
      }
    });
  }
  
  // Проверяем при загрузке
  checkVisibility();
  
  // И при скролле (с троттлингом для производительности)
  let isScrolling = false;
  window.addEventListener('scroll', function() {
    if (!isScrolling) {
      window.requestAnimationFrame(function() {
        checkVisibility();
        isScrolling = false;
      });
      isScrolling = true;
    }
  });
});