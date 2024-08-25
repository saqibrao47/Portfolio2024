import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Saqib Tufail
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/Saqibrao778">
            <img src="https://res.cloudinary.com/dvvanf54x/image/upload/v1724489529/facebook_j7urqw.png" alt="Facebook" />
          </a>
          <a href="https://www.tiktok.com/@bentdubaii778">
            <img src="https://res.cloudinary.com/dvvanf54x/image/upload/v1724489531/tiktok_bypqss.png" alt="Tiktok" />
          </a>
          <a href="https://www.instagram.com/saqibrao9">
            <img src="https://res.cloudinary.com/dvvanf54x/image/upload/v1724489528/instagram_ltrqgh.png" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/saqib-tufail778/">
            <img src="https://res.cloudinary.com/dvvanf54x/image/upload/v1724489528/linkedin_liqtwj.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
