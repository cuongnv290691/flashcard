let data = [
  {
    class: "Class 1",
    lessons: [

      {
        name: "Lesson 1 - Numbers 1-10",
        cards: [
          { word: "one", meaning: "số một" },
          { word: "two", meaning: "số hai" },
          { word: "three", meaning: "số ba" },
          { word: "four", meaning: "số bốn" },
          { word: "five", meaning: "số năm" },
          { word: "six", meaning: "số sáu" },
          { word: "seven", meaning: "số bảy" },
          { word: "eight", meaning: "số tám" },
          { word: "nine", meaning: "số chín" },
          { word: "ten", meaning: "số mười" }
        ]
      },

      {
        name: "Lesson 2 - Numbers 11-20",
        cards: [
          { word: "eleven", meaning: "số mười một" },
          { word: "twelve", meaning: "số mười hai" },
          { word: "thirteen", meaning: "số mười ba" },
          { word: "fourteen", meaning: "số mười bốn" },
          { word: "fifteen", meaning: "số mười lăm" },
          { word: "sixteen", meaning: "số mười sáu" },
          { word: "seventeen", meaning: "số mười bảy" },
          { word: "eighteen", meaning: "số mười tám" },
          { word: "nineteen", meaning: "số mười chín" },
          { word: "twenty", meaning: "số hai mươi" }
        ]
      },

      {
        name: "Lesson 3 - Animals",
        cards: [
          { word: "cow", meaning: "con bò" },
          { word: "duck", meaning: "con vịt" },
          { word: "fox", meaning: "con cáo" },
          { word: "goat", meaning: "con dê" },
          { word: "octopus", meaning: "con bạch tuộc" },
          { word: "penguin", meaning: "chim cánh cụt" },
          { word: "pig", meaning: "con heo" },
          { word: "rabbit", meaning: "con thỏ" },
          { word: "tiger", meaning: "con hổ" },
          { word: "zebra", meaning: "con ngựa vằn" }
        ]
      },

      {
        name: "Lesson 4 - School Things",
        cards: [
          { word: "book", meaning: "quyển sách" },
          { word: "close your book", meaning: "đóng sách lại" },
          { word: "open your book", meaning: "mở sách ra" },
          { word: "crayon", meaning: "bút sáp màu" },
          { word: "eraser", meaning: "cục tẩy" },
          { word: "pen", meaning: "bút mực" },
          { word: "pencil case", meaning: "hộp bút" },
          { word: "picture", meaning: "bức tranh" },
          { word: "read", meaning: "đọc" },
          { word: "spell", meaning: "đánh vần" }
        ]
      },

      {
        name: "Lesson 5 - Shapes",
        cards: [
          { word: "circle", meaning: "hình tròn" },
          { word: "rectangle", meaning: "hình chữ nhật" },
          { word: "square", meaning: "hình vuông" },
          { word: "triangle", meaning: "hình tam giác" },
          { word: "count", meaning: "đếm" },
          { word: "draw", meaning: "vẽ" },
          { word: "number", meaning: "chữ số" },
          { word: "question", meaning: "câu hỏi" },
          { word: "word", meaning: "từ" },
          { word: "listen", meaning: "nghe" }
        ]
      },

      {
        name: "Lesson 6 - Transportation",
        cards: [
          { word: "bike", meaning: "xe đạp" },
          { word: "boat", meaning: "con thuyền, con tàu" },
          { word: "bus", meaning: "xe buýt" },
          { word: "motorbike", meaning: "xe gắn máy" },
          { word: "plane", meaning: "máy bay" },
          { word: "ride", meaning: "đi xe (đạp), cưỡi" },
          { word: "park", meaning: "công viên" },
          { word: "playground", meaning: "sân chơi" },
          { word: "sea", meaning: "biển" },
          { word: "beach", meaning: "bãi biển" }
        ]
      },

      {
        name: "Lesson 7 - Clothes",
        cards: [
          { word: "dress", meaning: "áo đầm" },
          { word: "hat", meaning: "mũ nón" },
          { word: "pants", meaning: "quần dài" },
          { word: "shirt", meaning: "áo sơ mi" },
          { word: "shoes", meaning: "đôi giày" },
          { word: "shorts", meaning: "quần ngắn" },
          { word: "socks", meaning: "đôi tất, vớ" },
          { word: "umbrella", meaning: "cái ô, cây dù" },
          { word: "vest", meaning: "áo ghi lê" },
          { word: "window", meaning: "cửa sổ" }
        ]
      },

      {
        name: "Lesson 8 - Feelings",
        cards: [
          { word: "bored", meaning: "chán nản" },
          { word: "fine", meaning: "khỏe, tốt" },
          { word: "great", meaning: "tuyệt vời" },
          { word: "happy", meaning: "hạnh phúc, vui vẻ" },
          { word: "hungry", meaning: "đói bụng" },
          { word: "OK", meaning: "được, ổn" },
          { word: "sad", meaning: "buồn" },
          { word: "scared", meaning: "sợ hãi" },
          { word: "thirsty", meaning: "khát nước" },
          { word: "eat", meaning: "ăn" }
        ]
      },

      {
        name: "Lesson 9 - Days and Activities",
        cards: [
          { word: "Monday", meaning: "thứ hai" },
          { word: "Tuesday", meaning: "thứ ba" },
          { word: "Wednesday", meaning: "thứ tư" },
          { word: "Thursday", meaning: "thứ năm" },
          { word: "Friday", meaning: "thứ sáu" },
          { word: "Saturday", meaning: "thứ bảy" },
          { word: "Sunday", meaning: "chủ nhật" },
          { word: "sing", meaning: "hát" },
          { word: "music", meaning: "âm nhạc" },
          { word: "song", meaning: "bài hát" }
        ]
      },

      {
        name: "Lesson 10 - Toys and Games",
        cards: [
          { word: "hands down", meaning: "hạ tay xuống" },
          { word: "hands up", meaning: "giơ tay lên" },
          { word: "hide and seek", meaning: "trò chơi trốn tìm" },
          { word: "hopscotch", meaning: "trò nhảy lò cò" },
          { word: "robot", meaning: "người máy" },
          { word: "soccer", meaning: "bóng đá" },
          { word: "tag", meaning: "trò đuổi bắt" },
          { word: "top", meaning: "con quay" },
          { word: "yo-yo", meaning: "đồ chơi yo-yo" },
          { word: "violin", meaning: "đàn vĩ cầm" }
        ]
      },

      {
        name: "Lesson 11 - Daily Words",
        cards: [
          { word: "box", meaning: "cái hộp, cái thùng" },
          { word: "nose", meaning: "mũi" },
          { word: "nut", meaning: "hạt, quả hạch" },
          { word: "orange", meaning: "quả cam" },
          { word: "queen", meaning: "nữ hoàng" },
          { word: "ruler", meaning: "thước kẻ" },
          { word: "sun", meaning: "mặt trời" },
          { word: "snack", meaning: "thức ăn nhẹ" },
          { word: "yogurt", meaning: "sữa chua" },
          { word: "zoo", meaning: "sở thú" }
        ]
      },

      {
        name: "Lesson 12 - Colors",
        cards: [
          { word: "red", meaning: "màu đỏ" },
          { word: "blue", meaning: "màu xanh dương" },
          { word: "yellow", meaning: "màu vàng" },
          { word: "green", meaning: "màu xanh lá cây" },
          { word: "black", meaning: "màu đen" },
          { word: "white", meaning: "màu trắng" },
          { word: "orange", meaning: "màu cam" },
          { word: "pink", meaning: "màu hồng" },
          { word: "purple", meaning: "màu tím" },
          { word: "brown", meaning: "màu nâu" }
        ]
      },

      {
        name: "Lesson 13 - Food and Drinks",
        cards: [
          { word: "snack", meaning: "thức ăn nhẹ" },
          { word: "yogurt", meaning: "sữa chua" },
          { word: "milk", meaning: "sữa" },
          { word: "juice", meaning: "nước ép" },
          { word: "water", meaning: "nước" },
          { word: "hot chocolate", meaning: "sô-cô-la nóng" },
          { word: "tea", meaning: "trà" },
          { word: "ice cream", meaning: "kem" },
          { word: "meat", meaning: "thịt" },
          { word: "rice", meaning: "cơm, gạo" }
        ]
      }

    ]
  }
];
// ================= STATE =================

