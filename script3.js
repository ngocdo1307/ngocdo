// Tập hợp love được chạm
const loveTaps = new Set();
let userName = '';

/**
 * Bấm hộp quà → Gọi popup nhập TÊN + CHỌN NHẠC
 */
function startApp() {
  inipesan();
  document.getElementById('startStage').style.display = 'none';
}

/**
 * Dùng SweetAlert2 → Nhập tên + chọn nhạc
 */
async function inipesan() {
  const { value: formValues } = await Swal.fire({
    title: 'Nhập Tên Bé iu & Chọn Nhạc',
    html:
      '<input id="swal-input1" class="swal2-input" placeholder="Tên Bé iu">' +
      '<select id="swal-input2" class="swal2-input">' +
        '<option value="music/love1.mp3">Love Song 1</option>' +
        '<option value="music/love2.mp3">Love Song 2</option>' +
        '<option value="music/happy1.mp3">Happy Song</option>' +
      '</select>',
    focusConfirm: false,
    confirmButtonText: 'Bắt đầu 💖',
    preConfirm: () => {
      const name = document.getElementById('swal-input1').value.trim();
      const song = document.getElementById('swal-input2').value;

      if (!name) {
        Swal.showValidationMessage('Nhập tên trước nha! 💖');
        return false;
      }
      return [name, song];
    }
  });

  if (formValues) {
    userName = formValues[0];
    const song = formValues[1];

    const audio = document.getElementById('bgMusic');
    audio.src = song;
    audio.play().catch(err => console.warn('Không thể phát nhạc:', err));

    loveTaps.clear();
    document.querySelectorAll('.love-icon').forEach(icon =>
      icon.classList.remove('tapped')
    );

    switchStage('startStage', 'loveStage');
  }
}

/**
 * Chuyển stage
 */
function switchStage(fromId, toId, withFade = false) {
  const fromElement = document.getElementById(fromId);
  const toElement = document.getElementById(toId);

  if (!fromElement || !toElement) {
    console.error(`Không tìm thấy element: ${fromId} hoặc ${toId}`);
    return;
  }

  if (withFade) {
    fromElement.classList.add('hidden');
    setTimeout(() => {
      fromElement.style.display = 'none';
      toElement.style.display = 'block';
    }, 1000);
  } else {
    fromElement.style.display = 'none';
    toElement.style.display = 'block';
  }
}

/**
 * Hiệu ứng gõ chữ
 */
function typeWriterEffect(text, elementId, callback) {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`Không tìm thấy element với ID: ${elementId}`);
    return;
  }

  let i = 0;
  const speed = 50;
  element.textContent = '';

  const type = () => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      callback?.();
    }
  };

  type();
}

/**
 * Xử lý chạm ❤️
 */
function tapLove(id) {
  if (loveTaps.has(id)) return;

  const loveIcon = document.querySelector(`#loveIcons .love-icon:nth-child(${id})`);
  loveIcon.classList.add('tapped');
  loveTaps.add(id);

  if (loveTaps.size === 4) {
    Swal.fire({
      title: 'Đủ 4 love rồi nè!',
      text: 'Sẵn sàng nhận quà chưa? 💖',
      timer: 1500,
      showConfirmButton: false,
      background: '#fffbe7',
    }).then(() => {
      switchStage('loveStage', 'cardStage', true);

      const loveMsg = document.getElementById('loveMsg');
      if (!loveMsg) return console.error('Không tìm thấy element loveMsg!');

      typeWriterEffect(
        `Chúc ${userName} của anh một ngày thật vui vẻ như một đứa trẻ, nhưng được anh yêu như một nữ hoàng 👑. Dù em có lớn bao nhiêu thì trong tim anh, em vẫn là công chúa bé bỏng cần được cưng chiều mỗi ngày! 💘`,
        'loveMsg',
        () => {
          const fromTag = document.createElement("div");
          fromTag.id = 'fromTag';
          fromTag.textContent = "I Love You";
          fromTag.style.marginTop = "20px";
          fromTag.style.opacity = "0";
          fromTag.style.transition = "opacity 1s ease";
          loveMsg.appendChild(fromTag);

          setTimeout(() => {
            fromTag.style.opacity = "1";
          }, 500);
        }
      );
    });
  }
}
