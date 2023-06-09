// navigation commands

//define page components

body = document.querySelector('body');

bgm = document.querySelector('#bgm');

overlay = document.querySelector('.overlay');

enterButton = document.querySelector('#enterButton');

overlaystylesheet = document.querySelector('#overlaystylesheet');

display = document.querySelector('#display');

activeLanguage = "english"; // default language is english

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
                        <p>Full-stack Developer</p>
                    </div>     
                </div>
            </div>
            
            
                 


`;

//resume page code
resume = `
<div class="hero-container" style="background-image:url(https://images03.military.com/sites/default/files/styles/full/public/2022-10/jobpackets.jpg);background-size:cover;">
<div id="hero">
    <div id="title">
        <h1>Resume</h1>
    </div>
    <div id="content">
        <p>My resume and work history is here</p>
    </div>     
</div>
</div>
</div>
<div class="resume-container">
<iframe src="https://docs.google.com/document/d/e/2PACX-1vQX3PX4PGRdftCN8sntLPRVVzEi8m2qgG1nN57BAozzgrfwvNwIO6CWLtrIrgvZfHY6NWaoVjQXS13V/pub?embedded=true"></iframe>
<h1>Daniel Monteiro</h1>

<div class="section">
<h2>Contact Information</h2>
<ul>
<li><span class="title">Address:</span> Thorold, ON</li>
<li><span class="title">Phone:</span> (289) 968-2185</li>
<li><span class="title">Email:</span> dandoescoding@hotmail.com</li>
</ul>
</div>

<div class="section">
<h2>Skills</h2>
<p>Front-End: HTML, CSS, Javascript, ASP.NET, C#, React</p>
<p>Back-End: Node.js, Python, Django, C#, PHP</p>
<p>Database: SQL, postgre</p>
<p>Scripting: Javascript, C#, Java, C++, Python, GO</p>
<p>Infrastructure: AWS, Azure Cloud, Jenkins CI/CD</p>
<p>Workflow management: JIRA, AGILE Framework, SCRUM</p>
<p>Source Control: Git, GitHub</p>
</div>

<div class="section">
<h2>Work</h2>
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

<div class="hero-container" style="background-image:url(https://miro.medium.com/v2/resize:fit:1024/0*jlUybkZYz6yxWtdk.jpg);background-size:cover;">
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
                  <span class="title">Project Name:</span> My Professional Website
                </li>
                <li>
                  <span class="title">Description:</span> I made this website not only as my own professional site but to see how far can I push the three most basic web-development languages
                </li>
                <li>
                  <span class="title">Technologies Used:</span> HTML, CSS, JavaScript
                </li>
                <li>
                  <span class="title">Role:</span> Developer
                </li>
              </ul>
            </div>
          
            
            </div>
             

`;

//gallery page code
gallery = `

<div class="hero-container" style="background-image:url(https://www.london.ac.uk/sites/default/files/styles/max_1300x1300/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=6LenFxuz);background-size:cover;">
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

<div class="hero-container" style="background-image:url(https://cdn.trendir.com/wp-content/uploads/old/trends/2016/02/11/exotic-wood-bedroom.jpg);background-size:cover;">
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
    <li><span class="title">Address:</span> Thorold, ON</li>
    <li><span class="title">Phone:</span> (289) 968-2185</li>
    <li><span class="title">Email:</span> dandoescoding@hotmail.com</li>
    </ul>
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

function getWelcome(language) {
  if(language == "english") {
    return "welcome"
  }
  if(language == "french") {
    return "bienvenue"
  }
  if(language == "chinese") {
    return "欢迎"    
  }
  if(language == "japanese") {
    return "ようこそ"    
  }
  if(language == "thai") {
    return "ต้อนรับ"    
  }
}

function getOverlayHeadingLanguage(language) {
  if(language == "english") {
    return "Welcome to Daniel Monteiro's Page"
  }
  if(language == "french") {
    return "Bienvenue en Page de Daniel Monteiro"
  }
  if(language == "chinese") {
    return "欢迎来到丹尼尔·蒙泰罗的页面"    
  }
  if(language == "japanese") {
    return "ダニエル・モンテイロのページへようこそ"    
  }
  if(language == "thai") {
    return "ยินดีต้อนรับสู่เว็บไซต์ของดาเนียล มอนเตโร"    
  }
}

// overlay enter button function
function overlayenter() {
    enterButton.remove();
    overlay.style.animation = 'whiteout 1s ease forwards';
    bgm.currentTime = 56; // sets bgm start time to 50 seconds
    bgm.volume = 0.03; // sets bgm volume to  3%
    bgm.play(); // plays bgm
    var entryText = getWelcome(activeLanguage); //get welcome in correct language and set welcome to entry text
    
    setTimeout (function() {
        overlay.innerHTML = "<h1>" + entryText + "</h1>";
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
  body.style.animation = "display-fadeinout 1s";
    setTimeout(function() {
      setOverlayHeading(language);//sets overlay heading to target language
      setNavigationLanguage(language);//navigation should change to target language
      setContentLanguage(language);//content should change to target language
      activeLanguage = language; // sets language as active language
    }, 500);
    setTimeout(function() {
        body.style.animation = "";
    }, 1000);
  
}

// setting up overlay variables

overlayHeading = document.querySelector('#overlayHeading');

function setOverlayHeading(language) {
overlayHeading.innerHTML = getOverlayHeadingLanguage(language);
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
        <p>Software developer, Full stack developer, and trained software architect</p>
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
<h1>Daniel Monteiro</h1>

<div class="section">
  <h2>Contact Information</h2>
  <ul>
    <li><span class="title">Address:</span> Thorold, ON</li>
    <li><span class="title">Phone:</span> (289) 968-2185</li>
    <li><span class="title">Email:</span> dandoescoding@hotmail.com</li>
  </ul>
</div>

<div class="section">
<p>Front-End: HTML, CSS, Javascript, ASP.NET, C#, React</p>
<p>Back-End: Node.js, Python, Django, C#, PHP</p>
<p>Database: SQL, postgre</p>
<p>Scripting: Javascript, C#, Java, C++, Python, GO</p>
<p>Infrastructure: AWS, Azure Cloud, Jenkins CI/CD</p>
<p>Workflow management: JIRA, AGILE Framework, SCRUM</p>
<p>Source Control: Git, GitHub</p>
</div>

<div class="section">
  <h2>Work</h2>
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