var hour = new Date().getHours()
if (hour > 6 && hour < 18) {
  document.querySelector('body').style.background = '#fff'
  window.ribbon()
  document.onclick = i
  document.ontouchstart = i
} else {
  window.snow()
}