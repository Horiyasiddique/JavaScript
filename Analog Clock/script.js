
const hourHand = document.getElementById('hours');
const minuteHand = document.getElementById('minutes');
const secondHand = document.getElementById('seconds');

// Update the clock hands every second
setInterval(() => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // Calculate rotations
  const hourRotation = 30 * hours + minutes / 2; // 360° / 12 = 30°
  const minutesRotation = 6 * minutes;          // 360° / 60 = 6°
  const secondsRotation = 6 * seconds;          // 360° / 60 = 6°

  // Apply transformations to rotate the hands according to time
  hourHand.style.transform = `rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `rotate(${minutesRotation}deg)`;
  secondHand.style.transform = `rotate(${secondsRotation}deg)`;
}, 1000);
