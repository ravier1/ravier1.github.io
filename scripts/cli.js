const cli = {};

// Add Linux commands array
const linuxCommands = [
    'ls', 'cd', 'pwd', 'mkdir', 'rm', 'cp', 'mv', 'cat', 'grep', 'chmod',
    'sudo', 'apt', 'apt-get', 'yum', 'pacman', 'systemctl', 'service',
    'touch', 'man', 'nano', 'vim', 'ssh', 'scp', 'wget', 'curl'
];

// Add funny responses
const funnyResponses = [
    "Wrong terminal, buddy! This ain't your Linux playground! 🐧",
    "Hold up! This is my portfolio website's terminal, not your Penguin Palace! 🪟",
    "Error 404: Linux Not Found (This is my portfolio website, remember?) 😅",
    "I'm seriously starting to think you're doing this on purpose... 🤔",
    "Penguin commands detected! But this is my territory! 🚫🐧"
];


function getRandomResponse() {
    return funnyResponses[Math.floor(Math.random() * funnyResponses.length)];
}

function getCommand(cmd) {
    let result = null;
    for (var i = 0; i < commands.length; i++){
        if (commands[i].command == cmd){
            result = commands[i];
        }
    }
    return result;
}

function getArgument(args, arg) {
    let result = null;
    for (var i = 0; i < args.length; i++){
        if (args[i].argument == arg){
            result = args[i];
        }
    }
    return result;
}

cli.execute = (cmd) => {
    let result = { success: false };
    const values = cmd.split(' ');

    // Check for Linux commands first
    if (linuxCommands.includes(values[0].toLowerCase())) {
        result.success = true;
        result.output = getRandomResponse();
        return result;
    }

    if (values) {
        if (values[0] === "joke") {
            const joke = jokes[Math.floor(Math.random() * 9)];
            result.success = true;
            result.output = `${joke.question}<br /><br />${joke.answer}`;
        }  
        else {      
            let command = getCommand(values[0]);

            if (command) {
                if (values.length > 1 && command.arguments) {
                    let argument = getArgument(command.arguments, values[1]);
                    if (argument) {
                        result.success = true;
                        result.output = argument.output;
                        console.log(argument.output);
                    }
                    else {
                        result.success = false;
                    }
                } 
                else {
                    result.success = command.valid ?? true;
                    result.output = command.output;
                }
            }
            else {
                result.output = `command not found: ${cmd}`;
            }
        }
    }

    return result;
};

function init() {
    const app = document.querySelector("#app");
    const terminal = new Shell(app, cli);
    terminal.start();
}

init();

