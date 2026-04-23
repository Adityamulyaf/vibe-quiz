// Bank soal
const questionBank = [
  { id: 1, cat: "Pengetahuan Umum",   text: "Ibu kota negara Australia adalah..." },
  { id: 2, cat: "Sains",              text: "Unsur kimia dengan simbol 'Au' adalah..." },
  { id: 3, cat: "Teknologi",          text: "Siapakah pendiri perusahaan Apple Inc.?" },
  { id: 4, cat: "Pengetahuan Umum",   text: "Berapa jumlah benua di dunia?" },
  { id: 5, cat: "Sains",              text: "Planet manakah yang paling dekat dengan Matahari?" },
  { id: 6, cat: "Sejarah",            text: "Pada tahun berapa Indonesia merdeka?" },
  { id: 7, cat: "Teknologi",          text: "Apa kepanjangan dari 'HTML'?" },
  { id: 8, cat: "Sains",              text: "Berapa kecepatan cahaya dalam vakum (per detik)?" },
  { id: 9,  cat: "Geografi",          text: "Sungai terpanjang di dunia adalah..." },
  { id: 10, cat: "Pengetahuan Umum",  text: "Bahasa resmi negara Brasil adalah..." },
  { id: 11, cat: "Sains",             text: "Apa nama proses perubahan wujud dari gas menjadi cair?" },
  { id: 12, cat: "Sejarah",           text: "Siapakah presiden pertama Amerika Serikat?" },
  { id: 13, cat: "Teknologi",         text: "Apa nama sistem operasi buatan Google untuk smartphone?" },
  { id: 14, cat: "Matematika",        text: "Berapakah hasil dari akar kuadrat dari 144?" },
  { id: 15, cat: "Geografi",          text: "Gunung tertinggi di dunia, Mount Everest, terletak di perbatasan negara mana?" },
  { id: 16, cat: "Sains",             text: "Organ manakah yang memproduksi insulin dalam tubuh manusia?" },
  { id: 17, cat: "Sejarah",           text: "Perang Dunia II berakhir pada tahun..." },
  { id: 18, cat: "Teknologi",         text: "Apa kepanjangan dari 'CPU'?" },
  { id: 19, cat: "Matematika",        text: "Berapakah nilai Pi (π) hingga dua desimal?" },
  { id: 20, cat: "Sains",             text: "Unsur dengan nomor atom 1 pada tabel periodik adalah..." },
  { id: 21, cat: "Geografi",          text: "Selat manakah yang memisahkan pulau Jawa dan Sumatera?" },
  { id: 22, cat: "Sains",             text: "Hukum gravitasi universal dikemukakan oleh..." },
  { id: 23, cat: "Teknologi",         text: "Protokol transfer data yang digunakan untuk mengirim email adalah..." },
  { id: 24, cat: "Matematika",        text: "Jika suatu deret geometri memiliki suku pertama 3 dan rasio 4, berapakah suku ke-4?" },
  { id: 25, cat: "Sejarah",           text: "Perjanjian apakah yang mengakhiri Perang Dunia I?" },
  { id: 26, cat: "Sains",             text: "Partikel subatomik apakah yang tidak memiliki muatan listrik?" },
  { id: 27, cat: "Teknologi",         text: "Algoritma pengurutan manakah yang memiliki kompleksitas waktu rata-rata O(n log n)?" },
  { id: 28, cat: "Matematika",        text: "Berapakah jumlah semua bilangan prima antara 1 dan 20?" },
  { id: 29, cat: "Sains",             text: "Prinsip ketidakpastian Heisenberg menyatakan bahwa tidak mungkin mengetahui secara bersamaan dengan tepat..." },
  { id: 30, cat: "Matematika",        text: "Manakah pernyataan yang benar mengenai bilangan Euler (e)?" },
];

