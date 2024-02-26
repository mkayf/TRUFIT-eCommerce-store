// I am starting my js scripting from populating the products list using js.
// getting the elements first
const trendingDiv = document.querySelector(".trending-div");
const allProductsDiv = document.getElementsByClassName("all-products-div")[0];
const collectorDiv = document.querySelector(".collector");
const loaddiv = document.querySelector(".load-div");
const loadBtn = document.querySelector(".load-btn");
let loadBtnclicks = 0;
const allProductsLink = document.getElementById("all-products-link");
const shopBtn = document.querySelector("#shop-btn");
const discoverBtn = document.querySelector("#discover-btn");
const menLink = document.getElementById("men-link");
const womenLink = document.getElementById("women-link");
const shoesLink = document.getElementById("shoes-link");
const watchesLink = document.getElementById("watches-link");


// creating product array of objects:

let productsArray1 = [
  {
    productID: 1,
    productName: "2PC lawn blue suit",
    productImg1: "images/Product-images/Blue-2pc-women/blue-women-1-1.png",
    productImg2: "images/Product-images/Blue-2pc-women/blue-women-1-2.png",
    productImg3: "images/Product-images/Blue-2pc-women/blue-women-1-3.png",
    productDesc: "Color: Blue, Fabric: Lawn, Technique: Printed",
    productStars: `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i>`,
    productPrice: 2340,
    productClass: "women",
  },
  {
    productID: 2,
    productName: "Multicolor floral shirt",
    productImg1: "images/Product-images/cehvom-tshirt/cehvom-tshirt-1-1.png",
    productImg2: "images/Product-images/cehvom-tshirt/cehvom-tshirt-1-2.png",
    productImg3: "images/Product-images/cehvom-tshirt/cehvom-tshirt-1-3.png",
    productDesc:
      "Elegant desing floral shirt for men to look aesthetic on the way",
    productStars: `<i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i>`,
    productPrice: 1250,
    productClass: "men",
  },
  {
    productID: 3,
    productName: "Choco Shalwar Kameez",
    productImg1:
      "images/Product-images/chocolate-shalwar-kameez/chocolate-1-1.png",
    productImg2:
      "images/Product-images/chocolate-shalwar-kameez/chocolate-1-2.png",
    productImg3:
      "images/Product-images/chocolate-shalwar-kameez/chocolate-1-3.png",
    productDesc: `Ban Neck
              Trim Details on Ban
              Full Sleeves with Cuff
              Trim Details on Cuff
              Contrast Inner Placket
              Metallic Buttons
              Straight Bottom
              Fabric : Premium Blended Fabric
              Color:
              Chocolate`,
    productStars: `<i class="fa-solid fa-star "></i> <i class="fa-solid fa-star "></i> <i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i>`,
    productPrice: 3500,
    productClass: "men",
  },
  {
    productID: 4,
    productName: "Crew neck T-shirts",
    productImg1: "images/Product-images/crew-neck-tshirt/crew-neck-1-1.png",
    productImg2: "images/Product-images/crew-neck-tshirt/crew-neck-1-2.png",
    productImg3: "images/Product-images/crew-neck-tshirt/crew-neck-1-3.png",
    productDesc:
      "Our Crew Neck T-shirt is crafted with the utmost care and attention. This t-shirt features a lightweight, breathable, and soft cotton jersey fabric that makes it perfect for summer. This Bernice Crew Neck is made from the finest cotton material and will last for years. ensuring the durability and also maintaining its color even after repeated washes. With its classic crewneck design and versatile style, our t-shirt is perfect for any occasion.",
    productStars: `<i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i> <i class="fa-solid fa-star "></i> <i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i>`,
    productPrice: 700,
    productClass: "men",
  },
  {
    productID: 5,
    productName: "Green Shalwar Kameez",
    productImg1:
      "images/Product-images/dark-green-shalwar-kameez/dark-green-1-1.png",
    productImg2:
      "images/Product-images/dark-green-shalwar-kameez/dark-green-1-2.png",
    productImg3:
      "images/Product-images/dark-green-shalwar-kameez/dark-green-1-3.png",
    productDesc: `Ban Neck
              Trim Details on Ban
              Full Sleeves with Cuff
              Trim Details on Cuff
              Contrast Panel on Inner Placket
              Metallic Buttons
              Straight Bottom
              Fabric: Premium blended fabric`,
    productStars: `<i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i>`,
    productPrice: 3500,
    productClass: "men",
  },
  {
    productID: 6,
    productName: "Navy Shalwar Kameez",
    productImg1:
      "images/Product-images/dark-navy-shalwar-kameez/dark-navy-1-1.png",
    productImg2:
      "images/Product-images/dark-navy-shalwar-kameez/dark-navy-1-2.png",
    productImg3:
      "images/Product-images/dark-navy-shalwar-kameez/dark-navy-1-3.png",
    productDesc: `Collar Neck
              Trim Details on Collar
              Full Sleeves with Cuff
              Trim Details on Cuff
              Contrast Inner Placket
              Metallic Buttons
              Round Bottom
              Fabric : Premium Blended Fabric`,
    productStars: `<i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i></i><i class="fa-solid fa-star "></i>`,
    productPrice: 3500,
    productClass: "men",
  },
  {
    productID: 7,
    productName: "Black floral shirt",
    productImg1: "images/Product-images/floral-tshirt-1/floral-tshirt-1-1.png",
    productImg2: "images/Product-images/floral-tshirt-1/floral-tshirt-1-2.png",
    productImg3:
      "images/Product-images/floral-tshirt-1/black-floral-shirt-3.png",
    productDesc: `Material: 100% Malai Linen (soft lightweight fabric).
              Features: Printed Casual shirt featuring a fusing collar and half sleeves. Bandana Digital Print in all-over design. Quality Craftsmanship: Our shirts are crafted with a focus on style and quality. We devote proper time and attention to each piece making sure it's made to perfection because your satisfaction is our success.`,
    productStars: `<i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i>`,
    productPrice: 1400,
    productClass: "men",
  },
  {
    productID: 8,
    productName: "Slim fit floral shirt",
    productImg1: "images/Product-images/floral-tshirt-2/floral-tshirt-2-1.png",
    productImg2: "images/Product-images/floral-tshirt-2/floral-tshirt-2-2.png",
    productImg3: "images/Product-images/floral-tshirt-2/floral-tshirt-2-3.png",
    productDesc:
      "Elegant desing floral shirt for men to look aesthetic on the way",
    productStars: `<i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i>`,
    productPrice: 1300,
    productClass: "men",
  },
  {
    productID: 9,
    productName: "Branded formal shoes",
    productImg1: "images/Product-images/formal-shoes-1/formal-1-1.png",
    productImg2: "images/Product-images/formal-shoes-1/formal-1-2.png",
    productImg3: "images/Product-images/formal-shoes-1/formal-1-3.png",
    productDesc: "Color: Brown, Material: Leather",
    productStars: `<i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i>`,
    productPrice: 4000,
    productClass: "shoes",
  },
  {
    productID: 10,
    productName: "formal leather shoes",
    productImg1: "images/Product-images/formal-shoes-2/formal-2-1.png",
    productImg2: "images/Product-images/formal-shoes-2/formal-2-2.png",
    productImg3: "images/Product-images/formal-shoes-2/formal-2-3.png",
    productDesc: `Upper Material: Patent Synthetic Leather
              Inner Lining: Breathable Synthetic Leather
              Inner Sock: High-Density foam cushion with layered synthetic leather
              Sole: Rubber Sole
              Color: Black`,
    productStars: `<i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i>`,
    productPrice: 3700,
    productClass: "shoes",
  },
  {
    productID: 11,
    productName: "Bade harami ho tshirt",
    productImg1: "images/Product-images/Harami-tshirt/harami-tshirt-1-1.png",
    productImg2: "images/Product-images/Harami-tshirt/harami-tshirt-1-2.png",
    productImg3: "images/Product-images/Harami-tshirt/harami-tshirt-1-3.png",
    productDesc: `Bade Harami Ho Beta Hindi Meme T-Shirts For Men
              This Hindi quote T-Shirt is a real sarcastic touch from the dialogue of Mirzapur web series. Buy our Bade Harami Ho Beta Men's T-shirt India only on TRUFIT with 3 different colors to choose.`,
    productStars: `<i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i>`,
    productPrice: 600,
    productClass: "men",
  },
  {
    productID: 12,
    productName: "2PC Unstitched Lawn",
    productImg1: "images/Product-images/lemon-women/lemon-1-1.png",
    productImg2: "images/Product-images/lemon-women/lemon-1-2.png",
    productImg3: "images/Product-images/lemon-women/lemon-1-3.png",
    productDesc: `Lawn Printed Shirt (1.75MTR)
              Dyed Trouser (1.8MTR)
              Color: Lemon`,
    productStars: `<i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i>`,
    productPrice: 2200,
    productClass: "women",
  },
];

