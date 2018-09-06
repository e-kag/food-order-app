const defaultMenuState = [
  {
    id: 'appetizers',
    name: 'Appetizers',
    items: [
      { name: 'Garlic Bread', price: 0.65 },
      { name: 'French Fries', price: 4.95 },
      { name: 'Pita Bread', price: 1.00 },
      { name: 'Homous & Pita', price: 5.95 },
      { name: 'Saganaki', price: 7.50 },
      { name: 'Greek Fries', price: 6.95, detail: 'With Feta & Oregano' },
      { name: 'Spanakopita', price: 6.95 },
      { name: 'Cheese Bread', price: 5.50 },
      { name: 'Skewer', price: 5.95, detail: 'Chicken, Lamb or Beef' },
      { name: 'Rack of Ribs', price: 13.50 },
      { name: 'Pita & Three Dips', price: 11.95 },
      { name: 'Garlic Prawns', price: 7.95 },
      { name: 'Feta & Kalamata Olives', price: 7.50 },
      { name: 'Chicken Strips', price: 7.50 },
      { name: 'Chicken Wings', price: 9.50, detail: 'Salt & Pepper, Hot or BBQ' },
      { name: 'Tzatziki & Pita', price: 5.95 },
      { name: 'Kalmari', price: 8.95 },
      { name: 'Feta Dip and Pita', price: 5.95 },
      { name: 'Roast Potatoes', price: 4.95 },
      { name: 'Keftedes', price: 7.50, detail: '(With Tzatziki)' },
      { name: 'Appetizer Plate', price: 16.95, detail: 'Breaded Prawns, Spinach Pie, Roast Potatoes, Chicken Fingers, Keftedes, Pita Bread and Choice of Dip (No Substitutions)' },
    ]
  },
  {
    id: 'salads',
    name: 'Salads',
    items: [
      { name: 'Ceasar Salad', price: { 'Small': 6.50, 'Large': 7.95 } },
      { name: 'Chicken Caesar', price: 11.95 },
      { name: 'Tossed Salad', price: 4.95 },
      { name: 'Greek Salad', price: { 'Small': 7.95, 'Large': 10.25 } },
      { name: 'Hot Prawn & Mushroom Salad', price: 11.95 },
      { name: 'Grilled Chicken Salad', price: 11.95 },
      { name: 'Chef\'s Salad', price: 7.95, detail: 'Lettuce, Tomatoes, Green Peppers & Feta' },
    ]
  },
  {
    id: 'burgers_wraps',
    name: 'Burgers & Wraps',
    items: [
      { name: 'Pita', price: 7.95, detail: '(Chicken, Lamb, Beef) with Onions, Tomatoes & Tzatziki' },
      { name: 'Prawn Pita', price: 8.95, detail: 'With Onions, Tomatoes & Tzatziki' },
      { name: 'DD Burger', price: 12.95, detail: '(Beef or Chicken) with Fries or Tossed Salad' }
    ]
  },
  {
    id: 'greek',
    name: 'Greek Dishes',
    detail: 'Served with Rice, Potatoes, Tzatziki, Greek Salad & Pita Bread',
    extra: 'Greek Salad: 2.95', //TODO
    items: [
      { name: 'Spinach Pie Dinner', price: 14 },
      { name: 'Kalamari', price: 15 },
      { name: 'Keftedes', price: 15.50 },
      { name: 'Moussaka', price: 16 },
      { name: 'Chicken Souvlaki', price: 16 },
      { name: 'Beef Souvlaki', price: 16 },
      { name: 'Lamb Souvlaki', price: 17 },
      { name: 'Roast Lamb', price: 17 },
      { name: 'Prawn Souvlaki', price: 17.50 },
      { name: 'Lamb Chops', price: 17.50 },
    ]
  },
  {
    id: 'steaks',
    name: 'Steaks'
  },
  {
    id: 'bbq',
    name: 'BBQ'
  },
  {
    id: 'pasta',
    name: 'Pasta'
  },
  {
    id: 'pizza',
    name: 'Pizza'
  }
];

const defaultOrderState = {
  items: [],
  total: 0
};

export const defaultState = {
  menu: defaultMenuState,
  order: defaultOrderState
};