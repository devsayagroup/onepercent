// // src/data/room-data.ts

// export type Room = {
//   slug: string;
//   name: string;
//   subtitle: string;
//   description: string;
//   coverImage: string;
//   gallery: string[];
//   mood: string;
// };

// export const rooms: Room[] = [
//   {
//     slug: "pink-room",
//     name: "Pink Room",
//     subtitle: "Soft Energy, Intimate Mood",
//     description:
//       "A refined space wrapped in warmth and subtle color. Designed for intimate conversations, relaxed evenings, and moments that feel personal.",
//     coverImage: "/room/pink/Pi-1.JPG",
//     gallery: [
//       "/room/pink/Pi-1.JPG",
//       "/room/pink/Pi-4.JPG",
//       "/room/pink/Pi-6.JPG",
//     ],
//     mood: "Gentle, warm, expressive",
//   },
//   {
//     slug: "classic-room",
//     name: "Classic Room",
//     subtitle: "Timeless Elegance",
//     description:
//       "Where tradition meets modern luxury. A balanced atmosphere for those who appreciate structure, calm, and understated refinement.",
//     coverImage: "/room/classic/Cl-7.JPG",
//     gallery: [
//       "/room/classic/Cl-3.JPG",
//       "/room/classic/Cl-5.JPG",
//       "/room/classic/Cl-1.JPG",
//     ],
//     mood: "Elegant, composed, timeless",
//   },
//   {
//     slug: "japanese-room",
//     name: "Japanese Room",
//     subtitle: "Minimal Calm",
//     description:
//       "A quiet interpretation of Japanese aesthetics. Clean lines, muted tones, and a sense of intentional simplicity.",
//     coverImage: "/room/japanese/Jap-2.JPG",
//     gallery: [
//       "/room/japanese/Jap-2.JPG",
//       "/room/japanese/Jap-1.JPG",
//       "/room/japanese/Jap-3.JPG",
//     ],
//     mood: "Minimal, serene, focused",
//   },
//   {
//     slug: "chinese-room",
//     name: "Chinese Room",
//     subtitle: "Rich Heritage",
//     description:
//       "Inspired by heritage elements and deeper tones, this room offers a sense of richness and cultural depth.",
//     coverImage: "/room/chinese/Ch-3.JPG",
//     gallery: [
//       "/room/chinese/Ch-1.JPG",
//       "/room/chinese/Ch-2.JPG",
//       "/room/chinese/Ch-3.JPG",
//     ],
//     mood: "Bold, warm, heritage",
//   },
//   {
//     slug: "inner-circle",
//     name: "Inner Circle",
//     subtitle: "Absolute Privacy",
//     description:
//       "An exclusive environment reserved for those who value discretion, privacy, and elevated service.",
//     coverImage: "/room/Inner-circle.png",
//     gallery: [
//       "/room/innercircle/Ic-1.JPG",
//       "/room/innercircle/Ic-2.JPG",
//       "/room/innercircle/Ic-3.JPG",
//     ],
//     mood: "Exclusive, private, elevated",
//   },
// ];


// src/data/room-data.ts

export type RoomPricing = {
  duration: string;
  core: number;
  afterDiscount: number;
  additionalHour: {
    core: number;
    afterDiscount: number;
  };
};

export type Room = {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  coverImage: string;
  gallery: string[];
  mood: string;

  capacity: string;
  pricing: RoomPricing;
  includes: string[];
};

export const menuOne = [
  { name: "Goa Herb Fried Chicken", price: 160000 },
  { name: "Crispy Fried Chicken with Hot Honey Glaze", price: 160000 },
  { name: "Truffle Fries", price: 138000 },
  { name: "Sea Salt Fries", price: 75000 },
  { name: "Sea Salt Edamame", price: 70000 },
  { name: "Golden Octopus with Sweet Spice", price: 147000 },
  { name: "Cauliflower Tempura", price: 53000 },
  { name: "Popcorn Shrimp", price: 90000 },
  { name: "Crispy Chicken Skin", price: 77000 },
];

