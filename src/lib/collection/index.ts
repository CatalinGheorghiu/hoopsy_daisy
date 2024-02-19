import { CollectionType } from "@/lib/collection/types";
import PlaceholderImage from "@/public/images/product_1.jpeg";

export const collections: CollectionType[] = [
  {
    all_tags: ["floral", "summer", "dainty"],
    all_types: ["studs", "hoops"],
    all_vendors: ["PolymerBliss", "EarringEmporium"],
    default_sort_by: "price-ascending",
    description:
      "Explore our collection of floral-inspired polymer earrings, perfect for a summery look.",
    featured_image: PlaceholderImage,
    filters: ["floral", "summer", "dainty"],
    handle: "floral-earrings",
    id: 1,
    products: [
      {
        id: 1,
        available: true,
        price: 15,
        price_max: 0,
        content:
          "Handcrafted polymer earrings featuring delicate floral designs.",
        description:
          "Add a touch of nature to your look with these charming floral polymer earrings.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "floral-earrings",
        options: ["Studs", "Hoops"],
        tags: ["floral", "summer", "dainty"],
        title: "Floral Polymer Earrings",
        variants: [
          {
            id: 101,
            available: true,
            price: 15,
            price_max: 0,
            content:
              "Handcrafted polymer studs featuring delicate floral designs.",
            description:
              "Add a touch of nature to your look with these charming floral polymer studs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "floral-earrings-studs",
            options: [],
            title: "Floral Studs",
            color: "Pink"
          },
          {
            id: 102,
            available: true,
            price: 20,
            price_max: 0,
            content:
              "Handcrafted polymer hoops featuring delicate floral designs.",
            description:
              "Add a touch of nature to your look with these charming floral polymer hoops.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "floral-earrings-hoops",
            options: [],
            title: "Floral Hoops",
            size: "Medium"
          }
        ]
      },
      {
        id: 2,
        available: true,
        price: 12,
        price_max: 0,
        content: "Minimalist polymer studs with geometric designs.",
        description:
          "These minimalist polymer studs feature sleek geometric designs, perfect for everyday wear.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "geometric-studs",
        options: ["Studs"],
        tags: ["geometric", "minimalist", "neutral"],
        title: "Geometric Polymer Studs",
        variants: [
          {
            id: 201,
            available: true,
            price: 12,
            price_max: 0,
            content: "Minimalist polymer studs with triangular designs.",
            description:
              "These minimalist polymer studs feature sleek triangular designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "geometric-studs-triangular",
            options: [],
            title: "Triangular Studs",
            color: "Black"
          },
          {
            id: 202,
            available: true,
            price: 12,
            price_max: 0,
            content: "Minimalist polymer studs with square designs.",
            description:
              "These minimalist polymer studs feature sleek square designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "geometric-studs-square",
            options: [],
            title: "Square Studs",
            color: "White"
          }
        ]
      },
      {
        id: 3,
        available: true,
        price: 18,
        price_max: 0,
        content:
          "Vintage-inspired polymer drop earrings with colorful designs.",
        description:
          "Transport yourself to another era with these vintage-inspired polymer drop earrings featuring vibrant colors.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "vintage-drop-earrings",
        options: ["Drops"],
        tags: ["vintage", "retro", "colorful"],
        title: "Vintage Drop Earrings",
        variants: [
          {
            id: 301,
            available: true,
            price: 18,
            price_max: 0,
            content:
              "Vintage-inspired polymer drop earrings with floral designs.",
            description:
              "Transport yourself to another era with these vintage-inspired polymer drop earrings featuring delicate floral patterns.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "vintage-drop-earrings-floral",
            options: [],
            title: "Floral Drops",
            color: "Fuchsia"
          },
          {
            id: 302,
            available: true,
            price: 18,
            price_max: 0,
            content:
              "Vintage-inspired polymer drop earrings with abstract designs.",
            description:
              "Transport yourself to another era with these vintage-inspired polymer drop earrings featuring abstract designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "vintage-drop-earrings-abstract",
            options: [],
            title: "Abstract Drops",
            color: "Pastel"
          }
        ]
      },
      {
        id: 4,
        available: true,
        price: 14,
        price_max: 0,
        content: "Animal-themed polymer stud earrings for a playful touch.",
        description:
          "Add a touch of whimsy to your style with these adorable animal-themed polymer stud earrings.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "animal-stud-earrings",
        options: ["Studs"],
        tags: ["animal", "cute", "quirky"],
        title: "Animal Stud Earrings",
        variants: [
          {
            id: 401,
            available: true,
            price: 14,
            price_max: 0,
            content: "Polymer stud earrings featuring cute cat designs.",
            description:
              "Add a playful touch to your look with these adorable cat-themed polymer stud earrings.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "animal-stud-earrings-cat",
            options: [],
            title: "Cat Studs",
            color: "Gray"
          }
        ]
      },
      {
        id: 5,
        available: true,
        price: 20,
        price_max: 0,
        content: "Handmade bohemian polymer hoop earrings.",
        description:
          "Express your free spirit with these handmade bohemian polymer hoop earrings, perfect for a laid-back vibe.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "boho-hoop-earrings",
        options: ["Hoops"],
        tags: ["boho", "ethnic", "handmade"],
        title: "Bohemian Hoop Earrings",
        variants: [
          {
            id: 501,
            available: true,
            price: 20,
            price_max: 0,
            content: "Handmade polymer hoop earrings with beaded designs.",
            description:
              "Express your free spirit with these handmade polymer hoop earrings featuring intricate beaded designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "boho-hoop-earrings-beaded",
            options: [],
            title: "Beaded Hoops",
            color: "Brown"
          }
        ]
      },
      {
        id: 6,
        available: true,
        price: 16,
        price_max: 0,
        content: "Festive polymer drop earrings with sparkly details.",
        description:
          "Get into the holiday spirit with these festive polymer drop earrings featuring sparkly accents.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "holiday-drop-earrings",
        options: ["Drops"],
        tags: ["holiday", "festive", "sparkly"],
        title: "Holiday Drop Earrings",
        variants: [
          {
            id: 601,
            available: true,
            price: 16,
            price_max: 0,
            content: "Polymer drop earrings featuring Christmas tree designs.",
            description:
              "Get into the holiday spirit with these festive polymer drop earrings featuring Christmas tree designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "holiday-drop-earrings-christmas-tree",
            options: [],
            title: "Christmas Tree Drops",
            color: "Green"
          }
        ]
      },
      {
        id: 7,
        available: true,
        price: 25,
        price_max: 0,
        content: "Bold and glamorous polymer hoop earrings.",
        description:
          "Make a statement with these bold and glamorous polymer hoop earrings, designed to turn heads.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "statement-hoop-earrings",
        options: ["Hoops"],
        tags: ["statement", "bold", "glam"],
        title: "Statement Hoop Earrings",
        variants: [
          {
            id: 701,
            available: true,
            price: 25,
            price_max: 0,
            content: "Statement polymer hoop earrings with textured designs.",
            description:
              "Make a bold statement with these polymer hoop earrings featuring intricate textured designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "statement-hoop-earrings-textured",
            options: [],
            title: "Textured Hoops",
            color: "Silver"
          },
          {
            id: 702,
            available: true,
            price: 25,
            price_max: 0,
            content:
              "Statement polymer hoop earrings with rhinestone embellishments.",
            description:
              "Make a bold statement with these polymer hoop earrings featuring sparkling rhinestone embellishments.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "statement-hoop-earrings-rhinestone",
            options: [],
            title: "Rhinestone Hoops",
            color: "Gold"
          }
        ]
      },
      {
        id: 8,
        available: true,
        price: 19,
        price_max: 0,
        content:
          "Celestial-themed polymer drop earrings featuring moons and stars.",
        description:
          "Explore the mysteries of the cosmos with these celestial-themed polymer drop earrings.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "celestial-drop-earrings",
        options: ["Drops"],
        tags: ["celestial", "moon", "stars"],
        title: "Celestial Drop Earrings",
        variants: [
          {
            id: 801,
            available: true,
            price: 19,
            price_max: 0,
            content:
              "Celestial polymer drop earrings featuring moon and star designs.",
            description:
              "Explore the mysteries of the cosmos with these polymer drop earrings featuring intricate moon and star designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "celestial-drop-earrings-moon-star",
            options: [],
            title: "Moon & Star Drops",
            color: "Navy"
          }
        ]
      },
      {
        id: 9,
        available: true,
        price: 17,
        price_max: 0,
        content: "Colorful polymer stud earrings with fruity designs.",
        description:
          "Add a pop of color to your look with these vibrant polymer stud earrings featuring fruity designs.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "fruity-stud-earrings",
        options: ["Studs"],
        tags: ["fruity", "fun", "colorful"],
        title: "Fruity Stud Earrings",
        variants: [
          {
            id: 901,
            available: true,
            price: 17,
            price_max: 0,
            content: "Polymer stud earrings featuring watermelon designs.",
            description:
              "Add a playful touch to your look with these polymer stud earrings featuring colorful watermelon designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "fruity-stud-earrings-watermelon",
            options: [],
            title: "Watermelon Studs",
            color: "Red"
          },
          {
            id: 902,
            available: true,
            price: 17,
            price_max: 0,
            content: "Polymer stud earrings featuring pineapple designs.",
            description:
              "Add a tropical flair to your look with these polymer stud earrings featuring vibrant pineapple designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1672588714766-ceb0e36a9e0a"
            ],
            handle: "fruity-stud-earrings-pineapple",
            options: [],
            title: "Pineapple Studs",
            color: "Yellow"
          }
        ]
      },
      {
        id: 10,
        available: true,
        price: 16,
        price_max: 0,
        content: "Artistic and abstract polymer dangle earrings.",
        description:
          "Express your individuality with these artistic and abstract polymer dangle earrings, each piece as unique as you are.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "artistic-dangle-earrings",
        options: ["Dangles"],
        tags: ["artistic", "abstract", "unique"],
        title: "Artistic Dangle Earrings",
        variants: [
          {
            id: 1001,
            available: true,
            price: 16,
            price_max: 0,
            content:
              "Polymer dangle earrings featuring abstract swirl designs.",
            description:
              "Express your individuality with these polymer dangle earrings featuring intricate abstract swirl designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "artistic-dangle-earrings-swirl",
            options: [],
            title: "Swirl Dangles",
            color: "Blue"
          }
        ]
      }
    ],
    published_at: "2024-02-19",
    sort_by: "price",
    template_suffix: "collection",
    title: "Floral Earrings"
  },
  {
    all_tags: ["geometric", "minimalist", "neutral"],
    all_types: ["studs", "dangles"],
    all_vendors: ["PolymerVogue", "EarringEssentials"],
    default_sort_by: "price-ascending",
    description:
      "Discover our collection of minimalist polymer earrings featuring geometric designs in neutral tones.",
    featured_image: PlaceholderImage,
    filters: ["geometric", "minimalist", "neutral"],
    handle: "geometric-earrings",
    id: 2,
    products: [
      {
        id: 1,
        available: true,
        price: 15,
        price_max: 0,
        content:
          "Handcrafted polymer earrings featuring delicate floral designs.",
        description:
          "Add a touch of nature to your look with these charming floral polymer earrings.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "floral-earrings",
        options: ["Studs", "Hoops"],
        tags: ["floral", "summer", "dainty"],
        title: "Floral Polymer Earrings",
        variants: [
          {
            id: 101,
            available: true,
            price: 15,
            price_max: 0,
            content:
              "Handcrafted polymer studs featuring delicate floral designs.",
            description:
              "Add a touch of nature to your look with these charming floral polymer studs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "floral-earrings-studs",
            options: [],
            title: "Floral Studs",
            color: "Pink"
          },
          {
            id: 102,
            available: true,
            price: 20,
            price_max: 0,
            content:
              "Handcrafted polymer hoops featuring delicate floral designs.",
            description:
              "Add a touch of nature to your look with these charming floral polymer hoops.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "floral-earrings-hoops",
            options: [],
            title: "Floral Hoops",
            size: "Medium"
          }
        ]
      },
      {
        id: 2,
        available: true,
        price: 12,
        price_max: 0,
        content: "Minimalist polymer studs with geometric designs.",
        description:
          "These minimalist polymer studs feature sleek geometric designs, perfect for everyday wear.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "geometric-studs",
        options: ["Studs"],
        tags: ["geometric", "minimalist", "neutral"],
        title: "Geometric Polymer Studs",
        variants: [
          {
            id: 201,
            available: true,
            price: 12,
            price_max: 0,
            content: "Minimalist polymer studs with triangular designs.",
            description:
              "These minimalist polymer studs feature sleek triangular designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "geometric-studs-triangular",
            options: [],
            title: "Triangular Studs",
            color: "Black"
          },
          {
            id: 202,
            available: true,
            price: 12,
            price_max: 0,
            content: "Minimalist polymer studs with square designs.",
            description:
              "These minimalist polymer studs feature sleek square designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "geometric-studs-square",
            options: [],
            title: "Square Studs",
            color: "White"
          }
        ]
      },
      {
        id: 3,
        available: true,
        price: 18,
        price_max: 0,
        content:
          "Vintage-inspired polymer drop earrings with colorful designs.",
        description:
          "Transport yourself to another era with these vintage-inspired polymer drop earrings featuring vibrant colors.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "vintage-drop-earrings",
        options: ["Drops"],
        tags: ["vintage", "retro", "colorful"],
        title: "Vintage Drop Earrings",
        variants: [
          {
            id: 301,
            available: true,
            price: 18,
            price_max: 0,
            content:
              "Vintage-inspired polymer drop earrings with floral designs.",
            description:
              "Transport yourself to another era with these vintage-inspired polymer drop earrings featuring delicate floral patterns.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "vintage-drop-earrings-floral",
            options: [],
            title: "Floral Drops",
            color: "Fuchsia"
          },
          {
            id: 302,
            available: true,
            price: 18,
            price_max: 0,
            content:
              "Vintage-inspired polymer drop earrings with abstract designs.",
            description:
              "Transport yourself to another era with these vintage-inspired polymer drop earrings featuring abstract designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "vintage-drop-earrings-abstract",
            options: [],
            title: "Abstract Drops",
            color: "Pastel"
          }
        ]
      },
      {
        id: 4,
        available: true,
        price: 14,
        price_max: 0,
        content: "Animal-themed polymer stud earrings for a playful touch.",
        description:
          "Add a touch of whimsy to your style with these adorable animal-themed polymer stud earrings.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "animal-stud-earrings",
        options: ["Studs"],
        tags: ["animal", "cute", "quirky"],
        title: "Animal Stud Earrings",
        variants: [
          {
            id: 401,
            available: true,
            price: 14,
            price_max: 0,
            content: "Polymer stud earrings featuring cute cat designs.",
            description:
              "Add a playful touch to your look with these adorable cat-themed polymer stud earrings.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "animal-stud-earrings-cat",
            options: [],
            title: "Cat Studs",
            color: "Gray"
          }
        ]
      },
      {
        id: 5,
        available: true,
        price: 20,
        price_max: 0,
        content: "Handmade bohemian polymer hoop earrings.",
        description:
          "Express your free spirit with these handmade bohemian polymer hoop earrings, perfect for a laid-back vibe.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "boho-hoop-earrings",
        options: ["Hoops"],
        tags: ["boho", "ethnic", "handmade"],
        title: "Bohemian Hoop Earrings",
        variants: [
          {
            id: 501,
            available: true,
            price: 20,
            price_max: 0,
            content: "Handmade polymer hoop earrings with beaded designs.",
            description:
              "Express your free spirit with these handmade polymer hoop earrings featuring intricate beaded designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "boho-hoop-earrings-beaded",
            options: [],
            title: "Beaded Hoops",
            color: "Brown"
          }
        ]
      },
      {
        id: 6,
        available: true,
        price: 16,
        price_max: 0,
        content: "Festive polymer drop earrings with sparkly details.",
        description:
          "Get into the holiday spirit with these festive polymer drop earrings featuring sparkly accents.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "holiday-drop-earrings",
        options: ["Drops"],
        tags: ["holiday", "festive", "sparkly"],
        title: "Holiday Drop Earrings",
        variants: [
          {
            id: 601,
            available: true,
            price: 16,
            price_max: 0,
            content: "Polymer drop earrings featuring Christmas tree designs.",
            description:
              "Get into the holiday spirit with these festive polymer drop earrings featuring Christmas tree designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "holiday-drop-earrings-christmas-tree",
            options: [],
            title: "Christmas Tree Drops",
            color: "Green"
          }
        ]
      },
      {
        id: 7,
        available: true,
        price: 25,
        price_max: 0,
        content: "Bold and glamorous polymer hoop earrings.",
        description:
          "Make a statement with these bold and glamorous polymer hoop earrings, designed to turn heads.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "statement-hoop-earrings",
        options: ["Hoops"],
        tags: ["statement", "bold", "glam"],
        title: "Statement Hoop Earrings",
        variants: [
          {
            id: 701,
            available: true,
            price: 25,
            price_max: 0,
            content: "Statement polymer hoop earrings with textured designs.",
            description:
              "Make a bold statement with these polymer hoop earrings featuring intricate textured designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "statement-hoop-earrings-textured",
            options: [],
            title: "Textured Hoops",
            color: "Silver"
          },
          {
            id: 702,
            available: true,
            price: 25,
            price_max: 0,
            content:
              "Statement polymer hoop earrings with rhinestone embellishments.",
            description:
              "Make a bold statement with these polymer hoop earrings featuring sparkling rhinestone embellishments.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "statement-hoop-earrings-rhinestone",
            options: [],
            title: "Rhinestone Hoops",
            color: "Gold"
          }
        ]
      },
      {
        id: 8,
        available: true,
        price: 19,
        price_max: 0,
        content:
          "Celestial-themed polymer drop earrings featuring moons and stars.",
        description:
          "Explore the mysteries of the cosmos with these celestial-themed polymer drop earrings.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "celestial-drop-earrings",
        options: ["Drops"],
        tags: ["celestial", "moon", "stars"],
        title: "Celestial Drop Earrings",
        variants: [
          {
            id: 801,
            available: true,
            price: 19,
            price_max: 0,
            content:
              "Celestial polymer drop earrings featuring moon and star designs.",
            description:
              "Explore the mysteries of the cosmos with these polymer drop earrings featuring intricate moon and star designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "celestial-drop-earrings-moon-star",
            options: [],
            title: "Moon & Star Drops",
            color: "Navy"
          }
        ]
      },
      {
        id: 9,
        available: true,
        price: 17,
        price_max: 0,
        content: "Colorful polymer stud earrings with fruity designs.",
        description:
          "Add a pop of color to your look with these vibrant polymer stud earrings featuring fruity designs.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "fruity-stud-earrings",
        options: ["Studs"],
        tags: ["fruity", "fun", "colorful"],
        title: "Fruity Stud Earrings",
        variants: [
          {
            id: 901,
            available: true,
            price: 17,
            price_max: 0,
            content: "Polymer stud earrings featuring watermelon designs.",
            description:
              "Add a playful touch to your look with these polymer stud earrings featuring colorful watermelon designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "fruity-stud-earrings-watermelon",
            options: [],
            title: "Watermelon Studs",
            color: "Red"
          },
          {
            id: 902,
            available: true,
            price: 17,
            price_max: 0,
            content: "Polymer stud earrings featuring pineapple designs.",
            description:
              "Add a tropical flair to your look with these polymer stud earrings featuring vibrant pineapple designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "fruity-stud-earrings-pineapple",
            options: [],
            title: "Pineapple Studs",
            color: "Yellow"
          }
        ]
      },
      {
        id: 10,
        available: true,
        price: 16,
        price_max: 0,
        content: "Artistic and abstract polymer dangle earrings.",
        description:
          "Express your individuality with these artistic and abstract polymer dangle earrings, each piece as unique as you are.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "artistic-dangle-earrings",
        options: ["Dangles"],
        tags: ["artistic", "abstract", "unique"],
        title: "Artistic Dangle Earrings",
        variants: [
          {
            id: 1001,
            available: true,
            price: 16,
            price_max: 0,
            content:
              "Polymer dangle earrings featuring abstract swirl designs.",
            description:
              "Express your individuality with these polymer dangle earrings featuring intricate abstract swirl designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "artistic-dangle-earrings-swirl",
            options: [],
            title: "Swirl Dangles",
            color: "Blue"
          }
        ]
      },
      {
        id: 11,
        available: true,
        price: 22,
        price_max: 0,
        content: "Polymer drop earrings with elegant floral designs.",
        description:
          "Elevate your look with these polymer drop earrings featuring elegant floral designs.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "floral-drop-earrings",
        options: ["Drops"],
        tags: ["floral", "elegant", "classic"],
        title: "Floral Drop Earrings",
        variants: [
          {
            id: 1101,
            available: true,
            price: 22,
            price_max: 0,
            content: "Polymer drop earrings featuring rose designs.",
            description:
              "Elevate your look with these polymer drop earrings featuring delicate rose designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "floral-drop-earrings-rose",
            options: [],
            title: "Rose Drops",
            color: "Red"
          }
        ]
      },
      {
        id: 12,
        available: true,
        price: 18,
        price_max: 0,
        content: "Polymer hoop earrings with intricate lace patterns.",
        description:
          "Add a touch of elegance to your ensemble with these polymer hoop earrings featuring intricate lace patterns.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "lace-hoop-earrings",
        options: ["Hoops"],
        tags: ["lace", "elegant", "feminine"],
        title: "Lace Hoop Earrings",
        variants: [
          {
            id: 1201,
            available: true,
            price: 18,
            price_max: 0,
            content: "Polymer hoop earrings featuring floral lace designs.",
            description:
              "Add a touch of femininity to your look with these polymer hoop earrings featuring delicate floral lace designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "lace-hoop-earrings-floral",
            options: [],
            title: "Floral Lace Hoops",
            color: "White"
          }
        ]
      },
      {
        id: 13,
        available: true,
        price: 20,
        price_max: 0,
        content: "Polymer stud earrings with celestial motifs.",
        description:
          "Embrace the magic of the cosmos with these polymer stud earrings featuring celestial motifs.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "celestial-stud-earrings",
        options: ["Studs"],
        tags: ["celestial", "moon", "stars"],
        title: "Celestial Stud Earrings",
        variants: [
          {
            id: 1301,
            available: true,
            price: 20,
            price_max: 0,
            content: "Polymer stud earrings featuring crescent moon designs.",
            description:
              "Embrace the magic of the night sky with these polymer stud earrings featuring crescent moon designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "celestial-stud-earrings-moon",
            options: [],
            title: "Moon Studs",
            color: "Silver"
          }
        ]
      },
      {
        id: 14,
        available: true,
        price: 15,
        price_max: 0,
        content: "Polymer dangle earrings with whimsical fairy designs.",
        description:
          "Let your imagination soar with these whimsical polymer dangle earrings featuring charming fairy designs.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "fairy-dangle-earrings",
        options: ["Dangles"],
        tags: ["fairy", "whimsical", "enchanted"],
        title: "Fairy Dangle Earrings",
        variants: [
          {
            id: 1401,
            available: true,
            price: 15,
            price_max: 0,
            content:
              "Polymer dangle earrings featuring fairy silhouette designs.",
            description:
              "Let your imagination soar with these polymer dangle earrings featuring whimsical fairy silhouette designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "fairy-dangle-earrings-silhouette",
            options: [],
            title: "Fairy Silhouette Dangles",
            color: "Gold"
          }
        ]
      },
      {
        id: 15,
        available: true,
        price: 16,
        price_max: 0,
        content: "Polymer hoop earrings with vibrant rainbow designs.",
        description:
          "Add a pop of color to your look with these polymer hoop earrings featuring vibrant rainbow designs.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "rainbow-hoop-earrings",
        options: ["Hoops"],
        tags: ["rainbow", "colorful", "vibrant"],
        title: "Rainbow Hoop Earrings",
        variants: [
          {
            id: 1501,
            available: true,
            price: 16,
            price_max: 0,
            content: "Polymer hoop earrings featuring striped rainbow designs.",
            description:
              "Add a pop of color to your look with these polymer hoop earrings featuring striped rainbow designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "rainbow-hoop-earrings-striped",
            options: [],
            title: "Striped Rainbow Hoops",
            color: "Fuchsia"
          }
        ]
      }
    ],
    published_at: "2024-02-19",
    sort_by: "price",
    template_suffix: "collection",
    title: "Geometric Earrings"
  },
  {
    all_tags: ["vintage", "retro", "colorful"],
    all_types: ["studs", "drops"],
    all_vendors: ["RetroEarringsCo", "VintageVibes"],
    default_sort_by: "price-ascending",
    description:
      "Step back in time with our collection of vintage-inspired polymer earrings featuring colorful designs.",
    featured_image: PlaceholderImage,
    filters: ["vintage", "retro", "colorful"],
    handle: "vintage-earrings",
    id: 3,
    products: [
      {
        id: 1,
        available: true,
        price: 15,
        price_max: 0,
        content:
          "Handcrafted polymer earrings featuring delicate floral designs.",
        description:
          "Add a touch of nature to your look with these charming floral polymer earrings.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "floral-earrings",
        options: ["Studs", "Hoops"],
        tags: ["floral", "summer", "dainty"],
        title: "Floral Polymer Earrings",
        variants: [
          {
            id: 101,
            available: true,
            price: 15,
            price_max: 0,
            content:
              "Handcrafted polymer studs featuring delicate floral designs.",
            description:
              "Add a touch of nature to your look with these charming floral polymer studs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "floral-earrings-studs",
            options: [],
            title: "Floral Studs",
            color: "Pink"
          },
          {
            id: 102,
            available: true,
            price: 20,
            price_max: 0,
            content:
              "Handcrafted polymer hoops featuring delicate floral designs.",
            description:
              "Add a touch of nature to your look with these charming floral polymer hoops.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "floral-earrings-hoops",
            options: [],
            title: "Floral Hoops",
            size: "Medium"
          }
        ]
      },
      {
        id: 2,
        available: true,
        price: 12,
        price_max: 0,
        content: "Minimalist polymer studs with geometric designs.",
        description:
          "These minimalist polymer studs feature sleek geometric designs, perfect for everyday wear.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "geometric-studs",
        options: ["Studs"],
        tags: ["geometric", "minimalist", "neutral"],
        title: "Geometric Polymer Studs",
        variants: [
          {
            id: 201,
            available: true,
            price: 12,
            price_max: 0,
            content: "Minimalist polymer studs with triangular designs.",
            description:
              "These minimalist polymer studs feature sleek triangular designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "geometric-studs-triangular",
            options: [],
            title: "Triangular Studs",
            color: "Black"
          },
          {
            id: 202,
            available: true,
            price: 12,
            price_max: 0,
            content: "Minimalist polymer studs with square designs.",
            description:
              "These minimalist polymer studs feature sleek square designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "geometric-studs-square",
            options: [],
            title: "Square Studs",
            color: "White"
          }
        ]
      },
      {
        id: 3,
        available: true,
        price: 18,
        price_max: 0,
        content:
          "Vintage-inspired polymer drop earrings with colorful designs.",
        description:
          "Transport yourself to another era with these vintage-inspired polymer drop earrings featuring vibrant colors.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "vintage-drop-earrings",
        options: ["Drops"],
        tags: ["vintage", "retro", "colorful"],
        title: "Vintage Drop Earrings",
        variants: [
          {
            id: 301,
            available: true,
            price: 18,
            price_max: 0,
            content:
              "Vintage-inspired polymer drop earrings with floral designs.",
            description:
              "Transport yourself to another era with these vintage-inspired polymer drop earrings featuring delicate floral patterns.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "vintage-drop-earrings-floral",
            options: [],
            title: "Floral Drops",
            color: "Fuchsia"
          },
          {
            id: 302,
            available: true,
            price: 18,
            price_max: 0,
            content:
              "Vintage-inspired polymer drop earrings with abstract designs.",
            description:
              "Transport yourself to another era with these vintage-inspired polymer drop earrings featuring abstract designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "vintage-drop-earrings-abstract",
            options: [],
            title: "Abstract Drops",
            color: "Pastel"
          }
        ]
      },
      {
        id: 4,
        available: true,
        price: 14,
        price_max: 0,
        content: "Animal-themed polymer stud earrings for a playful touch.",
        description:
          "Add a touch of whimsy to your style with these adorable animal-themed polymer stud earrings.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "animal-stud-earrings",
        options: ["Studs"],
        tags: ["animal", "cute", "quirky"],
        title: "Animal Stud Earrings",
        variants: [
          {
            id: 401,
            available: true,
            price: 14,
            price_max: 0,
            content: "Polymer stud earrings featuring cute cat designs.",
            description:
              "Add a playful touch to your look with these adorable cat-themed polymer stud earrings.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "animal-stud-earrings-cat",
            options: [],
            title: "Cat Studs",
            color: "Gray"
          }
        ]
      },
      {
        id: 5,
        available: true,
        price: 20,
        price_max: 0,
        content: "Handmade bohemian polymer hoop earrings.",
        description:
          "Express your free spirit with these handmade bohemian polymer hoop earrings, perfect for a laid-back vibe.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "boho-hoop-earrings",
        options: ["Hoops"],
        tags: ["boho", "ethnic", "handmade"],
        title: "Bohemian Hoop Earrings",
        variants: [
          {
            id: 501,
            available: true,
            price: 20,
            price_max: 0,
            content: "Handmade polymer hoop earrings with beaded designs.",
            description:
              "Express your free spirit with these handmade polymer hoop earrings featuring intricate beaded designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "boho-hoop-earrings-beaded",
            options: [],
            title: "Beaded Hoops",
            color: "Brown"
          }
        ]
      },
      {
        id: 6,
        available: true,
        price: 16,
        price_max: 0,
        content: "Festive polymer drop earrings with sparkly details.",
        description:
          "Get into the holiday spirit with these festive polymer drop earrings featuring sparkly accents.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "holiday-drop-earrings",
        options: ["Drops"],
        tags: ["holiday", "festive", "sparkly"],
        title: "Holiday Drop Earrings",
        variants: [
          {
            id: 601,
            available: true,
            price: 16,
            price_max: 0,
            content: "Polymer drop earrings featuring Christmas tree designs.",
            description:
              "Get into the holiday spirit with these festive polymer drop earrings featuring Christmas tree designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "holiday-drop-earrings-christmas-tree",
            options: [],
            title: "Christmas Tree Drops",
            color: "Green"
          }
        ]
      },
      {
        id: 7,
        available: true,
        price: 25,
        price_max: 0,
        content: "Bold and glamorous polymer hoop earrings.",
        description:
          "Make a statement with these bold and glamorous polymer hoop earrings, designed to turn heads.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "statement-hoop-earrings",
        options: ["Hoops"],
        tags: ["statement", "bold", "glam"],
        title: "Statement Hoop Earrings",
        variants: [
          {
            id: 701,
            available: true,
            price: 25,
            price_max: 0,
            content: "Statement polymer hoop earrings with textured designs.",
            description:
              "Make a bold statement with these polymer hoop earrings featuring intricate textured designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "statement-hoop-earrings-textured",
            options: [],
            title: "Textured Hoops",
            color: "Silver"
          },
          {
            id: 702,
            available: true,
            price: 25,
            price_max: 0,
            content:
              "Statement polymer hoop earrings with rhinestone embellishments.",
            description:
              "Make a bold statement with these polymer hoop earrings featuring sparkling rhinestone embellishments.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "statement-hoop-earrings-rhinestone",
            options: [],
            title: "Rhinestone Hoops",
            color: "Gold"
          }
        ]
      },
      {
        id: 8,
        available: true,
        price: 19,
        price_max: 0,
        content:
          "Celestial-themed polymer drop earrings featuring moons and stars.",
        description:
          "Explore the mysteries of the cosmos with these celestial-themed polymer drop earrings.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "celestial-drop-earrings",
        options: ["Drops"],
        tags: ["celestial", "moon", "stars"],
        title: "Celestial Drop Earrings",
        variants: [
          {
            id: 801,
            available: true,
            price: 19,
            price_max: 0,
            content:
              "Celestial polymer drop earrings featuring moon and star designs.",
            description:
              "Explore the mysteries of the cosmos with these polymer drop earrings featuring intricate moon and star designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "celestial-drop-earrings-moon-star",
            options: [],
            title: "Moon & Star Drops",
            color: "Navy"
          }
        ]
      },
      {
        id: 9,
        available: true,
        price: 17,
        price_max: 0,
        content: "Colorful polymer stud earrings with fruity designs.",
        description:
          "Add a pop of color to your look with these vibrant polymer stud earrings featuring fruity designs.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "fruity-stud-earrings",
        options: ["Studs"],
        tags: ["fruity", "fun", "colorful"],
        title: "Fruity Stud Earrings",
        variants: [
          {
            id: 901,
            available: true,
            price: 17,
            price_max: 0,
            content: "Polymer stud earrings featuring watermelon designs.",
            description:
              "Add a playful touch to your look with these polymer stud earrings featuring colorful watermelon designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "fruity-stud-earrings-watermelon",
            options: [],
            title: "Watermelon Studs",
            color: "Red"
          },
          {
            id: 902,
            available: true,
            price: 17,
            price_max: 0,
            content: "Polymer stud earrings featuring pineapple designs.",
            description:
              "Add a tropical flair to your look with these polymer stud earrings featuring vibrant pineapple designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "fruity-stud-earrings-pineapple",
            options: [],
            title: "Pineapple Studs",
            color: "Yellow"
          }
        ]
      },
      {
        id: 10,
        available: true,
        price: 16,
        price_max: 0,
        content: "Artistic and abstract polymer dangle earrings.",
        description:
          "Express your individuality with these artistic and abstract polymer dangle earrings, each piece as unique as you are.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "artistic-dangle-earrings",
        options: ["Dangles"],
        tags: ["artistic", "abstract", "unique"],
        title: "Artistic Dangle Earrings",
        variants: [
          {
            id: 1001,
            available: true,
            price: 16,
            price_max: 0,
            content:
              "Polymer dangle earrings featuring abstract swirl designs.",
            description:
              "Express your individuality with these polymer dangle earrings featuring intricate abstract swirl designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "artistic-dangle-earrings-swirl",
            options: [],
            title: "Swirl Dangles",
            color: "Blue"
          }
        ]
      }
    ],
    published_at: "2024-02-19",
    sort_by: "price",
    template_suffix: "collection",
    title: "Vintage Earrings"
  },
  {
    all_tags: ["animal", "cute", "quirky"],
    all_types: ["studs", "charms"],
    all_vendors: ["AnimalCharmers", "CuteCritters"],
    default_sort_by: "price-ascending",
    description:
      "Embrace your playful side with our collection of animal-themed polymer earrings.",
    featured_image: PlaceholderImage,
    filters: ["animal", "cute", "quirky"],
    handle: "animal-earrings",
    id: 4,
    products: [
      {
        id: 1,
        available: true,
        price: 15,
        price_max: 0,
        content:
          "Handcrafted polymer earrings featuring delicate floral designs.",
        description:
          "Add a touch of nature to your look with these charming floral polymer earrings.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "floral-earrings",
        options: ["Studs", "Hoops"],
        tags: ["floral", "summer", "dainty"],
        title: "Floral Polymer Earrings",
        variants: [
          {
            id: 101,
            available: true,
            price: 15,
            price_max: 0,
            content:
              "Handcrafted polymer studs featuring delicate floral designs.",
            description:
              "Add a touch of nature to your look with these charming floral polymer studs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "floral-earrings-studs",
            options: [],
            title: "Floral Studs",
            color: "Pink"
          },
          {
            id: 102,
            available: true,
            price: 20,
            price_max: 0,
            content:
              "Handcrafted polymer hoops featuring delicate floral designs.",
            description:
              "Add a touch of nature to your look with these charming floral polymer hoops.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "floral-earrings-hoops",
            options: [],
            title: "Floral Hoops",
            size: "Medium"
          }
        ]
      },
      {
        id: 2,
        available: true,
        price: 12,
        price_max: 0,
        content: "Minimalist polymer studs with geometric designs.",
        description:
          "These minimalist polymer studs feature sleek geometric designs, perfect for everyday wear.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "geometric-studs",
        options: ["Studs"],
        tags: ["geometric", "minimalist", "neutral"],
        title: "Geometric Polymer Studs",
        variants: [
          {
            id: 201,
            available: true,
            price: 12,
            price_max: 0,
            content: "Minimalist polymer studs with triangular designs.",
            description:
              "These minimalist polymer studs feature sleek triangular designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "geometric-studs-triangular",
            options: [],
            title: "Triangular Studs",
            color: "Black"
          },
          {
            id: 202,
            available: true,
            price: 12,
            price_max: 0,
            content: "Minimalist polymer studs with square designs.",
            description:
              "These minimalist polymer studs feature sleek square designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "geometric-studs-square",
            options: [],
            title: "Square Studs",
            color: "White"
          }
        ]
      },
      {
        id: 3,
        available: true,
        price: 18,
        price_max: 0,
        content:
          "Vintage-inspired polymer drop earrings with colorful designs.",
        description:
          "Transport yourself to another era with these vintage-inspired polymer drop earrings featuring vibrant colors.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "vintage-drop-earrings",
        options: ["Drops"],
        tags: ["vintage", "retro", "colorful"],
        title: "Vintage Drop Earrings",
        variants: [
          {
            id: 301,
            available: true,
            price: 18,
            price_max: 0,
            content:
              "Vintage-inspired polymer drop earrings with floral designs.",
            description:
              "Transport yourself to another era with these vintage-inspired polymer drop earrings featuring delicate floral patterns.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "vintage-drop-earrings-floral",
            options: [],
            title: "Floral Drops",
            color: "Fuchsia"
          },
          {
            id: 302,
            available: true,
            price: 18,
            price_max: 0,
            content:
              "Vintage-inspired polymer drop earrings with abstract designs.",
            description:
              "Transport yourself to another era with these vintage-inspired polymer drop earrings featuring abstract designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "vintage-drop-earrings-abstract",
            options: [],
            title: "Abstract Drops",
            color: "Pastel"
          }
        ]
      },
      {
        id: 4,
        available: true,
        price: 14,
        price_max: 0,
        content: "Animal-themed polymer stud earrings for a playful touch.",
        description:
          "Add a touch of whimsy to your style with these adorable animal-themed polymer stud earrings.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "animal-stud-earrings",
        options: ["Studs"],
        tags: ["animal", "cute", "quirky"],
        title: "Animal Stud Earrings",
        variants: [
          {
            id: 401,
            available: true,
            price: 14,
            price_max: 0,
            content: "Polymer stud earrings featuring cute cat designs.",
            description:
              "Add a playful touch to your look with these adorable cat-themed polymer stud earrings.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "animal-stud-earrings-cat",
            options: [],
            title: "Cat Studs",
            color: "Gray"
          }
        ]
      },
      {
        id: 5,
        available: true,
        price: 20,
        price_max: 0,
        content: "Handmade bohemian polymer hoop earrings.",
        description:
          "Express your free spirit with these handmade bohemian polymer hoop earrings, perfect for a laid-back vibe.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "boho-hoop-earrings",
        options: ["Hoops"],
        tags: ["boho", "ethnic", "handmade"],
        title: "Bohemian Hoop Earrings",
        variants: [
          {
            id: 501,
            available: true,
            price: 20,
            price_max: 0,
            content: "Handmade polymer hoop earrings with beaded designs.",
            description:
              "Express your free spirit with these handmade polymer hoop earrings featuring intricate beaded designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "boho-hoop-earrings-beaded",
            options: [],
            title: "Beaded Hoops",
            color: "Brown"
          }
        ]
      },
      {
        id: 6,
        available: true,
        price: 16,
        price_max: 0,
        content: "Festive polymer drop earrings with sparkly details.",
        description:
          "Get into the holiday spirit with these festive polymer drop earrings featuring sparkly accents.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "holiday-drop-earrings",
        options: ["Drops"],
        tags: ["holiday", "festive", "sparkly"],
        title: "Holiday Drop Earrings",
        variants: [
          {
            id: 601,
            available: true,
            price: 16,
            price_max: 0,
            content: "Polymer drop earrings featuring Christmas tree designs.",
            description:
              "Get into the holiday spirit with these festive polymer drop earrings featuring Christmas tree designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "holiday-drop-earrings-christmas-tree",
            options: [],
            title: "Christmas Tree Drops",
            color: "Green"
          }
        ]
      },
      {
        id: 7,
        available: true,
        price: 25,
        price_max: 0,
        content: "Bold and glamorous polymer hoop earrings.",
        description:
          "Make a statement with these bold and glamorous polymer hoop earrings, designed to turn heads.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "statement-hoop-earrings",
        options: ["Hoops"],
        tags: ["statement", "bold", "glam"],
        title: "Statement Hoop Earrings",
        variants: [
          {
            id: 701,
            available: true,
            price: 25,
            price_max: 0,
            content: "Statement polymer hoop earrings with textured designs.",
            description:
              "Make a bold statement with these polymer hoop earrings featuring intricate textured designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "statement-hoop-earrings-textured",
            options: [],
            title: "Textured Hoops",
            color: "Silver"
          },
          {
            id: 702,
            available: true,
            price: 25,
            price_max: 0,
            content:
              "Statement polymer hoop earrings with rhinestone embellishments.",
            description:
              "Make a bold statement with these polymer hoop earrings featuring sparkling rhinestone embellishments.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "statement-hoop-earrings-rhinestone",
            options: [],
            title: "Rhinestone Hoops",
            color: "Gold"
          }
        ]
      },
      {
        id: 8,
        available: true,
        price: 19,
        price_max: 0,
        content:
          "Celestial-themed polymer drop earrings featuring moons and stars.",
        description:
          "Explore the mysteries of the cosmos with these celestial-themed polymer drop earrings.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "celestial-drop-earrings",
        options: ["Drops"],
        tags: ["celestial", "moon", "stars"],
        title: "Celestial Drop Earrings",
        variants: [
          {
            id: 801,
            available: true,
            price: 19,
            price_max: 0,
            content:
              "Celestial polymer drop earrings featuring moon and star designs.",
            description:
              "Explore the mysteries of the cosmos with these polymer drop earrings featuring intricate moon and star designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "celestial-drop-earrings-moon-star",
            options: [],
            title: "Moon & Star Drops",
            color: "Navy"
          }
        ]
      },
      {
        id: 9,
        available: true,
        price: 17,
        price_max: 0,
        content: "Colorful polymer stud earrings with fruity designs.",
        description:
          "Add a pop of color to your look with these vibrant polymer stud earrings featuring fruity designs.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "fruity-stud-earrings",
        options: ["Studs"],
        tags: ["fruity", "fun", "colorful"],
        title: "Fruity Stud Earrings",
        variants: [
          {
            id: 901,
            available: true,
            price: 17,
            price_max: 0,
            content: "Polymer stud earrings featuring watermelon designs.",
            description:
              "Add a playful touch to your look with these polymer stud earrings featuring colorful watermelon designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "fruity-stud-earrings-watermelon",
            options: [],
            title: "Watermelon Studs",
            color: "Red"
          },
          {
            id: 902,
            available: true,
            price: 17,
            price_max: 0,
            content: "Polymer stud earrings featuring pineapple designs.",
            description:
              "Add a tropical flair to your look with these polymer stud earrings featuring vibrant pineapple designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "fruity-stud-earrings-pineapple",
            options: [],
            title: "Pineapple Studs",
            color: "Yellow"
          }
        ]
      },
      {
        id: 10,
        available: true,
        price: 16,
        price_max: 0,
        content: "Artistic and abstract polymer dangle earrings.",
        description:
          "Express your individuality with these artistic and abstract polymer dangle earrings, each piece as unique as you are.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "artistic-dangle-earrings",
        options: ["Dangles"],
        tags: ["artistic", "abstract", "unique"],
        title: "Artistic Dangle Earrings",
        variants: [
          {
            id: 1001,
            available: true,
            price: 16,
            price_max: 0,
            content:
              "Polymer dangle earrings featuring abstract swirl designs.",
            description:
              "Express your individuality with these polymer dangle earrings featuring intricate abstract swirl designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "artistic-dangle-earrings-swirl",
            options: [],
            title: "Swirl Dangles",
            color: "Blue"
          }
        ]
      }
    ],
    published_at: "2024-02-19",
    sort_by: "price",
    template_suffix: "collection",
    title: "Animal Earrings"
  },
  {
    all_tags: ["boho", "ethnic", "handmade"],
    all_types: ["hoops", "dangles"],
    all_vendors: ["BohoChicEarrings", "EthnicArtisans"],
    default_sort_by: "price-ascending",
    description:
      "Discover our collection of bohemian and ethnic-inspired polymer earrings, all handmade with love.",
    featured_image: PlaceholderImage,
    filters: ["boho", "ethnic", "handmade"],
    handle: "boho-earrings",
    id: 5,
    products: [
      {
        id: 1,
        available: true,
        price: 15,
        price_max: 0,
        content:
          "Handcrafted polymer earrings featuring delicate floral designs.",
        description:
          "Add a touch of nature to your look with these charming floral polymer earrings.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "floral-earrings",
        options: ["Studs", "Hoops"],
        tags: ["floral", "summer", "dainty"],
        title: "Floral Polymer Earrings",
        variants: [
          {
            id: 101,
            available: true,
            price: 15,
            price_max: 0,
            content:
              "Handcrafted polymer studs featuring delicate floral designs.",
            description:
              "Add a touch of nature to your look with these charming floral polymer studs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "floral-earrings-studs",
            options: [],
            title: "Floral Studs",
            color: "Pink"
          },
          {
            id: 102,
            available: true,
            price: 20,
            price_max: 0,
            content:
              "Handcrafted polymer hoops featuring delicate floral designs.",
            description:
              "Add a touch of nature to your look with these charming floral polymer hoops.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "floral-earrings-hoops",
            options: [],
            title: "Floral Hoops",
            size: "Medium"
          }
        ]
      },
      {
        id: 2,
        available: true,
        price: 12,
        price_max: 0,
        content: "Minimalist polymer studs with geometric designs.",
        description:
          "These minimalist polymer studs feature sleek geometric designs, perfect for everyday wear.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "geometric-studs",
        options: ["Studs"],
        tags: ["geometric", "minimalist", "neutral"],
        title: "Geometric Polymer Studs",
        variants: [
          {
            id: 201,
            available: true,
            price: 12,
            price_max: 0,
            content: "Minimalist polymer studs with triangular designs.",
            description:
              "These minimalist polymer studs feature sleek triangular designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "geometric-studs-triangular",
            options: [],
            title: "Triangular Studs",
            color: "Black"
          },
          {
            id: 202,
            available: true,
            price: 12,
            price_max: 0,
            content: "Minimalist polymer studs with square designs.",
            description:
              "These minimalist polymer studs feature sleek square designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "geometric-studs-square",
            options: [],
            title: "Square Studs",
            color: "White"
          }
        ]
      },
      {
        id: 3,
        available: true,
        price: 18,
        price_max: 0,
        content:
          "Vintage-inspired polymer drop earrings with colorful designs.",
        description:
          "Transport yourself to another era with these vintage-inspired polymer drop earrings featuring vibrant colors.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "vintage-drop-earrings",
        options: ["Drops"],
        tags: ["vintage", "retro", "colorful"],
        title: "Vintage Drop Earrings",
        variants: [
          {
            id: 301,
            available: true,
            price: 18,
            price_max: 0,
            content:
              "Vintage-inspired polymer drop earrings with floral designs.",
            description:
              "Transport yourself to another era with these vintage-inspired polymer drop earrings featuring delicate floral patterns.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "vintage-drop-earrings-floral",
            options: [],
            title: "Floral Drops",
            color: "Fuchsia"
          },
          {
            id: 302,
            available: true,
            price: 18,
            price_max: 0,
            content:
              "Vintage-inspired polymer drop earrings with abstract designs.",
            description:
              "Transport yourself to another era with these vintage-inspired polymer drop earrings featuring abstract designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "vintage-drop-earrings-abstract",
            options: [],
            title: "Abstract Drops",
            color: "Pastel"
          }
        ]
      },
      {
        id: 4,
        available: true,
        price: 14,
        price_max: 0,
        content: "Animal-themed polymer stud earrings for a playful touch.",
        description:
          "Add a touch of whimsy to your style with these adorable animal-themed polymer stud earrings.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "animal-stud-earrings",
        options: ["Studs"],
        tags: ["animal", "cute", "quirky"],
        title: "Animal Stud Earrings",
        variants: [
          {
            id: 401,
            available: true,
            price: 14,
            price_max: 0,
            content: "Polymer stud earrings featuring cute cat designs.",
            description:
              "Add a playful touch to your look with these adorable cat-themed polymer stud earrings.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "animal-stud-earrings-cat",
            options: [],
            title: "Cat Studs",
            color: "Gray"
          }
        ]
      },
      {
        id: 5,
        available: true,
        price: 20,
        price_max: 0,
        content: "Handmade bohemian polymer hoop earrings.",
        description:
          "Express your free spirit with these handmade bohemian polymer hoop earrings, perfect for a laid-back vibe.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "boho-hoop-earrings",
        options: ["Hoops"],
        tags: ["boho", "ethnic", "handmade"],
        title: "Bohemian Hoop Earrings",
        variants: [
          {
            id: 501,
            available: true,
            price: 20,
            price_max: 0,
            content: "Handmade polymer hoop earrings with beaded designs.",
            description:
              "Express your free spirit with these handmade polymer hoop earrings featuring intricate beaded designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "boho-hoop-earrings-beaded",
            options: [],
            title: "Beaded Hoops",
            color: "Brown"
          }
        ]
      },
      {
        id: 6,
        available: true,
        price: 16,
        price_max: 0,
        content: "Festive polymer drop earrings with sparkly details.",
        description:
          "Get into the holiday spirit with these festive polymer drop earrings featuring sparkly accents.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "holiday-drop-earrings",
        options: ["Drops"],
        tags: ["holiday", "festive", "sparkly"],
        title: "Holiday Drop Earrings",
        variants: [
          {
            id: 601,
            available: true,
            price: 16,
            price_max: 0,
            content: "Polymer drop earrings featuring Christmas tree designs.",
            description:
              "Get into the holiday spirit with these festive polymer drop earrings featuring Christmas tree designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "holiday-drop-earrings-christmas-tree",
            options: [],
            title: "Christmas Tree Drops",
            color: "Green"
          }
        ]
      },
      {
        id: 7,
        available: true,
        price: 25,
        price_max: 0,
        content: "Bold and glamorous polymer hoop earrings.",
        description:
          "Make a statement with these bold and glamorous polymer hoop earrings, designed to turn heads.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "statement-hoop-earrings",
        options: ["Hoops"],
        tags: ["statement", "bold", "glam"],
        title: "Statement Hoop Earrings",
        variants: [
          {
            id: 701,
            available: true,
            price: 25,
            price_max: 0,
            content: "Statement polymer hoop earrings with textured designs.",
            description:
              "Make a bold statement with these polymer hoop earrings featuring intricate textured designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "statement-hoop-earrings-textured",
            options: [],
            title: "Textured Hoops",
            color: "Silver"
          },
          {
            id: 702,
            available: true,
            price: 25,
            price_max: 0,
            content:
              "Statement polymer hoop earrings with rhinestone embellishments.",
            description:
              "Make a bold statement with these polymer hoop earrings featuring sparkling rhinestone embellishments.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "statement-hoop-earrings-rhinestone",
            options: [],
            title: "Rhinestone Hoops",
            color: "Gold"
          }
        ]
      },
      {
        id: 8,
        available: true,
        price: 19,
        price_max: 0,
        content:
          "Celestial-themed polymer drop earrings featuring moons and stars.",
        description:
          "Explore the mysteries of the cosmos with these celestial-themed polymer drop earrings.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "celestial-drop-earrings",
        options: ["Drops"],
        tags: ["celestial", "moon", "stars"],
        title: "Celestial Drop Earrings",
        variants: [
          {
            id: 801,
            available: true,
            price: 19,
            price_max: 0,
            content:
              "Celestial polymer drop earrings featuring moon and star designs.",
            description:
              "Explore the mysteries of the cosmos with these polymer drop earrings featuring intricate moon and star designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "celestial-drop-earrings-moon-star",
            options: [],
            title: "Moon & Star Drops",
            color: "Navy"
          }
        ]
      },
      {
        id: 9,
        available: true,
        price: 17,
        price_max: 0,
        content: "Colorful polymer stud earrings with fruity designs.",
        description:
          "Add a pop of color to your look with these vibrant polymer stud earrings featuring fruity designs.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "fruity-stud-earrings",
        options: ["Studs"],
        tags: ["fruity", "fun", "colorful"],
        title: "Fruity Stud Earrings",
        variants: [
          {
            id: 901,
            available: true,
            price: 17,
            price_max: 0,
            content: "Polymer stud earrings featuring watermelon designs.",
            description:
              "Add a playful touch to your look with these polymer stud earrings featuring colorful watermelon designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "fruity-stud-earrings-watermelon",
            options: [],
            title: "Watermelon Studs",
            color: "Red"
          },
          {
            id: 902,
            available: true,
            price: 17,
            price_max: 0,
            content: "Polymer stud earrings featuring pineapple designs.",
            description:
              "Add a tropical flair to your look with these polymer stud earrings featuring vibrant pineapple designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "fruity-stud-earrings-pineapple",
            options: [],
            title: "Pineapple Studs",
            color: "Yellow"
          }
        ]
      },
      {
        id: 10,
        available: true,
        price: 16,
        price_max: 0,
        content: "Artistic and abstract polymer dangle earrings.",
        description:
          "Express your individuality with these artistic and abstract polymer dangle earrings, each piece as unique as you are.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "artistic-dangle-earrings",
        options: ["Dangles"],
        tags: ["artistic", "abstract", "unique"],
        title: "Artistic Dangle Earrings",
        variants: [
          {
            id: 1001,
            available: true,
            price: 16,
            price_max: 0,
            content:
              "Polymer dangle earrings featuring abstract swirl designs.",
            description:
              "Express your individuality with these polymer dangle earrings featuring intricate abstract swirl designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "artistic-dangle-earrings-swirl",
            options: [],
            title: "Swirl Dangles",
            color: "Blue"
          }
        ]
      }
    ],
    published_at: "2024-02-19",
    sort_by: "price",
    template_suffix: "collection",
    title: "Boho Earrings"
  },
  {
    all_tags: ["holiday", "festive", "sparkly"],
    all_types: ["studs", "drops"],
    all_vendors: ["HolidaySparkle", "FestiveFancies"],
    default_sort_by: "price-ascending",
    description:
      "Get into the holiday spirit with our collection of festive polymer earrings, perfect for adding sparkle to any outfit.",
    featured_image: PlaceholderImage,
    filters: ["holiday", "festive", "sparkly"],
    handle: "holiday-earrings",
    id: 6,
    products: [
      {
        id: 1,
        available: true,
        price: 15,
        price_max: 0,
        content:
          "Handcrafted polymer earrings featuring delicate floral designs.",
        description:
          "Add a touch of nature to your look with these charming floral polymer earrings.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "floral-earrings",
        options: ["Studs", "Hoops"],
        tags: ["floral", "summer", "dainty"],
        title: "Floral Polymer Earrings",
        variants: [
          {
            id: 101,
            available: true,
            price: 15,
            price_max: 0,
            content:
              "Handcrafted polymer studs featuring delicate floral designs.",
            description:
              "Add a touch of nature to your look with these charming floral polymer studs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "floral-earrings-studs",
            options: [],
            title: "Floral Studs",
            color: "Pink"
          },
          {
            id: 102,
            available: true,
            price: 20,
            price_max: 0,
            content:
              "Handcrafted polymer hoops featuring delicate floral designs.",
            description:
              "Add a touch of nature to your look with these charming floral polymer hoops.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "floral-earrings-hoops",
            options: [],
            title: "Floral Hoops",
            size: "Medium"
          }
        ]
      },
      {
        id: 2,
        available: true,
        price: 12,
        price_max: 0,
        content: "Minimalist polymer studs with geometric designs.",
        description:
          "These minimalist polymer studs feature sleek geometric designs, perfect for everyday wear.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "geometric-studs",
        options: ["Studs"],
        tags: ["geometric", "minimalist", "neutral"],
        title: "Geometric Polymer Studs",
        variants: [
          {
            id: 201,
            available: true,
            price: 12,
            price_max: 0,
            content: "Minimalist polymer studs with triangular designs.",
            description:
              "These minimalist polymer studs feature sleek triangular designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "geometric-studs-triangular",
            options: [],
            title: "Triangular Studs",
            color: "Black"
          },
          {
            id: 202,
            available: true,
            price: 12,
            price_max: 0,
            content: "Minimalist polymer studs with square designs.",
            description:
              "These minimalist polymer studs feature sleek square designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "geometric-studs-square",
            options: [],
            title: "Square Studs",
            color: "White"
          }
        ]
      },
      {
        id: 3,
        available: true,
        price: 18,
        price_max: 0,
        content:
          "Vintage-inspired polymer drop earrings with colorful designs.",
        description:
          "Transport yourself to another era with these vintage-inspired polymer drop earrings featuring vibrant colors.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "vintage-drop-earrings",
        options: ["Drops"],
        tags: ["vintage", "retro", "colorful"],
        title: "Vintage Drop Earrings",
        variants: [
          {
            id: 301,
            available: true,
            price: 18,
            price_max: 0,
            content:
              "Vintage-inspired polymer drop earrings with floral designs.",
            description:
              "Transport yourself to another era with these vintage-inspired polymer drop earrings featuring delicate floral patterns.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "vintage-drop-earrings-floral",
            options: [],
            title: "Floral Drops",
            color: "Fuchsia"
          },
          {
            id: 302,
            available: true,
            price: 18,
            price_max: 0,
            content:
              "Vintage-inspired polymer drop earrings with abstract designs.",
            description:
              "Transport yourself to another era with these vintage-inspired polymer drop earrings featuring abstract designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "vintage-drop-earrings-abstract",
            options: [],
            title: "Abstract Drops",
            color: "Pastel"
          }
        ]
      },
      {
        id: 4,
        available: true,
        price: 14,
        price_max: 0,
        content: "Animal-themed polymer stud earrings for a playful touch.",
        description:
          "Add a touch of whimsy to your style with these adorable animal-themed polymer stud earrings.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "animal-stud-earrings",
        options: ["Studs"],
        tags: ["animal", "cute", "quirky"],
        title: "Animal Stud Earrings",
        variants: [
          {
            id: 401,
            available: true,
            price: 14,
            price_max: 0,
            content: "Polymer stud earrings featuring cute cat designs.",
            description:
              "Add a playful touch to your look with these adorable cat-themed polymer stud earrings.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "animal-stud-earrings-cat",
            options: [],
            title: "Cat Studs",
            color: "Gray"
          }
        ]
      },
      {
        id: 5,
        available: true,
        price: 20,
        price_max: 0,
        content: "Handmade bohemian polymer hoop earrings.",
        description:
          "Express your free spirit with these handmade bohemian polymer hoop earrings, perfect for a laid-back vibe.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "boho-hoop-earrings",
        options: ["Hoops"],
        tags: ["boho", "ethnic", "handmade"],
        title: "Bohemian Hoop Earrings",
        variants: [
          {
            id: 501,
            available: true,
            price: 20,
            price_max: 0,
            content: "Handmade polymer hoop earrings with beaded designs.",
            description:
              "Express your free spirit with these handmade polymer hoop earrings featuring intricate beaded designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "boho-hoop-earrings-beaded",
            options: [],
            title: "Beaded Hoops",
            color: "Brown"
          }
        ]
      },
      {
        id: 6,
        available: true,
        price: 16,
        price_max: 0,
        content: "Festive polymer drop earrings with sparkly details.",
        description:
          "Get into the holiday spirit with these festive polymer drop earrings featuring sparkly accents.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "holiday-drop-earrings",
        options: ["Drops"],
        tags: ["holiday", "festive", "sparkly"],
        title: "Holiday Drop Earrings",
        variants: [
          {
            id: 601,
            available: true,
            price: 16,
            price_max: 0,
            content: "Polymer drop earrings featuring Christmas tree designs.",
            description:
              "Get into the holiday spirit with these festive polymer drop earrings featuring Christmas tree designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "holiday-drop-earrings-christmas-tree",
            options: [],
            title: "Christmas Tree Drops",
            color: "Green"
          }
        ]
      },
      {
        id: 7,
        available: true,
        price: 25,
        price_max: 0,
        content: "Bold and glamorous polymer hoop earrings.",
        description:
          "Make a statement with these bold and glamorous polymer hoop earrings, designed to turn heads.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "statement-hoop-earrings",
        options: ["Hoops"],
        tags: ["statement", "bold", "glam"],
        title: "Statement Hoop Earrings",
        variants: [
          {
            id: 701,
            available: true,
            price: 25,
            price_max: 0,
            content: "Statement polymer hoop earrings with textured designs.",
            description:
              "Make a bold statement with these polymer hoop earrings featuring intricate textured designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "statement-hoop-earrings-textured",
            options: [],
            title: "Textured Hoops",
            color: "Silver"
          },
          {
            id: 702,
            available: true,
            price: 25,
            price_max: 0,
            content:
              "Statement polymer hoop earrings with rhinestone embellishments.",
            description:
              "Make a bold statement with these polymer hoop earrings featuring sparkling rhinestone embellishments.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "statement-hoop-earrings-rhinestone",
            options: [],
            title: "Rhinestone Hoops",
            color: "Gold"
          }
        ]
      },
      {
        id: 8,
        available: true,
        price: 19,
        price_max: 0,
        content:
          "Celestial-themed polymer drop earrings featuring moons and stars.",
        description:
          "Explore the mysteries of the cosmos with these celestial-themed polymer drop earrings.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "celestial-drop-earrings",
        options: ["Drops"],
        tags: ["celestial", "moon", "stars"],
        title: "Celestial Drop Earrings",
        variants: [
          {
            id: 801,
            available: true,
            price: 19,
            price_max: 0,
            content:
              "Celestial polymer drop earrings featuring moon and star designs.",
            description:
              "Explore the mysteries of the cosmos with these polymer drop earrings featuring intricate moon and star designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "celestial-drop-earrings-moon-star",
            options: [],
            title: "Moon & Star Drops",
            color: "Navy"
          }
        ]
      },
      {
        id: 9,
        available: true,
        price: 17,
        price_max: 0,
        content: "Colorful polymer stud earrings with fruity designs.",
        description:
          "Add a pop of color to your look with these vibrant polymer stud earrings featuring fruity designs.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "fruity-stud-earrings",
        options: ["Studs"],
        tags: ["fruity", "fun", "colorful"],
        title: "Fruity Stud Earrings",
        variants: [
          {
            id: 901,
            available: true,
            price: 17,
            price_max: 0,
            content: "Polymer stud earrings featuring watermelon designs.",
            description:
              "Add a playful touch to your look with these polymer stud earrings featuring colorful watermelon designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "fruity-stud-earrings-watermelon",
            options: [],
            title: "Watermelon Studs",
            color: "Red"
          },
          {
            id: 902,
            available: true,
            price: 17,
            price_max: 0,
            content: "Polymer stud earrings featuring pineapple designs.",
            description:
              "Add a tropical flair to your look with these polymer stud earrings featuring vibrant pineapple designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "fruity-stud-earrings-pineapple",
            options: [],
            title: "Pineapple Studs",
            color: "Yellow"
          }
        ]
      },
      {
        id: 10,
        available: true,
        price: 16,
        price_max: 0,
        content: "Artistic and abstract polymer dangle earrings.",
        description:
          "Express your individuality with these artistic and abstract polymer dangle earrings, each piece as unique as you are.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "artistic-dangle-earrings",
        options: ["Dangles"],
        tags: ["artistic", "abstract", "unique"],
        title: "Artistic Dangle Earrings",
        variants: [
          {
            id: 1001,
            available: true,
            price: 16,
            price_max: 0,
            content:
              "Polymer dangle earrings featuring abstract swirl designs.",
            description:
              "Express your individuality with these polymer dangle earrings featuring intricate abstract swirl designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "artistic-dangle-earrings-swirl",
            options: [],
            title: "Swirl Dangles",
            color: "Blue"
          }
        ]
      }
    ],
    published_at: "2024-02-19",
    sort_by: "price",
    template_suffix: "collection",
    title: "Holiday Earrings"
  },
  {
    all_tags: ["statement", "bold", "glam"],
    all_types: ["hoops", "dangles"],
    all_vendors: ["StatementStyle", "GlamGoddess"],
    default_sort_by: "price-ascending",
    description:
      "Make a statement with our bold and glamorous polymer earrings, designed to turn heads.",
    featured_image: PlaceholderImage,
    filters: ["statement", "bold", "glam"],
    handle: "statement-earrings",
    id: 7,
    products: [
      {
        id: 1,
        available: true,
        price: 15,
        price_max: 0,
        content:
          "Handcrafted polymer earrings featuring delicate floral designs.",
        description:
          "Add a touch of nature to your look with these charming floral polymer earrings.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "floral-earrings",
        options: ["Studs", "Hoops"],
        tags: ["floral", "summer", "dainty"],
        title: "Floral Polymer Earrings",
        variants: [
          {
            id: 101,
            available: true,
            price: 15,
            price_max: 0,
            content:
              "Handcrafted polymer studs featuring delicate floral designs.",
            description:
              "Add a touch of nature to your look with these charming floral polymer studs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "floral-earrings-studs",
            options: [],
            title: "Floral Studs",
            color: "Pink"
          },
          {
            id: 102,
            available: true,
            price: 20,
            price_max: 0,
            content:
              "Handcrafted polymer hoops featuring delicate floral designs.",
            description:
              "Add a touch of nature to your look with these charming floral polymer hoops.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "floral-earrings-hoops",
            options: [],
            title: "Floral Hoops",
            size: "Medium"
          }
        ]
      },
      {
        id: 2,
        available: true,
        price: 12,
        price_max: 0,
        content: "Minimalist polymer studs with geometric designs.",
        description:
          "These minimalist polymer studs feature sleek geometric designs, perfect for everyday wear.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "geometric-studs",
        options: ["Studs"],
        tags: ["geometric", "minimalist", "neutral"],
        title: "Geometric Polymer Studs",
        variants: [
          {
            id: 201,
            available: true,
            price: 12,
            price_max: 0,
            content: "Minimalist polymer studs with triangular designs.",
            description:
              "These minimalist polymer studs feature sleek triangular designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "geometric-studs-triangular",
            options: [],
            title: "Triangular Studs",
            color: "Black"
          },
          {
            id: 202,
            available: true,
            price: 12,
            price_max: 0,
            content: "Minimalist polymer studs with square designs.",
            description:
              "These minimalist polymer studs feature sleek square designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "geometric-studs-square",
            options: [],
            title: "Square Studs",
            color: "White"
          }
        ]
      },
      {
        id: 3,
        available: true,
        price: 18,
        price_max: 0,
        content:
          "Vintage-inspired polymer drop earrings with colorful designs.",
        description:
          "Transport yourself to another era with these vintage-inspired polymer drop earrings featuring vibrant colors.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "vintage-drop-earrings",
        options: ["Drops"],
        tags: ["vintage", "retro", "colorful"],
        title: "Vintage Drop Earrings",
        variants: [
          {
            id: 301,
            available: true,
            price: 18,
            price_max: 0,
            content:
              "Vintage-inspired polymer drop earrings with floral designs.",
            description:
              "Transport yourself to another era with these vintage-inspired polymer drop earrings featuring delicate floral patterns.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "vintage-drop-earrings-floral",
            options: [],
            title: "Floral Drops",
            color: "Fuchsia"
          },
          {
            id: 302,
            available: true,
            price: 18,
            price_max: 0,
            content:
              "Vintage-inspired polymer drop earrings with abstract designs.",
            description:
              "Transport yourself to another era with these vintage-inspired polymer drop earrings featuring abstract designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "vintage-drop-earrings-abstract",
            options: [],
            title: "Abstract Drops",
            color: "Pastel"
          }
        ]
      },
      {
        id: 4,
        available: true,
        price: 14,
        price_max: 0,
        content: "Animal-themed polymer stud earrings for a playful touch.",
        description:
          "Add a touch of whimsy to your style with these adorable animal-themed polymer stud earrings.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "animal-stud-earrings",
        options: ["Studs"],
        tags: ["animal", "cute", "quirky"],
        title: "Animal Stud Earrings",
        variants: [
          {
            id: 401,
            available: true,
            price: 14,
            price_max: 0,
            content: "Polymer stud earrings featuring cute cat designs.",
            description:
              "Add a playful touch to your look with these adorable cat-themed polymer stud earrings.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "animal-stud-earrings-cat",
            options: [],
            title: "Cat Studs",
            color: "Gray"
          }
        ]
      },
      {
        id: 5,
        available: true,
        price: 20,
        price_max: 0,
        content: "Handmade bohemian polymer hoop earrings.",
        description:
          "Express your free spirit with these handmade bohemian polymer hoop earrings, perfect for a laid-back vibe.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "boho-hoop-earrings",
        options: ["Hoops"],
        tags: ["boho", "ethnic", "handmade"],
        title: "Bohemian Hoop Earrings",
        variants: [
          {
            id: 501,
            available: true,
            price: 20,
            price_max: 0,
            content: "Handmade polymer hoop earrings with beaded designs.",
            description:
              "Express your free spirit with these handmade polymer hoop earrings featuring intricate beaded designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "boho-hoop-earrings-beaded",
            options: [],
            title: "Beaded Hoops",
            color: "Brown"
          }
        ]
      },
      {
        id: 6,
        available: true,
        price: 16,
        price_max: 0,
        content: "Festive polymer drop earrings with sparkly details.",
        description:
          "Get into the holiday spirit with these festive polymer drop earrings featuring sparkly accents.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "holiday-drop-earrings",
        options: ["Drops"],
        tags: ["holiday", "festive", "sparkly"],
        title: "Holiday Drop Earrings",
        variants: [
          {
            id: 601,
            available: true,
            price: 16,
            price_max: 0,
            content: "Polymer drop earrings featuring Christmas tree designs.",
            description:
              "Get into the holiday spirit with these festive polymer drop earrings featuring Christmas tree designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "holiday-drop-earrings-christmas-tree",
            options: [],
            title: "Christmas Tree Drops",
            color: "Green"
          }
        ]
      },
      {
        id: 7,
        available: true,
        price: 25,
        price_max: 0,
        content: "Bold and glamorous polymer hoop earrings.",
        description:
          "Make a statement with these bold and glamorous polymer hoop earrings, designed to turn heads.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "statement-hoop-earrings",
        options: ["Hoops"],
        tags: ["statement", "bold", "glam"],
        title: "Statement Hoop Earrings",
        variants: [
          {
            id: 701,
            available: true,
            price: 25,
            price_max: 0,
            content: "Statement polymer hoop earrings with textured designs.",
            description:
              "Make a bold statement with these polymer hoop earrings featuring intricate textured designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "statement-hoop-earrings-textured",
            options: [],
            title: "Textured Hoops",
            color: "Silver"
          },
          {
            id: 702,
            available: true,
            price: 25,
            price_max: 0,
            content:
              "Statement polymer hoop earrings with rhinestone embellishments.",
            description:
              "Make a bold statement with these polymer hoop earrings featuring sparkling rhinestone embellishments.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "statement-hoop-earrings-rhinestone",
            options: [],
            title: "Rhinestone Hoops",
            color: "Gold"
          }
        ]
      },
      {
        id: 8,
        available: true,
        price: 19,
        price_max: 0,
        content:
          "Celestial-themed polymer drop earrings featuring moons and stars.",
        description:
          "Explore the mysteries of the cosmos with these celestial-themed polymer drop earrings.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "celestial-drop-earrings",
        options: ["Drops"],
        tags: ["celestial", "moon", "stars"],
        title: "Celestial Drop Earrings",
        variants: [
          {
            id: 801,
            available: true,
            price: 19,
            price_max: 0,
            content:
              "Celestial polymer drop earrings featuring moon and star designs.",
            description:
              "Explore the mysteries of the cosmos with these polymer drop earrings featuring intricate moon and star designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "celestial-drop-earrings-moon-star",
            options: [],
            title: "Moon & Star Drops",
            color: "Navy"
          }
        ]
      },
      {
        id: 9,
        available: true,
        price: 17,
        price_max: 0,
        content: "Colorful polymer stud earrings with fruity designs.",
        description:
          "Add a pop of color to your look with these vibrant polymer stud earrings featuring fruity designs.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "fruity-stud-earrings",
        options: ["Studs"],
        tags: ["fruity", "fun", "colorful"],
        title: "Fruity Stud Earrings",
        variants: [
          {
            id: 901,
            available: true,
            price: 17,
            price_max: 0,
            content: "Polymer stud earrings featuring watermelon designs.",
            description:
              "Add a playful touch to your look with these polymer stud earrings featuring colorful watermelon designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "fruity-stud-earrings-watermelon",
            options: [],
            title: "Watermelon Studs",
            color: "Red"
          },
          {
            id: 902,
            available: true,
            price: 17,
            price_max: 0,
            content: "Polymer stud earrings featuring pineapple designs.",
            description:
              "Add a tropical flair to your look with these polymer stud earrings featuring vibrant pineapple designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "fruity-stud-earrings-pineapple",
            options: [],
            title: "Pineapple Studs",
            color: "Yellow"
          }
        ]
      },
      {
        id: 10,
        available: true,
        price: 16,
        price_max: 0,
        content: "Artistic and abstract polymer dangle earrings.",
        description:
          "Express your individuality with these artistic and abstract polymer dangle earrings, each piece as unique as you are.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "artistic-dangle-earrings",
        options: ["Dangles"],
        tags: ["artistic", "abstract", "unique"],
        title: "Artistic Dangle Earrings",
        variants: [
          {
            id: 1001,
            available: true,
            price: 16,
            price_max: 0,
            content:
              "Polymer dangle earrings featuring abstract swirl designs.",
            description:
              "Express your individuality with these polymer dangle earrings featuring intricate abstract swirl designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "artistic-dangle-earrings-swirl",
            options: [],
            title: "Swirl Dangles",
            color: "Blue"
          }
        ]
      }
    ],
    published_at: "2024-02-19",
    sort_by: "price",
    template_suffix: "collection",
    title: "Statement Earrings"
  },
  {
    all_tags: ["celestial", "moon", "stars"],
    all_types: ["studs", "drops"],
    all_vendors: ["CelestialCreations", "StarryNight"],
    default_sort_by: "price-ascending",
    description:
      "Explore the mysteries of the cosmos with our celestial-themed polymer earrings, featuring moons and stars.",
    featured_image: PlaceholderImage,
    filters: ["celestial", "moon", "stars"],
    handle: "celestial-earrings",
    id: 8,
    products: [
      {
        id: 1,
        available: true,
        price: 15,
        price_max: 0,
        content:
          "Handcrafted polymer earrings featuring delicate floral designs.",
        description:
          "Add a touch of nature to your look with these charming floral polymer earrings.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "floral-earrings",
        options: ["Studs", "Hoops"],
        tags: ["floral", "summer", "dainty"],
        title: "Floral Polymer Earrings",
        variants: [
          {
            id: 101,
            available: true,
            price: 15,
            price_max: 0,
            content:
              "Handcrafted polymer studs featuring delicate floral designs.",
            description:
              "Add a touch of nature to your look with these charming floral polymer studs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "floral-earrings-studs",
            options: [],
            title: "Floral Studs",
            color: "Pink"
          },
          {
            id: 102,
            available: true,
            price: 20,
            price_max: 0,
            content:
              "Handcrafted polymer hoops featuring delicate floral designs.",
            description:
              "Add a touch of nature to your look with these charming floral polymer hoops.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "floral-earrings-hoops",
            options: [],
            title: "Floral Hoops",
            size: "Medium"
          }
        ]
      },
      {
        id: 2,
        available: true,
        price: 12,
        price_max: 0,
        content: "Minimalist polymer studs with geometric designs.",
        description:
          "These minimalist polymer studs feature sleek geometric designs, perfect for everyday wear.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "geometric-studs",
        options: ["Studs"],
        tags: ["geometric", "minimalist", "neutral"],
        title: "Geometric Polymer Studs",
        variants: [
          {
            id: 201,
            available: true,
            price: 12,
            price_max: 0,
            content: "Minimalist polymer studs with triangular designs.",
            description:
              "These minimalist polymer studs feature sleek triangular designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "geometric-studs-triangular",
            options: [],
            title: "Triangular Studs",
            color: "Black"
          },
          {
            id: 202,
            available: true,
            price: 12,
            price_max: 0,
            content: "Minimalist polymer studs with square designs.",
            description:
              "These minimalist polymer studs feature sleek square designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "geometric-studs-square",
            options: [],
            title: "Square Studs",
            color: "White"
          }
        ]
      },
      {
        id: 3,
        available: true,
        price: 18,
        price_max: 0,
        content:
          "Vintage-inspired polymer drop earrings with colorful designs.",
        description:
          "Transport yourself to another era with these vintage-inspired polymer drop earrings featuring vibrant colors.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "vintage-drop-earrings",
        options: ["Drops"],
        tags: ["vintage", "retro", "colorful"],
        title: "Vintage Drop Earrings",
        variants: [
          {
            id: 301,
            available: true,
            price: 18,
            price_max: 0,
            content:
              "Vintage-inspired polymer drop earrings with floral designs.",
            description:
              "Transport yourself to another era with these vintage-inspired polymer drop earrings featuring delicate floral patterns.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "vintage-drop-earrings-floral",
            options: [],
            title: "Floral Drops",
            color: "Fuchsia"
          },
          {
            id: 302,
            available: true,
            price: 18,
            price_max: 0,
            content:
              "Vintage-inspired polymer drop earrings with abstract designs.",
            description:
              "Transport yourself to another era with these vintage-inspired polymer drop earrings featuring abstract designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "vintage-drop-earrings-abstract",
            options: [],
            title: "Abstract Drops",
            color: "Pastel"
          }
        ]
      },
      {
        id: 4,
        available: true,
        price: 14,
        price_max: 0,
        content: "Animal-themed polymer stud earrings for a playful touch.",
        description:
          "Add a touch of whimsy to your style with these adorable animal-themed polymer stud earrings.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "animal-stud-earrings",
        options: ["Studs"],
        tags: ["animal", "cute", "quirky"],
        title: "Animal Stud Earrings",
        variants: [
          {
            id: 401,
            available: true,
            price: 14,
            price_max: 0,
            content: "Polymer stud earrings featuring cute cat designs.",
            description:
              "Add a playful touch to your look with these adorable cat-themed polymer stud earrings.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "animal-stud-earrings-cat",
            options: [],
            title: "Cat Studs",
            color: "Gray"
          }
        ]
      },
      {
        id: 5,
        available: true,
        price: 20,
        price_max: 0,
        content: "Handmade bohemian polymer hoop earrings.",
        description:
          "Express your free spirit with these handmade bohemian polymer hoop earrings, perfect for a laid-back vibe.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "boho-hoop-earrings",
        options: ["Hoops"],
        tags: ["boho", "ethnic", "handmade"],
        title: "Bohemian Hoop Earrings",
        variants: [
          {
            id: 501,
            available: true,
            price: 20,
            price_max: 0,
            content: "Handmade polymer hoop earrings with beaded designs.",
            description:
              "Express your free spirit with these handmade polymer hoop earrings featuring intricate beaded designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "boho-hoop-earrings-beaded",
            options: [],
            title: "Beaded Hoops",
            color: "Brown"
          }
        ]
      },
      {
        id: 6,
        available: true,
        price: 16,
        price_max: 0,
        content: "Festive polymer drop earrings with sparkly details.",
        description:
          "Get into the holiday spirit with these festive polymer drop earrings featuring sparkly accents.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "holiday-drop-earrings",
        options: ["Drops"],
        tags: ["holiday", "festive", "sparkly"],
        title: "Holiday Drop Earrings",
        variants: [
          {
            id: 601,
            available: true,
            price: 16,
            price_max: 0,
            content: "Polymer drop earrings featuring Christmas tree designs.",
            description:
              "Get into the holiday spirit with these festive polymer drop earrings featuring Christmas tree designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "holiday-drop-earrings-christmas-tree",
            options: [],
            title: "Christmas Tree Drops",
            color: "Green"
          }
        ]
      },
      {
        id: 7,
        available: true,
        price: 25,
        price_max: 0,
        content: "Bold and glamorous polymer hoop earrings.",
        description:
          "Make a statement with these bold and glamorous polymer hoop earrings, designed to turn heads.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "statement-hoop-earrings",
        options: ["Hoops"],
        tags: ["statement", "bold", "glam"],
        title: "Statement Hoop Earrings",
        variants: [
          {
            id: 701,
            available: true,
            price: 25,
            price_max: 0,
            content: "Statement polymer hoop earrings with textured designs.",
            description:
              "Make a bold statement with these polymer hoop earrings featuring intricate textured designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "statement-hoop-earrings-textured",
            options: [],
            title: "Textured Hoops",
            color: "Silver"
          },
          {
            id: 702,
            available: true,
            price: 25,
            price_max: 0,
            content:
              "Statement polymer hoop earrings with rhinestone embellishments.",
            description:
              "Make a bold statement with these polymer hoop earrings featuring sparkling rhinestone embellishments.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "statement-hoop-earrings-rhinestone",
            options: [],
            title: "Rhinestone Hoops",
            color: "Gold"
          }
        ]
      },
      {
        id: 8,
        available: true,
        price: 19,
        price_max: 0,
        content:
          "Celestial-themed polymer drop earrings featuring moons and stars.",
        description:
          "Explore the mysteries of the cosmos with these celestial-themed polymer drop earrings.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "celestial-drop-earrings",
        options: ["Drops"],
        tags: ["celestial", "moon", "stars"],
        title: "Celestial Drop Earrings",
        variants: [
          {
            id: 801,
            available: true,
            price: 19,
            price_max: 0,
            content:
              "Celestial polymer drop earrings featuring moon and star designs.",
            description:
              "Explore the mysteries of the cosmos with these polymer drop earrings featuring intricate moon and star designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "celestial-drop-earrings-moon-star",
            options: [],
            title: "Moon & Star Drops",
            color: "Navy"
          }
        ]
      },
      {
        id: 9,
        available: true,
        price: 17,
        price_max: 0,
        content: "Colorful polymer stud earrings with fruity designs.",
        description:
          "Add a pop of color to your look with these vibrant polymer stud earrings featuring fruity designs.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "fruity-stud-earrings",
        options: ["Studs"],
        tags: ["fruity", "fun", "colorful"],
        title: "Fruity Stud Earrings",
        variants: [
          {
            id: 901,
            available: true,
            price: 17,
            price_max: 0,
            content: "Polymer stud earrings featuring watermelon designs.",
            description:
              "Add a playful touch to your look with these polymer stud earrings featuring colorful watermelon designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "fruity-stud-earrings-watermelon",
            options: [],
            title: "Watermelon Studs",
            color: "Red"
          },
          {
            id: 902,
            available: true,
            price: 17,
            price_max: 0,
            content: "Polymer stud earrings featuring pineapple designs.",
            description:
              "Add a tropical flair to your look with these polymer stud earrings featuring vibrant pineapple designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "fruity-stud-earrings-pineapple",
            options: [],
            title: "Pineapple Studs",
            color: "Yellow"
          }
        ]
      },
      {
        id: 10,
        available: true,
        price: 16,
        price_max: 0,
        content: "Artistic and abstract polymer dangle earrings.",
        description:
          "Express your individuality with these artistic and abstract polymer dangle earrings, each piece as unique as you are.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "artistic-dangle-earrings",
        options: ["Dangles"],
        tags: ["artistic", "abstract", "unique"],
        title: "Artistic Dangle Earrings",
        variants: [
          {
            id: 1001,
            available: true,
            price: 16,
            price_max: 0,
            content:
              "Polymer dangle earrings featuring abstract swirl designs.",
            description:
              "Express your individuality with these polymer dangle earrings featuring intricate abstract swirl designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "artistic-dangle-earrings-swirl",
            options: [],
            title: "Swirl Dangles",
            color: "Blue"
          }
        ]
      }
    ],
    published_at: "2024-02-19",
    sort_by: "price",
    template_suffix: "collection",
    title: "Celestial Earrings"
  },
  {
    all_tags: ["fruity", "fun", "colorful"],
    all_types: ["studs", "dangles"],
    all_vendors: ["FruitFiesta", "ColorSplash"],
    default_sort_by: "price-ascending",
    description:
      "Add a pop of color to your look with our fruity and fun polymer earrings, featuring vibrant designs.",
    featured_image: PlaceholderImage,
    filters: ["fruity", "fun", "colorful"],
    handle: "fruity-earrings",
    id: 9,
    products: [
      {
        id: 1,
        available: true,
        price: 15,
        price_max: 0,
        content:
          "Handcrafted polymer earrings featuring delicate floral designs.",
        description:
          "Add a touch of nature to your look with these charming floral polymer earrings.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "floral-earrings",
        options: ["Studs", "Hoops"],
        tags: ["floral", "summer", "dainty"],
        title: "Floral Polymer Earrings",
        variants: [
          {
            id: 101,
            available: true,
            price: 15,
            price_max: 0,
            content:
              "Handcrafted polymer studs featuring delicate floral designs.",
            description:
              "Add a touch of nature to your look with these charming floral polymer studs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "floral-earrings-studs",
            options: [],
            title: "Floral Studs",
            color: "Pink"
          },
          {
            id: 102,
            available: true,
            price: 20,
            price_max: 0,
            content:
              "Handcrafted polymer hoops featuring delicate floral designs.",
            description:
              "Add a touch of nature to your look with these charming floral polymer hoops.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "floral-earrings-hoops",
            options: [],
            title: "Floral Hoops",
            size: "Medium"
          }
        ]
      },
      {
        id: 2,
        available: true,
        price: 12,
        price_max: 0,
        content: "Minimalist polymer studs with geometric designs.",
        description:
          "These minimalist polymer studs feature sleek geometric designs, perfect for everyday wear.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "geometric-studs",
        options: ["Studs"],
        tags: ["geometric", "minimalist", "neutral"],
        title: "Geometric Polymer Studs",
        variants: [
          {
            id: 201,
            available: true,
            price: 12,
            price_max: 0,
            content: "Minimalist polymer studs with triangular designs.",
            description:
              "These minimalist polymer studs feature sleek triangular designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "geometric-studs-triangular",
            options: [],
            title: "Triangular Studs",
            color: "Black"
          },
          {
            id: 202,
            available: true,
            price: 12,
            price_max: 0,
            content: "Minimalist polymer studs with square designs.",
            description:
              "These minimalist polymer studs feature sleek square designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "geometric-studs-square",
            options: [],
            title: "Square Studs",
            color: "White"
          }
        ]
      },
      {
        id: 3,
        available: true,
        price: 18,
        price_max: 0,
        content:
          "Vintage-inspired polymer drop earrings with colorful designs.",
        description:
          "Transport yourself to another era with these vintage-inspired polymer drop earrings featuring vibrant colors.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "vintage-drop-earrings",
        options: ["Drops"],
        tags: ["vintage", "retro", "colorful"],
        title: "Vintage Drop Earrings",
        variants: [
          {
            id: 301,
            available: true,
            price: 18,
            price_max: 0,
            content:
              "Vintage-inspired polymer drop earrings with floral designs.",
            description:
              "Transport yourself to another era with these vintage-inspired polymer drop earrings featuring delicate floral patterns.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "vintage-drop-earrings-floral",
            options: [],
            title: "Floral Drops",
            color: "Fuchsia"
          },
          {
            id: 302,
            available: true,
            price: 18,
            price_max: 0,
            content:
              "Vintage-inspired polymer drop earrings with abstract designs.",
            description:
              "Transport yourself to another era with these vintage-inspired polymer drop earrings featuring abstract designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "vintage-drop-earrings-abstract",
            options: [],
            title: "Abstract Drops",
            color: "Pastel"
          }
        ]
      },
      {
        id: 4,
        available: true,
        price: 14,
        price_max: 0,
        content: "Animal-themed polymer stud earrings for a playful touch.",
        description:
          "Add a touch of whimsy to your style with these adorable animal-themed polymer stud earrings.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "animal-stud-earrings",
        options: ["Studs"],
        tags: ["animal", "cute", "quirky"],
        title: "Animal Stud Earrings",
        variants: [
          {
            id: 401,
            available: true,
            price: 14,
            price_max: 0,
            content: "Polymer stud earrings featuring cute cat designs.",
            description:
              "Add a playful touch to your look with these adorable cat-themed polymer stud earrings.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "animal-stud-earrings-cat",
            options: [],
            title: "Cat Studs",
            color: "Gray"
          }
        ]
      },
      {
        id: 5,
        available: true,
        price: 20,
        price_max: 0,
        content: "Handmade bohemian polymer hoop earrings.",
        description:
          "Express your free spirit with these handmade bohemian polymer hoop earrings, perfect for a laid-back vibe.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "boho-hoop-earrings",
        options: ["Hoops"],
        tags: ["boho", "ethnic", "handmade"],
        title: "Bohemian Hoop Earrings",
        variants: [
          {
            id: 501,
            available: true,
            price: 20,
            price_max: 0,
            content: "Handmade polymer hoop earrings with beaded designs.",
            description:
              "Express your free spirit with these handmade polymer hoop earrings featuring intricate beaded designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "boho-hoop-earrings-beaded",
            options: [],
            title: "Beaded Hoops",
            color: "Brown"
          }
        ]
      },
      {
        id: 6,
        available: true,
        price: 16,
        price_max: 0,
        content: "Festive polymer drop earrings with sparkly details.",
        description:
          "Get into the holiday spirit with these festive polymer drop earrings featuring sparkly accents.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "holiday-drop-earrings",
        options: ["Drops"],
        tags: ["holiday", "festive", "sparkly"],
        title: "Holiday Drop Earrings",
        variants: [
          {
            id: 601,
            available: true,
            price: 16,
            price_max: 0,
            content: "Polymer drop earrings featuring Christmas tree designs.",
            description:
              "Get into the holiday spirit with these festive polymer drop earrings featuring Christmas tree designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "holiday-drop-earrings-christmas-tree",
            options: [],
            title: "Christmas Tree Drops",
            color: "Green"
          }
        ]
      },
      {
        id: 7,
        available: true,
        price: 25,
        price_max: 0,
        content: "Bold and glamorous polymer hoop earrings.",
        description:
          "Make a statement with these bold and glamorous polymer hoop earrings, designed to turn heads.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "statement-hoop-earrings",
        options: ["Hoops"],
        tags: ["statement", "bold", "glam"],
        title: "Statement Hoop Earrings",
        variants: [
          {
            id: 701,
            available: true,
            price: 25,
            price_max: 0,
            content: "Statement polymer hoop earrings with textured designs.",
            description:
              "Make a bold statement with these polymer hoop earrings featuring intricate textured designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "statement-hoop-earrings-textured",
            options: [],
            title: "Textured Hoops",
            color: "Silver"
          },
          {
            id: 702,
            available: true,
            price: 25,
            price_max: 0,
            content:
              "Statement polymer hoop earrings with rhinestone embellishments.",
            description:
              "Make a bold statement with these polymer hoop earrings featuring sparkling rhinestone embellishments.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "statement-hoop-earrings-rhinestone",
            options: [],
            title: "Rhinestone Hoops",
            color: "Gold"
          }
        ]
      },
      {
        id: 8,
        available: true,
        price: 19,
        price_max: 0,
        content:
          "Celestial-themed polymer drop earrings featuring moons and stars.",
        description:
          "Explore the mysteries of the cosmos with these celestial-themed polymer drop earrings.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "celestial-drop-earrings",
        options: ["Drops"],
        tags: ["celestial", "moon", "stars"],
        title: "Celestial Drop Earrings",
        variants: [
          {
            id: 801,
            available: true,
            price: 19,
            price_max: 0,
            content:
              "Celestial polymer drop earrings featuring moon and star designs.",
            description:
              "Explore the mysteries of the cosmos with these polymer drop earrings featuring intricate moon and star designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "celestial-drop-earrings-moon-star",
            options: [],
            title: "Moon & Star Drops",
            color: "Navy"
          }
        ]
      },
      {
        id: 9,
        available: true,
        price: 17,
        price_max: 0,
        content: "Colorful polymer stud earrings with fruity designs.",
        description:
          "Add a pop of color to your look with these vibrant polymer stud earrings featuring fruity designs.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "fruity-stud-earrings",
        options: ["Studs"],
        tags: ["fruity", "fun", "colorful"],
        title: "Fruity Stud Earrings",
        variants: [
          {
            id: 901,
            available: true,
            price: 17,
            price_max: 0,
            content: "Polymer stud earrings featuring watermelon designs.",
            description:
              "Add a playful touch to your look with these polymer stud earrings featuring colorful watermelon designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "fruity-stud-earrings-watermelon",
            options: [],
            title: "Watermelon Studs",
            color: "Red"
          },
          {
            id: 902,
            available: true,
            price: 17,
            price_max: 0,
            content: "Polymer stud earrings featuring pineapple designs.",
            description:
              "Add a tropical flair to your look with these polymer stud earrings featuring vibrant pineapple designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "fruity-stud-earrings-pineapple",
            options: [],
            title: "Pineapple Studs",
            color: "Yellow"
          }
        ]
      },
      {
        id: 10,
        available: true,
        price: 16,
        price_max: 0,
        content: "Artistic and abstract polymer dangle earrings.",
        description:
          "Express your individuality with these artistic and abstract polymer dangle earrings, each piece as unique as you are.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "artistic-dangle-earrings",
        options: ["Dangles"],
        tags: ["artistic", "abstract", "unique"],
        title: "Artistic Dangle Earrings",
        variants: [
          {
            id: 1001,
            available: true,
            price: 16,
            price_max: 0,
            content:
              "Polymer dangle earrings featuring abstract swirl designs.",
            description:
              "Express your individuality with these polymer dangle earrings featuring intricate abstract swirl designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "artistic-dangle-earrings-swirl",
            options: [],
            title: "Swirl Dangles",
            color: "Blue"
          }
        ]
      }
    ],
    published_at: "2024-02-19",
    sort_by: "price",
    template_suffix: "collection",
    title: "Fruity Earrings"
  },
  {
    all_tags: ["artistic", "abstract", "unique"],
    all_types: ["studs", "dangles"],
    all_vendors: ["ArtisticExpressions", "UniqueArtistry"],
    default_sort_by: "price-ascending",
    description:
      "Express your individuality with our collection of artistic and abstract polymer earrings, each piece as unique as you are.",
    featured_image: PlaceholderImage,
    filters: ["artistic", "abstract", "unique"],
    handle: "artistic-earrings",
    id: 10,
    products: [
      {
        id: 1,
        available: true,
        price: 15,
        price_max: 0,
        content:
          "Handcrafted polymer earrings featuring delicate floral designs.",
        description:
          "Add a touch of nature to your look with these charming floral polymer earrings.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "floral-earrings",
        options: ["Studs", "Hoops"],
        tags: ["floral", "summer", "dainty"],
        title: "Floral Polymer Earrings",
        variants: [
          {
            id: 101,
            available: true,
            price: 15,
            price_max: 0,
            content:
              "Handcrafted polymer studs featuring delicate floral designs.",
            description:
              "Add a touch of nature to your look with these charming floral polymer studs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "floral-earrings-studs",
            options: [],
            title: "Floral Studs",
            color: "Pink"
          },
          {
            id: 102,
            available: true,
            price: 20,
            price_max: 0,
            content:
              "Handcrafted polymer hoops featuring delicate floral designs.",
            description:
              "Add a touch of nature to your look with these charming floral polymer hoops.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "floral-earrings-hoops",
            options: [],
            title: "Floral Hoops",
            size: "Medium"
          }
        ]
      },
      {
        id: 2,
        available: true,
        price: 12,
        price_max: 0,
        content: "Minimalist polymer studs with geometric designs.",
        description:
          "These minimalist polymer studs feature sleek geometric designs, perfect for everyday wear.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "geometric-studs",
        options: ["Studs"],
        tags: ["geometric", "minimalist", "neutral"],
        title: "Geometric Polymer Studs",
        variants: [
          {
            id: 201,
            available: true,
            price: 12,
            price_max: 0,
            content: "Minimalist polymer studs with triangular designs.",
            description:
              "These minimalist polymer studs feature sleek triangular designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "geometric-studs-triangular",
            options: [],
            title: "Triangular Studs",
            color: "Black"
          },
          {
            id: 202,
            available: true,
            price: 12,
            price_max: 0,
            content: "Minimalist polymer studs with square designs.",
            description:
              "These minimalist polymer studs feature sleek square designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "geometric-studs-square",
            options: [],
            title: "Square Studs",
            color: "White"
          }
        ]
      },
      {
        id: 3,
        available: true,
        price: 18,
        price_max: 0,
        content:
          "Vintage-inspired polymer drop earrings with colorful designs.",
        description:
          "Transport yourself to another era with these vintage-inspired polymer drop earrings featuring vibrant colors.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "vintage-drop-earrings",
        options: ["Drops"],
        tags: ["vintage", "retro", "colorful"],
        title: "Vintage Drop Earrings",
        variants: [
          {
            id: 301,
            available: true,
            price: 18,
            price_max: 0,
            content:
              "Vintage-inspired polymer drop earrings with floral designs.",
            description:
              "Transport yourself to another era with these vintage-inspired polymer drop earrings featuring delicate floral patterns.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "vintage-drop-earrings-floral",
            options: [],
            title: "Floral Drops",
            color: "Fuchsia"
          },
          {
            id: 302,
            available: true,
            price: 18,
            price_max: 0,
            content:
              "Vintage-inspired polymer drop earrings with abstract designs.",
            description:
              "Transport yourself to another era with these vintage-inspired polymer drop earrings featuring abstract designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "vintage-drop-earrings-abstract",
            options: [],
            title: "Abstract Drops",
            color: "Pastel"
          }
        ]
      },
      {
        id: 4,
        available: true,
        price: 14,
        price_max: 0,
        content: "Animal-themed polymer stud earrings for a playful touch.",
        description:
          "Add a touch of whimsy to your style with these adorable animal-themed polymer stud earrings.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "animal-stud-earrings",
        options: ["Studs"],
        tags: ["animal", "cute", "quirky"],
        title: "Animal Stud Earrings",
        variants: [
          {
            id: 401,
            available: true,
            price: 14,
            price_max: 0,
            content: "Polymer stud earrings featuring cute cat designs.",
            description:
              "Add a playful touch to your look with these adorable cat-themed polymer stud earrings.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "animal-stud-earrings-cat",
            options: [],
            title: "Cat Studs",
            color: "Gray"
          }
        ]
      },
      {
        id: 5,
        available: true,
        price: 20,
        price_max: 0,
        content: "Handmade bohemian polymer hoop earrings.",
        description:
          "Express your free spirit with these handmade bohemian polymer hoop earrings, perfect for a laid-back vibe.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "boho-hoop-earrings",
        options: ["Hoops"],
        tags: ["boho", "ethnic", "handmade"],
        title: "Bohemian Hoop Earrings",
        variants: [
          {
            id: 501,
            available: true,
            price: 20,
            price_max: 0,
            content: "Handmade polymer hoop earrings with beaded designs.",
            description:
              "Express your free spirit with these handmade polymer hoop earrings featuring intricate beaded designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "boho-hoop-earrings-beaded",
            options: [],
            title: "Beaded Hoops",
            color: "Brown"
          }
        ]
      },
      {
        id: 6,
        available: true,
        price: 16,
        price_max: 0,
        content: "Festive polymer drop earrings with sparkly details.",
        description:
          "Get into the holiday spirit with these festive polymer drop earrings featuring sparkly accents.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "holiday-drop-earrings",
        options: ["Drops"],
        tags: ["holiday", "festive", "sparkly"],
        title: "Holiday Drop Earrings",
        variants: [
          {
            id: 601,
            available: true,
            price: 16,
            price_max: 0,
            content: "Polymer drop earrings featuring Christmas tree designs.",
            description:
              "Get into the holiday spirit with these festive polymer drop earrings featuring Christmas tree designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "holiday-drop-earrings-christmas-tree",
            options: [],
            title: "Christmas Tree Drops",
            color: "Green"
          }
        ]
      },
      {
        id: 7,
        available: true,
        price: 25,
        price_max: 0,
        content: "Bold and glamorous polymer hoop earrings.",
        description:
          "Make a statement with these bold and glamorous polymer hoop earrings, designed to turn heads.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "statement-hoop-earrings",
        options: ["Hoops"],
        tags: ["statement", "bold", "glam"],
        title: "Statement Hoop Earrings",
        variants: [
          {
            id: 701,
            available: true,
            price: 25,
            price_max: 0,
            content: "Statement polymer hoop earrings with textured designs.",
            description:
              "Make a bold statement with these polymer hoop earrings featuring intricate textured designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "statement-hoop-earrings-textured",
            options: [],
            title: "Textured Hoops",
            color: "Silver"
          },
          {
            id: 702,
            available: true,
            price: 25,
            price_max: 0,
            content:
              "Statement polymer hoop earrings with rhinestone embellishments.",
            description:
              "Make a bold statement with these polymer hoop earrings featuring sparkling rhinestone embellishments.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "statement-hoop-earrings-rhinestone",
            options: [],
            title: "Rhinestone Hoops",
            color: "Gold"
          }
        ]
      },
      {
        id: 8,
        available: true,
        price: 19,
        price_max: 0,
        content:
          "Celestial-themed polymer drop earrings featuring moons and stars.",
        description:
          "Explore the mysteries of the cosmos with these celestial-themed polymer drop earrings.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "celestial-drop-earrings",
        options: ["Drops"],
        tags: ["celestial", "moon", "stars"],
        title: "Celestial Drop Earrings",
        variants: [
          {
            id: 801,
            available: true,
            price: 19,
            price_max: 0,
            content:
              "Celestial polymer drop earrings featuring moon and star designs.",
            description:
              "Explore the mysteries of the cosmos with these polymer drop earrings featuring intricate moon and star designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "celestial-drop-earrings-moon-star",
            options: [],
            title: "Moon & Star Drops",
            color: "Navy"
          }
        ]
      },
      {
        id: 9,
        available: true,
        price: 17,
        price_max: 0,
        content: "Colorful polymer stud earrings with fruity designs.",
        description:
          "Add a pop of color to your look with these vibrant polymer stud earrings featuring fruity designs.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "fruity-stud-earrings",
        options: ["Studs"],
        tags: ["fruity", "fun", "colorful"],
        title: "Fruity Stud Earrings",
        variants: [
          {
            id: 901,
            available: true,
            price: 17,
            price_max: 0,
            content: "Polymer stud earrings featuring watermelon designs.",
            description:
              "Add a playful touch to your look with these polymer stud earrings featuring colorful watermelon designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "fruity-stud-earrings-watermelon",
            options: [],
            title: "Watermelon Studs",
            color: "Red"
          },
          {
            id: 902,
            available: true,
            price: 17,
            price_max: 0,
            content: "Polymer stud earrings featuring pineapple designs.",
            description:
              "Add a tropical flair to your look with these polymer stud earrings featuring vibrant pineapple designs.",
            images: [
              "https://images.unsplash.com/photo-1672588714766-ceb0e36a9e0a",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "fruity-stud-earrings-pineapple",
            options: [],
            title: "Pineapple Studs",
            color: "Yellow"
          }
        ]
      },
      {
        id: 10,
        available: true,
        price: 16,
        price_max: 0,
        content: "Artistic and abstract polymer dangle earrings.",
        description:
          "Express your individuality with these artistic and abstract polymer dangle earrings, each piece as unique as you are.",
        images: [
          "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        handle: "artistic-dangle-earrings",
        options: ["Dangles"],
        tags: ["artistic", "abstract", "unique"],
        title: "Artistic Dangle Earrings",
        variants: [
          {
            id: 1001,
            available: true,
            price: 16,
            price_max: 0,
            content:
              "Polymer dangle earrings featuring abstract swirl designs.",
            description:
              "Express your individuality with these polymer dangle earrings featuring intricate abstract swirl designs.",
            images: [
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e",
              "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"
            ],
            handle: "artistic-dangle-earrings-swirl",
            options: [],
            title: "Swirl Dangles",
            color: "Blue"
          }
        ]
      }
    ],
    published_at: "2024-02-19",
    sort_by: "price",
    template_suffix: "collection",
    title: "Artistic Earrings"
  }
];
