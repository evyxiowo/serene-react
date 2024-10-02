import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
import tour5 from "./images/tour-5.jpeg";
import tour6 from "./images/tour-6.jpeg";
// import tour1 from "../src/images/tour1.jpeg"
// import tour2 from "../src/images/tour2.jpeg"

// import tour3 from "../src/images/tour3.jpeg"

// import tour4 from "../src/images/tour4.jpeg"

// import tour5 from "../src/images/tour5.jpeg"

// import tour6 from "../src/images/tour6.jpeg"


export const pageLinks = [
    { id: 1, href: '#home', text: 'home'},
    { id: 2, href: '#about', text: 'about'},
    { id: 3, href: '#services', text: 'services'},
    { id: 4, href: '#tours', text: 'tours'},
]
export const socialLinks = [
    { id: 1, href: 'https://facebook.com', target: '_blank', iconClass: 'fab fa-facebook' },
    { id: 2, href: 'https://twitter.com', target: '_blank', iconClass: 'fab fa-twitter' },
    { id: 3, href: 'https://instagram.com', target: '_blank', iconClass: 'fab fa-instagram' },
  ];
  
export const services = [
    {
        id: 1,
        title: 'saving money',
        text: 'We specialize in creating high-quality websites and applications.',
        icon: 'fas fa-wallet fa-fw'
    },
    {
        id: 2,
        title: 'speed and responsiveness',
        text: 'We build websites that are easy to navigate and enjoy user experience.',
        icon: 'fas fa-tree fa-fw'
    },
    {
        id: 3,
        title: 'user-friendly design',
        text: 'Our designs are user-friendly and easy to understand.',
        icon: 'fas fa-user-circle fa-fw'
    }

]


export const tours = [
    {
        id: 1,
        title: 'Tibet Adventure',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        img: tour1,
        price: 2100,
        date: "august 26th, 2020",
        duration: 5,
        location: "tibet"
    },
    {
        id: 2,
        title: 'Himalayan Trekking',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        img: tour2,
        price: 1500,
        date: "september 15th, 2020",
        duration: 7,
        location: "himalayas"
    },
    {
        id: 3,
        title: 'African safari',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        img: tour3,
        price: 3500,
        date: "october 10th, 2020",
        duration: 10,
        location: "africa"
    },
    {
        id: 4,
        title: 'Eastern Coastal Exploration',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        img: tour4,
        price: 2800,
        date: "november 2nd, 2020",
        duration: 6,
        location: "eastern coast"
    },
    {

        id: 5,
        title: 'Indian Ocean Exploration',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        img: tour5,
        price: 3200,
        date: "december 15th, 2020",
        duration: 8,
        location: "indian ocean"
    },
    {
        id: 6,
        title: 'Australia Adventure',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        img: tour6,
        price: 3800,
        date: "january 5th, 2021",
        duration: 9,
        location: "australia"
    }
]