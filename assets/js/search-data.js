// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-people",
          title: "people",
          description: "of the algorithms group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-research",
          title: "research",
          description: "a selection of our research areas",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "news-sushmita-ruj-joins-the-algorithms-group",
          title: 'Sushmita Ruj joins the algorithms group',
          description: "",
          section: "News",},{id: "news-sparkles-congratulations-to-katie-on-her-soda-2025-paper-sayan-bandyapadhyay-katie-clinch-william-lochet-daniel-lokshtanov-saket-saurabh-jie-xue-ptases-for-euclidean-tsp-with-unit-disk-and-unit-square-neighborhoods-sparkles",
          title: ':sparkles: Congratulations to Katie on her SODA 2025 paper Sayan Bandyapadhyay, Katie Clinch,...',
          description: "",
          section: "News",},{id: "news-some-of-us-attended-isaac-2024-in-sydney-and-the-preceding-australasian-summer-school-recent-trends-in-algorithms",
          title: 'Some of us attended ISAAC 2024 in Sydney, and the preceding Australasian Summer...',
          description: "",
          section: "News",},{id: "news-sparkles-congratulations-to-ayda-for-obtaining-a-phd-sparkles",
          title: ':sparkles: Congratulations to Ayda for obtaining a PhD :sparkles:',
          description: "",
          section: "News",},{id: "news-shivika-narang-joins-the-algorithms-group",
          title: 'Shivika Narang joins the algorithms group',
          description: "",
          section: "News",},{id: "news-sparkles-congratulations-to-simon-and-abdallah-on-their-stoc-2025-paper-refuting-the-direct-sum-conjecture-for-total-functions-in-deterministic-communication-complexity-sparkles",
          title: ':sparkles: Congratulations to Simon and Abdallah on their STOC 2025 paper Refuting the...',
          description: "",
          section: "News",},{id: "projects-approximation-algorithms",
          title: 'approximation algorithms',
          description: "when perfect is the enemy of good",
          section: "Projects",handler: () => {
              window.location.href = "/projects/approx/";
            },},{id: "projects-computational-social-choice",
          title: 'computational social choice',
          description: "when you care about fairness, representation, collective decision making, and incentives",
          section: "Projects",handler: () => {
              window.location.href = "/projects/comsoc/";
            },},{id: "projects-exponential-time-algorithms",
          title: 'exponential time algorithms',
          description: "when you want to beat brute-force for intractable problems",
          section: "Projects",handler: () => {
              window.location.href = "/projects/exp/";
            },},{id: "projects-parameterized-complexity",
          title: 'parameterized complexity',
          description: "when you know more about the instances than just their size",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fpt/";
            },},{id: "projects-graph-algorithms",
          title: 'graph algorithms',
          description: "when you need to deal with pairwise relations",
          section: "Projects",handler: () => {
              window.location.href = "/projects/graphs/";
            },},{id: "projects-computational-number-theory-and-cryptography",
          title: 'computational number theory and cryptography',
          description: "when you want to manipulate numbers and hide secrets",
          section: "Projects",handler: () => {
              window.location.href = "/projects/numbers/";
            },},{id: "projects-optimisation",
          title: 'optimisation',
          description: "when you just want what&#39;s best",
          section: "Projects",handler: () => {
              window.location.href = "/projects/opt/";
            },},{id: "projects-quantum-algorithms",
          title: 'quantum algorithms',
          description: "when you want speedups using quantum weirdness",
          section: "Projects",handler: () => {
              window.location.href = "/projects/quantum/";
            },},{id: "projects-random-graphs-and-algorithms",
          title: 'random graphs and algorithms',
          description: "when you want to know what to expect",
          section: "Projects",handler: () => {
              window.location.href = "/projects/random/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%65%72%67%65.%67%61%73%70%65%72%73@%75%6E%73%77.%65%64%75.%61%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/algo-unsw", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://www.unsw.edu.au/engineering/our-schools/computer-science-and-engineering/our-research/research-groups/algorithms", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
