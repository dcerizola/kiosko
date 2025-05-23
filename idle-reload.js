let idleTime = 0;
const iframe = () => document.getElementById('mainFrame');

function resetTimer() {
  idleTime = 0;
}

setInterval(() => {
  idleTime++;
  if (idleTime >= 1) {
    iframe().src = iframe().src; // Recargar iframe
    idleTime = 0;
  }
}, 60000);

window.onload = resetTimer;
document.onmousemove = resetTimer;
document.onkeypress = resetTimer;
document.onscroll = resetTimer;
document.onclick = resetTimer;