// navigation commands

//define page components

body = document.querySelector('body');

bgm = document.querySelector('#bgm');

overlay = document.querySelector('.overlay');

enterButton = document.querySelector('#enterButton');

overlaystylesheet = document.querySelector('#overlaystylesheet');

display = document.querySelector('#display');

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
                        <p>Un architecte de systemes cloud, un programmeur et un chef</p>
                    </div>     
                </div>
            </div>
            
            
                 


`;

//resume page code
resume = `
            <div class="hero-container">
                <div id="hero">
                    <div id="title">
                        <h1>CV</h1>
                    </div>
                    <div id="content">
                        <p>Mon CV et mon historique de travail sont ici</p>
                    </div>     
                </div>
            </div>
            

`;

//projects page code
projects = `

            <div class="hero-container">
                <div id="hero">
                    <div id="title">
                        <h1>Projets</h1>
                    </div>
                    <div id="content">
                        <p>Projets sur lesquels j'ai travaille</p>
                    </div>     
                </div>
            </div>
             

`;

//gallery page code
gallery = `

            <div class="hero-container">
                <div id="hero">
                    <div id="title">
                        <h1>Galerie</h1>
                    </div>
                    <div id="content">
                        <p>Des photos de moi et des choses que j'ai faites</p>
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
                        <p>Entrez en contact avec moi</p>
                    </div>     
                </div>
            </div>
            
            <div class="contacts-container>
                <p>Thank you for your interest in reaching out to us. We would be delighted to hear from you. Please use the following contact information or the provided contact form to get in touch with us.</p>

  <h2>Contact Information</h2>
  <ul>
    <li><strong>Company Name:</strong> Your Company Name</li>
    <li><strong>Address:</strong> Your Company Address</li>
    <li><strong>Phone:</strong> Your Company Phone Number</li>
    <li><strong>Email:</strong> Your Company Email Address</li>
  </ul>
            </div>

`;


//this function should set the display to anything
function setDisplay(anything) {
display.setHTML(anything);
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
        muteButton[i].textContent = "son sur";
    }
  } else {
    bgm.muted = 1;
    for (var i = 0; i< muteButton.length; i++) {
        muteButton[i].textContent = "son eteint";
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
        overlay.innerHTML = "<h1>Bienvenue</h1>";
        overlay.style.fontSize = "2vw"
        overlay.style.animation = 'expandout 0.2s ease forwards'
     }, 1000);


    setTimeout (function() {
       console.log('test'); //nothing
       overlay.style.fontSize = "10vw"
       overlay.style.animation = 'fadeOutOverlay 1s ease forwards'; //starts overlay exit animation
       setDisplay(home);
    }, 1600);
    

    setTimeout (function() {
        overlay.remove();
    }, 2600); // sets a delay for the function to remove the overlay after 2000 milliseconds
}