let productsArray2 = [
  {
    productID: 13,
    productName: "Peshawari sandals",
    productImg1: "images/Product-images/peshawari-sandals/peshawari-1-1.png",
    productImg2: "images/Product-images/peshawari-sandals/peshawari-1-2.png",
    productImg3: "images/Product-images/peshawari-sandals/peshawari-1-3.png",
    productDesc: `Upper Material: Premium Cow Leather • Inner Lining: High quality durable leather lining • Inner Sock: Double foam for extra comfort with leather layered lining. • Sole: Durable Tire Sole • Color: Brown`,
    productStars: `<i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i>`,
    productPrice: 2700,
    productClass: "shoes",
  },
  {
    productID: 14,
    productName: "Pisexur fancy shirt",
    productImg1: "images/Product-images/pisexur-shirt/pisexure-shirt-1-1.png",
    productImg2: "images/Product-images/pisexur-shirt/pisexure-shirt-1-2.png",
    productImg3: "images/Product-images/pisexur-shirt/pisexure-shirt-1-3.png",
    productDesc: `Pisexur fancy shirt for summer. The best summer top you can have!`,
    productStars: `<i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i>`,
    productPrice: 1000,
    productClass: "men",
  },
  {
    productID: 15,
    productName: "3PC Lawn Blue Suit",
    productImg1: "images/Product-images/red-blue-women/red-blue-1-1.png",
    productImg2: "images/Product-images/red-blue-women/red-blue-1-2.png",
    productImg3: "images/Product-images/red-blue-women/red-blue-1-3.png",
    productDesc: `
              Color: Blue
              Fabric: Lawn
              Technique: Printed`,
    productStars: `<i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i>`,
    productPrice: 1800,
    productClass: "women",
  },
  {
    productID: 16,
    productName: "Seafoam polo tshirt",
    productImg1:
      "images/Product-images/seafoam-polo-tshirt/seafoam-polo-1-1.png",
    productImg2:
      "images/Product-images/seafoam-polo-tshirt/seafoam-polo-1-2.png",
    productImg3:
      "images/Product-images/seafoam-polo-tshirt/seafoam-polo-1-3.png",
    productDesc: `Tiffany Polo Tee designed to uplift your look. Featuring hemmed half sleeves with a sophisticated collar. Crafted with the most premium summer cotton known pique,it will keep you cool and dry throughout the day. Our Polo Tees are very  versatile, making them an ideal choice for a range of occasions, whether you're dressing up for a formal event or looking to keep it casual. Experience the epitome of style and comfort with our collection of Polo Tees for men. Shop now and discover the perfect addition to your wardrobe that exudes effortless elegance.`,
    productStars: `<i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i>`,
    productPrice: 1500,
    productClass: "men",
  },
  {
    productID: 17,
    productName: "Grey Shalwar Kameez",
    productImg1:
      "images/Product-images/slate-grey-shalwar-kameez/slate-grey-1-1.png",
    productImg2:
      "images/Product-images/slate-grey-shalwar-kameez/slate-grey-1-2.png",
    productImg3:
      "images/Product-images/slate-grey-shalwar-kameez/slate-grey-1-3.png",
    productDesc: `Ban Neck
              Panel Details on Ban
              Full Sleeves with Cuf
              Panel Details on Cuff
              Trim Details on Placket
              Metallic Buttons, Straight Bottom
              Fabric : Premium Blended Fabric
              Color : Slate Grey`,
    productStars: `<i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i>`,
    productPrice: 3000,
    productClass: "men",
  },
  {
    productID: 18,
    productName: "LACE-UP BLUE SNEAKERS",
    productImg1: "images/Product-images/sneaker-blue/blue-1-1.png",
    productImg2: "images/Product-images/sneaker-blue/blue-1-2.png",
    productImg3: "images/Product-images/sneaker-blue/blue-1-3.png",
    productDesc: `
              Any city-ready look starts with the right pair of sneakers! Get these Lace-up Men's Sneakers and elevate your style game. They have been made with good quality Mesh material, which ensures durability and breathability. These shoes feature a lace-up design, a round toe shape, and a padded insole.`,
    productStars: `<i class="fa-solid fa-star "></i> <i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i>`,
    productPrice: 3200,
    productClass: "shoes",
  },
  {
    productID: 19,
    productName: "LACE UP BLACK SNEAKERS",
    productImg1: "images/Product-images/sneakers-black/black-1-1.png",
    productImg2: "images/Product-images/sneakers-black/black-1-2.png",
    productImg3: "images/Product-images/sneakers-black/black-1-3.png",
    productDesc: `
              Any city-ready look starts with the right pair of sneakers! Get these Lace-up Men's Sneakers and elevate your style game. They have been made with good quality Mesh material, which ensures durability and breathability. These shoes feature a lace-up design, a round toe shape, and a padded insole.`,
    productStars: `<i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i>`,
    productPrice: 3200,
    productClass: "shoes",
  },
  {
    productID: 20,
    productName: "LACE UP GREY SNEAKERS",
    productImg1: "images/Product-images/sneakers-grey/grey-1-1.png",
    productImg2: "images/Product-images/sneakers-grey/grey-1-2.png",
    productImg3: "images/Product-images/sneakers-grey/grey-1-3.png",
    productDesc: `
              Any city-ready look starts with the right pair of sneakers! Get these Lace-up Men's Sneakers and elevate your style game. They have been made with good quality Mesh material, which ensures durability and breathability. These shoes feature a lace-up design, a round toe shape, and a padded insole.`,
    productStars: `<i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i>`,
    productPrice: 3200,
    productClass: "shoes",
  },
  {
    productID: 21,
    productName: "SVESTON INSPIRO",
    productImg1: "images/Product-images/sveston-watch-1/brown-1-1.png",
    productImg2: "images/Product-images/sveston-watch-1/brown-1-2.png",
    productImg3: "images/Product-images/sveston-watch-1/brown-1-3.png",
    productDesc: `SVESTON INSPIRO SV-11268 IS A GENTS CLASSIC LEATHER STRAP  WATCH HAVING 41MM DIAL AND COMES WITH LUXURY WATCH CASE`,
    productStars: `<i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i>`,
    productPrice: 4200,
    productClass: "watches",
  },
  {
    productID: 22,
    productName: "SVESTON TRIDENT",
    productImg1: "images/Product-images/sveston-watch-2/sports-1-1.png",
    productImg2: "images/Product-images/sveston-watch-2/sports-1-2.png",
    productImg3: "images/Product-images/sveston-watch-2/sports-1-3.png",
    productDesc: `SVESTON TRIDENT SV-8230 IS A GENTS LEATHER WATCH HAVING 39MM DIAL AND COMES WITH LUXURY WATCH CASE.`,
    productStars: `<i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i>`,
    productPrice: 4200,
    productClass: "watches",
  },
  {
    productID: 23,
    productName: "SVESTON DECLAN",
    productImg1: "images/Product-images/sveston-watch-3/formal-1-1.png",
    productImg2: "images/Product-images/sveston-watch-3/formal-1-2.png",
    productImg3: "images/Product-images/sveston-watch-3/formal-1-3.png",
    productDesc: `SVESTON TRIDENT SV-8230 IS A GENTS LEATHER WATCH HAVING 39MM DIAL AND COMES WITH LUXURY WATCH CASE.`,
    productStars: `<i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i>`,
    productPrice: 4200,
    productClass: "watches",
  },
  {
    productID: 24,
    productName: "SVESTON ZODDOK",
    productImg1: "images/Product-images/sveston-watch-4/sports-2-1.png",
    productImg2: "images/Product-images/sveston-watch-4/sports-2-2.png",
    productImg3: "images/Product-images/sveston-watch-4/sports-2-3.png",
    productDesc: `SVESTON ZODDOK SV-8217-M LEATHER BELT IS A GENTS LEATHER WATCH HAVING 46MM DIAL AND COMES WITH LUXURY WATCH CASE.`,
    productStars: `<i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i>`,
    productPrice: 4200,
    productClass: "watches",
  },
];
let productsArray3 = [
  {
    productID: 25,
    productName: "Wine color Kurta",
    productImg1: "images/Product-images/wine-shalwar-kameez/wine-1-1.png",
    productImg2: "images/Product-images/wine-shalwar-kameez/wine-1-2.png",
    productImg3: "images/Product-images/wine-shalwar-kameez/wine-1-3.png",
    productDesc: `Straight Ban Neck
              Chest Bone Pocket
              Accessory Addition on Pocket
              Loop Buttons
              Straight Bottom
              Fabric : Premium Blended Cotton
              color: wine`,
    productStars: `<i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i>`,
    productPrice: 2700,
    productClass: "men",
  },
  {
    productID: 26,
    productName: "Ladies Formal Mules",
    productImg1: "images/Product-images/women-mules/mules-1-1.png",
    productImg2: "images/Product-images/women-mules/mules-1-2.png",
    productImg3: "images/Product-images/women-mules/mules-1-3.png",
    productDesc: `Care Instructions:
              Always dry your feet before wearing shoes- damp/moist feet can cause shoes to get moldy.
              To remove dirt, wipe gently with a dry cloth to remove any dried-on dirt and dust.
              Keep shoes in a well-aired and dry place.
              Color: PINK`,
    productStars: `<i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i>`,
    productPrice: 2500,
    productClass: "shoes",
  },
  {
    productID: 27,
    productName: "Lugano flat pumps",
    productImg1: "images/Product-images/women-pumps/pumps-1-1.png",
    productImg2: "images/Product-images/women-pumps/pumps-1-2.png",
    productImg3: "images/Product-images/women-pumps/pumps-1-3.png",
    productDesc: `These Lugano Zinc Women Flat Pumps are the perfect combination of style and practicality. Featuring a comfortable sole and non-slip technology, these shoes will have you walking in confidence and comfort. The sleek Zinc design will provide you with a classically stylish look for any occasion.`,
    productStars: `<i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i>`,
    productPrice: 3000,
    productClass: "shoes",
  },
  {
    productID: 28,
    productName: "Ladies Formal Sandals",
    productImg1: "images/Product-images/women-sandals-1/yellow-sandals-1-1.png",
    productImg2: "images/Product-images/women-sandals-1/yellow-sandals-1-2.png",
    productImg3: "images/Product-images/women-sandals-1/yellow-sandals-1-3.png",
    productDesc: `Care Instructions:
              Always dry your feet before wearing shoes- damp/moist feet can cause shoes to get moldy.
              To remove dirt, wipe gently with a dry cloth to remove any dried-on dirt and dust.
              Keep shoes in a well-aired and dry place.
              Color: Lemon.`,
    productStars: `<i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i>`,
    productPrice: 2600,
    productClass: "shoes",
  },
  {
    productID: 29,
    productName: "Ladies Formal Sandals",
    productImg1: "images/Product-images/women-sandals-2/blue-sandals-1-1.png",
    productImg2: "images/Product-images/women-sandals-2/blue-sandals-1-2.png",
    productImg3: "images/Product-images/women-sandals-2/blue-sandals-1-3.png",
    productDesc: `Care Instructions:
              Always dry your feet before wearing shoes- damp/moist feet can cause shoes to get moldy.
              To remove dirt, wipe gently with a dry cloth to remove any dried-on dirt and dust.
              Keep shoes in a well-aired and dry place.
              Color: Navy Blue`,
    productStars: `<i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i>`,
    productPrice: 2600,
    productClass: "shoes",
  },
  {
    productID: 30,
    productName: "3pc lawn mustard",
    productImg1: "images/Product-images/yellow-women/yellow-1-1.png",
    productImg2: "images/Product-images/yellow-women/yellow-1-2.png",
    productImg3: "images/Product-images/yellow-women/yellow-1-3.png",
    productDesc: `Color: Mustard
              Fabric: Lawn
              Technique: Printed`,
    productStars: `<i class="fa-solid fa-star "></i><i class="fa-solid fa-star -"></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i>`,
    productPrice: 2500,
    productClass: "women",
  },
];

