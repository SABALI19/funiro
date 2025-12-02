// data/products.js
import Syltherine from "../assets/images/syltherine.svg";
import Leviosa from "../assets/images/leviosa.svg";
import Lolito from "../assets/images/lolito.svg";
import Grifo from "../assets/images/grifo.svg";
import Muggo from "../assets/images/muggo.svg";
import Pingky from "../assets/images/pingky.svg";
import Potty from "../assets/images/potty.svg";
import Respira from "../assets/images/respira.svg";

import SideOne from "../assets/images/side-one.svg"
import SideTwo from "../assets/images/side-two.svg"
import SideThree from "../assets/images/side-three.svg"

const products = [
  {
    id: 1,
    image: Syltherine,
    images: [Syltherine, SideOne, SideTwo, SideThree],
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: 56.00, // Changed to number
    originalPrice: 100.00, // Added for calculations
    category: "chairs",
    brand: "ModernLiving",
    discount: "-30%",
    discountPrice: "$100",
    newItem: false,
    inStock: true,
    rating: 4.8,
    reviewCount: 24,
    tags: ["modern", "minimalist", "cafe"]
  },
  {
    id: 2,
    image: Leviosa,
    images: [Leviosa, SideOne, SideTwo, SideThree],
    name: "Leviosa",
    description: "Stylish Cafe chair",
    price: 2500.00,
    originalPrice: 2941.18,
    category: "chairs",
    brand: "LuxurySeating",
    discount: "-15%",
    discountPrice: "$100",
    newItem: false,
    inStock: true,
    rating: 4.9,
    reviewCount: 18,
    tags: ["luxury", "ergonomic"]
  },
  {
    id: 3,
    image: Lolito,
    images: [Lolito, SideOne, SideTwo, SideThree],
    name: "Lolito",
    description: "Luxury big sofa",
    price: 560.00,
    originalPrice: 800.00,
    category: "sofas",
    brand: "ComfortPlus",
    discount: "-30%",
    discountPrice: "$-30",
    newItem: false,
    inStock: true,
    rating: 4.7,
    reviewCount: 32,
    tags: ["luxury", "large", "comfort"]
  },
  {
    id: 4,
    image: Respira,
    images: [Respira, SideOne, SideTwo, SideThree],
    name: "Respira",
    description: "Outdoor lounge chair",
    price: 21600.00,
    originalPrice: 21600.00,
    category: "outdoor",
    brand: "GardenElegance",
    discount: null,
    discountPrice: null,
    newItem: true,
    inStock: true,
    rating: 4.6,
    reviewCount: 12,
    tags: ["outdoor", "weather-resistant"]
  },
  {
    id: 5,
    image: Grifo,
    images: [Grifo, SideOne, SideTwo, SideThree],
    name: "Grifo",
    description: "Modern side table",
    price: 700.00,
    originalPrice: 700.00,
    category: "tables",
    brand: "ModernLiving",
    discount: null,
    newItem: "new",
    discountPrice: "$100",
    inStock: false,
    rating: 4.4,
    reviewCount: 8,
    tags: ["modern", "side-table", "minimalist"]
  },
  {
    id: 6,
    image: Muggo,
    images: [Muggo, SideOne, SideTwo, SideThree],
    name: "Muggo",
    description: "Outdoor bar table and stool",
    price: 560.00,
    originalPrice: 622.22,
    category: "outdoor",
    brand: "PatioDesigns",
    discount: "-10%",
    discountPrice: "$100",
    newItem: false,
    inStock: true,
    rating: 4.5,
    reviewCount: 15,
    tags: ["outdoor", "bar", "stool"]
  },
  {
    id: 7,
    image: Pingky,
    images: [Pingky, SideOne, SideTwo, SideThree],
    name: "Pingky",
    description: "Luxury big sofa",
    price: 3500.00,
    originalPrice: 3500.00,
    category: "sofas",
    brand: "ComfortPlus",
    discount: null,
    newItem: "new",
    discountPrice: "$100",
    inStock: true,
    rating: 4.9,
    reviewCount: 27,
    tags: ["luxury", "sectional", "premium"]
  },
  {
    id: 8,
    image: Potty,
    images: [Potty, SideOne, SideTwo, SideThree],
    name: "Potty",
    description: "Decorative plant pot",
    price: 56.00,
    originalPrice: 62.22,
    category: "decor",
    brand: "HomeGarden",
    discount: "-10%",
    discountPrice: "$100",
    newItem: false,
    inStock: true,
    rating: 4.3,
    reviewCount: 21,
    tags: ["decor", "plant", "ceramic"]
  },
  {
    id: 9,
    image: Syltherine, // Different image for demo
    images: [Syltherine, SideOne, SideTwo, SideThree],
    name: "Syltherine Pro",
    description: "Premium cafe chair",
    price: 89.00,
    originalPrice: 89.00,
    category: "chairs",
    brand: "ModernLiving",
    discount: null,
    discountPrice: null,
    newItem: "new",
    inStock: true,
    rating: 4.8,
    reviewCount: 16,
    tags: ["premium", "cafe", "ergonomic"]
  },
  {
    id: 10,
    image: Leviosa, // Different image for demo
    images: [Leviosa, SideOne, SideTwo, SideThree],
    name: "Leviosa Executive",
    description: "Executive office chair",
    price: 3200.00,
    originalPrice: 3200.00,
    category: "chairs",
    brand: "OfficePro",
    discount: null,
    discountPrice: null,
    newItem: false,
    inStock: false,
    rating: 4.7,
    reviewCount: 9,
    tags: ["office", "executive", "ergonomic"]
  }
];

export default products;