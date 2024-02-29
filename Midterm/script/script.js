const columnItem = document.querySelectorAll('.column-item');
const fullscreenView = document.querySelector('.fullscreen-view');
const fullscreenImage = document.querySelector('.fullscreen-image');
const closeBtn = document.querySelector('.close');

columnItem.forEach(item => {
  item.addEventListener('click', () => {
    const imgSrc = item.querySelector('img').src;
    fullscreenImage.src = imgSrc;
    fullscreenView.classList.add('show');
  });
});

closeBtn.addEventListener('click', () => {
    fullscreenView.classList.remove('show');
});
