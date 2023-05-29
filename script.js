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
            <div class="resume-container">
            <h1>John Doe</h1>

            <div class="section">
              <h2>Contact Information</h2>
              <ul>
                <li><span class="title">Address:</span> 123 Main St, City, State, Zip</li>
                <li><span class="title">Phone:</span> (123) 456-7890</li>
                <li><span class="title">Email:</span> john.doe@email.com</li>
              </ul>
            </div>
          
            <div class="section">
              <h2>Summary</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum gravida sem id hendrerit. Suspendisse potenti. Aenean finibus felis id est suscipit tincidunt. Nam ultricies purus a ante consequat, id dignissim nisi convallis. Vivamus porttitor nisl eu arcu vulputate viverra. Duis sed fermentum sem.</p>
            </div>
          
            <div class="section">
              <h2>Education</h2>
              <ul>
                <li>
                  <span class="title">Bachelor of Science in Computer Science</span>
                  <br>
                  <span class="subtitle">University of XYZ, Year</span>
                </li>
              </ul>
            </div>
          
            <div class="section">
              <h2>Experience</h2>
              <ul>
                <li>
                  <span class="title">Software Engineer</span>
                  <br>
                  <span class="subtitle">ABC Company, Dates</span>
                  <ul>
                    <li>Developed and maintained web applications using HTML, CSS, and JavaScript.</li>
                    <li>Collaborated with cross-functional teams to deliver high-quality software products.</li>
                  </ul>
                </li>
              </ul>
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

            <div class="projects-container">
            <div class="section">
              <h2>Project 1</h2>
              <ul>
                <li>
                  <span class="title">Project Name:</span> Project 1 Name
                </li>
                <li>
                  <span class="title">Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  <span class="title">Technologies Used:</span> HTML, CSS, JavaScript
                </li>
                <li>
                  <span class="title">Role:</span> Developer
                </li>
              </ul>
            </div>
          
            <div class="section">
              <h2>Project 2</h2>
              <ul>
                <li>
                  <span class="title">Project Name:</span> Project 2 Name
                </li>
                <li>
                  <span class="title">Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  <span class="title">Technologies Used:</span> Python, Django
                </li>
                <li>
                  <span class="title">Role:</span> Full Stack Developer
                </li>
              </ul>
            </div>
          
            <div class="section">
              <h2>Project 3</h2>
              <ul>
                <li>
                  <span class="title">Project Name:</span> Project 3 Name
                </li>
                <li>
                  <span class="title">Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  <span class="title">Technologies Used:</span> React, Node.js
                </li>
                <li>
                  <span class="title">Role:</span> Frontend Developer
                </li>
              </ul>
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

            <div class="gallery-container">
            <div class="gallery">
            <div class="gallery-item">
              <img src="assets/city.jpg" alt="South Korea from the Sky">
              <div class="gallery-overlay">South Korea from the Sky</div>
            </div>
        
            <div class="gallery-item">
              <img src="assets/pictures/1.jpg" alt="Racoon">
              <div class="gallery-overlay">Racoon</div>
            </div>
        
            <div class="gallery-item">
              <img src="assets/pictures/5.jpg" alt="The clouds from the plane">
              <div class="gallery-overlay">The clouds from the plane</div>
            </div>
        
            <!-- Add more gallery items as needed -->
        
          </div>
        
          <script>
            // Optional: You can add JavaScript code for additional functionality here
          </script>
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

            <div class="contacts-container">
                <p>Thank you for your interest in reaching out to me. Please use the following contact information to get in touch.</p>

  <h2>Contact Information</h2>
  <ul>
    <li><strong>Company Name:</strong> McDonalds</li>
    <li><strong>Address:</strong> Victory Road</li>
    <li><strong>Phone:</strong> 000-000-0000</li>
    <li><strong>Email:</strong> thisistotallymy@email.com</li>
  </ul>
            </div>
            

