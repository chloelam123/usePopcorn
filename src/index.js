import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import App from "./App-v2";
// import StarRating from "./starRating";
// import SelfStarRating from "./SelfStarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating color="blue" onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <SelfStarRating
      maxRating={"sss"}
      color={"#ffc149"}
      size={48}
      message={["Terrible", "Bad", "Okay", "Good", "Excellent"]}
    />
    <SelfStarRating color="red" /> */}
    {/* <Test /> */}
    {/* <SelfStarRating maxRating={10} />
    <SelfStarRating /> */}
    <App />
    {/* <StarRating
      defaultRating={3}
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating maxRating={5} color="red" className="test" defaultRating={3} />

    <Test /> */}
  </React.StrictMode>
);
