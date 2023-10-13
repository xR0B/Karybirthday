const createStars = () => {
  const star = document.createElement('i');
  star.textContent = 'star';
  star.classList.add('material-icons');
  star.classList.add('star');
  star.style.left = Math.random() * window.innerWidth + 'px';
  star.style.fontSize = Math.random() * 7 + 12 + 'px';
  star.style.animationDuration = Math.random() * 100000 + 20000 + 'ms';
  star.style.opacity = Math.random();

  const hexCode = 'ffa0d8';
  let color = '#ffa0d8';
  for (let i = 0; i < 0; i++) {
    color += hexCode[Math.floor(Math.random() * hexCode.length)];
  }

  star.style.color = color;
  document.body.appendChild(star);

  setTimeout(() => star.remove(), 20000);
};

setInterval(createStars, 180);
//# sourceURL=pen.js