`;


//this function should set the display to anything
function setDisplay(anything) {
    display.setHTML(anything);
}

//this function should navigate to the desired page by clearing the page and loading the page
function navigate(page) {
    display.style.animation = "display-fadeinout 1s";
    setTimeout(function() {
        setDisplay(page);
    }, 500);
    setTimeout(function() {
        display.style.animation = "";
    }, 1000);
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

function setLanguage(language) {
  setNavigationLanguage(language);//navigation should change to target language
  setContentLanguage(language);//content should change to target language
}

// setting up navigation variables

homenavigation = document.querySelector('#home-navigation');
resumenavigation = document.querySelector('#resume-navigation');
projectsnavigation = document.querySelector('#projects-navigation');
gallerynavigation = document.querySelector('#gallery-navigation');
contactnavigation = document.querySelector('#contact-navigation');
mutenavigation = document.querySelector('#mute-navigation');

function setNavigationLanguage(language) {
  homenavigation.textContent = homenavigationlanguage(language); // gets the home navigation language and sets it to home navigation
  resumenavigation.textContent = resumenavigationlanguage(language);
  projectsnavigation.textContent = projectsnavigationlanguage(language);
  gallerynavigation.textContent = gallerynavigationlanguage(language);
  contactnavigation.textContent = contactsnavigationlanguage(language);

}

function homenavigationlanguage(language) {
  if (language == "english") {
    return "home"
  }
  if (language == "french") {
return "maison"
  }
  if (language == "chinese") {
return "家"
  }
  if (language == "japanese") {
return "ホームページ"
  }
  if (language == "thai") {
return "บ้าน"
  }
}
function resumenavigationlanguage(language) {
  if (language == "english") {
return "resume"
  }
  if (language == "french") {
return "cv"
  }
  if (language == "chinese") {
return "恢复"
  }
  if (language == "japanese") {
return "履歴書"
  }
  if (language == "thai") {
return "ประวัติย่อ"
  }
}
function projectsnavigationlanguage(language) {
  if (language == "english") {
return "projects"
  }
  if (language == "french") {
return "projets"
  }
  if (language == "chinese") {
return "项目"
  }
  if (language == "japanese") {
return "プロジェクト"
  }
  if (language == "thai") {
return "โครงการ"
  }
}
function gallerynavigationlanguage(language) {
  if (language == "english") {
return "gallery"
  }
  if (language == "french") {
return "galerie"
  }
  if (language == "chinese") {
return "画廊"
  }
  if (language == "japanese") {
return "ギャラリー"
  }
  if (language == "thai") {
return "แกลลอรี่"
  }
}
function contactsnavigationlanguage(language) {
  if (language == "english") {
return "contact"
  }
  if (language == "french") {
return "contact"
  }
  if (language == "chinese") {
return "接触"
  }
  if (language == "japanese") {
return "連絡"
  }
  if (language == "thai") {
return "ติดต่อ"
  }
}


function setContentLanguage(language) {
  home = gethomecontentlanguage(language)
  resume = getresumecontentlanguage(language)
  projects = getprojectscontentlanguage(language)
  gallery = getgallerycontentlanguage(language)
  contact = getcontactcontentlanguage(language)
  setDisplay(home);

}



function gethomecontentlanguage(language){
  if (language == "english") {
return `
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

`
  }
  if (language == "french") {
return `
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
`
  }
  if (language == "chinese") {
return `
<div class="hero-container">
<video autoplay loop muted>
  <source src="assets/video/hospitality-v4.mp4" type="video/mp4">
  <!-- Add additional source elements for different video formats -->
</video>
<div id="hero">
    <div id="title">
        <h1>丹尼尔蒙泰罗</h1>
    </div>
    <div id="content">
        <p>云系统架构师、程序员和经理</p>
    </div>     
</div>
</div>
`
  }
  if (language == "japanese") {
return `
<div class="hero-container">
<video autoplay loop muted>
  <source src="assets/video/hospitality-v4.mp4" type="video/mp4">
  <!-- Add additional source elements for different video formats -->
</video>
<div id="hero">
    <div id="title">
        <h1>ダニエル・モンテイロ</h1>
    </div>
    <div id="content">
        <p>クラウド システム アーキテクト、プログラマー、マネージャー</p>
    </div>     
</div>
</div>
`
  }
  if (language == "thai") {
return `
<div class="hero-container">
<video autoplay loop muted>
  <source src="assets/video/hospitality-v4.mp4" type="video/mp4">
  <!-- Add additional source elements for different video formats -->
</video>
<div id="hero">
    <div id="title">
        <h1>ดาเนี่ยล มอนเตโร่</h1>
    </div>
    <div id="content">
        <p>สถาปนิกระบบคลาวด์ โปรแกรมเมอร์ และเชฟ</p>
    </div>     
</div>
</div>
`
  }
}
function getresumecontentlanguage(language){
  if (language == "english") {
return `
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
<div class="resume-container">
<h1>John Doe</h1>

