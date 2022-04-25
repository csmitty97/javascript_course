'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////  Implementing Smooth Scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// Button scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current Scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  // coordinates for where button is in relation to the whole page. x is horizontal. y is verticle

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  //window.scrollTo(
  //  s1coords.left + window.pageXOffset,
  // s1coords.top + window.pageYOffset
  // );

  // OR

  //window.scrollTo({
  //left: s1coords.left + window.pageXOffset,
  //top: s1coords.top + window.pageYOffset,
  //behavior: 'smooth',
  //});

  // OR

  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////
// Page Navigation

//document.querySelectorAll('.nav__link').forEach(function (el) {
// el.addEventListener('click', function (e) {
//  e.preventDefault();
// const id = this.getAttribute('href');
// console.log(id);
// document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
// });
//});

// 1. Add event Listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  //console.log(e.target);

  // Matching Strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    //console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed Component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Remove active Tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Active Tab
  clicked.classList.add('operations__tab--active');

  // Activate Content Area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu Fade Animation
const nav = document.querySelector('.nav');

const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

///////////////////////// Sticky Navigation

/*
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

window.addEventListener('scroll', function (e) {
  console.log(window.scrollY);

  if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});
*/

////////////////////// Sticky Navigation: Intersection Observer API

// entries are array of threshold entries
//const obsCallback = function (entries, observer) {
// entries.forEach(entry => {
//  console.log(entry);
// });
//};

//const obsOptions = {
// root: null,
// threshold: [0, 0.2],
//threshold: 0.1,
//};

//const observer = new IntersectionObserver(obsCallback, obsOptions);
//observer.observe(section1);

//////////////////// Types of Events and Handlers

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

///// Reveal Section

const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  //section.classList.add('section--hidden');
});

// Lazy Loading Images
const imgTargets = document.querySelectorAll('img[data-src]');
console.log(imgTargets);

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

// Slider
const sliders = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');

  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  // slide 1 = 0%
  // slide 2 = 100%
  // slide 3 = 200%
  // slide 4 = 300%

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next Slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    }
    curSlide--;
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  // Event Handlers
  // Next slide to Right (Increase)
  btnRight.addEventListener('click', nextSlide);
  // curSlide = 1:  -100%, 0%, 100%, 200%

  //Next slide to Left (Decrease)
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    console.log(e);
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};

sliders();

/*
const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great!  You are reading the heading! :D');
  // make it so we only get event once instead of repeatedly
  // removal code doesn't have to be in function
  //h1.removeEventListener('mouseenter', alertH1);
};

//h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
*/

//h1.addEventListener('mouseenter', function (e) {
// alert('addEventListener: Great!  You are reading the heading! :D');
//});

// OR

//h1.onmouseenter = function (e) {
//alert('onmouseenter: Greate! You are reading the heading! :D');
//};

///////////////////////////////////////
///////////////////////////////////
/*
//////////////////// Selecting Elements
/*
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//////////// Creating and Inserting Elements

const message = document.createElement('div');
message.classList.add('cookie-message');
//message.textContent =
//'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class = "btn btn--close-cookie">Got it!</button>';

//header.prepend(message); // prepend makes it first child so at top of page
header.append(message); // makes element the last child so at bottom
//header.append(message.cloneNode(true)); // cloneNode puts it at top and bottom

//header.before(message);
//header.after(message);

////////////////////// Delete Elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    //message.parentElement.removeChild(message);
  });

////////// Styles
message.style.backgroundColor = '#37384d';
message.style.width = '120%';

// we cannot find a style that we didn't set locally
console.log(message.style.height); // nothing
console.log(message.style.backgroundColor); // rgb given

// gives us access to values of elements from page not done locally
console.log(getComputedStyle(message).height);
console.log(getComputedStyle(message).color);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

////////// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// Non-Standard
console.log(logo.designer); // Undefined  won't work
// have to use getAttribute
console.log(logo.getAttribute('designer')); // Jonas - works
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

const link1 = document.querySelector('.nav__link--btn');
console.log(link1.href); // provides URL
console.log(link1.getAttribute('href')); // #

////////////////// Data Attributes
console.log(logo.dataset.versionNumber); // 3.0

//////////////////// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes

// Don't Use   /  Will override all classes
//logo.className = 'jonas';
*/

