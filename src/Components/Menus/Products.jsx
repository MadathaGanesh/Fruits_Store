import { FaRupeeSign } from "react-icons/fa";
import apple from "../../assets/Images/apple.jpg";
import orange from "../../assets/Images/orange.jpg";
import Guava from "../../assets/Images/Guava.jpg";
import Kiwi from "../../assets/Images/kiwi.jpg";
import cherry from "../../assets/Images/cherry.jpg";
import papaya from "../../assets/Images/papaya.jpg";
import pineapple from "../../assets/Images/pineapple.jpg";
import avocada from "../../assets/Images/avocada.webp";
import Grapes from "../../assets/Images/Grapes.jpg";
import { motion } from "framer-motion";
import { FadeLeft } from "../../utility/Animation";
import { useState } from "react";

const MenuData = [
  {
    id: 1,
    title: "Fresh Apples",
    link: "/",
    price: "15/-",
    img: apple,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Fresh Oranges",
    link: "/",
    price: "10/-",
    img: orange,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Fresh Pineapples",
    link: "/",
    price: "40/-",
    img: pineapple,
    delay: 0.9,
  },
  {
    id: 4,
    title: "Fresh Papaya",
    link: "/",
    price: "35/-",
    img: papaya,
    delay: 1.2,
  },
  {
    id: 5,
    title: "Fresh Guava",
    link: "/",
    price: "25/-",
    img: Guava,
    delay: 1.5,
  },
  {
    id: 6,
    title: "Fresh kiwi",
    link: "/",
    price: "20/-",
    img: Kiwi,
    delay: 1.8,
  },
  {
    id: 7,
    title: "Fresh Avocada",
    price: "30/-",
    img: avocada,
    delay: 0.3,
  },
  {
    id: 8,
    title: "Fresh cherry",
    link: "/",
    price: "10/-",
    img: cherry,
    delay: 0.6,
  },
  {
    id: 9,
    title: "Fresh Grapes",
    price: "40/-",
    img: Grapes,
    delay: 0.9,
  },
];

const Products = () => {
  const [visibleItems, setVisibleItems] = useState(6);
  const [showmore, setShowmore] = useState(false);
  const handleShowMore = () => {
    setVisibleItems(MenuData.length);
    setShowmore(true);
  };

  return (
    <section id="products">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-serif text-3xl lg:text-4xl font-semibold text-left pb-8 uppercase  "
        >
          Our Menu
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-3 gap-8 ">
          {MenuData.slice(0, visibleItems).map((menu) => {
            return (
              <motion.div
                variants={FadeLeft(menu.delay)}
                initial="hidden"
                whileInView={"visible"}
                whileHover={{ scale: 1.1 }}
                key={menu.id}
                className="bg-white rounded-3xl px-8 py-1 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center "
              >
                <img
                  src={menu.img}
                  alt=""
                  className="w-[60px] h-[50px] mb-2 scale-125  transform -translate-y-1 rounded-3xl "
                />
                <h2 className="pl-3 ">{menu.title}</h2>
                <p className="flex text-red-600 font-semibold">
                  <span className="pt-1">
                    <FaRupeeSign />
                  </span>
                  {menu.price}
                </p>
                <button className="flex flex-col ml-3 text-white p-3 bg-red-500 hover:font-semibold hover:bg-red-600 rounded-lg">
                  Add to cart
                </button>
              </motion.div>
            );
          })}
        </div>

        {!showmore && (
          <div className="text-center mt-9">
            <button
              className="bg-primary text-white hover:bg-third hover:text-white p-3 hover:font-semibold rounded-lg"
              onClick={handleShowMore}
            >
              show more
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
