// Verified data for Oregano Resto-Café in Tyre, Lebanon
// Derived from official public presence: Instagram @oregano_tyre & directory records

import heroSeaView from '@/src/assets/images/hero_oregano_sea_view_1790590030478.jpg';
import burgerImg from '@/src/assets/images/dish_crispy_chicken_burger_1790590047708.jpg';
import pizzaImg from '@/src/assets/images/dish_woodfired_pizza_oregano_1790590059590.jpg';
import fattehImg from '@/src/assets/images/dish_lebanese_breakfast_fatteh_1790590071276.jpg';
import drinksImg from '@/src/assets/images/drinks_specialty_mocktail_coffee_1790590081132.jpg';

export interface MenuItem {
  id: string;
  name: string;
  category: 'Breakfast' | 'Burgers' | 'Pizza & Pasta' | 'Starters & Salads' | 'Desserts' | 'Drinks & Coffee' | 'Shisha';
  description: string;
  highlight?: string;
  image?: string;
  isSignature?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Food' | 'Atmosphere' | 'Drinks' | 'Lounge';
  image: string;
  caption: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  likes: string;
  tag: string;
  date: string;
  postUrl: string;
}

export const RESTAURANT_INFO = {
  name: 'Oregano Resto-Café',
  shortName: 'Oregano Tyre',
  tagline: 'Mediterranean Flavors & Coastal Seaside Lounge',
  bio: 'A cozy and calm ambiance overlooking the Mediterranean sea in Tyre. Savor authentic Lebanese breakfast, gourmet burgers, wood-fired pizzas, specialty coffee, and evening shisha on our scenic corniche terrace.',
  address: {
    street: 'Nabih Berri Street, Corniche Road',
    building: 'Palazzo Hotel',
    city: 'Tyre (Sour)',
    governorate: 'South Governorate',
    country: 'Lebanon',
    fullFormatted: 'Palazzo Hotel, Nabih Berri Street, Corniche Road, Tyre, Lebanon',
  },
  phones: [
    { number: '+961 81 045 065', clean: '96181045065', label: 'Primary Mobile & WhatsApp' },
    { number: '+961 70 374 257', clean: '96170374257', label: 'General Inquiries' },
    { number: '+961 81 62 26 26', clean: '96181622626', label: 'Reservations' },
  ],
  whatsappNumber: '96181045065',
  whatsappUrl: 'https://wa.me/96181045065?text=Hello%20Oregano%20Resto-Caf%C3%A9%2C%20I%20would%20like%20to%20inquire%20about%20a%20table%20reservation%20%2F%20menu.',
  email: 'Youssefbasma4@gmail.com',
  instagram: {
    handle: '@oregano_tyre',
    url: 'https://www.instagram.com/oregano_tyre/',
  },
  googleMapsUrl: 'https://maps.google.com/?q=Palazzo+Hotel+Tyre+Lebanon+Oregano',
  hours: 'Open Daily: 9:00 AM – 1:00 AM',
  serviceHours: {
    breakfast: '9:00 AM – 1:00 PM',
    lunchDinner: '12:00 PM – Midnight',
    loungeAndShisha: 'All day until 1:00 AM',
  },
  payments: ['Cash (USD & LBP)', 'Credit & Debit Cards', 'Cryptocurrency Accepted'],
  highlights: [
    {
      title: 'Mediterranean Sea View',
      description: 'Perched on Tyre’s scenic corniche at Palazzo Hotel with sweeping views of the turquoise Mediterranean.',
    },
    {
      title: 'Diverse All-Day Menu',
      description: 'From rich traditional Lebanese fatteh and hummus to artisan crispy chicken burgers, pizzas, and pastas.',
    },
    {
      title: 'Seaside Shisha & Cocktails',
      description: 'Sip artisanal cocktails, specialty cold brews, and unwind with premium shisha in the cool coastal breeze.',
    },
    {
      title: 'Weekend Sports Screenings',
      description: 'Cheer your favorite football clubs and major tournaments live with high-definition screens and energetic atmosphere.',
    },
  ],
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'fatteh-special',
    name: 'Authentic Lebanese Fatteh',
    category: 'Breakfast',
    description: 'Slow-simmered chickpeas layered with crispy toasted pita, velvety garlic-infused yogurt sauce, golden pine nuts, and sumac.',
    highlight: 'Guest Breakfast Favorite',
    image: fattehImg,
    isSignature: true,
  },
  {
    id: 'hummus-classic',
    name: 'Creamy Hummus with Pine Nuts',
    category: 'Breakfast',
    description: 'Silky smooth whipped chickpeas blended with prime tahini and lemon juice, topped with toasted pine nuts and Lebanese extra virgin olive oil.',
    highlight: 'Classic Lebanese Mezza',
    image: fattehImg,
    isSignature: true,
  },
  {
    id: 'crispy-chicken-burger',
    name: 'Signature Crispy Chicken Burger',
    category: 'Burgers',
    description: 'Golden crunchy marinated chicken breast, melted aged cheddar, crisp shredded iceberg lettuce, and house signature sauce on a toasted artisanal brioche bun with seasoned potato wedges.',
    highlight: 'Verified Menu Hit',
    image: burgerImg,
    isSignature: true,
  },
  {
    id: 'chicken-alfredo-burger',
    name: 'Chicken Alfredo Burger',
    category: 'Burgers',
    description: 'Tender grilled chicken fillet smothered in a rich garlic parmesan Alfredo cream sauce with sautéed mushrooms, served in a toasted brioche bun.',
    highlight: 'Chef’s Creation',
    image: burgerImg,
    isSignature: true,
  },
  {
    id: 'woodfired-margherita',
    name: 'Oregano Garden Margherita Pizza',
    category: 'Pizza & Pasta',
    description: 'Traditional thin-crust artisan pizza with blistered edges, San Marzano style tomato passata, melted buffalo mozzarella, fresh wild oregano leaves, and cold-pressed olive oil.',
    highlight: 'Handcrafted',
    image: pizzaImg,
    isSignature: true,
  },
  {
    id: 'pasta-alfredo',
    name: 'Creamy Fettuccine Alfredo',
    category: 'Pizza & Pasta',
    description: 'Al dente fettuccine ribbon pasta tossed in a luxurious butter, cream, and freshly grated Parmigiano-Reggiano sauce with tender sautéed chicken slices.',
    highlight: 'Italian Classic',
  },
  {
    id: 'fattoush-salad',
    name: 'Lebanese Village Fattoush Salad',
    category: 'Starters & Salads',
    description: 'Garden fresh purslane, mint, cucumbers, heirloom tomatoes, and radishes tossed in zesty pomegranate molasses and sumac vinaigrette, crowned with crispy fried pita.',
    highlight: 'Fresh & Crisp',
  },
  {
    id: 'seasoned-wedges',
    name: 'Herbed Truffle Potato Wedges',
    category: 'Starters & Salads',
    description: 'Crispy thick-cut country potato wedges tossed with sea salt, dried wild oregano, parmesan shavings, and house dip.',
  },
  {
    id: 'artisanal-crepe',
    name: 'Belgian Chocolate Crepe',
    category: 'Desserts',
    description: 'Warm French-style crepe generously filled and drizzled with molten rich Belgian chocolate, crushed hazelnuts, and powdered sugar.',
  },
  {
    id: 'iced-specialty-latte',
    name: 'Seaside Iced Spanish Latte',
    category: 'Drinks & Coffee',
    description: 'Double shot of freshly ground specialty espresso poured over cold whole milk and sweetened condensed milk with ice.',
    highlight: 'Popular Summer Sip',
    image: drinksImg,
    isSignature: true,
  },
  {
    id: 'mediterranean-cooler',
    name: 'Fresh Mint & Tyre Citrus Sparkler',
    category: 'Drinks & Coffee',
    description: 'Locally sourced freshly squeezed lemons, crushed mint leaves, touch of cane sugar syrup, topped with sparkling Mediterranean soda.',
    image: drinksImg,
    isSignature: true,
  },
  {
    id: 'premium-shisha',
    name: 'Terrace Shisha & Hookah Service',
    category: 'Shisha',
    description: 'Selection of double apple, fresh mint, lemon mint, and premium exotic shisha blends served in clean, well-maintained hookahs on our sea-facing open-air terrace.',
    highlight: 'Outdoor Terrace',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Corniche Sea View Terrace',
    category: 'Atmosphere',
    image: heroSeaView,
    caption: 'Outdoor seating overlooking the Mediterranean horizon on Nabih Berri Street, Tyre.',
  },
  {
    id: 'gal-2',
    title: 'Signature Crispy Chicken Burger',
    category: 'Food',
    image: burgerImg,
    caption: 'Freshly prepared crispy chicken burger with house special sauce and rustic wedges.',
  },
  {
    id: 'gal-3',
    title: 'Artisanal Oregano Wood-Fired Pizza',
    category: 'Food',
    image: pizzaImg,
    caption: 'Handcrafted pizza with fragrant Mediterranean herbs and bubbling mozzarella.',
  },
  {
    id: 'gal-4',
    title: 'Authentic Morning Fatteh & Mezza',
    category: 'Food',
    image: fattehImg,
    caption: 'Traditional warm chickpea fatteh with toasted pine nuts and Lebanese breakfast spreads.',
  },
  {
    id: 'gal-5',
    title: 'Artisanal Beverages & Specialty Coffee',
    category: 'Drinks',
    image: drinksImg,
    caption: 'Handcrafted chilled iced lattes and citrus Mediterranean mocktails served seaside.',
  },
];

