

$(document).ready(function(){

	function countdown() {
		var wedding = new Date("January 1, 2018 17:00:00");
		var now = new Date();
		var timeDiff = wedding.getTime() - now.getTime();

		var s = Math.floor(timeDiff / 1000);
		var m = Math.floor(s / 60 + 1);
		var h = Math.floor(m / 60);
		var d = Math.floor(h / 24);

		m %= 60;
		h %= 24;

		if(m < 10) {
			m = "0" + m;
	 	}
	 	if(h < 10) {
			h = "0" + h;
	 	}

	 	var days = document.getElementById("days");
	 	days.innerHTML = "<h1>" + d + "</h1><p>days</p>";
	  	var hours = document.getElementById("hours");
	  	hours.innerHTML = "<h1>" + h + "</h1><p>hours</p>";
	 	var mins = document.getElementById("mins");
	 	mins.innerHTML = "<h1>" + m + "</h1><p>minutes</p>";

	 	setInterval(countdown, 30000);
	}

    var nav, yPos, logo, shine, body;
    function yScroll(){
        nav = document.getElementById('nav-outer');
        logo = document.getElementById('logo');
        flowers = document.getElementById('flowers');
        shine = document.getElementById('shine');
        body = document.getElementById('1');

        yPos = window.pageYOffset;

        if(yPos > 100) {
            nav.style.height = "60px";
            logo.style.width = "30px";
            logo.style.marginTop = "11px";
            logo.style.marginBottom = "-12px";
            flowers.style.top = "44%";
            // shine.syle.top = "6px";
            // shine.style.left = "49%";
            body.style.opacity = "0";
        } else {
            nav.style.height = "100px";
            logo.style.width = "50px";
            logo.style.marginTop = "20px";
            logo.style.marginBottom = "-26px";
            flowers.style.top = "58%";
            // shine.syle.top = "11px";
            // shine.style.left = "48.7%";
            body.style.opacity = "1";
        }
    }

 			var app = new Vue({
		  el: '#grid',
		  data: {
		    photos: [
		    	'images/engagement4.jpg',
		    	'images/engagement10.jpg',
		    	'images/engagement5.jpg',
		    	'images/engagement16.jpg',
		    	'images/engagement12.jpg',
		    	'images/engagement6.jpg',
		    	'images/engagement13.jpg',
		    	'images/engagement8.jpg',
		    	'images/engagement9.jpg',
		    	'images/engagement10.jpg',
		    	'images/engagement11.jpg',
		    	'images/engagement12.jpg',
		    	'images/engagement13.jpg',
		    	'images/engagement14.jpg',
		    	'images/engagement15.jpg',
		    	'images/engagement16.jpg',
		    	'images/engagement17.jpg',
		    	'images/engagement18.jpg',
				'images/engagement19.jpg',
		    	'images/engagement20.jpg',
		    	'images/engagement21.jpg',
		    	'images/engagement22.jpg',
		    	'images/engagement23.jpg',
		    	'images/engagement24.jpg',
		    	'images/engagement25.jpg',
		    	'images/engagement26.jpg',
		    	'images/engagement27.jpg'
		    ],
		    current: {
		    	page: 1,
		    	beg: 0,
		    	end: 8
		    },
		    modalOpen: false,
		    selected: ''
		  },
		  methods: {
		  	changePage: function(page, beg, end) {
		  		this.current = {page: page, beg: beg, end: end};
		  	},
		  	openModal: function(img) {
		  		this.selected = img;
		  		this.modalOpen = true;
		  	},
		  	closeModal: function() { 
		  		this.modalOpen = false;
		  	}
		  }
		})

	$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        let i = target.offset().top - 55;
        $('html, body').animate({
          scrollTop: i
        }, 1500);
      }
    }
  });
   
    countdown();   
    window.addEventListener("scroll", yScroll);
});
