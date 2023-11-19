const popup = document.querySelector('.popup');
const closePopupButton = popup.querySelector('.popup__button-close');
const openPopupButton = document.querySelector('.button');
const container = document.querySelector('.container');
const backgroundImage = container.querySelector('.background-stars');

openPopupButton.addEventListener("click", function() {
    popup.style.visibility = "visible";
});

closePopupButton.addEventListener("click", function() {
    popup.style.visibility = "hidden";
});

function moveBackground (shift) {
    backgroundImage.style.transition = 'transform 0.2s ease-out';
    backgroundImage.style.transform = `translateX(${shift}%)`;
}

container.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX / container.offsetWidth;
console.log(mouseX);
  if (mouseX <= 0.54) {
    moveBackground (5);
  } else if (mouseX >= 0.54 && mouseX <= 0.84) {
    moveBackground (0);
  } else {
    moveBackground (-5);
  }
});

container.addEventListener('mouseleave', () => {
    moveBackground (0);
  });