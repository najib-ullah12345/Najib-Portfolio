export const projects = [
  {
    id: 1,
    title: 'Service Request Form',
    description:
      'A dynamic service request management system with form validation, clean UI, and smooth user interactions built with HTML, CSS, and JavaScript.',
    image: '/images/Service Request Form.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    siteUrl: 'http://127.0.0.1:5503/index.html',
    githubUrl: 'https://github.com/najib-ullah12345/Service-Request-Form.git',
    featured: true,
    role: 'Frontend Developer',
    duration: '2023',
  },
  {
    id: 2,
    title: 'Books Library',
    description:
      'A responsive digital library web application allowing users to browse, search, and manage book collections with an intuitive interface.',
    image: '/images/books.webp',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    siteUrl: 'http://127.0.0.1:5504/index.html',
    githubUrl: 'https://github.com/najib-ullah12345/books-library.git',
    featured: true,
    role: 'Frontend Developer',
    duration: '2023',
  },
  {
    id: 3,
    title: 'Simple Blog',
    description:
      'A clean, minimal blog layout featuring navigation, article display, and responsive design for seamless reading across devices.',
    image: '/images/navigation.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    siteUrl: 'http://127.0.0.1:5501/index.html',
    githubUrl: 'https://github.com/najib-ullah12345/navigation-bar.git',
    featured: false,
    role: 'Frontend Developer',
    duration: '2023',
  },
  {
    id: 4,
    title: 'Facebook Login UI',
    description:
      'A pixel-perfect recreation of the Facebook login page with responsive layout and modern styling implementation.',
    image: '/images/Facebook.png',
    technologies: ['HTML', 'CSS'],
    siteUrl: 'http://127.0.0.1:5500/index.html',
    githubUrl: 'https://github.com/najib-ullah12345/Facebook.git',
    featured: false,
    role: 'UI Developer',
    duration: '2023',
  },
  {
    id: 5,
    title: 'Responsive Music Shop',
    description:
      'A fully responsive e-commerce-style music shop website featuring product showcase, navigation, and a modern shopping interface.',
    image: '/images/food.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    siteUrl: 'https://shop-nicer.netlify.app/',
    githubUrl:
      'https://github.com/Nicers/All-Projects/tree/dedec62cb7c7098d569526de640e3ec55441c8fd/My%20Advanced%20Level%20Projectss/Foods%20Website',
    featured: true,
    role: 'Frontend Developer',
    duration: '2023',
  },
  {
    id: 6,
    title: 'Calculator',
    description:
      'A functional calculator web application with a clean interface, supporting standard arithmetic operations with smooth interactions.',
    image: '/images/calculator copy.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    siteUrl: 'http://127.0.0.1:5500/calculator1.html',
    githubUrl: 'https://github.com/najib-ullah12345/CALCULATOR.git',
    featured: false,
    role: 'Frontend Developer',
    duration: '2022',
  },
  {
    id: 7,
    title: 'Zomato Landing Page',
    description:
      'A static landing page inspired by Zomato featuring restaurant listings, hero section, and a food delivery focused design.',
    image: '/images/top.jpg',
    technologies: ['HTML', 'CSS'],
    siteUrl: 'http://127.0.0.1:5505/zomato.html',
    githubUrl: null,
    featured: false,
    role: 'UI Developer',
    duration: '2022',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
