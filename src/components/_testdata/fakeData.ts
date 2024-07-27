export type MenuCategory = {
  id: string;
  name: string;
};


export const sections = [
    { id: 'platters', name: 'Platters' },
    { id: 'houseSpecial', name: 'House Special' },
    { id: 'CreateYourOwn', name: 'Create your own' },
    { id: 'gymFood', name: 'Gym food' },
    { id: 'hotPowerBowls', name: 'Hot Power Bowls' },
    { id: 'rainbowWraps', name: 'Rainbow Wraps' },
    { id: 'veganMenu', name: 'Vegan Menu' },
    { id: 'snacksSides', name: 'Snacks & Sides' },
    { id: 'yoghurtFruit', name: 'Yoghurt & Fruit' },
    { id: 'coldDrinks', name: 'Cold Drinks' },
    { id: 'smoothiesShakesJuice', name: 'Smoothies, shakes & juice' },
  ];

export const fakeFoodProduct = {
  thumbnail:"https://rs-menus-api.roocdn.com/images/491fc50c-93bf-4f7b-85ee-ca56ec982922/image.jpeg?width=123&height=123&auto=webp&format=jpg&fit=crop",
  name:"Halloumi & Roasted Veg Salad Platter",
  shortDescription:"A feast for 6 people! halloumi with pesto, roasted peppers, ...",
  description:"A feast for 6 people! halloumi with pesto, roasted peppers, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  price:"£59.99",
  cal:"367 kcal",
  ingredients: ["eggs", "milk", "mustard", "sulphur dioxide/sulphites"],
}


export const fakeFoodOptionItems = [
    { id: 'double-grilled', name: 'double grilled chicken thigh', allergens: 'no known allergens', calories: 252, price: 2.69 },
    { id: 'chicken-breast', name: 'chicken breast', allergens: 'no known allergens', calories: 93 },
    { id: 'grilled-chicken', name: 'grilled chicken thigh', allergens: 'no known allergens', calories: 126 },
    { id: 'falafel', name: 'falafel', allergens: 'Contains gluten', calories: 148 },
]

export const fakeFoodOption = {
  option_display_name:"Choose your protein",
  option_name:"extra protien",
  option_required_flg:1,
  option_items:fakeFoodOptionItems,
} 

export const fakeRestaurant = {
  item_name:"Toss - St Martin's Lane",
  item_thumbnail:"https://rs-menus-api.roocdn.com/images/57800532-e16e-4743-83fb-06c3c2230d76/image.jpeg?width=538&height=302&auto=webp&format=jpg&fit=crop",
  categories:sections
}