let view = "home";
let mode = "learn";

let currentClass = 0;
let currentLesson = 0;

let cardIndex = 0;

let learnQueue = [];
let reviewQueue = [];

let answer = "";
let shuffledLetters = [];

let lastSpokenWord = "";

// ⭐ ADD NEW STATE (KHÔNG ĐỤNG LOGIC CŨ)
let rememberedWords = [];
let unrememberedWords = [];
let showListMode = null;

// ================= INIT =================

renderHome();

// ================= HOME =================

function renderHome() {

  const app = document.getElementById("app");
  //const backBtn = document.getElementById("backBtn");

  //backBtn.style.display = "none";
  app.innerHTML = "";

  const select = document.createElement("select");

  data.forEach((c, i) => {
    const option = document.createElement("option");
    option.value = i;
    option.innerText = c.class;
    select.appendChild(option);
  });

  app.appendChild(select);
  app.appendChild(document.createElement("br"));

  const learnBtn = document.createElement("button");
  learnBtn.innerText = "📚 Học từ mới";

  learnBtn.onclick = () => {
    currentClass = parseInt(select.value);
    mode = "learn";
    view = "lesson";
    render();
  };

  const reviewBtn = document.createElement("button");
  reviewBtn.innerText = "🧠 Ôn tập";

  reviewBtn.onclick = () => {
    currentClass = parseInt(select.value);
    mode = "review";
    view = "lesson";
    render();
  };

  app.appendChild(learnBtn);
  app.appendChild(reviewBtn);
}

