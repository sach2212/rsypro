let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');



menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () =>{
  document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () =>{
  document.querySelector('.login-form-container').classList.remove('active');
}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  };

};

document.querySelector('.home').onmousemove = (e) =>{

  document.querySelectorAll('.home-parallax').forEach(elm =>{

    let speed = elm.getAttribute('data-speed');

    let x = (window.innerWidth - e.pageX * speed) / 90;
    let y = (window.innerHeight - e.pageY * speed) / 90;

    elm.style.transform = `translateX(${y}px) translateY(${x}px)`;

  });

};


document.querySelector('.home').onmouseleave = (e) =>{

  document.querySelectorAll('.home-parallax').forEach(elm =>{

    elm.style.transform = `translateX(0px) translateY(0px)`;

  });

};

var swiper = new Swiper(".vehicles-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  observer: true,
  observeParents: true,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});



var swiper = new Swiper(".featured-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

  // -------------------service page-------------------


// <div class="swiper-slide box">

// <div class="work">
// <img src="image/birgmen.jpg" alt="">

// <div class="content">
//     <h3>xtreme</h3>
//     <div class="layer">
//         <p>Engine- <i class="fa-thin fa-transformer-bolt"></i><span>199.5</span></p>
//         <p>Power- <span>24.2 bhp</span></p>
//         <p>Milage- <span>35Kmpl</span></p>
//         <p>Top Speed- <span>140.8Kmph</span></p>
//         <p>Fuel Capacity- <span>13</span></p>


//     </div>
//     <div class="price">$55,000/-</div>
//     <a href="#" class="btn">check out</a>
// </div>
// </div>
// </div>'''



// ======================css===================


// .layer p{
 

//   color: blue;
//   font-size:2rem ;
// }


// .work img{
//   width: 100%;
// }
// .featured .featured-slider .box{
//   border-radius: 10px;
//   position: relative;
//   overflow: hidden;       /*for using effect*/
//   color: rgb(188, 69, 69);
//   width: 41rem;
//   height: 45rem;
// }

// .work:hover .layer{ 

//   height: 120%;
// }
// .layer {

//   width: 100%;
//   height: 0;
//   /* 0.5 is opacity*/
//   background: linear-gradient(rgba(168, 161, 161, 0.5), #ccc8c8);
//   position: absolute;
//   left: 0;
//   bottom: 0;
//   overflow: hidden;           
//   /* jo bhi data he vo hide hojayega*/
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   padding: 0px 40px;
//   text-align: center;
//   transition: height 0.5s;
//   /* putting height is option*/


// }

