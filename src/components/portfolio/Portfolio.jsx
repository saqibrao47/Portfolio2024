import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Next JS Website",
    img: "https://res.cloudinary.com/dvvanf54x/image/upload/v1723983761/Cover_tw2ybd.png",
    desc: "Built high-performance, SEO-friendly website using Next.js, featuring server-side rendering (SSR), dynamic routing, and optimized loading for a seamless user experience. The project emphasizes modern design, scalability, and lightning-fast performance.",
  },
  {
    id: 2,
    title: "E-Commerce",
    img: "https://res.cloudinary.com/dvvanf54x/image/upload/v1724007427/Lumiere_Single_Product_Store_Community_txlgpm.png",
    desc: "Developed a fully customized Shopify store with tailored themes, optimized for performance, user experience, and seamless e-commerce functionality. Integrated secure payment gateways, custom apps, and responsive design to boost conversion rates and enhance the shopping experience.",
  },
  {
    id: 3,
    title: "React JS App",
    img: "https://res.cloudinary.com/dvvanf54x/image/upload/v1724583911/EZT_rrasnn.png",
    desc: "Developed a sleek, responsive web application using React.js and Tailwind CSS, combining modern UI components with efficient utility-first styling. The project focuses on fast performance, clean code structure, and a seamless user experience across all devices.",
  },
  {
    id: 4,
    title: "Wordpress",
    img: "https://res.cloudinary.com/dvvanf54x/image/upload/v1724584547/LaRoza_aghnet.png",
    desc: "Created a feature-rich e-commerce website using WordPress and WooCommerce, offering a fully customizable and scalable online store. Integrated payment gateways, responsive design, and SEO optimization to deliver a seamless shopping experience and drive sales.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button> <a href="https://rftechnologies.com.pk/">See Demo</a></button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
    
  );
};

export default Portfolio;
