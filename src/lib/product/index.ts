import { ProductType } from "@/lib/product/types";

export const popularProducts: ProductType[] = [
  {
    id: 1,
    title: "Premium Beer - Modelo",
    available: true,
    content: "Premium beer from Modelo brewery.",
    description: "A high-quality beer with a rich flavor.",
    handle: "premium-beer-modelo",
    price: 10.0,
    price_max: 20.0,
    images: [
      "https://images.unsplash.com/photo-1619760078865-ee0f4c6586ee",
      "https://images.unsplash.com/photo-1635216776066-681091dd8a88",
      "https://images.unsplash.com/photo-1679251807508-eba2823bd107"
    ],
    options: [],
    tags: ["new", "premium"],
    variants: [
      {
        id: 101,
        available: true,
        title: "Modelo Negro",
        content: "Premium dark beer with a distinctive taste.",
        handle: "modelo-negro",
        description: "A bold and flavorful dark beer.",
        images: [
          "https://images.unsplash.com/photo-1635216776066-681091dd8a88"
        ],
        options: [],
        price_max: 15.0,
        price: 15.0,
        color: "black"
      },
      {
        id: 102,
        available: true,
        title: "Modelo Especial",
        content: "Premium golden beer with a smooth finish.",
        handle: "modelo-especial",
        description: "An exquisite golden beer for special occasions.",
        images: [
          "https://images.unsplash.com/photo-1619760078865-ee0f4c6586ee"
        ],
        options: [],
        price_max: 25.0,
        price: 15.0,
        color: "Goldenrod"
      },
      {
        id: 103,
        available: true,
        title: "Modelo Draft",
        content: "Premium draft beer with a refreshing taste.",
        handle: "modelo-draft",
        description: "A perfect choice for draft beer enthusiasts.",
        images: [
          "https://images.unsplash.com/photo-1462664450306-25ad625a342b"
        ],
        options: [],
        price_max: 15.0,
        price: 15.0,
        color: "SaddleBrown"
      },
      {
        id: 104,
        available: true,
        title: "Modelo Draft",
        content: "Premium draft beer with a refreshing taste.",
        handle: "modelo-draft",
        description: "A perfect choice for draft beer enthusiasts.",
        images: [
          "https://images.unsplash.com/photo-1462664450306-25ad625a342b"
        ],
        options: [],
        price_max: 15.0,
        price: 15.0
      }
    ]
  },
  {
    id: 2,
    title: "Tesla Model X Electric Car",
    available: true,
    content: "Explore the future with the Tesla Model X electric car.",
    description: "An eco-friendly and high-performance electric vehicle.",
    handle: "tesla-model-x",
    price: 72000.0,
    price_max: 72000.0,
    images: ["https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"],
    options: [],
    tags: ["electric", "luxury"],
    variants: [
      {
        id: 201,
        available: true,
        title: "Tesla - Stealth Gray MYLR",
        content: "Sleek and stylish Tesla Model X in Stealth Gray.",
        handle: "tesla-stealth-gray",
        description: "A sophisticated choice for a modern lifestyle.",
        images: [
          "https://images.unsplash.com/photo-1652508996643-2fc140eebe1d",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579",
          "https://images.unsplash.com/photo-1672588714766-ceb0e36a9e0a"
        ],
        options: [],
        price_max: 75000.0,
        price: 78500.0,
        color: "SlateGray",
        size: "MYLR"
      },
      {
        id: 202,
        available: true,
        title: "Tesla - Stealth Gray MYP",
        content: "Sleek and stylish Tesla Model X in Stealth Gray.",
        handle: "tesla-stealth-gray",
        description: "A sophisticated choice for a modern lifestyle.",
        images: [
          "https://images.unsplash.com/photo-1652508996643-2fc140eebe1d"
        ],
        options: [],
        price_max: 75000.0,
        price: 92500.0,
        color: "SlateGray",
        size: "MYP"
      },
      {
        id: 203,
        available: true,
        title: "Tesla - Stealth Gray MY",
        content: "Sleek and stylish Tesla Model X in Stealth Gray.",
        handle: "tesla-stealth-gray",
        description: "A sophisticated choice for a modern lifestyle.",
        images: [
          "https://images.unsplash.com/photo-1652508996643-2fc140eebe1d"
        ],
        options: [],
        price_max: 42990.0,
        price: 52990.0,
        color: "SlateGray",
        size: "MY"
      },
      {
        id: 204,
        available: true,
        title: "Tesla - Pearl White MY",
        content: "Tesla Model X in a pristine Pearl White finish.",
        handle: "tesla-pearl-white",
        description: "Experience elegance with this pearl-white electric car.",
        images: [
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        options: [],
        price_max: 65000.0,
        price: 65000.0,
        color: "white",
        size: "MY"
      },
      {
        id: 205,
        available: true,
        title: "Tesla - Pearl White MYLR",
        content: "Tesla Model X in a pristine Pearl White finish.",
        handle: "tesla-pearl-white",
        description: "Experience elegance with this pearl-white electric car.",
        images: [
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        options: [],
        price_max: 65000.0,
        price: 75000.0,
        color: "white",
        size: "MYLR"
      },
      {
        id: 206,
        available: true,
        title: "Tesla - Pearl White MYP",
        content: "Tesla Model X in a pristine Pearl White finish.",
        handle: "tesla-pearl-white",
        description: "Experience elegance with this pearl-white electric car.",
        images: [
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        options: [],
        price_max: 65000.0,
        price: 85000.0,
        color: "white",
        size: "MYP"
      },
      {
        id: 207,
        available: true,
        title: "Tesla - Ultra Red",
        content: "Turn heads with the Tesla Model X in Ultra Red.",
        handle: "tesla-ultra-red",
        description:
          "Make a bold statement with this vibrant red electric car.",
        images: [
          "https://images.unsplash.com/photo-1672588714766-ceb0e36a9e0a"
        ],
        options: [],
        price_max: 75800.0,
        price: 70000.0,
        color: "crimson"
      }
    ]
  },
  {
    id: 3,
    title: "Premium Headphones",
    available: true,
    content:
      "Immerse yourself in superior audio quality with our premium headphones.",
    description: "Designed for audiophiles who appreciate crystal-clear sound.",
    handle: "premium-headphones",
    price: 30.0,
    price_max: 60.0,
    images: ["https://images.unsplash.com/photo-1611536326696-b52be8ef45f6"],
    options: [],
    tags: ["audio", "premium"],
    variants: [
      {
        id: 301,
        available: true,
        title: "Slate Blue",
        content: "Premium headphones in a sophisticated slate blue color.",
        handle: "headphones-slate-blue",
        description:
          "Elevate your listening experience with this stylish color.",
        images: [],
        options: [],
        price_max: 25.0,
        price: 22.0,
        color: "slateblue"
      },
      {
        id: 302,
        available: true,
        title: "Silver",
        content: "Classic silver headphones for a timeless audio accessory.",
        handle: "headphones-silver",
        description:
          "Experience timeless elegance with these silver headphones.",
        images: [],
        options: [],
        price_max: 18.0,
        price: 18.0,
        color: "silver"
      },
      {
        id: 303,
        available: true,
        title: "Lime Green",
        content:
          "Vibrant lime green headphones for a lively listening experience.",
        handle: "headphones-lime-green",
        description:
          "Add a pop of color to your music with these lively headphones.",
        images: [],
        options: [],
        price_max: 18.0,
        price: 18.0,
        color: "yellowgreen"
      }
    ]
  },
  {
    id: 4,
    title: "Gaming Laptop",
    available: true,
    content:
      "Unleash your gaming potential with our high-performance gaming laptop.",
    description: "Experience immersive gaming with cutting-edge technology.",
    handle: "gaming-laptop",
    price: 40.0,
    price_max: 40.0,
    images: ["https://images.unsplash.com/photo-1595545560218-457a9066f591"],
    options: [],
    tags: ["gaming", "tech"],
    variants: [
      {
        id: 401,
        available: true,
        title: "Navy Blue",
        content:
          "Gaming laptop in a sleek navy blue finish for a stylish gaming setup.",
        handle: "laptop-navy-blue",
        description:
          "Elevate your gaming station with this modern navy blue laptop.",
        images: [],
        options: [],
        price_max: 23.0,
        price: 22.5,
        color: "navy"
      },
      {
        id: 402,
        available: true,
        title: "Orange",
        content:
          "Stand out with the vibrant orange gaming laptop for a bold gaming experience.",
        handle: "laptop-orange",
        description:
          "Make a statement with this eye-catching orange gaming device.",
        images: [],
        options: [],
        price_max: 15.0,
        price: 42.2,
        color: "orange"
      },
      {
        id: 403,
        available: true,
        title: "Yellow",
        content: "Brighten up your gaming setup with the yellow gaming laptop.",
        handle: "laptop-yellow",
        description:
          "Add a pop of color to your gaming station with this vibrant laptop.",
        images: [],
        options: [],
        price_max: 20.0,
        price: 20.0,
        color: "yellow"
      }
    ]
  },
  {
    id: 5,
    title: "Professional Camera",
    available: true,
    content:
      "Capture moments in stunning detail with our professional-grade camera.",
    description:
      "Designed for photographers who demand the best in image quality.",
    handle: "professional-camera",
    price: 50.0,
    price_max: 50.0,
    images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62"],
    options: [],
    tags: ["photography", "pro"],
    variants: [
      {
        id: 501,
        available: true,
        title: "Sky Blue",
        content:
          "Professional camera in an elegant sky blue color for a stylish photoshoot.",
        handle: "camera-sky-blue",
        description:
          "Enhance your photography sessions with this sophisticated camera.",
        images: [],
        options: [],
        price_max: 45.0,
        price: 41.35,
        color: "skyblue"
      },
      {
        id: 502,
        available: true,
        title: "Sienna",
        content:
          "Classic sienna camera for a timeless and iconic photography accessory.",
        handle: "camera-sienna",
        description:
          "Capture timeless moments with this sienna-colored professional camera.",
        images: [],
        options: [],
        price_max: 25.0,
        price: 18.25,
        color: "sienna"
      },
      {
        id: 503,
        available: true,
        title: "Teal",
        content:
          "Vibrant teal camera for adding a pop of color to your photography gear.",
        handle: "camera-teal",
        description:
          "Express your creativity with this bold and vibrant teal camera.",
        images: [],
        options: [],
        price_max: 25.0,
        price: 20.22,
        color: "teal"
      }
    ]
  },
  {
    id: 6,
    title: "Home Office Desk",
    available: true,
    content: "Create a productive workspace with our stylish home office desk.",
    description:
      "Designed for comfort and functionality to enhance your work-from-home experience.",
    handle: "home-office-desk",
    price: 60.0,
    price_max: 60.0,
    images: ["https://images.unsplash.com/photo-1491637639811-60e2756cc1c7"],
    options: [],
    tags: ["home-office", "furniture"],
    variants: [
      {
        id: 601,
        available: true,
        title: "Plum",
        content:
          "Home office desk in a rich plum color for an elegant and modern workspace.",
        handle: "desk-plum",
        description:
          "Transform your home office with this sophisticated plum-colored desk.",
        images: [],
        options: [],
        price_max: 18.0,
        price: 18.0,
        color: "sienna"
      },
      {
        id: 602,
        available: true,
        title: "Thistle",
        content:
          "Classic thistle desk for a timeless and versatile addition to your home office.",
        handle: "desk-thistle",
        description:
          "Achieve a timeless look with this thistle-colored home office desk.",
        images: [],
        options: [],
        price_max: 18.0,
        price: 18.0,
        color: "thistle"
      },
      {
        id: 603,
        available: true,
        title: "Pale Goldenrod",
        content:
          "Brighten up your workspace with the pale goldenrod home office desk.",
        handle: "desk-pale-goldenrod",
        description:
          "Create a cheerful and vibrant home office with this goldenrod desk.",
        images: [],
        options: [],
        price_max: 18.0,
        price: 18.0,
        color: "palegoldenrod"
      }
    ]
  }
];