// ================= MAIN =================

function render() {

  const app = document.getElementById("app");
  //const backBtn = document.getElementById("backBtn");

  app.innerHTML = "";
  //backBtn.style.display = "inline";

  if (view === "lesson") renderLessonList();
  else if (view === "learn") renderLearn();
  else if (view === "review") renderReview();
}

// ================= LESSON =================

function renderLessonList() {

  const app = document.getElementById("app");

  const lessons = data[currentClass].lessons;
renderHeader();
  lessons.forEach((lesson, i) => {

    const btn = document.createElement("button");

    btn.innerText = lesson.name;

    btn.onclick = () => {

      currentLesson = i;

      const cards = lesson.cards;

      learnQueue = [...cards];
      reviewQueue = [...cards];

      // ⭐ RESET LIST FEATURE
      rememberedWords = [];
      unrememberedWords = [...cards];
      showListMode = null;

      answer = "";
      shuffledLetters = [];

      if (mode === "learn") view = "learn";
      else view = "review";

      render();
    };

    app.appendChild(btn);
  });
}

// ================= PROGRESS =================

function renderProgress(total, remaining) {

  const app = document.getElementById("app");

  const percent = Math.round(((total - remaining) / total) * 100);

  const text = document.createElement("div");
  text.className = "progress-text";
  text.innerText = `Tiến độ: ${percent}%`;

  const container = document.createElement("div");
  container.className = "progress-container";

  const bar = document.createElement("div");
  bar.className = "progress-bar";
  bar.style.width = percent + "%";

  container.appendChild(bar);

  app.appendChild(text);
  app.appendChild(container);
}

