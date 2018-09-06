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
      { name: 'Greek Fries', price: 6.95 },
      { name: 'Spanakopita', price: 6.95 },
      { name: 'Cheese Bread', price: 5.50 },
      { name: 'Skewer', price: 5.95 },
      { name: 'Rack of Ribs', price: 13.50 },
      { name: 'Pita & Three Dips', price: 11.95 },
      { name: 'Garlic Prawns', price: 7.95 },
      { name: 'Feta & Kalamata Olives', price: 7.50 },
      { name: 'Chicken Strips', price: 7.50 },
      { name: 'Chicken Wings', price: 9.50 },
      { name: 'Tzatziki & Pita', price: 5.95 },
      { name: 'Kalmari', price: 8.95 },
      { name: 'Feta Dip and Pita', price: 5.95 },
      { name: 'Roast Potatoes', price: 4.95 },
      { name: 'Keftedes', price: 7.50 },
      { name: 'Appetizer Plate', price: 16.95 },
    ]
  },
  {
    id: 'salads',
    name: 'Salads',
    items: [
      { name: 'Ceasar Salad', price: 6.50 },
      { name: 'Chicken Caesar', price: 11.95 },
      { name: 'Tossed Salad', price: 4.95 },
      { name: 'Greek Salad', price: 7.95 },
      { name: 'Hot Prawn and Mushroom Salad', price: 11.95 },
      { name: 'Grilled Chicken Salad', price: 11.95 },
      { name: 'Chefs Salad', price: 7.95 },
    ]
  },
  {
    id: 'burgers_wraps',
    name: 'Burgers & Wraps'
  },
  {
    id: 'greek',
    name: 'Greek Dishes'
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