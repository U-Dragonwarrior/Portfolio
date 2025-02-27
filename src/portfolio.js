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
  username: "Volodymyr Usenco",
  title: "Hi, I am Volodymyr Usenco",
  subTitle: emoji(
    "Greetings! I am a seasoned No-Code Specialist with over 🚀 7 years of experience transforming ideas into stunning, fully-functional websites and automated workflows. My expertise spans across industry-leading platforms like WordPress, Shopify, and GoHighLevel (GHL), allowing me to deliver tailored, user-friendly solutions that exceed client expectations."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  // github: "https://github.com/U-DragonWarrior",
  // linkedin: "https://www.linkedin.com/in/volodymyr-kolomoiets/",
  // gmail: "shomeyparadise228@gmail.com?subject=Hello%20Homey&body=How%20are%20you%20doing%20today",
  // telegram: "https://t.me/@TelDragonWarrior",
  // discord: "https://discord.com/users/scdragonwarrior_20228",
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
  subTitle: "Whether you need a custom-built WordPress site, a Shopify store that drives sales, or a GHL automation to streamline your business processes, I am here to make it happen.",
  skills: [
    emoji(
      "⚡ WordPress Expert: Delivered 150+ WordPress projects, from simple blogs to complex e-commerce solutions, with pixel-perfect design and responsiveness."
    ),
    emoji("⚡ Shopify Wizard: Designed and customized Shopify stores, enhancing user experience and optimizing for conversions."),
    emoji(
      "⚡ GoHighLevel Specialist: Built automated sales funnels, workflows, and email campaigns to save clients hours of manual work and increase ROI."
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
      schoolName: "Kirovohrad National Technical University",
      logo: require("./assets/images/Kirovohrad National.png"),
      subHeader: "Bachelor of Computer Science (BCompSc)",
      duration: "2001-2005",
      desc: "",
      // descBullets: [
      //   "",
      //   ""
      // ]
    },
    // {
    //   schoolName: "SKyiv University of Culture",
    //   logo: require("./assets/images/Kyiv University of Culture.png"),
    //   subHeader: "Bachelor of Arts (BA), Visual Design",
    //   duration: "2015 - 2019",
    //   // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Zapier / API Integration", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Hub Spot / GoHighLevel",
      progressPercentage: "85%"
    },
    {
      Stack: "OpenAI / AI Chatbot",
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
      role: "No-Code Specialist",
      company: "Fiverr.com",
      companylogo: require("./assets/images/Fiverr-Logo.png"),
      date: "March 2016 - Present",
      desc: "",
      descBullets: [
        "Delivered over 150 projects using WordPress, Shopify, and GoHighLevel (GHL).",
        "Automated workflows for small businesses, saving clients an average of 30% operational time.",
        "Created eCommerce websites with Shopify that increased client sales by 40% on average."
      ]
    },
    {
      role: "Web Developer",
      company: "Kropyventskyy Digital Solutions",
      companylogo: require("./assets/images/Digital_Mark.jpg"),
      date: "July 2010 - February 2016",
      desc: "",
      descBullets: [
        "Designed and developed websites for over 50 local businesses.",
        "Introduced custom WordPress themes and plugins to enhance client website functionality."
      ]
    },
    {
      role: "Junior Web Developer",
      company: "Kropyventskyy IT Hub",
      companylogo: require("./assets/images/Kropyventskyy IT Hub.png"),
      date: "July 2005 - June 2010",
      desc: "",
      descBullets: [
        "Assisted in developing responsive websites and web applications for local companies.",
        "Gained hands-on experience with CMS platforms and front-end development tools."
      ]
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
  title: "Completed Projects",
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
      title: "❓ Why is the AI technology important?",
      description:
        "AI technology is important because it enhances efficiency, improves decision-making, and automates tasks across various industries. Here are some key reasons why AI is crucial."
    },
    {
      url: "#",
      title: "❓ Why is API integration essential for connecting apps and automating workflows?",
      description:
        "API integration enables seamless data sharing and automation between applications, boosting efficiency, reducing errors, and driving innovation."
    },
    {
      url: "#",
      title: "❓ Why is a CRM system essential for businesses?",
      description:
        "A CRM (Customer Relationship Management) system helps businesses manage customer interactions, streamline sales, and improve relationships. It centralizes customer data, enhances communication, and boosts efficiency, leading to better customer satisfaction and business growth. 🚀"
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
