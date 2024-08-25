import { motion } from "framer-motion";
import { FadeLeft } from "../../utility/Animation";
import bannerLast from "../../assets/Images/bannerLast.jpg";
import { FaShoppingBag } from "react-icons/fa";

const bgStyle = {
  backgroundImage: `url(${bannerLast})`,
  backgroundPositon: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const Banner = () => {
  return (
    <section id="contact" className="container">
      <div
        className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-2xl"
        style={bgStyle}
      >
        {/* Empty div */}
        <div></div>

        {/* Brand Info */}
        <div className="flex flex-col justify-center">
          <motion.h1
            variants={FadeLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl p-5 font-semibold font-serif uppercase sm:text-center sm:leading-relaxed"
          >
            Get Fresh <br /> fruits today
          </motion.h1>

          <motion.p
            variants={FadeLeft(0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="pt-7 leading-relaxed indent-20  "
          >
            Discover a wide variety of fresh, organic fruits delivered right to
            your doorstep. At FreshHarvest, we offer seasonal favorites and
            exotic selections, all sourced from trusted local farms. Enjoy fast
            delivery, sustainable packaging, and unbeatable quality with every
            order!
          </motion.p>

          {/* Button session */}
          <motion.div
            variants={FadeLeft(1.2)}
            initial="hidden"
            animate="visible"
            className="flex justify-center md:justify-start"
          >
            <button className="primary-btn flex items-center gap-3 mt-6">
              Order Now
              <FaShoppingBag className="pl-3 text-2xl" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
