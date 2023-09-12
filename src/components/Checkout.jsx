import "./Checkout.css";
import mobb from "../Pictures/mobb.png";

const Checkout = () => {
  return (
    <div className="cont">
        <div className="fill">
          <div className="mob33">
      <div className="mob3">
        <img src={mobb} alt="" />
      </div>
      </div>
      <div className="checkout">
        <b>Checkout</b>
        <h2>When you done check out and get it delivered.</h2>
        <p>When you done check out and get it delivered with ease.</p>
      </div>
      </div>
    </div>
  );
};

export default Checkout;