const answerBank = {
  1: { options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],      correctIndex: 2 },
  2: { options: ["Perak", "Emas", "Tembaga", "Aluminium"],            correctIndex: 1 },
  3: { options: ["Bill Gates", "Elon Musk", "Steve Jobs", "Mark Zuckerberg"],               correctIndex: 2 },
  4: { options: ["5", "6", "7", "8"],                                 correctIndex: 2 },
  5: { options: ["Venus", "Merkurius", "Mars", "Bumi"],               correctIndex: 1 },
  6: { options: ["1942", "1945", "1949", "1950"],                     correctIndex: 1 },
  7: { options: ["HyperText Markup Language", "High Tech Modern Language", "HyperText Media Link", "Home Tool Markup Language"], correctIndex: 0 },
  8: { options: ["100.000 km", "300.000 km", "500.000 km", "1.000.000 km"],                 correctIndex: 1 },
  9:  { options: ["Amazon", "Nil", "Yangtze", "Mississippi"],          correctIndex: 1 },
  10: { options: ["Spanyol", "Portugis", "Inggris", "Prancis"],        correctIndex: 1 },
  11: { options: ["Evaporasi", "Sublimasi", "Kondensasi", "Deposisi"], correctIndex: 2 },
  12: { options: ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"], correctIndex: 2 },
  13: { options: ["iOS", "Android", "HarmonyOS", "Windows Phone"],     correctIndex: 1 },
  14: { options: ["10", "11", "12", "14"],                             correctIndex: 2 },
  15: { options: ["Nepal dan Tibet", "India dan Nepal", "Nepal dan Pakistan", "Tibet dan India"], correctIndex: 0 },
  16: { options: ["Hati", "Ginjal", "Pankreas", "Limpa"],             correctIndex: 2 },
  17: { options: ["1943", "1944", "1945", "1946"],                     correctIndex: 2 },
  18: { options: ["Central Processing Unit", "Computer Processing Utility", "Core Processor Unit", "Central Program Unit"], correctIndex: 0 },
  19: { options: ["3.14", "3.16", "3.12", "3.18"],                    correctIndex: 0 },
  20: { options: ["Helium", "Oksigen", "Hidrogen", "Litium"],         correctIndex: 2 },
  21: { options: ["Selat Bali", "Selat Sunda", "Selat Lombok", "Selat Madura"], correctIndex: 1 },
  22: { options: ["Albert Einstein", "Galileo Galilei", "Isaac Newton", "Nikola Tesla"], correctIndex: 2 },
  23: { options: ["FTP", "HTTP", "SMTP", "SSH"],                       correctIndex: 2 },
  24: { options: ["48", "64", "192", "128"],                           correctIndex: 2 },
  25: { options: ["Perjanjian Westphalia", "Perjanjian Versailles", "Perjanjian Paris", "Perjanjian Geneva"], correctIndex: 1 },
  26: { options: ["Proton", "Elektron", "Positron", "Neutron"],        correctIndex: 3 },
  27: { options: ["Bubble sort", "Merge sort", "Insertion sort", "Selection sort"], correctIndex: 1 },
  28: { options: ["58", "60", "77", "97"],                             correctIndex: 2 },
  29: { options: [
        "Massa dan muatan suatu partikel",
        "Posisi dan momentum suatu partikel",
        "Energi dan suhu suatu partikel",
        "Kecepatan dan percepatan suatu partikel"
      ], correctIndex: 1 },
  30: { options: [
        "e adalah bilangan rasional yang nilainya tepat 2.718",
        "e adalah basis logaritma natural dan merupakan bilangan transendental",
        "e ditemukan oleh Isaac Newton pada abad ke-17",
        "e hanya digunakan dalam perhitungan geometri lingkaran"
      ], correctIndex: 1 },
};

const allQuestions = questionBank.map(function(question) {
  const answerData = answerBank[question.id];

  if (!answerData) {
    throw new Error(`Jawaban untuk soal ID ${question.id} tidak ditemukan.`);
  }

  return {
    id: question.id,
    cat: question.cat,
    text: question.text,
    options: answerData.options,
    correctIndex: answerData.correctIndex
  };
});

// state
let currentQ = 0;
let score = 0;
let correctCount = 0;
let wrongCount = 0;
let timerInterval = null;
let timeLeft = 20;
let timeUsed = [];
let answered = false;
let userAnswers = [];
let isStarting = false;

const LABELS = ['A', 'B', 'C', 'D'];
const TIME_PER_Q = 20;
const START_COUNTDOWN_STEPS = [
  { text: '3', className: 'countdown-white' },
  { text: '2', className: 'countdown-blue' },
  { text: '1', className: 'countdown-orange' },
  { text: 'Mulai', className: 'countdown-black' }
];

