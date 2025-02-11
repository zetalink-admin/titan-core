// src/data/menu.ts

export const headerMenu = [
    { name: 'About', link: '/' },
    { name: 'Style-Guide', link: '/style-guide', showArrow: false,
        children: [
            { name: 'Typography', link: '/style-guide/typography' },
            { name: 'Colors', link: '/style-guide/colors' },
            { name: 'Buttons', link: '/style-guide/buttons' },
            { name: 'Forms', link: '/style-guide/forms' },
        ]
    },
    { name: 'Contact', link: '/contact', showArrow: false,
        children: [
            { name: 'Contact Us', link: '/contact/contact-us' },
            { name: 'Support', link: '/contact/support' },
        ] 
    },

  ];
  



  export const footerMenu = [
    { name: 'Style Guide', link: '/style-guide' },
  ];