import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [
  {
    id: "01",
    title: "Manali",
    city: "Manali",
    distance: 300,
    address: "Himachal Pradesh",
    price: 10000,
    maxGroupSize: 10,
    desc: "A beautiful hill station known for its scenic mountains and adventure sports.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Jaipur",
    city: "Jaipur",
    distance: 400,
    address: "Rajasthan",
    price: 99,
    maxGroupSize: 8,
    desc: "The Pink City, famous for its palaces, forts, and vibrant culture.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Gulmarg",
    city: "Gulmarg",
    distance: 600,
    address: "Jammu and Kashmir",
    price: 99,
    maxGroupSize: 8,
    desc: "A snowy paradise known for skiing, cable cars, and pristine landscapes.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Varanasi Sunrise",
    city: "Varanasi",
    distance: 700,
    address: "Uttar Pradesh",
    price: 99,
    maxGroupSize: 8,
    desc: "Experience spiritual serenity with sunrise boat rides on the Ganges.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Alleppey Backwaters",
    city: "Alleppey",
    distance: 500,
    address: "Kerala",
    price: 99,
    maxGroupSize: 8,
    desc: "Famous for houseboat cruises through scenic backwaters and lush landscapes.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Shillong Blossoms",
    city: "Shillong",
    distance: 550,
    address: "Meghalaya",
    price: 99,
    maxGroupSize: 8,
    desc: "Known as the Scotland of the East, filled with natural beauty and blooms.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Pondicherry Retreat",
    city: "Pondicherry",
    distance: 450,
    address: "Tamil Nadu",
    price: 99,
    maxGroupSize: 8,
    desc: "A seaside town with French colonial charm and peaceful beaches.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Tawang Mountains",
    city: "Tawang",
    distance: 800,
    address: "Arunachal Pradesh",
    price: 99,
    maxGroupSize: 8,
    desc: "Snow-covered peaks, monasteries, and peace in Northeast India.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
];

export default tours;
