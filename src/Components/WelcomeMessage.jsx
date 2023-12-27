import style from "./WelcomeMessage.module.css";

export default function WelcomeMessage({ img, rating }) {
  return (
    <div className={style.welcomeBox}>
      <img src={img} alt="illustration-image" />
      <div className={style.selected}>
        <p className={style.message}>You selected {rating} out of 5</p>
      </div>
      <h1>Thank you!</h1>
      <p className={style.text}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}