function runStartCountdown(onDone) {
  const $overlay = $('#start-countdown-overlay');
  const $text = $('#start-countdown-text');
  const countdownClasses = 'countdown-white countdown-blue countdown-orange countdown-black';
  let stepIndex = 0;

  function showStep(index) {
    const step = START_COUNTDOWN_STEPS[index];
    $overlay.removeClass(countdownClasses).addClass(step.className);
    $text.text(step.text);
  }

  $overlay.addClass('active').attr('aria-hidden', 'false');
  showStep(stepIndex);

  function nextStep() {
    stepIndex++;
    if (stepIndex >= START_COUNTDOWN_STEPS.length) {
      $overlay.removeClass('active').removeClass(countdownClasses).attr('aria-hidden', 'true');
      onDone();
      return;
    }
    showStep(stepIndex);
    setTimeout(nextStep, 700);
  }

  setTimeout(nextStep, 700);
}

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function initQuiz() {
  currentQ = 0;
  score = 0;
  correctCount = 0;
  wrongCount = 0;
  timeUsed = [];
  userAnswers = [];
  loadQuestion();
}

// load atas
function loadQuestion() {
  answered = false;
  timeLeft = TIME_PER_Q;

  const q = allQuestions[currentQ];
  const total = allQuestions.length;
  const pct = (currentQ / total) * 100;

  $('#progress-fill').css('width', pct + '%');
  $('#progress-text').text(`Pertanyaan ${currentQ + 1} dari ${total}`);
  $('#score-live').text(`Skor: ${score}`);
  $('#question-cat').text(q.cat);
  $('#question-text').text(q.text);

  // reset timer
  $('#timer').removeClass('warning danger').find('#timer-count').text(TIME_PER_Q);

  // render options
  const $grid = $('#options-grid').empty();
  q.options.forEach(function(opt, i) {
    const $btn = $('<button>')
      .addClass('option-btn')
      .attr('data-index', i)
      .html(`<span class="option-label">${LABELS[i]}</span><span>${opt}</span>`);
    $grid.append($btn);
  });

  // reset feedback, next button
  $('#feedback-box').hide().removeClass('correct-fb wrong-fb');
  $('#btn-next').hide();

  // start timer
  clearInterval(timerInterval);
  timerInterval = setInterval(tickTimer, 1000);
}

// timer
function tickTimer() {
  timeLeft--;
  $('#timer-count').text(timeLeft);

  if (timeLeft <= 10 && timeLeft > 5) {
    $('#timer').addClass('warning').removeClass('danger');
  } else if (timeLeft <= 5) {
    $('#timer').addClass('danger').removeClass('warning');
  }

  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    if (!answered) timeOut();
  }
}

function timeOut() {
  answered = true;
  const q = allQuestions[currentQ];
  timeUsed.push(TIME_PER_Q);
  userAnswers.push({ q: q.text, correct: false, correctAns: q.options[q.correctIndex], userAns: null });

  // highlight correct answer
  $(`.option-btn[data-index="${q.correctIndex}"]`).addClass('correct');
  $('.option-btn').prop('disabled', true);

  $('#feedback-box')
    .removeClass('correct-fb wrong-fb').addClass('wrong-fb')
    .html('<i class="fa-regular fa-clock feedback-icon"></i><span>Waktu habis! Jawaban yang benar adalah: <strong>' + q.options[q.correctIndex] + '</strong></span>')
    .fadeIn(300);

  wrongCount++;
  setTimeout(showNext, 1800);
}

