// eslint-disable-next-line no-unused-vars

// My Recent Works: projects
const projects = {
  pink: {
    title: 'Pink Way',
    paragraph: ['A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.'],
    listed: ['images/divider.png', 'CSS', 'HTML', 'JavaScript'],
    images: 'images/posts/post1.jpg',
  },
  yellow: {
    title: 'Yellow View',
    paragraph: ['A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.'],
    listed: ['images/divider.png', 'Tailwind CSS', 'HTML', 'Ruby'],
    images: 'images/posts/post2.jpg',
  },
  tropical: {
    title: 'Tropical Cubes',
    paragraph: ['A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.'],
    listed: ['images/divider.png', 'React', 'HTML', 'Next.js'],
    images: 'images/posts/post3.jpg',
  },
  windows: {
    title: 'Windows Chips',
    paragraph: ['A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.'],
    listed: ['images/divider.png', 'React', 'Node.js', 'Next.js'],
    images: 'images/posts/post4.jpg',
  },
};

// Project's Template: projectName
const arr = ['pink', 'Yellow', 'tropical', 'windows'];
Object.keys(arr).forEach((index) => {
  const projectName = arr[index];
  document.getElementById('works').innerHTML += `
  <div class="modal-bg"></div>
  <section class="${projectName}">
  <img class="resize-img" src="${projects[projectName].images}" alt="work-image">

  <div class="post-content">
    <h2>${projects[projectName].title}</h2>
    <p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</p>
    <ul>
      <li><img src="${projects[projectName].listed[0]}" alt="divider"></li>
      <li><a href="#">${projects[projectName].listed[1]}</a></li>
      <li><img src="${projects[projectName].listed[0]}" alt="divider"></li>
      <li><a href="#">${projects[projectName].listed[2]}</a></li>
      <li><img src="${projects[projectName].listed[0]}" alt="divider"></li>
      <li><a href="#">${projects[projectName].listed[3]}</a></li>
      <li><img src="${projects[projectName].listed[0]}" alt="divider"></li>
    </ul>
    <button class="work-button" id="${projectName}" href="javascript:void(0);" onclick="myModal()">See Project</button>
  </div>
  </section>`;
});

// Function to Close: modal-popup
function closeModal() {
  document.getElementById('modal-popup').innerHTML = '';
  document.getElementById('modal-popup').style.display = 'none';
}

// Function: modalPop & Modal's Template: modal-popup
function modalPop(projectName) {
  document.getElementById('modal-popup').innerHTML = `
  <div id="modal-bg"></div>
  <div class="modal-content">
  <div id="modal-top">
    <h2>${projects[projectName].title}</h2>
    <img id="modal-close" src="images/close.svg" alt="close-button">
  </div>
  <img class="responsive" src="${projects[projectName].images}" alt="art-work">
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.</p>
  <ul class="modal-social">
    <li><img src="${projects[projectName].listed[0]}" alt="divider"></li>
    <li><a href="#">${projects[projectName].listed[1]}</a></li>
    <li><img src="${projects[projectName].listed[0]}" alt="divider"></li>
    <li><a href="#">${projects[projectName].listed[2]}</a></li>
    <li><img src="${projects[projectName].listed[0]}" alt="divider"></li>
    <li><a href="#">${projects[projectName].listed[3]}</a></li>
    <li><img src="${projects[projectName].listed[0]}" alt="divider"></li>
  </ul>
  <div id="btn-align">
    <button id="modal-button">See Live <img src="images/btn.png" alt="github"></button>
    <button id="modal-button">See Source <img src="images/github.png" alt="open"></button>
  </div>
  `;
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-bg').addEventListener('click', closeModal);
}

/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */

/* eslint-disable no-unused-vars */

// Passes projectName into modalPop
for (let i = 0; i < arr.length; i++) {
  const projectName = arr[i];
  const btn = document.getElementById(projectName);
  btn.addEventListener('click', () => {
    modalPop(projectName);
  });
}

// Open/Close Menu
function mobileMenu() {
  const div = document.getElementById('menu');
  const img = document.getElementById('hideMenu');
  const bg = document.getElementById('header-bg');
  if (div.style.display === 'block') {
    div.style.display = 'none';
    img.style.display = 'block';
    bg.style.background = 'none';
  } else {
    div.style.display = 'block';
    img.style.display = 'none';
    bg.style.background = 'url(images/mobile/toop-menu-bg.png), url(images/mobile/bot-menu-bg.png)';
    bg.style.backgroundRepeat = 'no-repeat, no-repeat';
    bg.style.backgroundPosition = 'left center, right bottom';
  }
}

// Approach 'onclick' to Close: modal-popup
function myModal() {
  const modal = document.getElementById('modal-popup');
  if (modal.style.display === 'block') {
    modal.style.display = 'none';
  } else {
    modal.style.display = 'block';
  }
}

/* eslint-enable no-unused-vars */

// Form Validation
const form = document.getElementById('form');
const email = document.getElementById('email-input');
const error = 'Your e-mail can not contain uppercase letters';
const small = document.querySelector('#small');

// Email Case Sensitive
function upperCase(input) {
  return /[A-Z]/.test(input);
}

// Error Message
form.addEventListener('submit', (event) => {
  const emailInput = email.value.trim();
  if (upperCase(emailInput)) {
    event.preventDefault();
    small.innerHTML = error;
  } else {
    small.innerHTML = '';
  }
});
