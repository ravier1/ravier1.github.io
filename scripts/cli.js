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
        command: "portfolio",
        valid: false,
        output: "invalid command, must supply argument",
        arguments: [
            {
                argument: "-b",
                output: "<p>Check out my blog posts on:</p> \
                        <ul class='output dash'> \
                            <li><a href='https://dev.to/probablyrealrob' target='_blank'>DEV Community <i class='fas fa-external-link-alt'></i></a></li> \
                            <li><a href='https://hackernoon.com/u/grobbert' target='_blank'>Hackernoon <i class='fas fa-external-link-alt'></i></a></li> \
                            <li><a href='https://medium.com/@robert.hedgpeth' target='_blank'>Medium <i class='fas fa-external-link-alt'></i></a></li> \
                            <li><a href='https://mariadb.com/resources/blog/author/roberthedgpeth/' target='_blank'>Official MariaDB Blog <i class='fas fa-external-link-alt'></i></a></li> \
                            <li><a href='https://blog.couchbase.com/author/robert-hedgpeth/' target='_blank'>Official Couchbase Blog <i class='fas fa-external-link-alt'></i></a></li> \
                        </ul>"
            },
            {
                argument: "-c",
                output: "<div class='output'> \
                            <p>Recent projects Rob has created and contributed to:</p>\
                            <table class='output auto bordered collapsed padded actions'> \
                                <tr> \
                                    <td>Project</td> \
                                    <td>Description</td> \
                                </tr> \
                                <tr> \
                                    <td><a href='https://github.com/mariadb-corporation?q=dev-example&type=&language=&sort=' target='_blank'>MariaDB Developer Examples <i class='fas fa-external-link-alt'></i></td> \
                                    <td>Several repositores spanning a variety of different programming languages and technologies.</td> \
                                </tr> \
                                <tr> \
                                    <td><a href='https://www.nuget.org/packages/Couchbase.Lite.Mapping/' target='_blank'>Couchbase Lite Mapping <i class='fas fa-external-link-alt'></i></td> \
                                    <td>A simple component that extends Couchbase.Lite to provide methods to convert between data models and objects. </td> \
                                </tr> \
                                <tr> \
                                    <td><a href='https://github.com/couchbaselabs/CouchDraw' target='_blank'>CouchDraw <i class='fas fa-external-link-alt'></i></td> \
                                    <td>A multi-user synchronized drawing application for iOS and Android.</td> \
                                </tr> \
                                <tr> \
                                    <td><a href='https://github.com/couchbaselabs/chatbase' target='_blank'>Chatbase <i class='fas fa-external-link-alt'></i></td> \
                                    <td>A simple chat app power by Couchbase Lite and Sync Gateway.</td> \
                                </tr> \
                            </table> \
                        </div>"
            },
            {
                argument: "-e",
                output: "<p>Events Rob has presented/spoken at in 2021:</p> \
                        <ul class='output dash'> \
                            <li><a href='https://plus.qconferences.com/plus2021/speakers/rob-hedgpeth' target='_blank'>QCon Plus (Conference) <i class='fas fa-external-link-alt'></i></a></li> \
                            <li><a href='https://go.mariadb.com/22Q1-WBN-GLBL-DBaaS-Future-of-Databases-Massive-Scale-2021-10-28_Registration-LP.html' target='_blank'>Distributed SQL & MariaDB (Webinar) <i class='fas fa-external-link-alt'></i></a></li> \
                            <li><a href='https://www.scale.bythebay.io/speakers-1' target='_blank'>Scale By The Bay (Conference) <i class='fas fa-external-link-alt'></i></a></li> \
                            <li><a href='https://cloud.withgoogle.com/next/speakers?speaker=85D45B91CC7BFFFC' target='_blank'>Google Next (Conference) <i class='fas fa-external-link-alt'></i></a></li> \
                            <li><a href='https://www.bigdata-toronto.com/blog/speakers/robert-hedgpeth-3/' target='_blank'>Big Data & AI Toronto (Conference) <i class='fas fa-external-link-alt'></i></a></li> \
                            <li><a href='https://mariadb.com/resources/webinars/database-innovation-summit-2021-why-dbaas-is-the-future-of-cloud-computing/' target='_blank'>MariaDB Database Innovation Summit (Conference) <i class='fas fa-external-link-alt'></i></a></li> \
                            <li><a href='https://go.mariadb.com/21Q4-WBN-GLBL-OSSG-NoSQL-Listener-2021-09-14_Registration-LP.html' target='_blank'>Managing NoSQL Data with a Relational Database (Webinar) <i class='fas fa-external-link-alt'></i></a></li> \
                            <li><a href='https://www.developerweek.com/global/conference/cloud/speakers/' target='_blank'>DeveloperWeek Global (Conference)<i class='fas fa-external-link-alt'></i></a></li> \
                            <li><a href='https://go.mariadb.com/21Q4-WBN-GLBL-OSSG-Python-Connector-2021-08-26_Registration-LP.html' target='_blank'>Python + MariaDB (Webinar) <i class='fas fa-external-link-alt'></i></a></li> \
                            <li><a href='https://buildingthebackend.com/data-store/a-powerful-open-source-database-that-supports-many-storage-needs-mariadb/' target='_blank'>Building the Backend (Podcast) <i class='fas fa-external-link-alt'></i></a></li> \
                            <li><a href='https://rss.com/podcasts/councilofthewisedevelopers/257228/' target='_blank'>Council of the Wise Developers (Podcast) <i class='fas fa-external-link-alt'></i></a></li> \
                            <li><a href='https://emamo.com/event/jlove-2021/r/speaker/rob-hedgpeth-7' target='_blank'>jLove (Conference) <i class='fas fa-external-link-alt'></i></a></li> \
                            <li><a href='https://dmradio.libsyn.com/-skys-the-limit-why-cloud-databases-will-rule' target='_blank'>DM Radio (Live Radio & Podcast) <i class='fas fa-external-link-alt'></i></a></li> \
                            <li><a href='https://mariadb.org/cloud-minifest2021/skysql/' target='_blank'>MariaDB Foundation Server Fest (Conference)<i class='fas fa-external-link-alt'></i></a></li> \
                            <li><a href='https://mariadb.com/resources/webinars/database-innovation-summit-2021/' target='_blank'>MariaDB Database Innovation Summit (Conference) <i class='fas fa-external-link-alt'></i></a></li> \
                            <li><a href='https://go.mariadb.com/21Q3-WBN-GLBL-OSSG-JSON-Hybrid-Data-Models-2021-06-15_Registration-LP.html' target='_blank'>JSON + MariaDB (Webinar) <i class='fas fa-external-link-alt'></i></a></li> \
                            <li><a href='https://go.mariadb.com/21Q3-WBN-GLBL-OSSG-Unleash-Reactive-Programming-R2DBC-2021-05-27_Registration-LP.html' target='_blank'>MariaDB Webinar - R2DBC <i class='fas fa-external-link-alt'></i></a></li> \
                            <li><a href='https://pheedloop.com/dsconnect2021/site/sessions/?id=SESWB8Z40SHOXYABQ' target='_blank'>Data Summit Connect (Conference) <i class='fas fa-external-link-alt'></i></a></li> \
                            <li><a href='https://www.developerweek.com/global/conference/management/speakers/' target='_blank'>DeveloperWeek Global Management (Conference) <i class='fas fa-external-link-alt'></i></a></li> \
                            <li><a href='https://www.developerweek.com/europe/' target='_blank'>DeveloperWeek Europe <i class='fas fa-external-link-alt'></i></a></li> \
                            <li><a href='https://go.mariadb.com/21Q3-WBN-GLBL-OSSC-PLSQL-Compatibility-2021-03-31_Registration-LP.html' target='_blank'>MariaDB & PL/SQL (Webinar) <i class='fas fa-external-link-alt'></i></a></li> \
                            <li><a href='https://www.conf42.com/enterprise2021' target='_blank'>Conf42 Enterprsie Software (Conference) <i class='fas fa-external-link-alt'></i></a></li> \
                            <li><a href='https://go.mariadb.com/21Q2-WBN-GLBL-OSSG-Modern-SQL-with-MariaDB-2021-02-17_Registration-LP.html' target='_blank'>Modern SQL with MariaDB (Webinar) <i class='fas fa-external-link-alt'></i></a></li> \
                        </ul>"
            },
            {
                argument: "-p",
                output: "<p>Rob has written the first and only book, R2DBC Revealed, on a new relational database connectivity specification. <br /><br /> \
                        R2DBC Revealed, published by Apress, introduces Reactive Relational Database Connectivity (R2DBC), a modern way of connecting to \
                        and querying relational databases from Java and other JVM languages. The book begins by helping you understand not only what \
                        reactive programming is, but why it is necessary. Then building on those fundamentals, the book takes you into the world of databases \
                        and the newly released Reactive Relational Database Connectivity (R2DBC) specification. <br /><br /> \
                        Some of the places R2DBC Revealed can be found are:</p> \
                        <ul class='output dash'> \
                            <li><a href='https://link.springer.com/book/10.1007/978-1-4842-6989-3' target='_blank'>Spring Link <i class='fas fa-external-link-alt'></i></a></li> \
                            <li><a href='https://www.amazon.com/R2DBC-Revealed-Relational-Connectivity-Programmers-ebook/dp/B091KFC3TX/' target='_blank'>Amazon <i class='fas fa-external-link-alt'></i></a></li> \
                            <li><a href='https://www.goodreads.com/book/show/56906027-r2dbc-revealed' target='_blank'>goodreads <i class='fas fa-external-link-alt'></i></a></li> \
                        </ul>"
            },
            {
                argument: "-v",
                output: "<p>Recent technical demonstration videos Rob has created:</p> \
                        <ul class='output dash'> \
                        <li><a href='https://www.youtube.com/watch?v=rzALUEZ6uFU' target='_blank'>Columnar Storage + Python Powering Modern Data Science and Analytics <i class='fas fa-external-link-alt'></i></a></li> \
                        <li><a href='https://www.youtube.com/watch?v=y1ahXZn0nWQ' target='_blank'>Taking Distributed SQL to the Next Level with Columnar Indexing <i class='fas fa-external-link-alt'></i></a></li> \
                        <li><a href='https://www.youtube.com/watch?v=3igIRQqmYc4' target='_blank'>The future of databases: distributed SQL & MariaDB <i class='fas fa-external-link-alt'></i></a></li> \
                        <li><a href='https://www.youtube.com/watch?v=ntO2x4XHfUE' target='_blank'>Demo of MariaDB's Oracle Compatibility Mode <i class='fas fa-external-link-alt'></i></a></li> \
                        <li><a href='https://www.youtube.com/watch?v=ZnFq_S6T9Qc' target='_blank'>Intro to MariaDB's Oracle Compatibility Mode <i class='fas fa-external-link-alt'></i></a></li> \
                        <li><a href='https://www.youtube.com/watch?v=2VEbgfluQqs' target='_blank'>Getting started with JSON table in MariaDB <i class='fas fa-external-link-alt'></i></a></li> \
                        <li><a href='https://www.youtube.com/watch?v=-rf41EmgNO0' target='_blank'>Intro to JSON in MariaDB <i class='fas fa-external-link-alt'></i></a></li> \
                        <li><a href='https://www.youtube.com/watch?v=EL9wyrpFP78' target='_blank'>Creating Fully Reactive Solutions with R2DBC <i class='fas fa-external-link-alt'></i></a></li> \
                        <li><a href='https://www.youtube.com/watch?v=MF7UItjxDWA' target='_blank'>Getting Reactive with Relational Databases and R2DBC <i class='fas fa-external-link-alt'></i></a></li> \
                        <li><a href='https://www.youtube.com/watch?v=KRmosdzNGrY' target='_blank'>SkySQL: The MariaDB Database-as-a-Service <i class='fas fa-external-link-alt'></i></a></li> \
                        <li><a href='https://www.youtube.com/watch?v=bIaFIuQc9YQ' target='_blank'>MariaDB Cloud Server Fest - Panel <i class='fas fa-external-link-alt'></i></a></li> \
                    </ul>"
            }
        ]
    },
    {
        command: "resume",
        valid: true,
        output: "Here is my resume to download: -",
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
            <span class='bg-purple'>PROGRAMMING LANGUAGES & TECHNOLOGIES</span>
            <div class='skills-grid'>
                <div class='skill-item'>
                    <img src="./skills-icons/python.png" alt="Python" class="skill-icon">
                    <span style="font-family: 'JetBrains Mono', monospace;">Python</span>
                </div>
                <div class='skill-item'>
                    <img src="./skills-icons/java.png" alt="Java" class="skill-icon">
                    <span style="font-family: 'JetBrains Mono', monospace;">Java</span>
                </div>
                <div class='skill-item'>
                    <img src="./skills-icons/c++.png" alt="C++" class="skill-icon">
                    <span style="font-family: 'JetBrains Mono', monospace;">C++</span>
                </div>

                <div class='skill-item'>
                    <img src="./skills-icons/csharp.png" alt="C#" class="skill-icon">
                    <span style="font-family: 'JetBrains Mono', monospace;">C#</span>
                </div>
                <div class='skill-item'>
                    <img src="./skills-icons/unity.png" alt="Unity" class="skill-icon">
                    <span style="font-family: 'JetBrains Mono', monospace;">Unity</span>
                </div>
                <div class='skill-item'>
                    <img src="./skills-icons/flutter.png" alt="Flutter" class="skill-icon">
                    <span style="font-family: 'JetBrains Mono', monospace;">Flutter (Still Learning)</span>
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