// answer click
$(document).on('click', '.option-btn', function() {
  if (answered) return;
  answered = true;
  clearInterval(timerInterval);

  const selected = parseInt($(this).attr('data-index'));
  const q = allQuestions[currentQ];
  const elapsed = TIME_PER_Q - timeLeft;
  timeUsed.push(elapsed);

  if (selected === q.correctIndex) {
    // correct
    const timeBonus = Math.max(0, Math.round((timeLeft / TIME_PER_Q) * 50));
    const gained = 100 + timeBonus;
    score += gained;
    correctCount++;

    $(this).addClass('correct');
    userAnswers.push({ q: q.text, correct: true, correctAns: q.options[q.correctIndex], userAns: q.options[selected] });

    $('#feedback-box')
      .removeClass('wrong-fb').addClass('correct-fb')
      .html(`<i class="fa-solid fa-circle-check feedback-icon"></i><span> Jawaban benar! <strong>+${gained} poin</strong> (termasuk bonus waktu +${timeBonus})</span>`)
      .fadeIn(300);
  } else {
    // wrong
    wrongCount++;
    $(this).addClass('wrong');
    $(`.option-btn[data-index="${q.correctIndex}"]`).addClass('correct');
    userAnswers.push({ q: q.text, correct: false, correctAns: q.options[q.correctIndex], userAns: q.options[selected] });

    $('#feedback-box')
      .removeClass('correct-fb').addClass('wrong-fb')
      .html('<i class="fa-solid fa-circle-xmark feedback-icon"></i><span> Salah! Jawaban yang benar: <strong>' + q.options[q.correctIndex] + '</strong></span>')
      .fadeIn(300);
  }

  $('.option-btn').prop('disabled', true);
  $('#score-live').text(`Skor: ${score}`);
  $('#btn-next').fadeIn(300);
});

// next question
$('#btn-next').on('click', showNext);

function showNext() {
  currentQ++;
  if (currentQ < allQuestions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// result
function showResult() {
  clearInterval(timerInterval);
  $('#progress-fill').css('width', '100%');

  // rating
  const pct = correctCount / allQuestions.length;
  let iconClass, title, subtitle;
  if (pct === 1)       { iconClass = 'fa-solid fa-trophy'; title = 'Sempurna!'; subtitle = 'Kamu menjawab semua dengan benar. Luar biasa!'; }
  else if (pct >= 0.75){ iconClass = 'fa-solid fa-medal'; title = 'Hebat!'; subtitle = 'Kamu hampir sempurna. Pertahankan!'; }
  else if (pct >= 0.5) { iconClass = 'fa-solid fa-thumbs-up'; title = 'Lumayan!'; subtitle = 'Lebih dari setengah benar. Terus belajar!'; }
  else if (pct >= 0.25){ iconClass = 'fa-solid fa-book-open'; title = 'Perlu Belajar'; subtitle = 'Masih banyak yang bisa dipelajari. Semangat!'; }
  else                  { iconClass = 'fa-solid fa-face-smile'; title = 'Coba Lagi!'; subtitle = 'Jangan menyerah, coba lagi dan kamu pasti bisa!'; }

  $('#result-icon').attr('class', iconClass + ' result-emoji');
  $('#result-title').text(title);
  $('#result-subtitle').text(subtitle);
  $('#final-score').text(score);
  $('#stat-correct').text(correctCount);
  $('#stat-wrong').text(wrongCount);

  const avgTime = timeUsed.length
    ? (timeUsed.reduce((a, b) => a + b, 0) / timeUsed.length).toFixed(1)
    : 0;
  $('#stat-time').text(avgTime + 's');

  // build review list
  const $list = $('#review-list').empty();
  userAnswers.forEach(function(ua) {
    const dotClass = ua.correct ? 'ok' : 'bad';
    const dotIcon = ua.correct
      ? '<i class="fa-solid fa-check"></i>'
      : '<i class="fa-solid fa-xmark"></i>';
    const ansHtml = ua.correct
      ? `<div class="review-ans">Jawaban kamu: <span>${ua.userAns}</span></div>`
      : `<div class="review-ans">Jawaban benar: <span>${ua.correctAns}</span>${ua.userAns ? ` | Jawabanmu: ${ua.userAns}` : ' (timeout)'}</div>`;
    $list.append(`
      <div class="review-item">
        <div class="review-dot ${dotClass}">${dotIcon}</div>
        <div>
          <div class="review-q">${ua.q}</div>
          ${ansHtml}
        </div>
      </div>
    `);
  });

  showScreen('screen-result');
}

function showScreen(id) {
  $('.screen').removeClass('active').hide();
  $('#' + id).addClass('active').show();
}

$('#btn-start').on('click', function() {
  if (isStarting) return;
  isStarting = true;
  runStartCountdown(function() {
    showScreen('screen-quiz');
    initQuiz();
    isStarting = false;
  });
});

$('#btn-restart').on('click', function() {
  showScreen('screen-welcome');
});

$('.screen').hide();
$('#screen-welcome').addClass('active').show();