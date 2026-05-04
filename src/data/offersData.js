const offersData = [
  {
    id: 1,
    title: "Happy Hour",
    description: "20% off on drinks from 5 PM to 7 PM.",
    discount: "20% OFF",
    type: "Discount",
    rating: 4.5,
    popular: true,
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800",
    endTime: new Date().getTime() + 86400000 * 7,
  },
  {
    id: 2,
    title: "Weekend Brunch",
    description: "Unlimited brunch with live counters.",
    discount: "BRUNCH",
    type: "Special",
    rating: 4.7,
    popular: false,
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=800",
    endTime: new Date().getTime() + 86400000 * 5,
  },
  {
    id: 3,
    title: "Combo Meals",
    description: "Family combo meals at best price.",
    discount: "SAVE BIG",
    type: "Discount",
    rating: 4.6,
    popular: true,
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800",
    endTime: new Date().getTime() + 86400000 * 10,
  },
  {
    id: 4,
    title: "Seasonal Special",
    description: "Chef's special seasonal dishes.",
    discount: "CHEF'S PICK",
    type: "Special",
    rating: 4.8,
    popular: true,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
    endTime: new Date().getTime() + 86400000 * 3,
  },
  {
    id: 5,
    title: "Lunch Deal",
    description: "30% off on all lunch items.",
    discount: "30% OFF",
    type: "Discount",
    rating: 4.4,
    popular: false,
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800",
    endTime: new Date().getTime() + 86400000 * 2,
  },
  {
    id: 6,
    title: "Private Dining",
    description: "Exclusive private dining experience.",
    discount: "VIP",
    type: "Special",
    rating: 4.9,
    popular: true,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    endTime: new Date().getTime() + 86400000 * 14,
  },
];

const events = [
  {
    id: 1,
    title: "Live Music Night",
    description: "Enjoy live performances every Friday night",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",
    icon: "🎶"
  },
  {
    id: 2,
    title: "Chef Special Event",
    description: "Exclusive dining experience with our head chef",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800",
    icon: "👨‍🍳"
  },
  {
    id: 3,
    title: "Private Parties",
    description: "Host your special events in our private dining area",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
    icon: "🎉"
  }
];

export default offersData;
export { events };