const commands = [
    {
        command: "restart",
        valid: true,
        output: "Restarting terminal..."

    },
    {
        command: "help",
        output: "<span class='code'> \
                    <strong>about</strong> \
                    <div class='text tab'> \
                        About my Life, and Personal Information! \
                    </div> \
                <span class='code'> \
                    <strong>skills</strong> \
                    <div class='text tab'> \
                        Shows all the languages I'm profecient in 👨‍💻 \
                    </div> \
                </span> \
                <span class='code'> \
                    <strong>projects</strong> \
                    <div class='text tab'> \
                        Shows all the projects I've worked on so far \
                    </div> \
                </span> \
                <span class='code'> \
                    <strong>contact</strong> \
                    <div class='text tab'> \
                        Displays my contact information (e-mail, socials, etc.) \
                    </div> \
                <span class='code'> \
                    clear \
                    <div class='text tab bottom-8'> \
                        Clear the terminal output \
                    </div> \
                </span> \
                <span class='code'> \
                    help \
                    <div class='text tab'> \
                        List all commands \
                    </div> \
                </span> \
                 <span class='code'> \
                    <strong>joke</strong> \
                    <div class='text tab bottom-8'> \
                        Tell me a joke! \
                    </div> \
                </span> \
                <span class='code'> \
                    <strong>easter-eggs</strong> \
                    <div class='text tab bottom-8'> \
                        Lets you know the cool features on this website (•‿•) \
                </span> \
                </span> \
                "
    },
    {
        command: "about",
        valid: true,
        output: `<div class='output'> \
                <span class='bg-blue'>Hello World!</span> \
                <p>My name is Ravi Gangaiahanadoddi Kumar, but you can call me <span class='bg-blue'>Ravi</span>.</p> \
                <div class='output'>
                <span class='bg-blue'>CURRENT LOCATION</span>
                <p>East Lansing, Michigan</p>
                <span class='bg-blue'>CURRENTLY:- <span class='bg-green'>ABOUT TO GRADUATE!🎉 (05/2025)</span></span>
                <p></p>
                <span class='bg-blue'>BIOGRAPHY & BACKGROUND</span>
                <p>
                    Ravi Gangaiahanadoddi Kumar is currently double-majoring at Michigan State Univeristy. He is pursuing a B.S 
                    in Computer Science and B.A in Games and Interactive Media. Originally from Bangalore, India, Ravi has been 
                    passionate about video games and software development from a young age. His love for gaming began with *God
                    of War: Ghost of Sparta* on the PSP, sparking a lifelong fascination with creating immersive digital worlds.
                    This passion has shaped his journey, leading him to create games in Unity, explore various programming 
                    languages, and embrace cutting-edge technologies to craft meaningful digital experiences. 
                    He is expected to graduate in May 2025.
                </p>
                <p>
                </p>
                <span class='bg-blue'>EXPERIENCE</span>
                    <table class='output auto bordered collapsed padded'>
                        <tr>
                            <td>YEARS OF PROGRAMMING EXPERIENCE</td>
                            <td>6-8</td>
                        </tr>
                    </table>
                </div>
                `
},

    {
        command: "easter-eggs",
        valid: true,
        output: "<div class='output'> \
                <span class='bg-blue'>Easter Eggs</span> \
                <p>Here are some cool features on this website!:</p> \
                <div class='output' style='padding-left: 20px;'> \
                    <ol style='list-style-type: decimal; margin-left: 20px;'> \
                        <li><strong>Typing ravi will display my personal information!</strong></li> \
                        <li><strong>This portfolio website is an identical replica of Windows XP (One of my favorite versions of Windows, after Windows 7)</strong></li> \
                        <li><strong>The desktop wallpaper changes dynamically based on the time in your region (day or night)!</strong></li> \
                        <li><strong>The terminal has a few easter eggs! Try typing some linux commands for a good laugh!</strong></li> \
                        <li><strong>The website has animated clock (Wow! That's so cool) with the time in your region (Genius Coder?)</strong></li> \
                        <li><strong>Try clicking my profile picture x times to get a celebration!</strong></li> \
                        <li><strong>Hitting arrow keys lets you go through your terminal history!</strong></li> \
                        <li><strong>The internet icon on the taskbar depicts whether I'm active at the moment, or not! (animated when active, crossed out otherwise)</strong></li> \
                        <li><strong>Notice the terminal window's name? Try clicking it :)</strong></li> \
                    </ol> \
                </div> \
            </div>"
    },

    {
        command: "ravi",
        valid: true,
        output: `<div class='output'> \
                <span class='bg-blue'>Hello World!</span> \
                <p>My name is Ravi Gangaiahanadoddi Kumar, but you can call me <span class='bg-blue'>Ravi</span>.</p> \
                <div class='output'>
                <span class='bg-blue'>CURRENT LOCATION</span>
                <p>East Lansing, Michigan</p>
                <span class='bg-blue'>CURRENTLY:- <span class='bg-green'>ABOUT TO GRADUATE!🎉 (05/2025)</span></span>
                <p></p>
                <span class='bg-blue'>BIOGRAPHY & BACKGROUND</span>
                <p>
                    Ravi Gangaiahanadoddi Kumar is currently double-majoring at Michigan State Univeristy. He is pursuing a B.S 
                    in Computer Science and B.A in Games and Interactive Media. Originally from Bangalore, India, Ravi has been 
                    passionate about video games and software development from a young age. His love for gaming began with *God
                    of War: Ghost of Sparta* on the PSP, sparking a lifelong fascination with creating immersive digital worlds.
                    This passion has shaped his journey, leading him to create games in Unity, explore various programming 
                    languages, and embrace cutting-edge technologies to craft meaningful digital experiences. 
                    He is expected to graduate in May 2025.
                </p>
                <p>
                </p>
                <span class='bg-blue'>EXPERIENCE</span>
                    <table class='output auto bordered collapsed padded'>
                        <tr>
                            <td>YEARS OF PROGRAMMING EXPERIENCE</td>
                            <td>6-8</td>
                        </tr>
                    </table>
                </div>
                `
    },
    
    {
        command: "projects",
        valid: true,
        output: `<div class='output'>
        <span class='bg-blue'>MY PROJECTS</span>
        <div class='project-item'>
            <img src="./project-icons/union-pacific.webp" alt="Union Pacific Project" class="project-icon">
            <div class="project-content">
                <h3>CSE 498: Collaborative Design (Capstone Course) - Union Pacific</h3>
                <span class='date'>January 2025 - Present</span>
                <p>Collaborating with a team of six to develop a GPS-indexed video player in Unity, integrating real-world train recordings with simulation data via an API. The system dynamically reflected signal and route changes based on the simulation, helping locomotive engineers gain field-ready experience while training.</p>
                <a href='https://www.capstone.cse.msu.edu/2025-01/projects/union-pacific/' target='_blank' class='project-link'>
                    <i class='fas fa-external-link-square-alt'></i> Project Website <i class='fas fa-external-link-alt'></i>
                </a>
                <a href='./video-player.html' target='_blank' class='project-link'>
                    <i class='fas fa-video'></i> Watch Performance <i class='fas fa-external-link-alt'></i>
                </a>
            </div>
        </div>
        <div class='project-item'>
            <img src="./project-icons/beethoven.webp" alt="Beethoven Discord Bot" class="project-icon">
            <div class="project-content">
                <h3>Beethoven</h3>
                <span class='date'>Dec 2021 - Present</span>
                <p>A Python Discord Music bot with support for YouTube, Spotify and more. (Spotify and more coming soon down in roadmap)</p>
                <a href='https://github.com/ravier1/Beethoven' target='_blank' class='project-link'>
                    <i class='fab fa-github'></i> View on GitHub <i class='fas fa-external-link-alt'></i>
                </a>
            </div>
        </div>

        <div class='project-item'>
            <img src="./project-icons/vr-peggle.webp" alt="VR Peggle Game" class="project-icon">
            <div class="project-content">
                <h3>VR Peggle!</h3>
                <span class='date'>Nov 2024 - Dec 2024</span>
                <p>Worked with a team of 6, created a VR game designed for Quest 2, using Unity as a base platform. Worked on coding scripts, and level design for the game.</p>
                <a href='https://ravier1.itch.io/vr-peggle' target='_blank' class='project-link'>
                    <i class='fas fa-gamepad'></i> Play on itch.io <i class='fas fa-external-link-alt'></i>
                </a>
            </div>
        </div>

        <div class='project-item'>
            <img src="./project-icons/slaughter-house.webp" alt="Slaughter House VR" class="project-icon">
            <div class="project-content">
                <h3>Slaughter House</h3>
                <span class='date'>Oct 2021 - Nov 2024</span>
                <p>Worked with a team of 4 to create a VR experience that focused on the audience as well as the player behind the VR headset. Built using the Unity platform.</p>
                <div class="project-links">
                    <a href='https://ravier1.itch.io/slaughter-house' target='_blank' class='project-link'>
                        <i class='fas fa-gamepad'></i> Play on itch.io <i class='fas fa-external-link-alt'></i>
                    </a>
                    <a href='./video-player.html' target='_blank' class='project-link'>
                        <i class='fas fa-video'></i> Watch Performance <i class='fas fa-external-link-alt'></i>
                    </a>
                </div>
            </div>
        </div>

        <div class='project-item'>
            <img src="./project-icons/channel-the-panel.webp" alt="Channel The Panel" class="project-icon">
            <div class="project-content">
                <h3>Channel The Panel!</h3>
                <span class='date'>September 2024 - October 2024</span>
                <p>The player is thrust into a world of wires and pipes. He is in the communication center of the SS. Hellena. The player is given the duty of passing urgent messages throughout the vessel. The player does this via the operation of a switchboard. Worked as a team of 3 focusing on backend scripts. <em>Built for the Quest 2 using Unity</em></p>
                <a href='https://ravier1.itch.io/channel-the-panel' target='_blank' class='project-link'>
                    <i class='fas fa-gamepad'></i> Play on itch.io <i class='fas fa-external-link-alt'></i>
                </a>
            </div>
        </div>
    </div>`
    },
    {
        command: "resume",
        valid: true,
        output: "<div class='output'> \
                <p>Here is my resume to download: </p> \
                <p><a href='./resume/RaviGKumar - Resume.pdf' target='_blank' download> \
                    <i class='fas fa-file-download'></i> My Resume! \
                    <i class='fas fa-external-link-alt'></i></a></p> \
                </div>"
    },
    {
        command: "contact",
        valid: true,
        output: "<p>You can contact me through my emails: </p> \
                <table class='output auto bordered collapsed padded'> \
                            <tr> \
                                <td>Personal email:</td> \
                                <td><a href='mailto:rvgk1202@icloud.com' target='_blank'>rvgk1202@icloud.com <i class='fas fa-external-link-alt'></i></a></td> \
                            </tr> \
                            <tr> \
                                <td>School email:</td> \
                                <td><a href='mailto:gkravi@msu.edu' target='_blank'>gkravi@msu.edu <i class='fas fa-external-link-alt'></i></a></td> \
                            </tr> \
                        </table> \
                <p></p> \
                <p>And my socials:</p> \
                <table class='output auto bordered collapsed padded'> \
                <tr> \
                    <td>LinkedIn:</td> \
                    <td><a href='https://www.linkedin.com/in/ravi-gk/' target='_blank'>linkedin.com/in/ravi-gk/ <i class='fas fa-external-link-alt'></i></a></td> \
                </tr> \
                <tr> \
                    <td>GitHub:</td> \
                    <td><a href='https://github.com/ravier1' target='_blank'>@ravier1 <i class='fas fa-external-link-alt'></i></a></td> \
                </tr> \
                <tr> \
                    <td>Itch.io Page (Showcase of my video games!):</td> \
                    <td><a href='https://ravier1.itch.io/' target='_blank'>ravier1.itch.io/ <i class='fas fa-external-link-alt'></i></a></td> \
                </tr> \
                <tr> \
                    <td>YouTube:</td> \
                    <td><a href='https://www.youtube.com/@tehcshakc' target='_blank'>TechShack <i class='fas fa-external-link-alt'></i></a></td> \
                </tr> \
            </table>"

                
    },
    {
        command: "skills",
        description: "List programming languages and technologies",
        output: `<div class='output'>
            <span class='bg-purple'>PROGRAMMING LANGUAGES</span>
            <div class='skills-grid'>
                <div class='skill-item'>
                    <img src="./skills-icons/python.png" alt="Python" class="skill-icon">
                    <span>Python</span>
                </div>
                <div class='skill-item'>
                    <img src="./skills-icons/java.png" alt="Java" class="skill-icon">
                    <span>Java</span>
                </div>
                <div class='skill-item'>
                    <img src="./skills-icons/cpp.png" alt="C++" class="skill-icon">
                    <span>C++</span>
                </div>
                <div class='skill-item'>
                    <img src="./skills-icons/csharp.png" alt="C#" class="skill-icon">
                    <span>C#</span>
                </div>
            </div>
            <p>
            </p>
            <span class='bg-purple'>WEB TECHNOLOGIES</span>
            <div class='skills-grid'>
                <div class='skill-item'>
                    <img src="./skills-icons/html.png" alt="HTML" class="skill-icon">
                    <span>HTML</span>
                </div>
                <div class='skill-item'>
                    <img src="./skills-icons/css.png" alt="CSS" class="skill-icon">
                    <span>CSS</span>
                </div>
                <div class='skill-item'>
                    <img src="./skills-icons/javascript.png" alt="JavaScript" class="skill-icon">
                    <span>JavaScript</span>
                </div>
                <div class='skill-item'>
                    <img src="./skills-icons/sqlite.png" alt="SQLite3" class="skill-icon">
                    <span>SQLite3</span>
                </div>
            </div>
            <p>
            </p>
            <span class='bg-purple'>DEVELOPMENT TOOLS</span>
            <div class='skills-grid'>
                <div class='skill-item'>
                    <img src="./skills-icons/unity.png" alt="Unity" class="skill-icon">
                    <span>Unity</span>
                </div>
                <div class='skill-item'>
                    <img src="./skills-icons/android-studio.png" alt="Android Studio" class="skill-icon">
                    <span>Android Studio (Currently Learning)</span>
                </div>
                <div class='skill-item'>
                    <img src="./skills-icons/flutter.png" alt="Flutter" class="skill-icon">
                    <span>Flutter (Currently Learning)</span>
                </div>
            </div>
            <p>
            </p>
            <span class='bg-purple'>DESIGN & MULTIMEDIA</span>
            <div class='skills-grid'>
                <div class='skill-item'>
                    <img src="./skills-icons/photoshop.png" alt="Photoshop" class="skill-icon">
                    <span>Adobe Photoshop</span>
                </div>
                <div class='skill-item'>
                    <img src="./skills-icons/premiere.png" alt="Premiere Pro" class="skill-icon">
                    <span>Adobe Premiere Pro</span>
                </div>
                <div class='skill-item'>
                    <img src="./skills-icons/blender.png" alt="Blender" class="skill-icon">
                    <span>Blender</span>
                </div>
            </div>
            </div>`
    },
];

