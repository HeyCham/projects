const clock = document.querySelector(".clock");
clock.addEventListener("load", tick);

function tick() {
  const now = new Date();
  let h = now.getHours();
  h = (h <= 12)? h: h-12;
  const m = now.getMinutes();
  const s = now.getSeconds();
  const html = `
        <span>${h} :</span>
        <span>${m} :</span>
        <span>${s}</span>
        </br>
    `;
  clock.innerHTML = html;
}

setInterval(tick, 1000);