export const rooms: Room[] = [
  {
    slug: "pink-room",
    name: "Pink Room",
    subtitle: "Soft Energy, Intimate Mood",
    description:
      "A refined space wrapped in warmth and subtle color. Designed for intimate conversations, relaxed evenings, and moments that feel personal.",
    coverImage: "/room/pink/Pi-1.JPG",
    gallery: ["/room/pink/Pi-1.JPG", "/room/pink/Pi-4.JPG", "/room/pink/Pi-6.JPG"],
    mood: "Gentle, warm, expressive",

    capacity: "Up to 12 pax",
    pricing: {
      duration: "3 Hours",
      core: 7000000,
      afterDiscount: 3500000,
      additionalHour: {
        core: 1200000,
        afterDiscount: 600000,
      },
    },
    includes: [
      "Private room seating",
      "Dedicated service staff",
      "Sound system access",
    ],
  },

  {
    slug: "chinese-room",
    name: "Chinese Room",
    subtitle: "Rich Heritage",
    description:
      "Inspired by heritage elements and deeper tones, this room offers a sense of richness and cultural depth.",
    coverImage: "/room/chinese/Ch-3.JPG",
    gallery: ["/room/chinese/Ch-1.JPG", "/room/chinese/Ch-2.JPG", "/room/chinese/Ch-3.JPG"],
    mood: "Bold, warm, heritage",

    capacity: "Up to 15 pax",
    pricing: {
      duration: "3 Hours",
      core: 9000000,
      afterDiscount: 4500000,
      additionalHour: {
        core: 1400000,
        afterDiscount: 700000,
      },
    },
    includes: [
      "Spacious private layout",
      "Dedicated service staff",
      "Premium table arrangement",
    ],
  },

  {
    slug: "japanese-room",
    name: "Japanese Room",
    subtitle: "Minimal Calm",
    description:
      "A quiet interpretation of Japanese aesthetics. Clean lines, muted tones, and a sense of intentional simplicity.",
    coverImage: "/room/japanese/Jap-2.JPG",
    gallery: ["/room/japanese/Jap-2.JPG", "/room/japanese/Jap-1.JPG", "/room/japanese/Jap-3.JPG"],
    mood: "Minimal, serene, focused",

    capacity: "Up to 19 pax",
    pricing: {
      duration: "3 Hours",
      core: 11000000,
      afterDiscount: 5500000,
      additionalHour: {
        core: 1600000,
        afterDiscount: 800000,
      },
    },
    includes: [
      "Minimalist private room",
      "Dedicated service staff",
      "Controlled sound ambiance",
    ],
  },

  {
    slug: "classic-room",
    name: "Classic Room",
    subtitle: "Timeless Elegance",
    description:
      "Where tradition meets modern luxury. A balanced atmosphere for those who appreciate structure, calm, and understated refinement.",
    coverImage: "/room/classic/Cl-7.JPG",
    gallery: ["/room/classic/Cl-3.JPG", "/room/classic/Cl-5.JPG", "/room/classic/Cl-1.JPG"],
    mood: "Elegant, composed, timeless",

    capacity: "Up to 32 pax",
    pricing: {
      duration: "3 Hours",
      core: 13000000,
      afterDiscount: 6500000,
      additionalHour: {
        core: 2000000,
        afterDiscount: 1000000,
      },
    },
    includes: [
      "Largest private room",
      "Dedicated senior service staff",
      "Flexible seating layout",
    ],
  },

  {
    slug: "inner-circle",
    name: "Inner Circle",
    subtitle: "Absolute Privacy",
    description:
      "An exclusive environment reserved for those who value discretion, privacy, and elevated service.",
    coverImage: "/room/Inner-circle.png",
    gallery: [
      "/room/innercircle/Ic-1.JPG",
      "/room/innercircle/Ic-2.JPG",
      "/room/innercircle/Ic-3.JPG",
    ],
    mood: "Exclusive, private, elevated",

    capacity: "By invitation",
    pricing: {
      duration: "Custom",
      core: 0,
      afterDiscount: 0,
      additionalHour: {
        core: 0,
        afterDiscount: 0,
      },
    },
    includes: [
      "Highest level of privacy",
      "Dedicated senior team",
      "Custom arrangement",
    ],
  },
];
