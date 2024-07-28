import { CSSProperties, useEffect, useState } from "react";
import "./Loader.css";
import { HashLoader } from "react-spinners";

const Loader = () => {
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => {
    window.addEventListener("load", loadTimer);
    return () => {
      window.removeEventListener("load", loadTimer);
    };
  });

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "black",
  };

  function loadTimer() {
    setTimeout(() => {
      if (!isLoaded) {
        console.log("loaded");
        setLoaded(true);
      }
    }, 1000);
  }
  return (
    <div className={["loader", isLoaded ? "loader-hidden" : ""].join(" ")}>
      <HashLoader
        loading={!isLoaded}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="SyncLoader"
        color="rgba(74, 47, 189, 0.5)"
      />
    </div>
  );
};

export default Loader;
