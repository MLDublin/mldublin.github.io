
function random (x) {
  return Math.round(Math.random() * x)- x/2
}

function setRandom (el) {
  var x = random(4000)
  var y = random(4000)
  var opacity = Math.random() / 2
  var scale = Math.pow(opacity * 4, 1.5)
  console.log(`${opacity}, ${scale}`)
  el.setAttribute("style", "opacity: " + opacity + "; transform: translate(" + x + "px, " + y + "px) scale(" + scale + ", " + scale + " );")
}


function setOrigin (el) {
  setTimeout(function () {
    el.setAttribute("style", "")
  } , Math.round(Math.random() * 5000))
}

function scatter (nodes) {
  nodes.map(setRandom)
}

function restore (nodes, root) {
  root.classList.add('animate')
  nodes.map(setOrigin)
}

function animate() {
  var nodes = Array.prototype.slice.call(document.querySelectorAll('#green *, #aqua *, #teal *, #keppel *, #purple *'))
  var root = document.querySelector('.cls-1')
  scatter(nodes)
  setTimeout(restore, 1000, nodes, root)
}

var lastAnimated = localStorage.getItem('animated')
var today = new Date().toDateString()
if ((today !== lastAnimated)){// || (location.pathname == '/')) {
  localStorage.setItem('animated', today)
  animate()
}


