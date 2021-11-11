// eslint-disable-next-line no-unused-vars
const projects = {
  Pink: {
   title: 'Pink Way',
   paragraph: ['A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.'],
   listed: ['images/divider.png', 'CSS', 'HTML', 'JavaScript'],
   images: 'images/posts/post1.jpg'
 },
  Yellow: {
   title: 'Yellow View',
   paragraph: ['A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.'],
   listed: ['images/divider.png', 'Tailwind CSS', 'HTML', 'Ruby'],
   images: 'images/posts/post2.jpg'
 },
 Tropical: {
   title: 'Tropical Cubes',
   paragraph: ['A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.'],
   listed: ['images/divider.png', 'React', 'HTML', 'Next.js'],
   images: 'images/posts/post3.jpg'
 },
  Windows: {
   title: 'Windows Chips',
   paragraph: ['A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.'],
   listed: ['images/divider.png', 'React', 'Node.js', 'Next.js'],
   images: 'images/posts/post4.jpg'
 },
};

let arr = ['Pink', 'Yellow', 'Tropical', 'Windows'];
for ( let index in arr) {
  let projectName = arr[index];
  document.getElementById("works").innerHTML += `
  <section>
  <img class="responsive" src="${projects[projectName].images}" alt="work-image">

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
  <button class="work-button" id="work-button-${projectName}" href="javascript:void(0);" onclick="myModal()">See Project</button>
  </div>
  </section>`;
};


function mobileMenu() {
  const div = document.getElementById('menu');
  const img = document.getElementById('hideMenu');
  const bg = document.getElementById('header-bg')
  if (div.style.display === 'block') {
    div.style.display = 'none';
    img.style.display = 'block';
    bg.style.background = 'none'
  } else {
    div.style.display = 'block';
    img.style.display = 'none';
    bg.style.background = 'url(images/mobile/toop-menu-bg.png), url(images/mobile/bot-menu-bg.png)';
    bg.style.backgroundRepeat = 'no-repeat, no-repeat';
    bg.style.backgroundPosition = 'left center, right bottom';
  }
};


function myModal() {
  const modal = document.getElementById('modal-popup');
  if (modal.style.display === 'block') {
    modal.style.display = 'none';
  } else {
    modal.style.display = 'block';
  }
};

// const getProject = (portfolio) => {
  
//  return projects[portfolio];
// };




// for (i = 0; i < projects.length; i++) {
//   document.getElementById("works").innerHTML += `
//   <img src="${projects[i].image[0]}" alt="laptop" class="laptop">
//   <section class="project" id="project${i + 1}">
//   <h2 class="nameModal proj-name">${projects[i].name + (i + 1)}</h2>
//   <ul class="tools">
//   <li class="tool">${projects[i].technologies[0]}</li>
//   <li class="tool">${projects[i].technologies[1]}</li>
//   <li class="tool">${projects[i].technologies[2]}</li>
//   </ul>
//   <button type="button" id="see-project${i + 1}" class="see-project">
//   See this project<img
//   src="images/arrow1.png"
//   alt="arrow"
//   class="arrow mobile"
//   /><img src="images/Union.svg" alt="arrow" class="arrow desktop" />
//   </button>
//   </section>`;
//   }



/*<div class="modal-content">
  <div id="modal-top">
    <h2>Multi-Post Stories</h2>
    <a href="javascript:void(0);" onclick="myModal()">
      <img src="images/mobile/close.png" alt="close-button">
    </a>  
  </div>
  <img class="responsive" src="images/art-work.png" alt="art-work">
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.</p>
  <ul class="modal-social">
    <li><a href="#">CSS</a></li>
    <li><img src="images/divider.png" alt="divider"></li>
    <li><a href="#">HTML</a></li>
    <li><img src="images/divider.png" alt="divider"></li>
    <li><a href="#">Bootstrap</a></li>
    <li><img src="images/divider.png" alt="divider"></li>
    <li><a href="#">Ruby</a></li>
  </ul>
  <div id="btn-align">
    <button id="modal-button">See Live <img src="images/btn.png" alt="github"></button>
    <button id="modal-button">See Source <img src="images/github.png" alt="open"></button>
  </div> */