const fullName = "Loris Jared Ndonga";

const projects = `
        <div class="col-2 d-none d-md-block bar">
            <div id="simple-list-example" class="d-flex flex-column gap-2 simple-list-example-scrollspy text-center position-fixed">
                <ul class="nav flex-column" id="Info">
                    <li class="nav-item profileInfo"></li>
                    <li>
                        <hr>
                    </li>
                </ul>
            <a class="p-1 rounded" href="#welcome"><i class="fa-solid fa-house"></i>&nbsp;<span>Welcome</span></a>
            <a class="p-1 rounded" href="#about"><i class="fa-solid fa-user"></i>&nbsp;<span class="ms-1 d-none d-sm-inline">About Me</span></a>
            <a class="p-1 rounded" href="#list-skills"><i class="fa-solid fa-laptop-code"></i>&nbsp;<span class="ms-1 d-none d-sm-inline">My Skills</span></a>
            <a class="p-1 rounded" href="#project"><i class="fa-solid fa-code"></i>&nbsp;<span class="ms-1 d-none d-sm-inline">My Projects</span></a>
            <a class="p-1 rounded" href="#contact-me"><i class="fa-solid fa-address-card"></i>&nbsp;<span class="ms-1 d-none d-sm-inline">Contact</span></a>
            <ul>
                <li>
                    <hr>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/lorisjaredndonga/" target="_blank"><i class="fa-brands fa-linkedin"></i>&nbsp;<span class="ms-1 d-none d-sm-inline">LinkedIn</span></a>
                </li>
                <li>
                    <a href="https://github.com/ndongaloris"><i class="fa-brands fa-github"></i>&nbsp;<span class="ms-1 d-none d-sm-inline">My Github</span></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/loris_jared/"><i class="fa-brands fa-instagram"></i>&nbsp;<span class="ms-1 d-none d-sm-inline">Instagram</span></a>
                </li>
            </ul>
        </div>
    </div>

    <div class="col-lg-10 col-md-10 col-sm-12" style="--bs-bg-opacity: .2;" id="body">
        <nav id="navbar-example2" class="navbar bg-body-tertiary d-md-none">
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <a class="nav-link" href="#welcome"><i class="fa-solid fa-house"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#about"><span >About Me</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#list-skills"><span >Skills</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#project"><span>Projects</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#contact-me"><span >Contact</span></a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Links</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="https://www.linkedin.com/in/lorisjaredndonga/"><span>LinkedIn</span></a></li>
                        <li><a class="dropdown-item" href="https://github.com/ndongaloris"><span>My Github</span></a></li>
                        <li><a class="dropdown-item" href="https://www.instagram.com/loris_jared/"><span>Instagram</span></a></li>
                    </ul>
                </li>
            </ul>
        </nav>
            
            <div class="row" id="mainRow">
                <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0"
                data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0" id="navManager">
                    <section id="welcome">
                        <div>
                            <h1 id="simple-list-item-1">CURRENTLY WORKING ON THIS PORTFOLIO</h1>
                            <hr>
                        </div>
                        <div class="row" id="greetings">
                            <div class="container text-center">
                                <div class="row">
                                    <div class="col">
                                        <section>
                                            <h2><strong>LORIS&nbsp;JARED&nbsp;NDONGA</strong></h2>
                                            <h4>FULL-STACK SOFTWARE DEVELOPER</h4>
                                            <h5>BYU-I Student</h5>
                                            <h6>CS50 Learner</h6>
                                        </section>
                                        <section>
                                        <h4>My favorite quote:</h4>
                                            <p>“Humankind Cannot Gain Anything Without First Giving Something In Return.
                                                To obtain, Something Of Equal Value Must Be Lost. That Is Alchemy's
                                                First
                                                Law Of Equivalent Exchange.”
                                                ― <strong>Edward Elric</strong></p>
                                        </section>
                                    </div>
                                    <div class="col">
                                        <img src="images/home.png" class="rounded float-end" alt="My picture" width="500">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="about">
                        <h3 id="about-me"><strong>ABOUT ME</strong></h3>
                        <hr>
                        <div class="clearfix" id="aboutMe">
                            <img src="images/me_suit.jpg" class="col-md-6 float-md-end mb-3 ms-md-3"
                                alt="A picture of Me" id="aboutMePic">
                            <h4>Greetings I'm Jared,</h4>
                            <p>
                                I'm a Software Development student at Brigham Young University (BYU-Idaho),
                                diving into the world of coding and algorithms. As I progress through my studies,
                                I'm at the exciting crossroads of deciding where to specialize —
                                Full Stack, Mobile or perhaps even Game
                                Development.
                            </p>
                            <p>
                                Alongside my academic journey, I've earned a professional CS50 with Python certificate.
                                This certification reflects my dedication to mastering programming and equips me with a
                                problem-solving mindset for clean,
                                efficient code.
                            </p>

                            <p>
                                Beyond coding, I find joy in video games and anime,
                                offering a creative balance to the logical aspects of software development.
                                Basketball, both on and off the court, provides a refreshing break from
                                the intricacies of coding.
                            </p>
                            <p>
                                Join me on this dynamic journey through software development.
                                Let's explore solutions, create digital experiences, and build an exciting future
                                together!
                            </p>
                        </div>
                    </section>
                    <section id="list-skills">
                        <h3 id="skill"><strong>WHAT I USE</strong></h3>
                        <hr>
                        <div id="iUse">
                            <div class="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3 p-4 mb-3">
                            <div class="col">
                                <i class="devicon-html5-plain devicons"></i>
                                <i class="devicon-css3-plain devicons"></i>
                                <i class="devicon-bootstrap-plain devicons"></i>
                                <p>
                                    HTML forms the structural backbone of my pages,
                                    while CSS adds the stylistic flair.
                                    <a href="" class="linkstyle">Its project.</a>
                                </p>
                            </div>
                            <div class="col">
                                <i class="devicon-javascript-plain devicons"></i>
                                <i class="devicon-react-plain devicons"></i>
                                <i class="devicon-nodejs-plain devicons"></i>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,  Veritatis magni
                                    suscipit
                                    .<a href="#Challenges" class="linkstyle">Its
                                        project</a></p>
                            </div>
                            <div class="col">
                                <i class="devicon-python-plain devicons"></i>
                                <i class="devicon-flask-plain devicons"></i>
                                <p>Flask, a lightweight Python web framework's simplicity helps
                                    create dynamic and scalable web applications. <a
                                        href="#Projects" class="linkstyle">Its projects.</a></p>
                            </div>
                            <div class="col">
                                <i class="devicon-csharp-plain devicons"></i>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus nulla
                                    ipsa,
                                    soluta eum   <a href="#Projects" class="linkstyle">Its
                                        projects.</a></p>
                            </div>
                            <div class="col">
                                <i class="devicon-git-plain devicons"></i>
                                <i class="devicon-github-original devicons"></i>
                                <p>I use git and Github to host most of my projects. as they are open source
                                    <a href="" class="linkstyle">Its project.</a>
                                </p>
                            </div>
                            <div class="col">
                                <i class="devicon-sqlite-plain devicons"></i>
                                <i class="devicon-mysql-plain devicons"></i>
                                <i class="devicon-postgresql-plain devicons"></i>
                                <i class="devicon-mongodb-plain devicons"></i>
                                <p>MySQL and SQLite are the database languages I use.<a href="#Challenges"
                                    class="linkstyle">Its project</a></p>
                            </div>
                            
                        </div>
                    </div>
                    </section>

                    <section id="project">
                        <h3 id="my-project"><strong>PROJECTS I HAVE BUILT</strong></h3>
                        <hr>
                        <div class="container text-center displayP">
                            <div class="row row-cols-1 row-cols-lg-2">
                                <div class="col">
                                    <div class="card mb-3" style="max-width: 540px;">
                                        <div class="row g-0">
                                            <div class="col-md-4">
                                                <img src="images/money.jpeg" class="img-fluid rounded-start" alt="...">
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <h5 class="card-title">Finance</h5>
                                                    <p class="card-text"> Allow the user to calculate a loan and savings
                                                        by
                                                        generating a schedule.
                                                    </p>
                                                    <a href="https://finance-y1i9.onrender.com/">Visit</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card mb-3" style="max-width: 540px;">
                                        <div class="row g-0">
                                            <div class="col-md-4">
                                                <img src="/images/delorean.jpg" class="img-fluid rounded-start" alt="">
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <h5 class="card-title">CSE Motors</h5>
                                                    <p class="card-text">This is a wider card with supporting text below
                                                        as a natural lead-in to additional content.</p>
                                                        <a href="https://cse340-backend-dev.onrender.com/">Visit</a>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container text-center displayP">
                            <div class="row row-cols-1 row-cols-lg-2">
                                <div class="col">
                                    <div class="card mb-3" style="max-width: 540px;">
                                        <div class="row g-0">
                                            <div class="col-md-4">
                                                <img src="/images/banner-sm.jpg" class="img-fluid rounded-start" alt="">
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <h5 class="card-title">Sleep Outside</h5>
                                                    <p class="card-text">A simple web app with Vite support to bundle up our assets. A website selling camping tools and kits.</p>
                                                    <a href="https://sleepoutside13.netlify.app/">Visit</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card mb-3" style="max-width: 540px;">
                                        <div class="row g-0">
                                            <div class="col-md-4">
                                                <img src="/images/N-animez.jpeg" class="img-fluid rounded-start" alt="">
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <h5 class="card-title">N-animez</h5>
                                                    <p class="card-text">This is a wider card with supporting text below
                                                        as
                                                        a
                                                        natural lead-in to additional content.</p>
                                                    <a href="https://n-animez.netlify.app/">Visit</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="contact">
                        <h3 id="contact-me"><strong>LET'S GET IN TOUCH</strong></h3>
                        <hr>
                        <form action="/message" method="POST">
                            <div class="row g-3">

                                <div class="col col-12 col-md-6">
                                    <label for="exampleFormControlInput1" class="form-label">First Name</label>
                                    <input type="text" class="form-control" placeholder="First name"
                                        aria-label="First name">
                                </div>
                                <div class="col col-12 col-md-6">
                                    <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                                    <input type="text" class="form-control" placeholder="Last name"
                                        aria-label="Last name">
                                </div>
                                <div class="col col-12 col-md-6">
                                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" placeholder="myname@email.com"
                                        aria-label="Email Address">
                                </div>
                                <div class="col col-12 col-md-6">
                                    <label for="exampleFormControlInput1" class="form-label">Phone Number
                                        (OPTIONAL)</label>
                                    <input type="text" class="form-control" placeholder="Phone Number"
                                        aria-label="Last name">
                                </div>
                                <div class="col col-12">
                                    <label for="exampleFormControlInput1" class="form-label">Subject</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1"
                                        placeholder="Subject">
                                </div>
                                <div class="col col-12">
                                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1"
                                        placeholder="Write your message here" rows="3"></textarea>
                                </div>
                                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <button type="button">Send Now</button>
                                </div>
                            </div>
                        </form>
                    </section>
                    <footer>
                        <small>&copy;<span id="year"></span> | Loris Jared Ndonga | Portfolio</small>
                    </footer>
                </div>
            </div>
        </div>
    `

const project = document.createElement("div");
project.className = "row flex-wrap";
project.innerHTML = projects; 
document.querySelector("body").appendChild(project);
const profileInfo = document.querySelectorAll(".profileInfo");

profileInfo.forEach(element => {  
    const profileName = document.createElement("h4");
    profileName.innerHTML = fullName;

    const profilePicture = document.createElement("img");
    profilePicture.setAttribute("src", "images/profile.JPG");
    profilePicture.setAttribute("class", "rounded-circle img-fluid d-sm-inline ");
    profilePicture.setAttribute("alt", "Jared's profile Picture");

    const profileTitle = document.createElement("h6");
    profileTitle.innerHTML = `FULL-STACK SOFTWARE DEVELOPER`

    element.appendChild(profileName);
    element.appendChild(profilePicture);
    element.appendChild(profileTitle);
});
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
document.querySelector("#year").innerHTML = currentYear;
