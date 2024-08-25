import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img
            src="https://res.cloudinary.com/dvvanf54x/image/upload/v1724489530/people_bfsjf8.webp"
            alt=""
          />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Apps</h2>
          <p>
            We develop high-performance web apps that are responsive, scalable,
            and user-friendly. Our solutions are tailored to meet your unique
            needs, delivering seamless experiences across all devices with a
            focus on functionality, speed, and design.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Android</h2>
          <p>
            We develop Android apps that are intuitive, reliable, and optimized
            for performance. Our apps are designed to enhance user experience
            with smooth functionality, modern design, and seamless compatibility
            across Android devices.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>IOS</h2>
          <p>
            We develop iOS apps that are sleek, secure, and optimized for
            exceptional performance. Our apps blend seamless functionality with
            elegant design, delivering a premium user experience across all
            Apple devices.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Custom Apps</h2>
          <p>
            We develop custom apps tailored to your specific needs, offering
            unique features and seamless user experiences. Our solutions are
            designed to align perfectly with your goals, ensuring high
            performance, scalability, and innovative functionality.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
