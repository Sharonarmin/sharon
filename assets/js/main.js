        var menuBtn = document.getElementById("menuBtn")
        var sideNav = document.getElementById("sideNav")
        var menu = document.getElementById("menu")
        sideNav.style.right == "-250px";
        menuBtn.onclick = function() {
            if (sideNav.style.right == "-250px") {
                sideNav.style.right = "0";
            } else {
                sideNav.style.right = "-250px";
                
            }
        }

        $(document).ready(function() {

            $("a").on('click', function(event) {

                if (this.hash !== "") {

                    event.preventDefault();
                    var hash = this.hash;

                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 800, function() {
                        window.location.hash = hash;
                    });
                }
            });
        });


// bg animation



    VANTA.BIRDS({
    el: ".hero-page",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0xf6f6f6,
    color1: 0x969699,
    color2:  0x1e1e22,
    colorMode: "lerp",
    birdSize: 2.40,
    wingSpan: 20.00,
    quantity: 5.00
    })




// slider
