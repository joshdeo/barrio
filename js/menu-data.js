/* Barrio Kitchen & Cafe: party tray menu, transcribed from the printed menu.
   m / l = medium and large tray prices (CAD). each = per piece price. */
window.BARRIO = {
  contact: {
    phone: "905 592 0079",
    tel: "+19055920079",
    email: "info@barriokitchencafe.com",
    address1: "99 Dundas St E",
    address2: "Mississauga, ON L5A 1W7",
    instagram: "barriokitchencafe",
    web: "www.barriokitchencafe.com",
    notice: "Please order at least 2 to 3 days in advance. Order by phone or email."
  },
  cats: [
    { id: "noodles", name: "Noodles", blurb: "Long life noodles for every table." },
    { id: "pasta", name: "Pasta", blurb: "Baked, saucy, and sliced for sharing." },
    { id: "beef", name: "Beef", blurb: "Slow stews and tender classics." },
    { id: "pork", name: "Pork", blurb: "Crackle, char, and comfort." },
    { id: "chicken", name: "Chicken", blurb: "Adobo, inasal, and everything between." },
    { id: "veggies", name: "Vegetables", blurb: "Greens that get seconds." },
    { id: "seafood", name: "Seafood", blurb: "From the grill, the steamer, the fryer." },
    { id: "rice", name: "Rice and Dim Sum", blurb: "The base of every party tray." },
    { id: "dessert", name: "Dessert", blurb: "Kakanin, cakes, and sweet endings." }
  ],
  items: [
    { id: "pancit-bihon", cat: "noodles", name: "Pancit Bihon", m: 60, l: 90 },
    { id: "pancit-canton", cat: "noodles", name: "Pancit Canton", m: 65, l: 95 },
    { id: "pancit-mix", cat: "noodles", name: "Pancit Mix", m: 65, l: 95 },
    { id: "palabok", cat: "noodles", name: "Palabok", m: 80, l: 125 },

    { id: "pasta-penne", cat: "pasta", name: "Pasta Penne", m: 85, l: 115 },
    { id: "beef-regatoni", cat: "pasta", name: "Beef Regatoni", m: 85, l: 115 },

    { id: "beef-caldereta", cat: "beef", name: "Beef Caldereta", m: 95, l: 190 },
    { id: "beef-kare-kare", cat: "beef", name: "Beef Kare Kare", m: 95, l: 190 },
    { id: "filipino-bistek", cat: "beef", name: "Filipino Bistek", m: 95, l: 190 },

    { id: "sisig-pork", cat: "pork", name: "Sisig Pork", m: 80, l: 160 },
    { id: "pork-menudo", cat: "pork", name: "Pork Menudo", m: 70, l: 140 },
    { id: "pork-adobo", cat: "pork", name: "Pork Adobo", m: 70, l: 140 },
    { id: "lechon-kawali", cat: "pork", name: "Lechon Kawali", m: 110, l: 195 },
    { id: "pork-spring-rolls", cat: "pork", name: "Pork Spring Rolls", m: 50, l: 100, note: "$1 each" },

    { id: "chicken-adobo", cat: "chicken", name: "Chicken Adobo", m: 70, l: 140 },
    { id: "bbq-chicken-legs", cat: "chicken", name: "BBQ Chicken Legs", m: 70, l: 140 },
    { id: "chicken-inasal", cat: "chicken", name: "Chicken Inasal", m: 70, l: 140 },
    { id: "fried-chicken-legs", cat: "chicken", name: "Fried Chicken Legs", m: 70, l: 140 },
    { id: "chicken-wings", cat: "chicken", name: "Chicken Wings", m: 60, l: 120, mLabel: "40 pcs", lLabel: "80 pcs" },
    { id: "chicken-afritada", cat: "chicken", name: "Chicken Afritada", m: 70, l: 140 },
    { id: "chicken-curry", cat: "chicken", name: "Chicken Curry", m: 70, l: 140 },

    { id: "chopsuey", cat: "veggies", name: "Chopsuey", m: 65, l: 130 },
    { id: "pinakbet", cat: "veggies", name: "Pinakbet", m: 65, l: 130 },
    { id: "buttered-veggie", cat: "veggies", name: "Buttered Veggie", m: 65, l: 130 },
    { id: "ginataang-sitaw", cat: "veggies", name: "Ginataang Sitaw at Kalabasa", m: 65, l: 130 },
    { id: "deep-fried-veggie", cat: "veggies", name: "Deep Fried Veggie", m: 65, l: 130 },
    { id: "laing", cat: "veggies", name: "Laing with Pork or Shrimp", m: 80, l: 160 },
    { id: "veg-spring-rolls", cat: "veggies", name: "Vegetable Spring Rolls", each: 2.99, unit: "each" },

    { id: "fish-fillet", cat: "seafood", name: "Fish Fillet", m: 65, l: 130 },
    { id: "sweet-sour-fish", cat: "seafood", name: "Sweet and Sour Fish", m: 65, l: 130 },
    { id: "fried-calamare", cat: "seafood", name: "Fried Calamare", m: 95, l: 190 },
    { id: "steamed-pampano", cat: "seafood", name: "Steamed Pampano", each: 15, unit: "each" },
    { id: "grilled-bangus", cat: "seafood", name: "Grilled Bangus", each: 19, unit: "each" },

    { id: "siomai", cat: "rice", name: "Siomai", m: 50, l: 100, note: "$1 each" },
    { id: "young-chow", cat: "rice", name: "Young Chow Fried Rice", m: 65, l: 125 },
    { id: "garlic-rice", cat: "rice", name: "Garlic Fried Rice", m: 40, l: 60 },

    { id: "turon", cat: "dessert", name: "Turon", each: 1, unit: "each", min: 50 },
    { id: "suman-lihiya", cat: "dessert", name: "Suman sa Lihiya", each: 6, unit: "pair" },
    { id: "suman-gata", cat: "dessert", name: "Suman sa Gata", each: 2, unit: "each" },
    { id: "suman-cassava", cat: "dessert", name: "Suman Cassava", each: 3, unit: "each" },
    { id: "buko-pie", cat: "dessert", name: "Buko Pie", each: 25, unit: "" },
    { id: "apple-pie", cat: "dessert", name: "Apple Pie", each: 25, unit: "" },
    { id: "chiffon-cake", cat: "dessert", name: "Chiffon Cake", each: 20, unit: "" },
    { id: "kutsinta", cat: "dessert", name: "Kutsinta", each: 1, unit: "each", min: 50 },
    { id: "cassava-cake", cat: "dessert", name: "Cassava Cake", each: 20, unit: "" },
    { id: "uber-halaya", cat: "dessert", name: "Uber Halaya", each: 10, unit: "" },
    { id: "biko", cat: "dessert", name: "Biko", each: 15, unit: "" },
    { id: "bibingka-malagkit", cat: "dessert", name: "Bibingka Malagkit", each: 20, unit: "" }
  ]
};
