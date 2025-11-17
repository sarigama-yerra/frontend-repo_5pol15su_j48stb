export const destinations = [
  {
    slug: 'nairobi',
    name: 'Nairobi',
    hero: 'https://images.unsplash.com/photo-1597318188361-81c0f0b02f79?q=80&w=1600&auto=format&fit=crop',
    about: 'Kenya\'s vibrant capital blends wildlife, culture, cuisine, and buzzing nightlife. A perfect base to start or end any safari.',
    highlights: ['Nairobi National Park game drive', 'Karen Blixen & local crafts', 'Street food and art crawl'],
    itinerary: [
      { day: 1, title: 'City & Culture', details: 'Arrivals, coffee at Karen, museum, and craft markets.' },
      { day: 2, title: 'Wild Nairobi', details: 'Dawn game drive in Nairobi National Park, afternoon Giraffe Centre.' },
      { day: 3, title: 'Taste & Nightlife', details: 'Street food tour, sundowners, optional nightlife with host.' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1517824806704-9040b037703b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617882683522-1a5341e20c19?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1597301810103-14e7a64de795?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    slug: 'lamu',
    name: 'Lamu',
    hero: 'https://images.unsplash.com/photo-1523293915678-d126868e96e9?q=80&w=1600&auto=format&fit=crop',
    about: 'An ancient Swahili archipelago with winding alleys, dhow sails, and slow island days.',
    highlights: ['Sunset dhow cruise', 'Old Town heritage walk', 'Beach picnics'],
    itinerary: [
      { day: 1, title: 'Old Town', details: 'Guided walk, Swahili lunch, and seafront sundowners.' },
      { day: 2, title: 'Sail & Sand', details: 'Dhow to sandbanks, snorkel, seafood barbecue.' },
      { day: 3, title: 'Island Rhythm', details: 'Wellness morning, markets, optional donkey sanctuary visit.' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1468413253725-0d5181091126?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    slug: 'mombasa',
    name: 'Mombasa',
    hero: 'https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1600&auto=format&fit=crop',
    about: 'White-sand beaches, historic Fort Jesus, and Swahili flavors along the coast.',
    highlights: ['Old Town & Fort Jesus', 'Beach day in Nyali or Diani', 'Seafood dinner'],
    itinerary: [
      { day: 1, title: 'Old Town', details: 'Fort, spice market, and tamarind dhow dinner.' },
      { day: 2, title: 'Beach & Snorkel', details: 'Relaxing beach day with optional snorkel.' },
      { day: 3, title: 'Culture & Crafts', details: 'Workshops with local artisans and final shop.' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200&auto=format&fit=crop'
    ]
  },
];

// Extendable: other destinations follow the same structure

export const moreDestinations = [
  'Naivasha','Nanyuki','Samburu','Diani','Kisumu','Karura Forest','Limuru','Tsavo','Aberdare Ranges','Marsabit','Laikipia','Meru','Kitengela','Malindi','Watamu','Mount Kenya','Hell’s Gate','Chyulu Hills','Turkana','Isiolo'
].map((name) => ({
  slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
  name,
  hero: `https://source.unsplash.com/1600x900/?kenya,${encodeURIComponent(name)}`,
  about: `Discover ${name}\'s unique landscapes with our local hosts.`,
  highlights: ['Guided activity', 'Local cuisine', 'Community visit'],
  itinerary: [
    { day: 1, title: 'Arrival & Explore', details: 'Meet your host and ease into the vibe.' },
    { day: 2, title: 'Signature Experience', details: 'Themed activity tailored to your interests.' },
    { day: 3, title: 'Slow Morning & Farewell', details: 'Sundowner or village walk before departure.' }
  ],
  gallery: [
    `https://source.unsplash.com/1200x800/?${encodeURIComponent(name)},landscape`,
    `https://source.unsplash.com/1200x800/?${encodeURIComponent(name)},travel`,
    `https://source.unsplash.com/1200x800/?${encodeURIComponent(name)},nature`,
    `https://source.unsplash.com/1200x800/?${encodeURIComponent(name)},people`
  ]
}));

export const allDestinations = [...destinations, ...moreDestinations];
