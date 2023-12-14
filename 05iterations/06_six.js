const coding = ["js", "ruby", "java", "python", "cpp"];

// let code = coding.forEach((item)=> console.log(item))

// console.log(code) // forEach method do return a value

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const nums = myNums.filter((n)=> n >= 5)
const num1 = [];
const nums = myNums.forEach((num) => {
  num1.push(num);
});

// console.log(num1)

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: "2009", edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let myBook = books.filter((book) => {
  return book.publish.toString() > 2000; //if value in string
});

myBook = books.filter((e) => e.genre.toLowerCase() == "fiction");

myBook = books.filter(
  (book) =>
    book.genre.toLowerCase().toString() === "science" && book.publish > 2000
);

// console.log(myBook)

const json = [
  {
    id: 1,
    name: "Towel Set",
    description: "Soft and absorbent towels for everyday use.",
    price: 19.99,
    image: "/images/towel_set.jpg",
  },
  {
    id: 2,
    name: "Soap Dispenser",
    description: "Modern soap dispenser for your bathroom.",
    price: 12.99,
    image: "/images/soap_dispenser.jpg",
  },
  {
    id: 3,
    name: "Toothbrush Holder",
    description: "Stylish holder for organizing toothbrushes.",
    price: 8.99,
    image: "/images/toothbrush_holder.jpg",
  },
  {
    id: 4,
    name: "Shower Caddy",
    description: "Hanging caddy for storing shower essentials.",
    price: 24.99,
    image: "/images/shower_caddy.jpg",
  },
  {
    id: 5,
    name: "Mirror with LED Lights",
    description: "Illuminate your grooming routine with LED lights.",
    price: 49.99,
    image: "/images/mirror_led_lights.jpg",
  },
  {
    id: 6,
    name: "Bathrobe Hooks",
    description:
      "Hooks for hanging bathrobes provide a convenient storage solution.",
    price: 14.99,
    image: "/images/bathrobe_hooks.jpg",
  },
  {
    id: 7,
    name: "Shampoo and Conditioner Set",
    description:
      "High-quality shampoo and conditioner set for luxurious hair care.",
    price: 29.99,
    image: "/images/shampoo_conditioner_set.jpg",
  },
  {
    id: 8,
    name: "Digital Bathroom Scale",
    description: "Keep track of your weight with this digital bathroom scale.",
    price: 34.99,
    image: "/images/digital_scale.jpg",
  },
  {
    id: 9,
    name: "Ceramic Toothbrush Holder",
    description: "Elegant ceramic holder for your toothbrushes.",
    price: 11.99,
    image: "/images/ceramic_toothbrush_holder.jpg",
  },
  {
    id: 10,
    name: "Scented Candles Set",
    description: "Create a relaxing atmosphere with this scented candles set.",
    price: 19.99,
    image: "/images/scented_candles_set.jpg",
  },
  {
    id: 11,
    name: "Bathroom Organizer Tray",
    description: "Organize your bathroom essentials with this stylish tray.",
    price: 16.99,
    image: "/images/bathroom_organizer_tray.jpg",
  },
  {
    id: 12,
    name: "Wall-Mounted Towel Rack",
    description: "Maximize space with this wall-mounted towel rack.",
    price: 27.99,
    image: "/images/wall_mounted_towel_rack.jpg",
  },
  {
    id: 13,
    name: "Faucet Extender for Kids",
    description:
      "Make handwashing fun and accessible for kids with this faucet extender.",
    price: 8.99,
    image: "/images/faucet_extender.jpg",
  },
  {
    id: 14,
    name: "Bamboo Bath Mat",
    description: "Eco-friendly bamboo bath mat for a natural touch.",
    price: 22.99,
    image: "/images/bamboo_bath_mat.jpg",
  },
  {
    id: 15,
    name: "Hair Dryer Holder",
    description: "Convenient holder to keep your hair dryer within reach.",
    price: 13.99,
    image: "/images/hair_dryer_holder.jpg",
  },
  {
    id: 16,
    name: "Bathroom Faucet Set",
    description: "Upgrade your bathroom with this sleek faucet set.",
    price: 64.99,
    image: "/images/bathroom_faucet_set.jpg",
  },
  {
    id: 17,
    name: "Bath Bomb Set",
    description: "Indulge in a luxurious bath with these scented bath bombs.",
    price: 18.99,
    image: "/images/bath_bomb_set.jpg",
  },
  {
    id: 18,
    name: "Corner Shower Shelf",
    description: "Maximize storage in your shower with this corner shelf.",
    price: 14.99,
    image: "/images/corner_shower_shelf.jpg",
  },
  {
    id: 19,
    name: "Elongated Toilet Seat",
    description: "Comfortable and stylish elongated toilet seat.",
    price: 32.99,
    image: "/images/elongated_toilet_seat.jpg",
  },
  {
    id: 20,
    name: "Bathroom Wall Art",
    description: "Add a touch of art to your bathroom walls with this set.",
    price: 26.99,
    image: "/images/bathroom_wall_art.jpg",
  },
  {
    id: 21,
    name: "Shower Squeegee",
    description: "Keep your shower glass clean with this handy squeegee.",
    price: 9.99,
    image: "/images/shower_squeegee.jpg",
  },
  {
    id: 22,
    name: "Luxury Bath Towel Set",
    description: "Pamper yourself with this luxurious bath towel set.",
    price: 49.99,
    image: "/images/luxury_bath_towel_set.jpg",
  },
  {
    id: 23,
    name: "Bathroom Vanity Set",
    description: "Complete your bathroom with this stylish vanity set.",
    price: 129.99,
    image: "/images/bathroom_vanity_set.jpg",
  },
  {
    id: 24,
    name: "Toilet Brush and Holder",
    description: "Keep your toilet clean with this sleek brush and holder.",
    price: 15.99,
    image: "/images/toilet_brush_holder.jpg",
  },
  {
    id: 25,
    name: "Rainfall Shower Head",
    description:
      "Upgrade your shower experience with this rainfall shower head.",
    price: 39.99,
    image: "/images/rainfall_shower_head.jpg",
  },
];

console.log(json);
// const arr = Array.from(json);
// console.log(arr);

json.map((e) => {
  console.log(e.image);
  console.log(e.name);
  console.log(e.description);
  console.log(e.price);
});
