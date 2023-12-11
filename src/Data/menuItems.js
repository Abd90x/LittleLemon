import Hummus from "../Assets/images/Hummus.png";
import Falafel from "../Assets/images/Falafel.png";
import GrapeLeaves from "../Assets/images/GrapeLeaves.png";

import GrilledChicken from "../Assets/images/GrilledChicken.png";
import Kebabs from "../Assets/images/Kebabs.png";
import Moussaka from "../Assets/images/moussaka.png";

import Baklava from "../Assets/images/Baklava.png";
import Kunafa from "../Assets/images/Kunafa.png";
import RicePudding from "../Assets/images/ricepudding.png";

export const menuItems = {
  menu: [
    {
      category: "Appetizers",
      items: [
        {
          name: "Hummus Platter",
          description:
            "Creamy chickpea hummus served with pita bread and assorted vegetables.",
          image: Hummus,
          price: 8.99,
        },
        {
          name: "Falafel",
          description:
            "Deep-fried chickpea patties seasoned with herbs and spices, served with tahini sauce.",
          image: Falafel,
          price: 6.99,
        },
        {
          name: "Stuffed Grape Leaves",
          description:
            "Grape leaves stuffed with rice, pine nuts, and fresh herbs, drizzled with olive oil.",
          image: GrapeLeaves,
          price: 7.5,
        },
      ],
    },
    {
      category: "Main Course",
      items: [
        {
          name: "Mediterranean Grilled Chicken",
          description:
            "Tender chicken marinated in Mediterranean spices, grilled to perfection.",
          image: GrilledChicken,
          price: 14.99,
        },
        {
          name: "Lamb Kebabs",
          description:
            "Skewers of succulent lamb, marinated and grilled, served with grilled vegetables.",
          image: Kebabs,
          price: 16.5,
        },
        {
          name: "Vegetarian Moussaka",
          description:
            "Layers of eggplant, potato, and zucchini topped with creamy béchamel sauce, baked to perfection.",
          image: Moussaka,
          price: 12.99,
        },
      ],
    },
    {
      category: "Desserts",
      items: [
        {
          name: "Baklava",
          description:
            "Layers of filo pastry filled with nuts and sweetened with honey syrup.",
          image: Baklava,
          price: 5.99,
        },
        {
          name: "Kunafa",
          description:
            "Sweet and crunchy pastry filled with cheese, topped with syrup and pistachios.",
          image: Kunafa,
          price: 7.25,
        },
        {
          name: "Rice Pudding",
          description:
            "Creamy rice pudding flavored with cinnamon and vanilla, served chilled.",
          image: RicePudding,
          price: 4.99,
        },
      ],
    },
  ],
};
