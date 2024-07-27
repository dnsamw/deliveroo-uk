// MENU is the major entity here Not the RESTAURANT !!
export type FoodMenu = {
  id: string;
  name: string;
  description: string;
  tags: string[];
  min_price: number;
  overall_rating: number;
  sections: FoodMenuSection[];
  restaurant: string;
};
export type FoodMenuSection = {
  id: string;
  name: string;
  menu_products: FoodProduct[];
};

export type MenuCategory = {
  id: string;
  name: string;
};

export enum RequiredFlag {
  NO = 0,
  YES = 1,
}

export enum OptionSelectionType{
  RADIO = 1,
  CHECKBOX = 2
}

export type FoodProduct = {
  // id: string;
  name: string;
  thumbnail: string;
  calories: string;
  price: string;
  short_description: string;
  description: string;
  ingredients: string[];
  products_options: FoodOption[];
};

export type FoodOption = {
  // id: string;
  option_display_name: string;
  option_name: string;
  short_description: string;
  option_required_flg: RequiredFlag;
  option_items: FoodOptionItem[];
  option_selection_type:OptionSelectionType;
};

export type FoodOptionItem = {
  id: string;
  name: string;
  allergens: string;
  calories: number;
  price?: number;
  option_items?: FoodOptionItem[];
};

export type Restaurant = {
  // id: string;
  name: string;
  thumbnail: string;
  info: RestaurantInfo;
};

export type RestaurantInfo ={

}

// Resturant
export const fakeRestaurantInfo: RestaurantInfo = {
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      allergens_info: "no known allergens",
      telephone: "01234 567890",
      hygene_info:{
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        rating: 5,
        rating_image: "https://ow.roocdn.com/assets/images/fsa/fhrs_5@3x.png",
        rating_url: "https://ratings.food.gov.uk/business/en-GB/428192"
      },
      location: {
        address:"100 St Martins Lane, London, WC2N4AZA, UK",
        latitude: 0,
        longitude: 0
      },
      notes:"All dishes may contain traces of the following allergens: Gluten, Crustaceans, Eggs, Fish, Peanuts, Soybeans, Milk, Nuts (e.g. almonds, hazelnuts, walnuts, cashews, pecan nuts, Brazil nuts, pistachio nuts, macadamia nuts), Celery, Mustard, Sesame, Sulphur dioxide/sulphites, Lupin, Molluscs. For any questions regarding the allergen contents of specific dishes please contact the restaurant directly."
}

// Menu
export const fakeFoodOptionItems: FoodOptionItem[] = [
  {
    id: "double-grilled",
    name: "double grilled chicken thigh",
    allergens: "no known allergens",
    calories: 252,
    price: 2.69,
  },
  {
    id: "chicken-breast",
    name: "chicken breast",
    allergens: "no known allergens",
    calories: 93,
  },
  {
    id: "grilled-chicken",
    name: "grilled chicken thigh",
    allergens: "no known allergens",
    calories: 126,
  },
  {
    id: "falafel",
    name: "falafel",
    allergens: "Contains gluten",
    calories: 148,
  },
];

export const fakeFoodOption_1: FoodOption = {
  option_display_name: "Choose your protein",
  option_name: "extra protien",
  short_description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  option_required_flg: 1,
  option_selection_type: OptionSelectionType.RADIO,
  option_items: fakeFoodOptionItems,
};

export const fakeFoodOption_2: FoodOption = {
  option_display_name: "Choose your carbohydrates",
  option_name: "extra protien",
  short_description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  option_required_flg: 0,
  option_selection_type: OptionSelectionType.CHECKBOX,
  option_items: fakeFoodOptionItems,
};

export const fakeFoodProduct: FoodProduct = {
  name: "Halloumi & Roasted Veg Salad Platter",
  thumbnail:
    "https://rs-menus-api.roocdn.com/images/491fc50c-93bf-4f7b-85ee-ca56ec982922/image.jpeg?width=123&height=123&auto=webp&format=jpg&fit=crop",
  calories: "367 kcal",
  price: "£59.99",
  short_description:
    "A feast for 6 people! halloumi with pesto, roasted peppers, ...",
  description:
    "A feast for 6 people! halloumi with pesto, roasted peppers, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  ingredients: ["eggs", "milk", "mustard", "sulphur dioxide/sulphites"],
  products_options: [fakeFoodOption_1,fakeFoodOption_2],
};

export const fakeFoodProducts: FoodProduct[] = [
  fakeFoodProduct,
  fakeFoodProduct,
  fakeFoodProduct,
  fakeFoodProduct,
  fakeFoodProduct,
  fakeFoodProduct,
];

export const fakeFoodMenuSections: FoodMenuSection[] = [
  { id: "platters", name: "Platters", menu_products: fakeFoodProducts },
  {
    id: "houseSpecial",
    name: "House Special",
    menu_products: fakeFoodProducts,
  },
  {
    id: "CreateYourOwn",
    name: "Create your own",
    menu_products: fakeFoodProducts,
  },
  { id: "gymFood", name: "Gym food", menu_products: fakeFoodProducts },
  {
    id: "hotPowerBowls",
    name: "Hot Power Bowls",
    menu_products: fakeFoodProducts,
  },
  {
    id: "rainbowWraps",
    name: "Rainbow Wraps",
    menu_products: fakeFoodProducts,
  },
  { id: "veganMenu", name: "Vegan Menu", menu_products: fakeFoodProducts },
  {
    id: "snacksSides",
    name: "Snacks & Sides",
    menu_products: fakeFoodProducts,
  },
  {
    id: "yoghurtFruit",
    name: "Yoghurt & Fruit",
    menu_products: fakeFoodProducts,
  },
  { id: "coldDrinks", name: "Cold Drinks", menu_products: fakeFoodProducts },
  {
    id: "smoothiesShakesJuice",
    name: "Smoothies, shakes & juice",
    menu_products: fakeFoodProducts,
  },
];

export const fakeRestaurant: Restaurant = {
  name: "Toss - St Martin's Lane",
  thumbnail:
    "https://rs-menus-api.roocdn.com/images/57800532-e16e-4743-83fb-06c3c2230d76/image.jpeg?width=538&height=302&auto=webp&format=jpg&fit=crop",
  info:fakeRestaurantInfo,
};

export const fakeFoodMenu = {
  // id: '1',
  name: "Platters",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  min_price:7.12345,
  overall_rating: 4.7,
  tags:["chicken", "salad", "healthy"],
  sections: fakeFoodMenuSections,
  restaurant: fakeRestaurant,
};
