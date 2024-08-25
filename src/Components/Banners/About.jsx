import fruitSplash from "../../assets/Images/fruitSplash.png";
import { motion } from "framer-motion";
import { FadeUp } from "../../utility/Animation";

const About = () => {
  return (
    <section id="about" className="bg-secondary/15 mt-10">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
        {/* Brand Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            viewport={{ once: true }}
            src={fruitSplash}
            alt=""
            className="w-[300px] md:max-w-[400px] h-full object-cover"
          />
        </div>

        {/* Brand Info */}
        <div className="flex flex-col justify-center">
          <motion.h1
            variants={FadeUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl pb-5 font-semibold font-serif uppercase"
          >
            Brand Info
          </motion.h1>
          <motion.p
            variants={FadeUp(0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="leading-relaxed indent-12"
          >
            FreshHarvest Fruits is committed to providing farm-fresh, organic
            fruits right to your doorstep. We partner with local farmers to
            ensure the highest quality, free from harmful pesticides and
            chemicals. Our selection ranges from seasonal favorites to exotic
            varieties, ensuring that you always get the freshest produce
            available. With sustainability at our core, we strive to reduce food
            waste and use eco-friendly packaging. Enjoy the taste of nature with
            our handpicked fruits delivered straight to your home!
          </motion.p>

          <motion.p
            variants={FadeUp(1.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="pt-7 leading-relaxed indent-16 "
          >
            At FreshHarvest Fruits, we believe in the power of fresh,
            nutrient-rich produce to nourish both body and soul. Sourced from
            trusted farms, our fruits are handpicked daily to guarantee peak
            freshness. Join us in supporting sustainable farming practices while
            enjoying nature’s finest flavors!
          </motion.p>

          {/* Button session */}
          <motion.div
            variants={FadeUp(1.5)}
            initial="hidden"
            animate="visible"
            className="flex justify-center md:justify-start"
          >
            <button className="primary-btn text-white rounded-md p-3 mt-6 hover:bg-third hover:font-semibold">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
