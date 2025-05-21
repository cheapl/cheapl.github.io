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
    title: 'Portfolio of Remus Shao',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'remus-shao',
    website: 'https://cheapl.github.io/',
    email: 'shao.q.0bf4@m.isct.ac.jp',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'C/C++',
    'PyTorch',
    'CUDA',
    'Git',
    'Docker',
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
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },
  ],
  publications: [
    {
      title: '埋め込み変形グラフの適応的調整による非剛体3次元トラッキングの高速化',
      conferenceName: 'MIRU',
      journalName: '',
      authors: '邵 乾瀚，渡辺 義浩',
      link: '',
      description:
        '非剛体3次元トラッキングは，拡張現実においてニーズが高い．また，拡張現実応用では，高い没入感を得るために低い遅延が要求されている．従来手法では，埋め込み変形グラフを利用し，計算の複雑度を軽減できることが示された．しかし，人間が知覚できない程度の低い遅延には，トラッキング速度のさらなる向上が必要である．そこで本研究では，非剛体変形する対象表面の剛体運動であると考えられる領域において，埋め込み変形グラフのノードを適応的に削減する手法を提案する．提案手法は，トラッキングにおける計算コストの低減により，非剛体3次元トラッキングの精度を落とすことなく，約2～4.5倍に高速化できる．',
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
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
