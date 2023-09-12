
import "./Appwork.css";
import mob from "../Pictures/mob.png";

const Appwork = () => {
  return (
    <div className="container">

      <h1>How the app works</h1>
      <div className="all">
      <div className="mob">
        <img src={mob} alt="" />
      </div>
      <div className="mc">
        <b>Create an account</b>
        <h2>Create/login to an existing account to get started</h2>
        <p2>An account is created with your email and a desired password</p2>
      </div>
      </div>
    </div>
  );
};

export default Appwork;
