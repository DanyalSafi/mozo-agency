import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitImage2,
    chromecast,
    disc02,
    discord,
    discordBlack,
    facebook,
    figma,
    file02,
    framer,
    homeSmile,
    instagram,
    notification2,
    notification3,
    notification4,
    notion,
    photoshop,
    plusSquare,
    protopie,
    raindrop,
    recording01,
    recording03,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    searchMd,
    slack,
    sliders04,
    telegram,
    twitter,
  } from "../assets";

  import clogo from "../assets/bridley.png"
  import clogo2 from "../assets/1.png"
  import clogo3 from "../assets/3.png"
  import clogo4 from "../assets/2.png"
  import clogo5 from "../assets/tez.png"
  export const navigation = [
    {
      id: "0",
      title: "Our Services",
      url: "#features",
    },
    {
      id: "1",
      title: "Pricing",
      url: "#pricing",
    },
    {
      id: "2",
      title: "Our Best Deliverables",
      url: "#how-to-use",
    },
    {
      id: "3",
      title: "Web Development",
      url: "#roadmap",
    },
    {
      id: "4",
      title: "Contact on Whatsapp",
      url: "https://wa.link/rqf6l9",
      onlyMobile: true,
    },
    {
      id: "5",
      title: "Mail Us",
      url: "mailto:mozodesignagency@gmail.com",
      onlyMobile: true,
    },
  ];
  
  export const heroIcons = [homeSmile, file02, searchMd, plusSquare];
  
  export const notificationImages = [notification4, notification3, notification2];
  
  export const companyLogos = [clogo, clogo2, clogo3, clogo4, clogo5];
  
  export const brainwaveServices = [
    "Aesthetic Pallete",
    "Top Notch Branding",
    "Amazing Visuals",
  ];
  
  export const brainwaveServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
  ];
  
  export const roadmap = [
    {
      id: "0",
      title: "React ",
      text: "We at MOZO provide you with React.js framework.",
      imageUrl: roadmap1,
      colorful: true,
    },
    {
      id: "1",
      title: "Mern Stack",
      text: "We at MOZO Provide you with Mern Full Stack at efficient Costs.",
      imageUrl: roadmap2,
    },
    {
      id: "2",
      title: "PHP BackEnd",
      text: "We at MOZO Agency provide Backend with PHP.",
      imageUrl: roadmap3,
    },
    {
      id: "3",
      title: "HTML/CSS",
      text: "We At MOZO Design Agency provide user friendly designs in frontend with HTML/CSS.",
      imageUrl: roadmap4,
    },
  ];
  
  export const collabText =
    "Elevate your brand with our dynamic digital marketing solutions. We specialize in crafting compelling strategies, optimizing online presence, and driving impactful results. Let us navigate the digital landscape to amplify your business success through innovative and data-driven marketing campaigns.";
  
  export const collabContent = [
    {
      id: "0",
      title: "Our Promise",
    },
    {
      id: "1",
      title: "Goals To Achieve",
    },
    {
      id: "2",
      title: "Different From Other",
    },
  ];
  
  export const collabApps = [
    {
      id: "0",
      title: "Figma",
      icon: figma,
      width: 26,
      height: 36,
    },
    {
      id: "1",
      title: "Notion",
      icon: notion,
      width: 34,
      height: 36,
    },
    {
      id: "2",
      title: "Discord",
      icon: discord,
      width: 36,
      height: 28,
    },
    {
      id: "3",
      title: "Slack",
      icon: slack,
      width: 34,
      height: 35,
    },
    {
      id: "4",
      title: "Photoshop",
      icon: photoshop,
      width: 34,
      height: 34,
    },
    {
      id: "5",
      title: "Protopie",
      icon: protopie,
      width: 34,
      height: 34,
    },
    {
      id: "6",
      title: "Framer",
      icon: framer,
      width: 26,
      height: 34,
    },
    {
      id: "7",
      title: "Raindrop",
      icon: raindrop,
      width: 38,
      height: 32,
    },
  ];
  
  export const pricing = [
    {
      id: "0",
      title: "Basic",
      description: "This package Cannot be customized",
      price: "100",
      features: [
        "Social Media Content Creation",
        "Social Media Marketing and Growth",
        "Initial Website Design",
      ],
    },
    {
      id: "1",
      title: "Premium",
      description: "This Package can be customized on Negotiation",
      price: "175",
      features: [
        "Content Creation",
        "Social Media Management & Growth with Email Marketing",
        "Web Development and Custom Design",
        "Seo Optimization",
        
      ],
    },
    {
      id: "2",
      title: "Enterprise",
      description: "This package will be totally design on your Requirements",
      price: null,
      features: [
        "Social Media Management & Marketing",
        "Web Design & Development",
        "Seo & Branding",
        "Product photography & Video production",
      ],
    },
  ];
  
  export const benefits = [
    {
      id: "0",
      title: "Social Media Management",
      text: "Our Social Media Management service offers comprehensive oversight and execution of your brand's social media strategy. We develop tailored content, engage with your audience, manage advertising campaigns, and monitor performance metrics to drive growth and brand awareness.",
      backgroundUrl: "./src/assets/benefits/card-1.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2, 
      url: "#Projects",
    },
    {
      id: "1",
      title: "Website Development",
      text: "In web development, we start by understanding clients objectives and target audience. Our skilled team designs and develops user-friendly, visually appealing websites using HTML, CSS, and JavaScript. We ensure responsiveness across devices and optimize for speed and SEO. Rigorous, testing and client feedback guarantee.",
      backgroundUrl: "./src/assets/benefits/card-2.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
      light: true,
    },
    {
      id: "2",
      title: "UI/UX",
      text: "Our UI/UX design services focus on creating intuitive, engaging, and visually appealing digital experiences. We prioritize user-centric design principles to ensure seamless navigation and functionality, enhancing the overall user experience. Our process involves thorough research, wireframing, prototyping. ",
      backgroundUrl: "./src/assets/benefits/card-3.svg",
      iconUrl: benefitIcon3,
      imageUrl: benefitImage2,
    },
    {
      id: "3",
      title: "Branding",
      text: "Branding services encompass the strategic development and cohesive representation of your brand's identity across all touchpoints. We specialize in crafting compelling brand stories, designing memorable visual identities, and ensuring consistent messaging across digital and physical platforms. From logo creation to brand guidelines.",
      backgroundUrl: "./src/assets/benefits/card-4.svg",
      iconUrl: benefitIcon4,
      imageUrl: benefitImage2,
      light: true,
    },
    {
      id: "4",
      title: "Product Photography and Videography",
      text: "Product photography and videography services are dedicated to capturing the essence and quality of your products in a visually compelling manner. We specialize in creating high-resolution images and professional videos that showcase your products features, benefits, and unique selling points. ",
      backgroundUrl: "./src/assets/benefits/card-5.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
    },
    {
      id: "5",
      title: "Content Writing",
      text: "Our content writing services offer customized solutions tailored to our clients needs. We start by understanding their goals, audience, and industry. Our skilled writers craft compelling, informative, and engaging content, including blog posts, articles, website copy, and social media content. Each piece is meticulously researched, creatively written.",
      backgroundUrl: "./src/assets/benefits/card-6.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
    },
  ];
  
  export const socials = [
    {
      id: "0",
      title: "Discord",
      iconUrl: discordBlack,
      url: "https://www.linkedin.com/company/mozodesignagency/",
    },
    // {
    //   id: "1",
    //   title: "Twitter",
    //   iconUrl: twitter,
    //   url: "#",
    // },
    {
      id: "2",
      title: "Instagram",
      iconUrl: instagram,
      url: "https://www.instagram.com/mozoagency_?igsh=MWVnc3ppMWtwdmMyZA==",
    },
    // {
    //   id: "3",
    //   title: "Telegram",
    //   iconUrl: telegram,
    //   url: "#",
    // },
    {
      id: "4",
      title: "Facebook",
      iconUrl: facebook,
      url: "https://www.facebook.com/MozoDesignagency?mibextid=LQQJ4d",
    },
  ];