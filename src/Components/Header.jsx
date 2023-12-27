
import style from "./Header.module.css";
function Header({ logo, text, description }) {
    return (
      <div className={style.Header}>
        <div className={style.imageDiv}>
          <img src={logo} alt="star-logo-image" />
        </div>
        <h1>{text}</h1>
        <p>{description}</p>
      </div>
    );
  }

  export default Header;