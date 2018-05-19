/*function moveCircle(event) {

  var x = (event.clientX - window.innerWidth);
  var y = (event.clientY - window.innerHeight);

  document.querySelector('.welcome__circle').style.transform = 'translate(' + (x + 810) + 'px' + ',' + (y + 210) + 'px)';
}*/

function moveCircle(event) {

  var rect = event.target.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;

  console.log(x);
  console.log(y);

  document.querySelector('.welcome__circle').style.transform = 'translate(' + (x - 2000) + 'px' + ',' + (y - 2000) + 'px)';

}

document.querySelector('.welcome__text-3').addEventListener('mousemove', moveCircle);