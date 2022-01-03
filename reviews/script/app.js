import data from './data.js';

const img = document.querySelector('#person-img');
const author = document.querySelector('.author');
const job = document.querySelector('.job');
const text = document.querySelector('.info');
const content = document.querySelector('.review');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const rdmBtn = document.querySelector('.random-btn');

// Show Person
const showPerson = (person) => {
  const item = data[person];
  img.src = item.img;
  author.innerHTML = item.name;
  job.innerHTML = item.job;
  text.innerHTML = item.text;
};

// Set Starting items
let currentItem = 0;

// Load initial item
window.addEventListener('DOMContentLoaded', () => {
  showPerson(currentItem);
});

// Show Next Person
nextBtn.addEventListener('click', () => {
  currentItem++;
  if (currentItem === data.length) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// Show Prev Person
prevBtn.addEventListener('click', () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = data.length - 1;
  }
  showPerson(currentItem);
});

// Show Random Person
rdmBtn.addEventListener('click', () => {
  let random = Math.floor(Math.random() * data.length);
  console.log(random);
  if (currentItem != random) {
    currentItem = random;
    showPerson(currentItem);
    console.log(currentItem);
  }
});