let combinedArrays = productsArray1.concat(productsArray2, productsArray3);

const generateProductStructure = (product) => {
  return `
  <div class="product-div my-4 mx-3">
            <div class="img-div">
              <img class="product-img" src="${
                product.productImg1
              }" alt="product image" loading="lazy">
            </div>
            <div class="text-div text-center my-2">
              <h5>${product.productName}</h5>
              <div class="stars">${product.productStars}</div>
              <span class="d-block">PKR <span class="amount">${new Intl.NumberFormat().format(
                product.productPrice
              )}</span></span>
            </div>
            <div class="product-id" style="display: none;">${
              product.productID
            }</div>
          </div>
          `;
};
// Populating Trending section with Trending Products

if (window.location.pathname === "/index.html") {
  let trendProducts1 = productsArray1.slice(7, 10);
  let trendProducts2 = productsArray2.slice(2, 5);
  let trendProducts3 = productsArray3.slice(0, 2);
  let trendingArray = trendProducts1.concat(trendProducts2, trendProducts3);

  trendingArray.forEach((product) => {
    trendingDiv.insertAdjacentHTML(
      "beforeend",
      generateProductStructure(product)
    );
  });
}
if (
  window.location.pathname === "/index.html" ||
  window.location.pathname === "/products.html"
) {
  // Populating collector div in Product overview section with Products
  productsArray1.forEach((product) => {
    collectorDiv.insertAdjacentHTML(
      "beforeend",
      generateProductStructure(product)
    );
  });

  // creating products navigation functionality:
  // Populating all products

  allProductsLink.addEventListener("click", () => {
    collectorDiv.innerHTML = "";
    combinedArrays.forEach((product) => {
      collectorDiv.insertAdjacentHTML(
        "beforeend",
        generateProductStructure(product)
      );
    });
    loaddiv.innerHTML = "More products are coming soon!";
    openProductModal();
  });

  // products filteration functionality:

  const productsFiltration = (productClass) => {
    collectorDiv.innerHTML = "";
    combinedArrays.forEach((product) => {
      if (product.productClass === productClass) {
        collectorDiv.insertAdjacentHTML(
          "beforeend",
          generateProductStructure(product)
        );
      }
    });
    loaddiv.innerHTML = "More products are coming soon!";
  };

  // filtering only men products:
  menLink.addEventListener("click", () => {
    productsFiltration("men");
    openProductModal();
  });

  // filtering women products only:
  womenLink.addEventListener("click", () => {
    productsFiltration("women");
    openProductModal();
  });

  // filtering shoes only:
  shoesLink.addEventListener("click", () => {
    productsFiltration("shoes");
    openProductModal();
  });

  // filtering watches only:
  watchesLink.addEventListener("click", () => {
    productsFiltration("watches");
    openProductModal();
  });

  // creating load more products functionality:
  loadBtn.addEventListener("click", () => {
    loadBtnclicks++;

    if (loadBtnclicks == 1) {
      productsArray2.forEach((product) => {
        collectorDiv.insertAdjacentHTML(
          "beforeend",
          generateProductStructure(product)
        );
      });
      openProductModal();
    } else if (loadBtnclicks == 2) {
      productsArray3.forEach((product) => {
        collectorDiv.insertAdjacentHTML(
          "beforeend",
          generateProductStructure(product)
        );
        loaddiv.innerHTML = "More products are coming soon!";
      });
      openProductModal();
    }
  });
}

