import happyHour from "../assets/images/pizza.jpg";
import weekendBrunch from "../assets/images/bruschetta.jpg";
import comboMeals from "../assets/images/caesar-salad.jpg";
import liveMusic from "../assets/images/dessert.jpg";
import chefSpecial from "../assets/images/fresh-juice.jpg";
import privateParties from "../assets/images/pizza.jpg";

const offersData = [
  {
    id: 1,
    title: "Happy Hour",
    description: "20% off on drinks from 5 PM to 7 PM.",
    discount: "20% OFF",
    type: "Discount",
    rating: 4.5,
    popular: true,
    image: happyHour,
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
    image: weekendBrunch,
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
    image: comboMeals,
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
    image: chefSpecial,
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
    image: liveMusic,
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
    image: privateParties,
    endTime: new Date().getTime() + 86400000 * 14,
  },
];

const events = [
  {
    id: 1,
    title: "Live Music Night",
    description: "Enjoy live performances every Friday night",
    image: liveMusic,
    icon: "🎶"
  },
  {
    id: 2,
    title: "Chef Special Event",
    description: "Exclusive dining experience with our head chef",
    image: chefSpecial,
    icon: "👨‍🍳"
  },
  {
    id: 3,
    title: "Private Parties",
    description: "Host your special events in our private dining area",
    image: privateParties,
    icon: "🎉"
  }
];

export default offersData;
export { events };
