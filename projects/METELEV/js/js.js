function moveCircle(event) {

  var x = (event.clientX - window.innerWidth);
  var y = (event.clientY - window.innerHeight);

  document.querySelector('.welcome__circle').style.transform = 'translate(' + (x + 810) + 'px' + ',' + (y + 210) + 'px)';
}

document.querySelector('.welcome__text-3').addEventListener('mousemove', moveCircle);