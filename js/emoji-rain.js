var msg = "";
function generateAnimalEmojis() {
  msg = "gatitos";
  const emojis = ['🐱', '🐱', '🐱', '🐱'];
  generateEmojiRain(emojis);
}
  
function generateCookiesEmojis() {
  msg = "cookies";
  const emojis = ["🍪", "🍪", "🍪", "🍪"];
  generateEmojiRain(emojis);
  
}

function generateEmojiRain(emojis) {
  // Código que genera la lluvia de emojis
  $("#cookies-section").fadeOut();
  const emojiRainContainer = document.createElement("div");
  document.body.appendChild(emojiRainContainer);
  let count = 0;
  const intervalId = setInterval(() => {
    if (count >= 60) {
      clearInterval(intervalId);
      emojiRainContainer.innerHTML = "";
      console.log(msg);
      if( msg == 'gatitos'){
        $('#gatitos-modal').modal('show');
      }else{
        $('#cookies-modal').modal('show');
      }
    } else {
      const randomIndex = Math.floor(Math.random() * emojis.length);
      const randomEmoji = emojis[randomIndex];
      const emojiSpan = document.createElement("span");
      emojiSpan.innerText = randomEmoji;
      emojiSpan.style.fontSize = "30px";
      emojiSpan.style.position = "absolute";
      emojiSpan.style.left = Math.random() * window.innerWidth + "px";
      emojiSpan.style.top = -Math.random() * window.innerHeight + "px";
      emojiSpan.style.animation = "emoji-fall 2s linear";
      emojiRainContainer.appendChild(emojiSpan);
      count++;
    }
  }, 50);
  
}

const animalsButton = document.getElementById('no-accept-cookies');
animalsButton.addEventListener('click', generateAnimalEmojis);

const fruitsButton = document.getElementById('accept-cookies');
fruitsButton.addEventListener('click', generateCookiesEmojis);
