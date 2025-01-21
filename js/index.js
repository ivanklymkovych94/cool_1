document.querySelectorAll('.cards').forEach(card => {
    card.addEventListener('click', function () {
      const url = this.getAttribute('data-url');
      if (url) {
        window.location.href = 'index1.html'; 
      }
    });
  });
  document.querySelector(".burger-menu").addEventListener("click", () => {
    document.querySelector(".header-nav").classList.toggle("active");
  });
  const leftArrow = document.getElementById('er');
  const rightArrow = document.getElementById('er2');
  const gridContainer = document.querySelector('.grid-container');
  
  // Клік по лівій стрілці (прокручуємо вліво)
  leftArrow.addEventListener('click', () => {
      gridContainer.scrollBy({
          left: -310, // Розмір одного елемента
          behavior: 'smooth'
      });
  });
  
  // Клік по правій стрілці (прокручуємо вправо)
  rightArrow.addEventListener('click', () => {
      gridContainer.scrollBy({
          left: 310, // Розмір одного елемента
          behavior: 'smooth'
      });
  });