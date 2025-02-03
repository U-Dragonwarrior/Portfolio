/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Volodymyr Kolomoiets",
  title: "Hi, I am Volodymyr Kolomoiets",
  subTitle: emoji(
    "With over 🚀 +7 years of expertise experience in WordPress & Shopify with Ecommerce. I specialize in building stunning and appealing high-performance websites and custom themes with modern designs. I am also passionate in Front-end and Back-end development with React, Next."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/U-DragonWarrior",
  linkedin: "https://www.linkedin.com/in/volodymyr-kolomoiets/",
  gmail: "shomeyparadise228@gmail.com?subject=Hello%20Homey&body=How%20are%20you%20doing%20today",
  telegram: "https://t.me/@TelDragonWarrior",
  discord: "https://discord.com/users/scdragonwarrior_20228",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CLEAN AND TIDY WEB DESIGNER AND CRAZY WEB DEVELOPER PUSHING MYSELF TO CREATE PERFECT ONE.",
  skills: [
    emoji(
      "⚡ As a designer, I create visually appealing and user-friendly designs."
    ),
    emoji("⚡ As a WordPress and Shopify developer, I build custom websites and eCommerce solutions."),
    emoji(
      "⚡ As a full-stack developer, I design, build, and maintain dynamic web applications, front-end and back-end development."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "shopify",
      fontAwesomeClassname: "fab fa-shopify"
    },
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "framer",
      fontAwesomeClassname: "fas fa-pencil-ruler"
    },
    {
      skillName: "sketch",
      fontAwesomeClassname: "fab fa-sketch"
    },
    {
      skillName: "xd",
      fontAwesomeClassname: "fas fa-palette"
    },
    {
      skillName: "wix",
      fontAwesomeClassname: "fab fa-wix"
    },
  
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Kyiv National Economic University",
      logo: require("./assets/images/KyivNational EconomicUniversity.png"),
      subHeader: "Bachelor of Applied Science (BASc)",
      duration: "2020 - 2024",
      desc: "",
      // descBullets: [
      //   "",
      //   ""
      // ]
    },
    {
      schoolName: "SKyiv University of Culture",
      logo: require("./assets/images/Kyiv University of Culture.png"),
      subHeader: "Bachelor of Arts (BA), Visual Design",
      duration: "2015 - 2019",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Web Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Wordpress / Shopify",
      progressPercentage: "85%"
    },
    {
      Stack: "Front-end / Full-stack",
      progressPercentage: "89%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "WordPress Developer",
      company: "Glomex GmbH",
      companylogo: require("./assets/images/glomex.png"),
      date: "February 2024 - November 2024",
      desc: "Develop WordPress themes and Plugins.",
      descBullets: [
        "Angular.js + Headless CMS based on WordPress installation",
        "Gutenberg + ACFpro Block development",
        "Configure VPS with LAMP/LEMP stack"
      ]
    },
    {
      role: "Web-developer",
      company: "AVEX studio",
      companylogo: require("./assets/images/avex.png"),
      date: "March 2023 - January 2024",
      desc: "I created websites with different levels of difficulty. Sometimes I configured WordPress templates."
    },
    {
      role: "Shopify developer",
      company: "Voodoo Ecom",
      companylogo: require("./assets/images/voodoo.png"),
      date: "Creating custom Shopify website",
      desc: "Creating template-based Shopify website, implementing custom features and functionalities, creating custom Shopify apps, migration from other platforms to Shopify, conducting profesional Shopify website audit, Shopify website speed optimization, SEO audit, UI/UX design"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const sampleProjects = {
  title: "CompletedProjectss",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/shopify-stylish.webp"),
      projectName: "Shopify - Stylish",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://stylish-sara.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/GhostBedFlexMainImage_1280x768_crop_center.webp"),
      projectName: "Shopify - Ghostbed",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.ghostbed.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/shopify-anthony.webp"),
      projectName: "Shopiy - Anthony",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://anthony.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/wordpress-poppy.webp"),
      projectName: "Wordpress - Poppy",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://www.poppyaustin.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/wordpress-plant.webp"),
      projectName: "Wordpress - Plant",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.theplantfactory.com.au/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/shopify-mofily.webp"),
      projectName: "Shopify - Mofily",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.mofily.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/wordpress-giorgio.jpg"),
      projectName: "Wordpress-Giorgio",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://modern1furniture.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/shopify-cotton.webp"),
      projectName: "Shopify - Cotton",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.aulitfinelinens.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Why I chose these skills and what can you get from these?",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "#",
      title: "Web design builds trust and drives success.",
      description:
        "What can you achieve with well-executed web design? Increased user engagement, higher conversions, and enhanced brand credibility."
    },
    {
      url: "#",
      title: "What are the benefits of WordPress and Shopify?",
      description:
        "WordPress offers flexibility and customization, while Shopify provides an easy-to-use eCommerce platform with secure payments."
    },
    {
      url: "#",
      title: "What is the importance of Full-stack development?",
      description:
        "Full-stack development enables developers to handle both front-end and back-end tasks, creating seamless, efficient, and scalable applications."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  // title: "TALKS",
  // subtitle: emoji(
  //   "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  // ),

  // talks: [
  //   {
  //     title: "Build Actions For Google Assistant",
  //     subtitle: "Codelab at GDG DevFest Karachi 2019",
  //     slides_url: "https://bit.ly/saadpasta-slides",
  //     event_url: "https://www.facebook.com/events/2339906106275053/"
  //   }
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  // title: emoji("Podcast 🎙️"),
  // subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // // Please Provide with Your Podcast embeded Link
  // podcast: [
  //   "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  // email_address: "HomeyParadise228@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  sampleProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