<div class="section">
  <h2>Contact Information</h2>
  <ul>
    <li><span class="title">Address:</span> 123 Main St, City, State, Zip</li>
    <li><span class="title">Phone:</span> (123) 456-7890</li>
    <li><span class="title">Email:</span> john.doe@email.com</li>
  </ul>
</div>

<div class="section">
  <h2>Summary</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum gravida sem id hendrerit. Suspendisse potenti. Aenean finibus felis id est suscipit tincidunt. Nam ultricies purus a ante consequat, id dignissim nisi convallis. Vivamus porttitor nisl eu arcu vulputate viverra. Duis sed fermentum sem.</p>
</div>

<div class="section">
  <h2>Education</h2>
  <ul>
    <li>
      <span class="title">Bachelor of Science in Computer Science</span>
      <br>
      <span class="subtitle">University of XYZ, Year</span>
    </li>
  </ul>
</div>

<div class="section">
  <h2>Experience</h2>
  <ul>
    <li>
      <span class="title">Software Engineer</span>
      <br>
      <span class="subtitle">ABC Company, Dates</span>
      <ul>
        <li>Developed and maintained web applications using HTML, CSS, and JavaScript.</li>
        <li>Collaborated with cross-functional teams to deliver high-quality software products.</li>
      </ul>
    </li>
  </ul>
</div>
</div>


`
  }
  if (language == "french") {

  }
  if (language == "chinese") {

  }
  if (language == "japanese") {

  }
  if (language == "thai") {

  }
}
function getprojectscontentlanguage(language){
  if (language == "english") {
return `

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

<div class="projects-container">
<div class="section">
  <h2>Project 1</h2>
  <ul>
    <li>
      <span class="title">Project Name:</span> Project 1 Name
    </li>
    <li>
      <span class="title">Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li>
      <span class="title">Technologies Used:</span> HTML, CSS, JavaScript
    </li>
    <li>
      <span class="title">Role:</span> Developer
    </li>
  </ul>
</div>

<div class="section">
  <h2>Project 2</h2>
  <ul>
    <li>
      <span class="title">Project Name:</span> Project 2 Name
    </li>
    <li>
      <span class="title">Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li>
      <span class="title">Technologies Used:</span> Python, Django
    </li>
    <li>
      <span class="title">Role:</span> Full Stack Developer
    </li>
  </ul>
</div>

<div class="section">
  <h2>Project 3</h2>
  <ul>
    <li>
      <span class="title">Project Name:</span> Project 3 Name
    </li>
    <li>
      <span class="title">Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li>
      <span class="title">Technologies Used:</span> React, Node.js
    </li>
    <li>
      <span class="title">Role:</span> Frontend Developer
    </li>
  </ul>
</div>
</div>
 

`
  }
  if (language == "french") {

  }
  if (language == "chinese") {

  }
  if (language == "japanese") {

  }
  if (language == "thai") {

  }
}
function getgallerycontentlanguage(language){
  if (language == "english") {
return `

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

<div class="gallery-container">
<div class="gallery">
<div class="gallery-item">
  <img src="assets/city.jpg" alt="South Korea from the Sky">
  <div class="gallery-overlay">South Korea from the Sky</div>
</div>

<div class="gallery-item">
  <img src="assets/pictures/1.jpg" alt="Racoon">
  <div class="gallery-overlay">Racoon</div>
</div>

<div class="gallery-item">
  <img src="assets/pictures/5.jpg" alt="The clouds from the plane">
  <div class="gallery-overlay">The clouds from the plane</div>
</div>

<!-- Add more gallery items as needed -->

</div>

<script>
// Optional: You can add JavaScript code for additional functionality here
</script>
</div>




`
  }
  if (language == "french") {

  }
  if (language == "chinese") {

  }
  if (language == "japanese") {

  }
  if (language == "thai") {

  }
}
function getcontactcontentlanguage(language){
  if (language == "english") {
return `

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

<div class="contacts-container">
    <p>Thank you for your interest in reaching out to me. Please use the following contact information to get in touch.</p>

<h2>Contact Information</h2>
<ul>
<li><strong>Company Name:</strong> McDonalds</li>
<li><strong>Address:</strong> Victory Road</li>
<li><strong>Phone:</strong> 000-000-0000</li>
<li><strong>Email:</strong> thisistotallymy@email.com</li>
</ul>
</div>


`
  }
  if (language == "french") {

  }
  if (language == "chinese") {

  }
  if (language == "japanese") {

  }
  if (language == "thai") {

  }
}