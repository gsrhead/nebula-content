const button = document.querySelector('.button');

button.addEventListener('click', () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  button.style.backgroundColor = "#" + randomColor;
});

  background.style.backgroundColor = `#${randomColor}`;
  background.style.backgroundImage = 'none';
  background.style.opacity = '1';
button.addEventListener("click", randomBackColor);
