module.exports = {
  siteTitle: 'Obed Amoasi | Software Engineer',
  siteDescription:
    'software engineer based in Accra, Ghana who specializes in developing well-designed, high-quality applications.',
  siteKeywords:
    'Obed Amoasi, Amoasi, Imbro, bchiang7, software engineer, front-end engineer, web developer, javascript, Ghana, freelance,remote',
  siteUrl: 'https://obedamoasi.com',
  siteLanguage: 'en_US',
  siteImage: 'https://obedamoasi.com/og.png',

  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',

  name: 'Obed Amoasi',
  location: 'Accra, Ghana',
  email: 'obedamoasi@gmail.com',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/kobbymmo/',
    },
    {
      name: 'Linkedin',
      url: 'www.linkedin.com/in/kobbymmo/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/kobbymmo/',
    },
  ],

  nav: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  twitterHandle: '@obed_amoasi',
  googleAnalyticsID: 'UA-45666519-2',

  headerHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',

  srConfig: (delay = 200) => {
    return {
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    };
  },
};