const jokes = [
    {
      question: "Why don’t developers play hide and seek?",
      answer: "...because good luck hiding with all these breakpoints!"
    },
    {
      question: "What’s Kratos’ least favorite coding language?",
      answer: "...JavaScript. Too many callbacks to his past."
    },
    {
      question: "Why did Spider-Man refuse to debug his code?",
      answer: "...because with great power comes great responsibility... but not great documentation."
    },
    {
      question: "Why do Doom developers always carry a flashlight?",
      answer: "...because they’re used to finding bugs in the dark."
    },
    {
      question: "What’s Sonic’s least favorite part of coding?",
      answer: "...lag. He can’t handle being slowed down."
    },
    {
      question: "Why do Red Dead Redemption 2 devs always overcommit to their codebase?",
      answer: "...because they believe in fixing bugs like Arthur Morgan: slowly, with honor."
    },
    {
      question: "Why did Rockstar take so long with GTA 6?",
      answer: "...because they got stuck playtesting GTA 5 and forgot how to ship a sequel."
    },
    {
      question: "What’s a software engineer’s favorite Call of Duty perk?",
      answer: "...Quick Revive—because their code crashes so often!"
    },
    {
      question: "Why was the Wukong dev team so chill?",
      answer: "...because they’ve mastered the art of handling monkey business in their code."
    },
    {
      question: "Why do developers keep hyping Half-Life 3?",
      answer: "...because it's easier than debugging their own timeline."
    },
    {
      question: "Why don’t Call of Duty devs ever go outside?",
      answer: "...because they're stuck in a loop of camping bugs."
    },
    {
      question: "Why did the GTA 5 dev team hire an economist?",
      answer: "...to balance the in-game economy after players realized shark cards don’t fix everything."
    },
    {
      question: "Why was the Red Dead Redemption 2 build always delayed?",
      answer: "...because it kept dying of tuberculosis in testing."
    },
    {
      question: "What’s a game developer’s idea of crunch time?",
      answer: "...realizing they’re still stuck in a Half-Life waiting for Half-Life 3."
    },
    {
      question: "Why are game developers terrible at relationships?",
      answer: "...because they always need to scope it down."
    }
  ];