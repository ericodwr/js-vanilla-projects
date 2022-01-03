const questions = document.querySelectorAll('.question');

for (const question of questions) {
  const btn = question.querySelector('.question-btn');
  console.log(btn);

  btn.addEventListener('click', () => {
    questions.forEach((item) => {
      console.log(item);
      if (item !== question) {
        item.classList.remove('show-text');
      }
    });

    question.classList.toggle('show-text');
  });
}
