const menuBtn = document.querySelector('.menu-btn');
const btnLines = document.querySelectorAll('.btn-line');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu-item');

// Set the initial state of the menu
let showMenu = false;

function toggleMenu() {
  if (!showMenu) {
    // Transform Hamburger to X button
    menuBtn.classList.add('close');
    btnLines.forEach((item) =>
    item.classList.add('close'));
            
    // Show menu
    menu.classList.add('show');
    menuItems.forEach((item) =>
      item.classList.add('show'));
            
    // Reset the menu state
    showMenu = true;
  } else {
    // Transform X to Hamburger button
    menuBtn.classList.remove('close');
    btnLines.forEach((item) =>
    item.classList.remove('close'));
        
    // Hide menu
    menu.classList.remove('show');
    menuItems.forEach((item) =>
    item.classList.remove('show'));
        
    // Reset the menu state
    showMenu = false;
  }
}

menuBtn.addEventListener('click', toggleMenu);
menuItems.forEach((item) =>
  item.addEventListener('click', toggleMenu));
