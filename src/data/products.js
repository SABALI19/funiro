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
    description: "Stylish cafe chair.",
    price: "$56.00",
    discount: "-10%",
    discountPrice: "$100",
    path: "/productPage",
    reviews: [
      {
        id: 1,
        user: "Mike Johnson",
        rating: 5,
        comment: "Absolutely love this chair! Worth every penny.",
        date: "2024-01-12"
      }
    ],
    averageRating: 5,
    reviewCount: 1
  },
  {
    id: 2,
    image: Leviosa,
    images: [Leviosa, SideOne, SideTwo, SideThree],
    name: "Leviosa",
    description: "Stylish Cafe chair.",
    price: "$2500.00",
    discount: "-15%",
    discountPrice: "$100",
    path: "/shop",
    reviews: [
      {
        id: 1,
        user: "Mike Johnson",
        rating: 5,
        comment: "Absolutely love this chair! Worth every penny.",
        date: "2024-01-12"
      }
    ],
    averageRating: 5,
    reviewCount: 1
  },
  {
    id: 3,
    image: Lolito,
    images: [Lolito, SideOne, SideTwo, SideThree],
    name: "Lolito",
    description: "Luxury big sofa",
    price: "$560.00",
    discount: "-30%",
    discountPrice: "$-30",
    reviews: [
      {
        id: 1,
        user: "John Doe",
        rating: 5,
        comment: "Excellent quality and very comfortable!",
        date: "2024-01-15"
      }
    ],
    averageRating: 4.5,
    reviewCount: 2
  },
  {
    id: 4,
    image: Respira,
    images: [Respira, SideOne, SideTwo, SideThree],
    name: "Respira",
    description: "Stylish cafe chair.",
    price: "$21,600.00",
    discount: null,
    discountPrice: null,
    newItem: "new",
    reviews: [
      {
        id: 1,
        user: "John Doe",
        rating: 5,
        comment: "Excellent quality and very comfortable!",
        date: "2024-01-15"
      }
    ],
    averageRating: 4.5,
    reviewCount: 2
  },
  {
    id: 5,
    image: Grifo,
    images: [Grifo, SideOne, SideTwo, SideThree],
    name: "Grifo",
    description: "Stylish cafe chairl.",
    price: "$700.00",
    discount: null,
    newItem: "new",
    discountPrice: "$100",
    reviews: [
      {
        id: 1,
        user: "John Doe",
        rating: 5,
        comment: "Excellent quality and very comfortable!",
        date: "2024-01-15"
      }
    ],
    averageRating: 4.5,
    reviewCount: 2
  },
  {
    id: 6,
    image: Muggo,
    images: [Muggo, SideOne, SideTwo, SideThree],
    name: "Muggo",
    description: "Outdoor bar table and stool. ",
    price: "$56,000.00",
    discount: "-10%",
    discountPrice: "$100",
    reviews: [
      {
        id: 1,
        user: "John Doe",
        rating: 5,
        comment: "Excellent quality and very comfortable!",
        date: "2024-01-15"
      }
    ],
    averageRating: 4.5,
    reviewCount: 2
  },
  {
    id: 7,
    image: Pingky,
    images: [Pingky, SideOne, SideTwo, SideThree],
    name: "Pingky",
    description: "Luxury big sofas.",
    price: "$3,500.00",
    discount: null,
    newItem: "new",
    discountPrice: "$100",
    reviews: [
      {
        id: 1,
        user: "John Doe",
        rating: 5,
        comment: "Excellent quality and very comfortable!",
        date: "2024-01-15"
      }
    ],
    averageRating: 4.5,
    reviewCount: 2
  },
  {
    id: 8,
    image: Potty,
    images: [Potty, SideOne, SideTwo, SideThree],
    name: "Potty",
    description: "Stylish cafe chair.",
    price: "$5,600.00",
    discount: "-10%",
    discountPrice: "$100",
    reviews: [
      {
        id: 1,
        user: "John Doe",
        rating: 5,
        comment: "Excellent quality and very comfortable!",
        date: "2024-01-15"
      }
    ],
    averageRating: 4.5,
    reviewCount: 2
  },
  {
    id: 1,
    image: Syltherine,
    images: [Syltherine, SideOne, SideTwo, SideThree],
    name: "Syltherine",
    description: "Stylish cafe chair.",
    price: "$56.00",
    discount: "-10%",
    discountPrice: "$100",
    path: "/productPage",
    reviews: [
      {
        id: 1,
        user: "Mike Johnson",
        rating: 5,
        comment: "Absolutely love this chair! Worth every penny.",
        date: "2024-01-12"
      }
    ],
    averageRating: 5,
    reviewCount: 1
  },
  {
    id: 2,
    image: Leviosa,
    images: [Leviosa, SideOne, SideTwo, SideThree],
    name: "Leviosa",
    description: "Stylish Cafe chair.",
    price: "$2500.00",
    discount: "-15%",
    discountPrice: "$100",
    path: "/shop",
    reviews: [
      {
        id: 1,
        user: "Mike Johnson",
        rating: 5,
        comment: "Absolutely love this chair! Worth every penny.",
        date: "2024-01-12"
      }
    ],
    averageRating: 5,
    reviewCount: 1
  },
  {
    id: 3,
    image: Lolito,
    images: [Lolito, SideOne, SideTwo, SideThree],
    name: "Lolito",
    description: "Luxury big sofa",
    price: "$560.00",
    discount: "-30%",
    discountPrice: "$-30",
    reviews: [
      {
        id: 1,
        user: "John Doe",
        rating: 5,
        comment: "Excellent quality and very comfortable!",
        date: "2024-01-15"
      }
    ],
    averageRating: 4.5,
    reviewCount: 2
  },
  {
    id: 4,
    image: Respira,
    images: [Respira, SideOne, SideTwo, SideThree],
    name: "Respira",
    description: "Stylish cafe chair.",
    price: "$21,600.00",
    discount: null,
    discountPrice: null,
    newItem: "new",
    reviews: [
      {
        id: 1,
        user: "John Doe",
        rating: 5,
        comment: "Excellent quality and very comfortable!",
        date: "2024-01-15"
      }
    ],
    averageRating: 4.5,
    reviewCount: 2
  },
  
];

export default products;