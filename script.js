const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const login_page = document.querySelector(".login");
const popup_section = document.querySelector(".popup");
const closeLoginPage = document.querySelector("#login-close-btn")
const container_close = document.querySelector(".container");

login_page.addEventListener('click',()=>{
  console.log("login_page clicked");
  setTimeout(()=>{
    popup_section.style.display="flex";
  },1000)
})

closeLoginPage.addEventListener('click',()=>{
  console.log("close");
  popup_section.style.display="none";
  // popup_section.classList.add("hidden");
})



menuOpenButton.addEventListener("click" , () => {

    document.body.classList.toggle("show-mobile-menu");
})

menuCloseButton.addEventListener("click",()=> menuOpenButton.click());


navLinks.forEach((link) => {
    link.addEventListener("click" , () => menuOpenButton.click());
})


const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor:true,
  spaceBetween : 25 ,
    // If we need pagination
    pagination: {
      
        el: '.swiper-pagination',
        clicable: true ,
        dynamicBullets : true ,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0 : {
            slidesPerView : 1
        },
        760 : {
            slidesPerView : 2
        },
        1024 : {
            slidesPerView : 3
        },
    }
  });
  
  
// ? apply validifiaction in pop-up form

// Regular expressions for validation
const usernameRegex = /^[a-zA-Z0-9_]{5,15}$/; // 5-15 chars, letters, numbers, underscores
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; 
// At least 8 chars, one uppercase, one lowercase, one number, one special character

document.getElementById('loginButton').addEventListener('click', function () {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  let valid = true;

  // Username validation
  if (!usernameRegex.test(username)) {
    document.getElementById('usernameError').textContent =
      'Username must be 5-15 characters and contain only letters, numbers, or underscores.';
    valid = false;
  } else {
    document.getElementById('usernameError').textContent = '';
  }

  // Password validation
  if (!passwordRegex.test(password)) {
    document.getElementById('passwordError').textContent =
      'Password must be at least 8 characters, with one uppercase, one lowercase, one number, and one special character.';
    valid = false;
  } else {
    document.getElementById('passwordError').textContent = '';
  }

  if (valid) {
    alert('Login Successful!');
  }
})
