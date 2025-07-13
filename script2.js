const button = document.getElementById("showButton");
const input = document.getElementById("loveInput");
const container = document.getElementById("boxContainer");

const audio = new Audio("music.mp3");
audio.loop = true;

function createHeart() {
  const colors = ["#ff5c8d", "#ff4d4d", "#ffb347", "#7ec8e3", "#b19cd9"];
  for (let i = 0; i < 3; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    heart.style.left = `${Math.random() * window.innerWidth}px`;
    heart.style.top = `${Math.random() * window.innerHeight}px`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
  }
}

button.addEventListener("click", () => {
  const inputText = input.value.trim() || "Anh Nhớ Em 💖";

  input.style.display = "none";    // Ẩn ô nhập
  loveBox.style.display = "none";  // Ẩn dòng mặc định

  button.innerText = "Hiện rồi nè ^^";
  button.disabled = true;

  audio.play();

  setInterval(() => {
    const box = document.createElement("div");
    box.className = "box";
    box.innerHTML = `
      <div class="box-header">Đầy Bộ Nhớ</div>
      <div class="box-body">${inputText}</div>
    `;
    const maxX = window.innerWidth - 240;
    const maxY = window.innerHeight - 100;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
    container.appendChild(box);
    setTimeout(() => box.remove(), 6000);
  }, 100);

  setInterval(createHeart, 50);
});