// products page scripting
if (window.location.pathname.includes("products.html")) {
  collectorDiv.innerHTML = "";
  allProductsLink.style.display = "none";
  combinedArrays.forEach((product) => {
    collectorDiv.insertAdjacentHTML(
      "beforeend",
      generateProductStructure(product)
    );
  });
  loaddiv.innerHTML = "More products are coming soon!";
}

// product modal functionality
if((window.location.pathname !== "/cart.html") && (window.location.pathname !== "/blogs.html") && (window.location.pathname !== "/about.html") && (window.location.pathname !== "/contact.html")){
let productModal = new bootstrap.Modal("#productModal");
let productDiv = document.getElementsByClassName("product-div");
let productMessage = document.querySelector(".product-message");
let productCategory = document.querySelector(".product-category");
let productName = document.querySelector(".product-name");
let starsDiv = document.querySelector(".stars-div");
let productPrice = document.querySelector(".product-price");
let productDescription = document.querySelector(".product-description");
let productMainImg = document.getElementById("product-main-img");
let productImg1 = document.getElementById("product-img-1");
let productImg2 = document.getElementById("product-img-2");
let productImg3 = document.getElementById("product-img-3");
let quantityInput = document.getElementById("quantity-input");
let addToCartBtn = document.getElementById("add-to-cart-btn");

var openProductModal = () => {
  Array.from(productDiv).forEach((productElement) => {
    productElement.addEventListener("click", (event) => {
      combinedArrays.forEach((product) => {
        if (event.currentTarget.lastElementChild.innerHTML == product.productID){
          productModal.show();
          //  change product details:
          productMessage.innerHTML = "";
          quantityInput.value = 1;
          productMainImg.src = `${product.productImg1}`;
          productImg1.src = `${product.productImg1}`;
          productImg2.src = `${product.productImg2}`;
          productImg3.src = `${product.productImg3}`;
          productCategory.innerHTML = `${product.productClass}`;
          productName.innerHTML = `${product.productName}`;
          productPrice.innerHTML = `${Intl.NumberFormat().format(product.productPrice)}`;
          starsDiv.innerHTML = `${product.productStars}`;
          productDescription.innerHTML = `${product.productDesc}`;
          //change main product image:
          let imgArray = [productImg1, productImg2, productImg3];
          imgArray.forEach((productImage) => {
            productImage.addEventListener("click", () => {
              productMainImg.src = `${productImage.src}`;
            });
          });
        }
      });
    });
  });
};

openProductModal();

//  adding product to cart functionality
  addToCartBtn.addEventListener("click", () => {
    setTimeout(() => {
      let cartItem = JSON.parse(sessionStorage.getItem("cart-item")) ?? [];
      let checkStatus = 1;
      for(let item of cartItem){
        if(item.product_name == productName.textContent){
          checkStatus = 0;
          break;
        }
      }

      if(checkStatus == 0){
        cartItem.forEach((product)=>{
          if(product.product_name == productName.textContent){
            product.product_quantity += Number(quantityInput.value);
            product.product_subtotal = product.product_price * product.product_quantity;
            productMessage.innerHTML = `"${quantityInput.value}" more items added to <a href="cart.html">Cart</a>`;
          }
        })
           
      }
      else{
      productMessage.innerHTML = `"${productName.textContent}" added to <a href="cart.html">Cart</a>`;
      
      cartItem.push({
        product_name : productName.textContent,
        product_img : productMainImg.src,
        product_quantity : Number.parseInt(quantityInput.value),
        product_price : Number.parseFloat(productPrice.innerHTML.replace(/[^\d.-]/g, '')), 
        product_subtotal : Number.parseFloat(productPrice.innerHTML.replace(/[^\d.-]/g, '')) * Number.parseInt(quantityInput.value)
      })
    }

      sessionStorage.setItem("cart-item", JSON.stringify(cartItem));
      displayCartItems()
    }, 1000);
  });
}