function renderHeader(extra = "") {

  const app = document.getElementById("app");

  // container
  const topBar = document.createElement("div");

  topBar.style.display = "flex";
  topBar.style.alignItems = "stretch";
  topBar.style.gap = "10px";
  topBar.style.marginBottom = "10px";

  // ===== BACK BUTTON MỚI =====

  const backBtn = document.createElement("button");

  backBtn.innerText = "⬅ Back";

  backBtn.style.padding = "10px 14px";
  backBtn.style.borderRadius = "10px";
  backBtn.style.border = "none";
  backBtn.style.background = "#ddd";
  backBtn.style.cursor = "pointer";
  backBtn.style.fontWeight = "bold";

  backBtn.onclick = goBack;

  // ===== HEADER =====

  const header = document.createElement("div");

  header.style.flex = "1";
  header.style.padding = "10px";
  header.style.background = "#f0f0f0";
  header.style.borderRadius = "10px";
  header.style.fontWeight = "bold";

  const className = data[currentClass].class;

  const lessonName =
    data[currentClass].lessons[currentLesson]
      ? data[currentClass].lessons[currentLesson].name
      : "-";

  const modeText =
    mode === "learn"
      ? "📚 Học"
      : "🧠 Ôn tập";

  let html = `
  🏫 Class: ${className} <br>
  🎯 Mode: ${modeText}
`;

if (view !== "lesson") {
  html += `<br>📖 Lesson: ${lessonName}`;
}

if (extra) {
  html += `<br>${extra}`;
}

header.innerHTML = html;

  topBar.appendChild(backBtn);
  topBar.appendChild(header);

  app.appendChild(topBar);
}

// ================= LEARN =================

function renderLearn() {

  const app = document.getElementById("app");
renderHeader();
  // ⭐ LIST MODE (KHÔNG ĐỤNG LOGIC KHÁC)
  if (showListMode) {

    const list =
      showListMode === "remembered"
        ? rememberedWords
        : unrememberedWords;

    const title = document.createElement("h3");
    title.innerText =
      showListMode === "remembered"
        ? "📗 Từ đã nhớ"
        : "📘 Từ chưa nhớ";

    app.appendChild(title);

    list.forEach(item => {

      const div = document.createElement("div");

      div.style.padding = "10px";
      div.style.margin = "5px";
      div.style.background = "#fff";
      div.style.borderRadius = "10px";
      div.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";

      div.innerHTML =
        `<b>${capitalize(item.word)}</b><br>${item.meaning}`;

      app.appendChild(div);
    });

    const backBtn = document.createElement("button");
    backBtn.innerText = "⬅ Quay lại học";

    backBtn.onclick = () => {
      showListMode = null;
      render();
    };

    app.appendChild(backBtn);

    return;
  }

  if (learnQueue.length === 0) {
    //alert("🎉 Bạn đã nhớ hết bài!");
    showAlert(
  "🎉 Hoàn thành",
  "Bạn đã nhớ hết bài!"
);
    view = "lesson";
    render();
    return;
  }

  const card = learnQueue[0];

  speakAuto(card.word);

  renderProgress(
    data[currentClass].lessons[currentLesson].cards.length,
    learnQueue.length
  );

  

  const wrapper = document.createElement("div");
  wrapper.className = "card";

  const inner = document.createElement("div");
  inner.className = "card-inner";

  const front = document.createElement("div");
  front.className = "card-front";
  front.innerText = capitalize(card.word);

  const back = document.createElement("div");
  back.className = "card-back";
  back.innerText = card.meaning;

  inner.appendChild(front);
  inner.appendChild(back);
  wrapper.appendChild(inner);

  wrapper.onclick = () => inner.classList.toggle("flipped");

  app.appendChild(wrapper);

  const speakBtn = document.createElement("button");
  speakBtn.innerText = "🔊 Nghe";
  speakBtn.onclick = () => speak(card.word);
  app.appendChild(speakBtn);

  const nextBtn = document.createElement("button");
  nextBtn.innerText = "Tiếp ▶";

  nextBtn.onclick = () => {
    if (learnQueue.length > 1) {
      learnQueue.push(learnQueue.shift());
    }
    render();
  };

  app.appendChild(nextBtn);

  const rememberedBtn = document.createElement("button");
  rememberedBtn.innerText = "✔ Đã nhớ";

  rememberedBtn.style.background = "#4CAF50";
  rememberedBtn.style.color = "white";

  rememberedBtn.onclick = () => {

    const word = learnQueue.shift();
    rememberedWords.push(word);
    unrememberedWords = learnQueue;

    if (learnQueue.length === 0) {
      //alert("🎉 Bạn đã nhớ hết bài!");
      showAlert(
  "🎉 Hoàn thành",
  "Bạn đã nhớ hết bài!"
);
      view = "lesson";
    }

    render();
  };

  app.appendChild(rememberedBtn);

  // ⭐ 2 NÚT MỚI
  const btn1 = document.createElement("button");
  btn1.innerText = "📘 Chưa nhớ";
  btn1.onclick = () => {
    showListMode = "unremembered";
    render();
  };

  const btn2 = document.createElement("button");
  btn2.innerText = "📗 Đã nhớ";
  btn2.onclick = () => {
    showListMode = "remembered";
    render();
  };

  app.appendChild(btn1);
  app.appendChild(btn2);
}

