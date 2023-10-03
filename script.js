document.addEventListener('mousemove', function(e) {
    let circle = document.querySelector('.b');
    let left = e.offsetX;
    let top = e.offsetY;
    circle.style.left = left + 'px';
    circle.style.top = top + 'px';
  });