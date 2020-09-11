const toggleButton = document.getElementById('toggle-btn');
const button = document.getElementById('toggle');
const basic = document.getElementById('basic');
const professional = document.getElementById('professional');
const master = document.getElementById('master');

toggleButton.addEventListener('click', moveToggle);

function moveToggle() {
   toggleButton.classList.toggle('toggle-btn-change');if(toggle.style.left !== '1.55rem') {
      toggle.style.left = '1.55rem';
      basic.innerHTML = '$19.99';
      professional.innerHTML = '$24.99';
      master.innerHTML = '$39.99';
   } else {
      toggle.style.left = '0.2rem';
      basic.innerHTML = '$199.99';
      professional.innerHTML = '$249.99';
      master.innerHTML = '$399.99';
   }
};


