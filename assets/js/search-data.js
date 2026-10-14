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
  },{id: "nav-publications",
          title: "publications",
          description: "Papers, preprints and my PhD thesis, newest first.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Independent projects applying statistical inference, networks and heavy-tail methods to market data.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-beyond-sectors-what-groups-do-us-stocks-really-form",
        
          title: "Beyond sectors: what groups do US stocks really form?",
        
        description: "A Bayesian stochastic block model finds groups of stocks that refine industry sectors, and shows how COVID briefly broke them apart.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/beyond-sectors/";
          
        },
      },{id: "post-how-heavy-are-the-tails-of-financial-returns",
        
          title: "How heavy are the tails of financial returns?",
        
        description: "Testing power-law, lognormal and exponential tails for 22 assets, without estimating a single parameter.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/heavy-tails/";
          
        },
      },{id: "post-an-overnight-price-floor-in-the-counter-strike-2-skin-market",
        
          title: "An overnight price floor in the Counter-Strike 2 skin market",
        
        description: "A game update turned some skins into lottery tickets on knives, and prices found the implied floor within a day.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/tradeup-price-floor/";
          
        },
      },{id: "projects-an-overnight-price-floor",
          title: 'An overnight price floor',
          description: "How a Counter-Strike 2 update created a no-arbitrage floor in the skin market, and how fast prices found it.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cs2-tradeup-parity/";
            },},{id: "projects-beyond-sectors",
          title: 'Beyond sectors',
          description: "What groups do US stocks form once the market is removed? Bayesian stochastic block models of 250 S&amp;P 500 stocks, 2010–2026.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sbm-equity-networks/";
            },},{id: "projects-how-heavy-are-the-tails",
          title: 'How heavy are the tails?',
          description: "Parameter-free tests of power-law, lognormal and exponential tails for the daily returns of 22 assets, using constrained surrogates.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tail-risk-surrogates/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%61%63%68%6C%61%6E.%62%75%72%74%6F%6E@%71%6D%75%6C.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/LnBn", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=0mtuW4AAAAAJ", "_blank");
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
