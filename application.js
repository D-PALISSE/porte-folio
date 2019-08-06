// $(document).ready(function() {
//     $('a[href*=\\#]').bind('click', function(e) {
//         e.preventDefault(); // prevent hard jump, the default behavior

//         var target = $(this).attr("href"); // Set the target as variable

//         // perform animated scrolling by getting top-position of target-element and set it as scroll target
//         $('html, body').stop().animate({
//             scrollTop: $(target).offset().top
//         }, 600, function() {
//             location.hash = target; //attach the hash (#jumptarget) to the pageurl
//         });

//         return false;
//     });
// });

// $(window).scroll(function() {
//     var scrollDistance = $(window).scrollTop();

//     // Show/hide menu on scroll
//     //if (scrollDistance >= 850) {
//     //    $('nav').fadeIn("fast");
//     //} else {
//     //    $('nav').fadeOut("fast");
//     //}

//     // Assign active class to nav links while scolling
//     $('.page-section').each(function(i) {
//         if ($(this).position().top <= scrollDistance) {
//             $('.navigation a.active').removeClass('active');
//             $('.navigation a').eq(i).addClass('active');
//         }
//     });
// }).scroll();
function myFunction() {
  var x = document.getElementById("myLinks");
  var y = document.querySelector(".topnav");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "none";
  } else {
    x.style.display = "block";
    y.style.display = "block";
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

sleep(7000).then(() => {
  const logosTechnos = document.querySelectorAll('.technos img');
  logosTechnos.forEach((logo, index) =>{
    sleep(index * 1000).then(() => {
      logo.classList.remove('hide')
    });
  });
});

const WelcomeText = document.querySelector('.typewriter');
const WrapperIntro = document.querySelectorAll('.wrapper-intro');
const WelcomeImg = document.querySelector('.welcome-img')

const HomeBtn = document.getElementById("btn-home");

sleep(12500).then(() => {
  HomeBtn.style.opacity = "1";
});
