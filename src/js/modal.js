// Функція відкриття модального вікна
function openModal() {
    document.getElementById("modal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
  }
  
  // Функція закриття модального вікна
  function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
  }
  
  // Відкриття модального вікна при натисканні на якийсь елемент, наприклад, кнопку
  document.getElementById("open-button").addEventListener("click", openModal);
  
  // Закриття модального вікна при натисканні на "хрестик" або задній фон
  document.getElementById("close-button").addEventListener("click", closeModal);
  document.getElementById("overlay").addEventListener("click", closeModal);
  