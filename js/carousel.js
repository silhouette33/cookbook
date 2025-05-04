function scrollCarousel(containerId, direction) {
    const container = document.getElementById(containerId);
    if (!container) return;
  
    const card = container.querySelector('.popular-card');
    if (!card) return;
  
    const cardWidth = card.offsetWidth + 20; // 카드 너비 + 마진 (gap)
    const scrollAmount = cardWidth * 2; // 2개씩 이동하도록
  
    container.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }
  