// show item numbers in the cart icon
let item_number_placeholder = document.querySelector(".item-number-placeholder");
const showItemNumbers = () => {
  let cartItem = JSON.parse(sessionStorage.getItem("cart-item")) ?? []; 
  let itemNumbers = 0;
  for(let i = 0; i < cartItem.length; i++){
    itemNumbers += cartItem[i].product_quantity;
  }
  item_number_placeholder.textContent = itemNumbers;
  
}

// going back to shopping page
if(window.location.pathname.includes("/cart.html")){
document.getElementById("continue-shopping").addEventListener("click",()=>{
  history.back();
})
}

// displaying cart items in the cart page:

const displayCartItems = () => {
  var cartContainer = document.querySelector("#cart-container");
  let storedItems = '';
  let cartItem = JSON.parse(sessionStorage.getItem("cart-item")) ?? [];
  cartItem.forEach((product,index)=>{
    storedItems += `
    <tr class="row">
    <td class="col-12 col-sm-12 col-md-12 col-lg-1 delete-product-btn">
      <img src="images/delete-btn.png" alt="delete-product-button" onclick="removeItem(${index})">
    </td>
    <td class="col-12 col-sm-12 col-md-12 col-lg-1 cart-product-img">
      <img src="${product.product_img}" alt="cart-product-image" height="70px">
    </td>
    <td class="col-12 col-sm-12 col-md-12 col-lg-3 cart-product-name cart-text"><label class="cart-details">Product:</label>${product.product_name}</td>
    <td class="col-12 col-sm-12 col-md-12 col-lg-2 cart-product-price cart-text"><label class="cart-details">Price:</label> <span class="cart-price">PKR ${Intl.NumberFormat().format(product.product_price)}</span></td>
    <td class="col-12 col-sm-12 col-md-12 col-lg-2 cart-product-quantity cart-text">
      <label class="cart-details">Quantity:</label>  
      <input type="number" value="${product.product_quantity}" class="cart-input" max="10" min="1">
    </td>
    <td class="col-12 col-sm-12 col-md-12 col-lg-2 cart-product-subtotal cart-text"><label class="cart-details">Subtotal:</label> <span class="cart-subtotal">PKR ${Intl.NumberFormat().format(product.product_subtotal)}</span></td>
    <td class="col-12 col-sm-12 col-md-12 col-lg-1 update-div"><button onclick="updateItem(${index})" class="updateBtn">update</button></td>
  </tr>
    `
  });

  if(window.location.pathname.includes("/cart.html")){
   cartContainer.innerHTML = storedItems;
   if(cartContainer.innerHTML == ""){
    document.querySelector("main").innerHTML = `
   <div class="fill-btn-div d-flex justify-content-center"> 
   <a href="/products.html">    
    <button class="fill-btn">Cart empty! let's fill it up. <span class="fill-icon"><img src="images/fill-cart.png"></span></button>
    </a>
    </div>
    `
  }
  }
  
showItemNumbers();
}

const removeItem = (index) => {
  let cartItem = JSON.parse(sessionStorage.getItem("cart-item")) ?? [];
  cartItem.splice(index, 1);
  sessionStorage.setItem("cart-item", JSON.stringify(cartItem));
  displayCartItems();
}

const updateItem = (index) => {
    let cartItem = JSON.parse(sessionStorage.getItem("cart-item")) ?? [];
    let cartInput = document.getElementsByClassName("cart-input")[index];
    cartItem[index].product_quantity = Number(cartInput.value);
    cartItem[index].product_subtotal = cartItem[index].product_price * Number(cartInput.value); 
    sessionStorage.setItem("cart-item", JSON.stringify(cartItem));
    displayCartItems();
}

displayCartItems()
showItemNumbers();


