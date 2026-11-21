// #region eventListener - hide header when scrolling down, and redisplay it when scrolling up
// let lastScrollY = window.scrollY;
// const header = document.querySelector('header');
// window.addEventListener('scroll', () => {
//   const currentScrollY = window.scrollY;
//   if (currentScrollY > lastScrollY) { // Scrolling down
//     header.classList.add('hidden');
//   } else { // Scrolling up
//     header.classList.remove('hidden');
//   }
//   lastScrollY = currentScrollY;
// });

let lastScrollY = window.scrollY;
const header = document.querySelector('header');
const activationPoint = 80; // px from top

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY > activationPoint) {
    if (currentScrollY > lastScrollY) { // scrolling down
      header.classList.add('hidden');
    } else { // scrolling up
      header.classList.remove('hidden');
    }
  } else {
    header.classList.remove('hidden'); // show header if above activation point
  }
  lastScrollY = currentScrollY;
});

// #endregion eventListener - hide header when scrolling down, and redisplay it when scrolling up

// #region (eventListener) - display form dialog/modal
const addSeriesBtn = document.getElementById('add-series-btn');
const addSeriesNav = document.getElementById('add-series-nav');
const addSeriesDialog = document.getElementById('add-series-dialog');
const addBookForm = document.getElementById('add-series-form');
// Open dialog from button
addSeriesBtn.addEventListener('click', () => {
  addSeriesDialog.showModal();
});
// Open dialog from nav bar (linked to button)
// document.querySelector('a[href="#add-series-btn"]').addEventListener('click', e => {
//   e.preventDefault(); // stop the jump
//   addSeriesBtn.click(); // trigger your button’s click handler
// });
addSeriesNav.addEventListener('click', e => {
  e.preventDefault(); // stop the jump
  addSeriesBtn.click(); // trigger your button’s click handler
});
// Close dialog after successful form submission
addBookForm.addEventListener('submit', () => { // note: submit occurs on the whole form, so listening to the form submit button might make you miss the event, say from ENTER key
  addSeriesDialog.close();
});
// Close dialog by clicking
addSeriesDialog.addEventListener('click', (event) => {
  if (event.target === addSeriesDialog) {
    addSeriesDialog.close();
  }
});
// #endregion (eventListener) - display form dialog/modal