import "./Footer.css";
import nav from "../Pictures/nav.png";

const Footer = () => {
  return (
    <div className="conta">
        <div className="alll">
      <div className="footimg">
        <img src={nav} alt="" />
      </div>
      <div className="icon">
     <a href="https://www.facebook.com/"> <i className="fa-brands fa-square-facebook"></i></a>
     <a href="https://www.instagram.com/"> <i className="fa-brands fa-square-twitter"></i></a>
      <a href="https://twitter.com/"><i className="fa-brands fa-square-instagram"></i></a>
      </div>
      <div className="ftlast">
        <p>Copywright 2020 Bella Onojie.com</p>
      </div>
      </div>
    </div>
  );
};

export default Footer;
