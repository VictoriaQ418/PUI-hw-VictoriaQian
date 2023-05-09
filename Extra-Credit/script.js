const scrollbar = document.getElementById("scrollbar");
const thumb = document.getElementById("scrollbar-thumb");
const value = document.getElementById("scrollbar-value");

let isDragging = false;
let dragOffset = 0;
let thumbPosition = 0;

function updateThumbPosition() {
  const trackHeight = scrollbar.clientHeight - thumb.clientHeight;
  const value = thumbPosition / trackHeight * 100;
  thumb.style.top = thumbPosition + "px";
  value.innerText = Math.round(value);
}

thumb.addEventListener("mousedown", function(event) {
  isDragging = true;
  dragOffset = event.clientY - thumb.offsetTop;
});

document.addEventListener("mousemove", function(event) {
  if (isDragging) {
    const trackHeight = scrollbar.clientHeight - thumb.clientHeight;
    thumbPosition = event.clientY - scrollbar.offsetTop - dragOffset;
    if (thumbPosition < 0) {
      thumbPosition = 0;
    }
    if (thumbPosition > trackHeight) {
      thumbPosition = trackHeight;
    }
    updateThumbPosition();
  }
});

document.addEventListener("mouseup", function() {
  isDragging = false;
});

scrollbar.addEventListener("wheel", function(event) {
  const trackHeight = scrollbar.clientHeight - thumb.clientHeight;
  const scrollAmount = 20;
  if (event.deltaY < 0) {
    thumbPosition -= scrollAmount;
  } else {
    thumbPosition += scrollAmount;
  }
  if (thumbPosition < 0) {
    thumbPosition = 0;
  }
  if (thumbPosition > trackHeight) {
    thumbPosition = trackHeight;
  }
  updateThumbPosition();
});

updateThumbPosition();

valueDisplay.textContent = value;
function updateValue() {
    const thumbPosition = parseInt(thumb.style.top);
    const trackHeight = track.offsetHeight;
    const thumbHeight = thumb.offsetHeight;
    const value = Math.round((thumbPosition / (trackHeight - thumbHeight)) * 100);
    valueDisplay.textContent = value;
  }
  