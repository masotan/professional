// navigation commands

//define page components

body = document.querySelector('body');

bgm = document.querySelector('#bgm');

overlay = document.querySelector('.overlay');

enterButton = document.querySelector('#enterButton');

overlaystylesheet = document.querySelector('#overlaystylesheet');

//code to initialize page. adds navigation bar and display and place holders


//home page code
home = `
            <div class="hero-container">
                <video autoplay loop muted>
                  <source src="assets/video/hospitality-v4.mp4" type="video/mp4">
                  <!-- Add additional source elements for different video formats -->
                </video>
                <div id="hero">
                    <div id="title">
                        <h1>Daniel Monteiro</h1>
                    </div>
                    <div id="content">
                        <p>A cloud systems architect, programmer, and chef</p>
                    </div>     
                </div>
            </div>
            
            
                 


`;

//resume page code
resume = `
            <div class="hero-container">
                <div id="hero">
                    <div id="title">
                        <h1>Resume</h1>
                    </div>
                    <div id="content">
                        <p>My resume and work history is here</p>
                    </div>     
                </div>
            </div>
            

`;

//projects page code
projects = `

            <div class="hero-container">
                <div id="hero">
                    <div id="title">
                        <h1>Projects</h1>
                    </div>
                    <div id="content">
                        <p>Projects that I have worked on</p>
                    </div>     
                </div>
            </div>
             

`;

//gallery page code
gallery = `

            <div class="hero-container">
                <div id="hero">
                    <div id="title">
                        <h1>Gallery</h1>
                    </div>
                    <div id="content">
                        <p>Pictures of me and things I have done</p>
                    </div>     
                </div>
            </div>
            

`;

//contact page code
contact = `

            <div class="hero-container">
                <div id="hero">
                    <div id="title">
                        <h1>Contact</h1>
                    </div>
                    <div id="content">
                        <p>Get in touch with me</p>
                    </div>     
                </div>
            </div>
            

`;


//this function should set the display to anything
function setDisplay(anything) {
document.querySelector('#display').setHTML(anything);
}

//this function should navigate to the desired page by clearing the page and loading the page
function navigate(page) {
    
}

//this function should mute sound if unmuted and vice versa
muteButton = document.querySelectorAll('.muteButton');


function muteToggle() {
  if (bgm.muted) {
    bgm.muted = 0;
    for (var i = 0; i< muteButton.length; i++) {
        muteButton[i].textContent = "sound on";
    }
  } else {
    bgm.muted = 1;
    for (var i = 0; i< muteButton.length; i++) {
        muteButton[i].textContent = "sound off";
    }
  }
}

// overlay enter button function
function overlayenter() {
    enterButton.remove();
    overlay.style.animation = 'whiteout 1s ease forwards';
    bgm.currentTime = 56; // sets bgm start time to 50 seconds
    bgm.volume = 0.03; // sets bgm volume to  3%
    bgm.play(); // plays bgm
    
    
    setTimeout (function() {
        overlay.innerHTML = "<h1>Welcome</h1>";
        overlay.style.fontSize = "50px"
        overlay.style.animation = 'expandout 0.2s ease forwards'
     }, 1000);


    setTimeout (function() {
       console.log('test'); //nothing
       overlay.style.fontSize = "140px"
       overlay.style.animation = 'fadeOutOverlay 1s ease forwards'; //starts overlay exit animation
       setDisplay(home);
    }, 1200);
    

    setTimeout (function() {
        overlay.remove();
    }, 2200); // sets a delay for the function to remove the overlay after 2000 milliseconds
}