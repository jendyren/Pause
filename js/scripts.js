/*!
    * Start Bootstrap - Freelancer v6.0.0 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
    */


const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;


class Timer {
  constructor(id, time) {
    this.id = id;
    this.time_limit = time;
    this.timeLeft = time;
    this.timePassed = 0; 
  }
  getMyElement() {
    return document.querySelector(`.timer.timer-id-${this.id}`);
  }
  updateTimer(time){
    this.time_limit = time;
    this.timeLeft = time;
    this.timePassed = 0;
    //this.startTimer();
  }
  draw() {
    let element = this.getMyElement();
    // Make sure to use classes as querySelector targets
    element.innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer_path-elapsed_${this.id}" cx="50" cy="50" r="45"></circle>
      <path
        stroke-dasharray="283"
        class="base-timer_path-remaining_${this.id} ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span class="base-timer_label_${this.id}">${this.formatTime(
    this.timeLeft
  )}</span>
</div>
`;
  }
  onTimesUp() {
  clearInterval(this.timerInterval);
  this.startTimer()
}

getTimerLabel() {
  return document.querySelector(`.base-timer_label_${this.id}`);
}

 startTimer() {
   console.log('starting timer for ', this.id);
  this.timerInterval = setInterval(() => {
    this.timePassed += 1;
    this.timeLeft = this.time_limit - this.timePassed;
    this.getTimerLabel().innerHTML = this.formatTime(
      this.timeLeft
    );
    this.setCircleDasharray();
    this.setRemainingPathColor(this.timeLeft);

    if (this.timeLeft === 0) {
      this.onTimesUp();
    }
  }, 1000);
}

formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

 setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document.querySelector
  (`.base-timer_path-remaining_${this.id}`)
      .classList.remove(warning.color);
    document.querySelector
  (`.base-timer_path-remaining_${this.id}`)
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document.querySelector
  (`.base-timer_path-remaining_${this.id}`)
      .classList.remove(info.color);
    document.querySelector
  (`.base-timer_path-remaining_${this.id}`)
      .classList.add(warning.color);
  }
}

 calculateTimeFraction() {
  this.rawTimeFraction = this.timeLeft / this.time_limit;
  return this.rawTimeFraction - (1 / this.time_limit) * (1 - this.rawTimeFraction);
}

 setCircleDasharray() {
  this.circleDasharray = `${(
    this.calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document.querySelector
  (`.base-timer_path-remaining_${this.id}`).setAttribute("stroke-dasharray", this.circleDasharray);
}
}

let timerElements = document.querySelectorAll(".timer");
/*
let timer1 = new Timer(1, 65);
let timer2 = new Timer(2, 10);
let timer3 = new Timer(3, 15);

timer1.draw();
timer2.draw();
timer3.draw();

timer1.startTimer(); 
timer2.startTimer(); 
timer3.startTimer(); 
*/


///////////////////////////////

    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    this.navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(this.navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });

    
  
  })(jQuery); // End of use strict