// ================= REVIEW (GIỮ NGUYÊN) =================

function renderReview() {

  const app = document.getElementById("app");

  if (reviewQueue.length === 0) {
    //alert("🎉 Hoàn thành ôn tập!");
    showAlert(
  "🎉 Hoàn thành",
  "Hoàn thành ôn tập!"
);
    view = "lesson";
    render();
    return;
  }

  const card = reviewQueue[0];
renderHeader();
  speakAuto(card.word);

  renderProgress(
    data[currentClass].lessons[currentLesson].cards.length,
    reviewQueue.length
  );

  const meaning = document.createElement("h2");
  meaning.innerText = "📘 " + card.meaning;
  app.appendChild(meaning);

  const speakBtn = document.createElement("button");
  speakBtn.innerText = "🔊 Nghe";
  speakBtn.onclick = () => speak(card.word);
  app.appendChild(speakBtn);

  if (shuffledLetters.length === 0 && answer.length === 0) {

    shuffledLetters = card.word
  .split("")
  .map((c, i) => ({
    char: i === 0
      ? c.toUpperCase()
      : c.toLowerCase(),
    used: false
  }));

    shuffledLetters.sort(() => Math.random() - 0.5);
  }

  const answerBox = document.createElement("h2");

  let display = "";

  for (let i = 0; i < card.word.length; i++) {
    display += i < answer.length ? answer[i] + " " : "_ ";
  }

  answerBox.innerText = display;
  app.appendChild(answerBox);

  const lettersDiv = document.createElement("div");

  shuffledLetters.forEach(item => {

    const btn = document.createElement("button");
    btn.innerText = item.char;

    if (item.used) btn.disabled = true;

    btn.onclick = () => {
      if (item.used) return;

      answer += item.char;
      item.used = true;

      render();
    };

    lettersDiv.appendChild(btn);
  });

  app.appendChild(lettersDiv);

  const deleteBtn = document.createElement("button");

deleteBtn.innerText = "⌫ Xóa";

deleteBtn.onclick = () => {

  if (answer.length === 0) return;

  const lastChar = answer[answer.length - 1];

  answer = answer.slice(0, -1);

  // mở lại chữ vừa dùng
  for (let i = shuffledLetters.length - 1; i >= 0; i--) {

    if (
      shuffledLetters[i].char === lastChar &&
      shuffledLetters[i].used
    ) {
      shuffledLetters[i].used = false;
      break;
    }
  }

  render();
};

app.appendChild(deleteBtn);

  const hintBtn = document.createElement("button");
hintBtn.innerText = "💡 Gợi ý";

hintBtn.onclick = () => {

  const card = reviewQueue[0];

  //alert(
 // "💡 GỢI Ý\n\n" +
  //"Từ: " + capitalize(card.word) + "\n" +
 // "Nghĩa: " + card.meaning
//);

showAlert(
  "💡 GỢI Ý",
  "Từ: " + capitalize(card.word) + "\n" +
  "Nghĩa: " + card.meaning
);
};

app.appendChild(hintBtn);

  const checkBtn = document.createElement("button");
  checkBtn.innerText = "✔ Kiểm tra";

  checkBtn.onclick = () => {

    const correct =
      answer.toLowerCase() === card.word.toLowerCase();

    if (correct) {
      playCorrectSound();
      animate(true);

      setTimeout(() => {
        reviewQueue.shift();
        reset();
      }, 300);

    } else {
      playWrongSound();
      animate(false);

      setTimeout(() => {
        reviewQueue.push(reviewQueue.shift());
        reset();
      }, 300);
    }
  };

  app.appendChild(checkBtn);
}

