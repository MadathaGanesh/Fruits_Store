import BannerImg2 from "../../assets/Images/BannerImg2.png";
import { motion } from "framer-motion";
import { FadeUp } from "../../utility/Animation";

const Shop = () => (
  <section id="shop">
    <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
      {/* Brand Info */}

      <div className="flex flex-col justify-center">
        <motion.h1
          variants={FadeUp(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="uppercase font-semibold font-serif  text-3xl pb-4"
        >
          Your One-Stop Online Fruit Store
        </motion.h1>

        <div className="flex flex-col items-center">
          <motion.p
            className="leading-relaxed"
            variants={FadeUp(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            At FreshHarvest Fruits, we make it easier than ever to get fresh,
            premium fruits delivered to your doorstep. Whether you are craving
            seasonal delights or looking for exotic varieties, our curated
            selection has something for everyone. With our user-friendly online
            store, you can browse and order in just a few clicks, and our
            seamless delivery service ensures your fruits arrive fresh and fast.
            For an even more convenient experience, download our app and enjoy
            exclusive deals, faster checkout, and order tracking—all in one
            place.
          </motion.p>

          {/* Button Session */}
          <motion.div
            variants={FadeUp(1.2)}
            initial="hidden"
            animate="visible"
            className="flex justify-center md:justify-start"
          >
            <button className="primary-btn text-white rounded-md p-3 mt-6 hover:bg-third hover:font-semibold">
              Download the App
            </button>
          </motion.div>
        </div>
      </div>

      {/* Brand Image */}
      <div className="flex justify-center items-center">
        <motion.img
          initial={{ opacity: 0, x: 200, rotate: 75 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 2, delay: 0.2 }}
          viewport={{ once: true }}
          src={BannerImg2}
          alt=""
          className="w-[350px] md:w-[500px] drop-shadow "
        />
      </div>
    </div>
  </section>
);

export default Shop;
