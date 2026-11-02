export const photos = {
  hero: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=85",
  villa:
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1100&q=85",
  interior:
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=85",
  towers:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1100&q=85",
  dubai:
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1100&q=85",
  land: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1100&q=85",
};
export const projects = [
  {
    id: "01",
    name: "The Green Reserve",
    location: "Noida",
    type: "Residential",
    image: photos.villa,
    description:
      "A residential concept bringing generous living spaces, landscaped gardens and a quieter pace of life together.",
    highlights: [
      "Garden-facing residences",
      "Connected urban setting",
      "Private outdoor spaces",
    ],
  },
  {
    id: "02",
    name: "One Business District",
    location: "Gurgaon",
    type: "Commercial",
    image: photos.towers,
    description:
      "An illustrative commercial opportunity for businesses seeking a distinctive address and flexible workspaces.",
    highlights: [
      "Flexible office formats",
      "Contemporary architecture",
      "Business district setting",
    ],
  },
  {
    id: "03",
    name: "The Marina Collection",
    location: "UAE",
    type: "Residential",
    image: photos.dubai,
    description:
      "An international residential concept with a city perspective, designed for buyers exploring the UAE market.",
    highlights: [
      "International opportunity",
      "City-connected lifestyle",
      "Buyer advisory available",
    ],
  },
  {
    id: "04",
    name: "Aravalli Farm Retreats",
    location: "Jaipur",
    type: "Land & farms",
    image: photos.land,
    description:
      "A countryside concept for those exploring agricultural holdings and spacious private retreats.",
    highlights: [
      "Open countryside",
      "Land acquisition advisory",
      "Due diligence coordination",
    ],
  },
  {
    id: "05",
    name: "The Capital Residences",
    location: "Delhi",
    type: "Residential",
    image: photos.interior,
    description:
      "An urban residential concept balancing thoughtful interiors with access to the capital.",
    highlights: [
      "Considered interiors",
      "Established urban setting",
      "Personalised property search",
    ],
  },
];
export type Project = (typeof projects)[number];