//////////////////////// Event Propogation in Practice
// rgb (255, 255, 255)
/*
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // Stop Propogation  // stops doing all at once
  // e.stopPropagation(); // but not good idea to use
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);
  }
  // true/false
);
*/

/////////////////////////////////////////
// DOM Traversing
/*
const h1 = document.querySelector('h1');

// Going Downwards: child
console.log(h1.querySelector('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going Upwards: Parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)'; // selects closest header to parent element in h1 class

h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: siblings
console.log(h1.previousElementSibling); // null bc there is nothing there
console.log(h1.nextElementSibling); // h4

console.log(h1.previousSibling); // #text
console.log(h1.nextSibling); // #text

// to get all siblings
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
  // makes elements 50% smaller if not h1
});
*/

//////////////////////// Lifecycle DOM Events
/*
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

// Asks users if they are sure if they want to leave when x'ing out of page.

//window.addEventListener('beforeunload', function (e) {
//e.preventDefault();
//console.log(e);
//e.returnValue = '';
//});
*/

//////////////////////////////////////////////////
/////////////////////////////////////////////////
// Test Exercise
// orangize all categories into arrays and add $ next to items with sales

// fruit: [apple, melon$]
// canned: [beans, corn$, soup]
// frozen: [pizza]
/*
var itemData = [
  { category: 'fruit', itemName: 'apple', onSale: false },
  { category: 'canned', itemName: 'beans', onSale: false },
  { category: 'canned', itemName: 'corn', onSale: true },
  { category: 'frozen', itemName: 'pizza', onSale: false },
  { category: 'fruit', itemName: 'melon', onSale: true },
  { category: 'canned', itemName: 'soup', onSale: false },
];

console.log(itemData[0].category);
console.log(itemData[0].itemName);

let arr = [...new Map(itemData.map(item => [item['category']]))];
let food = [...new Map(itemData.map(items => [items['itemName']]))];
console.log(arr);
console.log(`${arr}: [${food}${itemData.onSale ? '$' : ''}]`);

//for (const [i, arr] of itemData.entries()) {
// arr.push(itemData[i].itemName);
// console.log(`${itemData[i].category}: ${arr}$`);
//}

////////////////////////////////

function organizeItems(items) {
  for (let i = 0; i <= itemData.length; i++) {
    if (itemData[i].category === 'fruit') {
      arr.push(itemData[i].itemName);
    }

    if (itemData[i].category === 'canned') {
      let arr = [];
      arr.push(itemData[i].itemName);
    }

    if (itemData[i].category === 'frozen') {
      let arr = [];
      arr.push(itemData[i].itemName);
    }
    console.log(
      `${itemData[i].category}: [${arr}${itemData[i].onSale ? '$' : ''}]`
    );
  }
}

function organizeItems() {
  let category = itemData['category'];
  if (category === 'fruit') {
    arr.push(itemData['itemName']);
    console.log(
      `${itemData['category']}: [${arr}${itemData[i].onSale ? '$' : ''}]`
    );
  }
}

// probably needs a for of loop
for (let [i, name] in itemData) {
  // console.log(`${i}: ${name}`);
}
//for (const [cat, name] of itemData) {
//console.log(`${cat}: ${name}`);
//}

//const organizeItems = function (items) {
//for (const [i, item] of itemData) {
//arr.push(itemData[i].itemName);
//console.log(
//`${itemData[i].category}: [${arr}${itemData[i].onSale ? '$' : ''}]`;
///);
//}
//};

organizeItems();
*/
