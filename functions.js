

$(document).ready(function(){

	function countdown() {
		var wedding = new Date("May 12, 2018 17:00:00");
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

	 	setInterval(countdown, 5000);
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
            flowers.style.width = "16%";
            // shine.syle.top = "6px";
            // shine.style.left = "49%";
            body.style.opacity = "0";
        } else {
            nav.style.height = "100px";
            logo.style.width = "50px";
            logo.style.marginTop = "20px";
            logo.style.marginBottom = "-26px";
            flowers.style.width = "25%";
            // shine.syle.top = "11px";
            // shine.style.left = "48.7%";
            body.style.opacity = "1";
        }
    }

 //    $("#nav-outer a").click(function() {
 //    	var $target = $(this.hash);
	//       $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
	//     let top = $target.offset().top - 55
	//     $('body').animate({
	//         scrollTop: top
	//     }, 1500);
	// });

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
