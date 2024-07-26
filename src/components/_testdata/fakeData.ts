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

export const fakeFoodItem = {
  thumbnail:"https://rs-menus-api.roocdn.com/images/491fc50c-93bf-4f7b-85ee-ca56ec982922/image.jpeg?width=123&height=123&auto=webp&format=jpg&fit=crop",
  name:"Halloumi & Roasted Veg Salad Platter",
  shortDescription:"A feast for 6 people! halloumi with pesto, roasted peppers, ...",
  price:"£59.99",
  cal:"367 kcal",
}