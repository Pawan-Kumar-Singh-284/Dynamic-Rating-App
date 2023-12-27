import style from "./Point.module.css";

export default function Points({
  rating,
  setRating,
  hover,
  setHover,
  setSubmit,
  btnHover,
  setBtnHover,
}) {
  let buttons = [1, 2, 3, 4, 5];
  return (
    <>
      <div className={style.pointsWrapper}>
        {buttons.map((point) => {
          return (
            <button
              style={{
                backgroundColor:
                  rating === point
                    ? "#7C8798"
                    : hover === point
                    ? "#FC7614"
                    : "#262E38",
                color:
                  rating === point
                    ? "#fff"
                    : hover === point
                    ? "#fff"
                    : "#7C8798",
                transition: "all 0.3s",
              }}
              onClick={() => setRating(point)}
              onMouseEnter={() => setHover(point)}
              onMouseLeave={() => setHover(null)}
              key={point}
              className={style.points}
            >
              {point}
            </button>
          );
        })}
      </div>
      <button
        style={{
          backgroundColor: btnHover ? "#fff" : "#FC7614",
          color: btnHover ? "#FC7614" : "#fff",
          transition: "all 0.3s",
        }}
        onClick={() => setSubmit(true)}
        onMouseEnter={() => setBtnHover(true)}
        onMouseLeave={() => setBtnHover(false)}
        className={style.submit}
      >
        SUBMIT
      </button>
    </>
  );
}