// ================= REST GIỮ NGUYÊN =================

function animate(ok) {
  const app = document.getElementById("app");
  app.classList.add(ok ? "correct" : "wrong");

  setTimeout(() => {
    app.classList.remove("correct");
    app.classList.remove("wrong");
  }, 400);
}

function playCorrectSound() {
  const ctx = new AudioContext();
  const o = ctx.createOscillator();
  const g = ctx.createGain();

  o.type = "sine";
  o.frequency.value = 1200;

  g.gain.value = 0.2;

  o.connect(g);
  g.connect(ctx.destination);

  o.start();
  o.stop(ctx.currentTime + 0.2);
}

function playWrongSound() {
  const ctx = new AudioContext();
  const o = ctx.createOscillator();
  const g = ctx.createGain();

  o.type = "square";
  o.frequency.value = 200;

  g.gain.value = 0.2;

  o.connect(g);
  g.connect(ctx.destination);

  o.start();
  o.stop(ctx.currentTime + 0.3);
}

function reset() {
  answer = "";
  shuffledLetters = [];
  lastSpokenWord = "";
  render();
}

function speak(text) {
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  speechSynthesis.speak(u);
}

function speakAuto(word) {
  if (lastSpokenWord !== word) {
    speak(word);
    lastSpokenWord = word;
  }
}

function capitalize(w) {
  return w.charAt(0).toUpperCase() + w.slice(1);
}

function goBack() {
  answer = "";
  shuffledLetters = [];
  learnQueue = [];
  reviewQueue = [];
  lastSpokenWord = "";

  if (view === "learn" || view === "review") {
    view = "lesson";
    render();
  } else {
    view = "home";
    renderHome();
  }
}

function showAlert(title, message) {

  const overlay = document.createElement("div");

  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.background = "rgba(0,0,0,0.5)";
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.zIndex = "9999";

  const box = document.createElement("div");

  box.style.background = "white";
  box.style.padding = "20px";
  box.style.borderRadius = "12px";
  box.style.width = "300px";
  box.style.textAlign = "center";
  box.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";

  // TITLE
  const titleEl = document.createElement("h3");
  titleEl.innerText = title || "Thông báo";

  // MESSAGE
  const msgEl = document.createElement("div");
  msgEl.innerText = message || "";
  msgEl.style.margin = "15px 0";
  msgEl.style.whiteSpace = "pre-line"; // cho xuống dòng \n

  // BUTTON
  const btn = document.createElement("button");
  btn.innerText = "OK";

  btn.onclick = () => {
    document.body.removeChild(overlay);
  };

  box.appendChild(titleEl);
  box.appendChild(msgEl);
  box.appendChild(btn);

  overlay.appendChild(box);
  document.body.appendChild(overlay);
}