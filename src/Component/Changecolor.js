import React, { useEffect, useState } from "react";
import "./Changecolor.css";

function Changecolor() {
  const [Them, setThem] = useState("Change_Color");

  const Background = () => {
    if (Them == "Enable_DarkMode") {
      setThem("Enable_LightMode");
    } else setThem("Enable_DarkMode");
  };

  useEffect(() => {
    document.body.className = Them;
  }, [Them]);

  return (
    <div>
      <div className="form-check form-switch" onClick={() => Background()}>
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label
          className="form-check-label"
          htmlFor="flexSwitchCheckDefault "
          style={{ color: "white" }}
        >
          Enable DarkMode
        </label>
      </div>
    </div>
  );
}

export default Changecolor;
