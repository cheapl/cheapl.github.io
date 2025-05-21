// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'cheapl', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['cheapl/trk-deform-process', 'cheapl/SpectralCorrespondence'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Makeup simulator based on dynamic projection mapping',
          description:
            'COLOR MACHINE is a system that enables users to experience makeup through dynamic projection mapping onto the face. In this project, I developed a 3D Morphable Model tailored for facial tracking, with a particular focus on improving accuracy for Asian facial features.',
          imageUrl:
            'https://www.vision.ict.e.titech.ac.jp/projects/ColorMachine/image1.jpg',
          link: 'https://maison.kose.co.jp/mixedrealitymakeup/',
        },
      ],
    },
  },
  seo: {
    title: 'Remus Shao',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'remus-shao',
    email: 'shao.q.0bf4@m.isct.ac.jp',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    '',
  ],
  experiences: [
    {
      company: 'Institute of Science Tokyo, joint research with Kosé Corporation',
      position: 'Research assistant',
      from: 'September 2023',
      to: 'Present',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'TOEFL iBT',
      body: 'score 100',
      year: 'September 2018',
      link: '',
    },
    {
      name: 'Japanese-Language Proficiency Test',
      body: 'N1',
      year: 'December 2019',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Institute of Science Tokyo',
      degree: 'Ph.D.',
      from: '',
      to: 'March 2027',
    },
    {
      institution: 'Institute of Science Tokyo',
      degree: 'Master',
      from: '',
      to: 'September 2023',
    },
    {
      institution: 'ShanghaiTech University',
      degree: 'Bachelor',
      from: '',
      to: 'June 2019',
    },
  ],
  publications: [
    {
      title: 'Accelerating Non-rigid 3D Tracking by Adaptively Adjusting Embedding Deformation Graph',
      conferenceName: 'MIRU',
      journalName: '',
      authors: 'Qianhan Shao，Yoshihiro Watanabe',
      link: 'https://www.vision.ict.e.titech.ac.jp/projects/trk_deform/index-j.html',
      description:
        'We propose a method to adaptively reduce the number of nodes in the embedded deformation graph in regions that are considered to be rigid motion on the surface of a non-rigidly deforming object. The proposed method reduces the computational cost of tracking, making it possible to speed up non-rigid 3D tracking by approximately 2 to 4.5 times without sacrificing accuracy.',
    },
    
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'cupcake',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,

  enablePWA: true,
};

export default CONFIG;