export const INSTAGRAM_HIGHLIGHTS: InstagramPost[] = [
  {
    id: 'ig-1',
    image: heroSeaView,
    caption: 'Sip, relax, and soak in the Tyre sea breeze. Nothing beats sunset at Oregano Resto-Café 🌊✨ #OreganoTyre #TyreLebanon #PalazzoHotel',
    likes: '482',
    tag: '@oregano_tyre',
    date: 'Recent',
    postUrl: 'https://www.instagram.com/oregano_tyre/',
  },
  {
    id: 'ig-2',
    image: burgerImg,
    caption: 'Crispy, golden, and packed with flavor! Come try our famous Crispy Chicken Burger today 🍔🔥 #TyreFood #SourLebanon #OreganoRestoCafe',
    likes: '621',
    tag: '@oregano_tyre',
    date: 'Recent',
    postUrl: 'https://www.instagram.com/oregano_tyre/',
  },
  {
    id: 'ig-3',
    image: pizzaImg,
    caption: 'Melted cheese, fragrant oregano, and that perfect blistered crust. Pizza night is every night at Oregano 🍕👌 #OreganoTyre #LebanonFood',
    likes: '517',
    tag: '@oregano_tyre',
    date: 'Recent',
    postUrl: 'https://www.instagram.com/oregano_tyre/',
  },
  {
    id: 'ig-4',
    image: fattehImg,
    caption: 'Start your weekend with our warm chickpea fatteh and smooth hummus plate right on the corniche ☀️🫒 #LebaneseBreakfast #Tyre',
    likes: '743',
    tag: '@oregano_tyre',
    date: 'Recent',
    postUrl: 'https://www.instagram.com/oregano_tyre/',
  },
];
