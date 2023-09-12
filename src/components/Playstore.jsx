import "./Playstore.css";
import mobile from '../Pictures/mobile.png'

const Playstore = () => {
  return (
    <div className="filled">
      <div className="bg">
        <p>Food App</p>
        <h1>Why stay hungry when
             you can order form Bella Onojie</h1>
             <p className="pp">Download the bella onoje’s food app now on</p>
             <div className="btns">
             <button className="btn">Play Store</button>
             <button className="btn">App Store</button>

             </div>
             
      </div>
      <div className="mobile">
        <img src={mobile} alt="" />
        <hr/>
      </div>
     
    </div>
  );
};

export default Playstore;
