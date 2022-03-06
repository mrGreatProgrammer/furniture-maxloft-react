import React, { useState } from "react";
import "./ScrollerToTop.css";

function ScrollerToTop() {
  let [toTopUpEl, setToTopEl] = useState("isShowBtn_hide");

  window.onscroll = () => {
    if (window.scrollY > 700) {
      setToTopEl("isShowBtn")
    } else if (window.scrollY < 700) {
      setToTopEl("isShowBtn_hide");
    }
  };

  function goToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div id="to-top-up" className={toTopUpEl} onClick={goToTop}>
      {/* <!-- <a href="#" style="color: #5d5d5d;"><i className="fas fa-arrow-up"></i></a> --> */}
      {/* <!-- <i className="fas fa-arrow-alt-circle-up"></i> --> */}
      <i className="far fa-arrow-alt-circle-up"></i>
    </div>
  );
}

export default ScrollerToTop;
