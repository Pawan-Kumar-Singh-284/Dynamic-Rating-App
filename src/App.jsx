import { useState } from "react";
import "./App.css";
import WelcomeMessage from "./Components/WelcomeMessage";
import Header from "./Components/Header";
import Points from "./Components/Points";
import logo from "./assets/icon-star.svg";
import Ilustration from "./assets/illustration-thank-you.svg";

function App() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [btnHover, setBtnHover] = useState(false);

  return (
    <>
      {submit === false && (
        <div className="rating-container">
          <Header
            logo={logo}
            text="How did we do?"
            description="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
          />
          <Points
            rating={rating}
            setRating={setRating}
            hover={hover}
            setHover={setHover}
            submit={submit}
            setSubmit={setSubmit}
            btnHover={btnHover}
            setBtnHover={setBtnHover}
          />
        </div>
      )}
      {submit && <WelcomeMessage img={Ilustration} rating={rating} />}
    </>
  );
}

export default App;
