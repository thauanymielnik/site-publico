document.addEventListener('DOMContentLoaded', function() {
    // Defina a data final da contagem regressiva (formato: ano, mês (0-11), dia, hora, minuto, segundo)
    const endDate = new Date(2024, 4, 30, 0, 0, 0);
  
    // Função para atualizar a contagem regressiva
    function updateCountdown() {
      const now = new Date().getTime();
      const distance = endDate - now;
  
      // Calcula o tempo restante em dias, horas, minutos e segundos
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Atualiza o elemento HTML com a contagem regressiva
      document.getElementById("countdown").innerHTML = `
        <h1>Contagem Regressiva</h1>
        <p>${days}d ${hours}h ${minutes}m ${seconds}s</p>
      `;
  
      // Se a contagem regressiva acabar, exiba uma mensagem
      if (distance < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "<h1>Tempo Expirado!</h1>";
      }
    }
  
    // Chama a função de atualização da contagem regressiva a cada segundo
    const interval = setInterval(updateCountdown, 1000);
  });