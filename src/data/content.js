/**
 * Site content lives here so copy and images can be updated without touching
 * component code. Set `image` to an imported asset or URL to replace a placeholder.
 */

export const brand = {
  name: 'Allure Braids',
  owner: 'Jamille Van Putten',
  email: 'allurebraids@gmail.com',
  bookingUrl: 'https://app.acuityscheduling.com/schedule/f644133f',
  location: 'New York City → Atlanta, GA',
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'book', label: 'Book' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export const socials = [
  { id: 'instagram', label: 'Instagram', href: 'https://instagram.com/' },
  { id: 'facebook', label: 'Facebook', href: 'https://facebook.com/' },
];

export const heroImages = [
  { id: 'hero-1', alt: 'Profile of model with cornrow braids', image: null, label: 'Hero image 01' },
  { id: 'hero-2', alt: 'Model with sleek braided ponytail in editorial styling', image: null, label: 'Hero image 02' },
  { id: 'hero-3', alt: 'Model with long box braids in a fashion editorial', image: null, label: 'Hero image 03' },
];

export const about = {
  headshot: { image: null, alt: 'Headshot of Jamille Van Putten', label: 'Headshot or video' },
  stats: [
    { value: '10+', label: 'Years braiding' },
    { value: '6', label: 'Major brand clients' },
    { value: 'NYC', label: 'Now relocating to Atlanta' },
  ],
};

export const clients = [
  {
    id: 'ralph-lauren',
    name: 'Ralph Lauren',
    category: 'Campaign',
    year: '2024',
    description: 'Sleek feed-in braids and a polished low ponytail built to hold through a full day of studio lighting.',
    image: null,
    gallery: 3,
  },
  {
    id: 'hm',
    name: 'H&M',
    category: 'Lookbook',
    year: '2024',
    description: 'Knotless box braids styled in multiple looks for a seasonal lookbook shoot.',
    image: null,
    gallery: 3,
  },
  {
    id: 'balmain',
    name: 'Balmain',
    category: 'Editorial',
    year: '2023',
    description: 'Sculptural cornrow patterns designed to complement structured couture silhouettes.',
    image: null,
    gallery: 3,
  },
  {
    id: 'saks',
    name: 'Saks',
    category: 'E-commerce',
    year: '2023',
    description: 'Fast, consistent braid styling across a high-volume product shoot.',
    image: null,
    gallery: 3,
  },
  {
    id: 'bloomingdales',
    name: "Bloomingdale's",
    category: 'Campaign',
    year: '2023',
    description: 'Clean, precise parts and finishing for a beauty-forward holiday campaign.',
    image: null,
    gallery: 3,
  },
  {
    id: 'area',
    name: 'Area',
    category: 'Runway',
    year: '2022',
    description: 'Statement braided looks prepped backstage for runway and press.',
    image: null,
    gallery: 3,
  },
];

export const services = [
  { id: 'editorial', title: 'Editorial & Campaign', detail: 'On-set braiding for photo and video productions.', duration: 'Half / full day' },
  { id: 'runway', title: 'Runway & Backstage', detail: 'Fast, consistent looks for multiple models.', duration: 'Per show' },
  { id: 'private', title: 'Private Clients', detail: 'Knotless, box braids, cornrows and custom styles.', duration: '3 – 8 hrs' },
];

export const testimonials = [
  {
    id: 't1',
    name: 'Client Name',
    role: 'Client for 4 years',
    quote:
      'Jamille is the person I trust with every big moment. Her parts are razor-clean, the braids last for weeks, and she makes the whole process feel calm and easy.',
    image: null,
  },
  {
    id: 't2',
    name: 'Client Name',
    role: 'Creative Director',
    quote:
      'On set she is fast, precise and completely unflappable. Every look came out camera-ready and held up through hours of lighting changes.',
    image: null,
  },
  {
    id: 't3',
    name: 'Client Name',
    role: 'Client for 6 years',
    quote:
      'I have never left her chair without compliments. She listens, she gives honest advice, and the detail in her work is unmatched.',
    image: null,
  },
];
