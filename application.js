$(document).ready(function() {
    $('a[href*=\\#]').bind('click', function(e) {
        e.preventDefault(); // prevent hard jump, the default behavior

        var target = $(this).attr("href"); // Set the target as variable

        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 600, function() {
            location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });

        return false;
    });
});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //    $('nav').fadeIn("fast");
    //} else {
    //    $('nav').fadeOut("fast");
    //}

    // Assign active class to nav links while scolling
    $('.page-section').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('.navigation a.active').removeClass('active');
            $('.navigation a').eq(i).addClass('active');
        }
    });
}).scroll();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const logosTechnos = document.querySelectorAll('.technos img');
logosTechnos.forEach((logo, index) =>{
  sleep(index * 1000).then(() => {
    logo.classList.remove('hide')
  });
});

const chevronDown = document.querySelector('.chevron-down');
const navBar = document.querySelectorAll('.nav-link');
const welcome = document.getElementById('welcome-txt')
const page = document.querySelector('html');

sleep(5200).then(() => {
  chevronDown.style.display ='flex'
  navBar.forEach((link) => {
    link.classList.remove('hide')
  });
  welcome.style.display = 'none'
  // page.style.overflow = 'visible'
});
