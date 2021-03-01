function smoothScroll(target, duration) {
  var target = document.getElementById(target);
  var targetPosition = target.getBoundingClientRect();
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

smoothScroll(".gallery2", 1000);

var about = document.querySelector(".about");
var gallery1 = document.querySelector(".gallery1");
var gallery2 = document.querySelector(".gallery2");
var gallery3 = document.querySelector(".gallery3");
var gallery4 = document.querySelector(".gallery4");

gallery1.addEventListener("click", function () {
  smoothScroll("section1", 1000);
});
gallery2.addEventListener("click", function () {
  smoothScroll("section2", 1000);
});
