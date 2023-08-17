import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import News from "./Component/News";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Home from "./Component/Home";

export default function App() {
  const [progress, setProgress] = useState(0);

  const ProgressBar = (progress) => {
    setProgress(progress);
  };
  return (
    <BrowserRouter>
      <Navbar />

      <LoadingBar color="red" progress={progress} height={3} />

      <Routes>
        <Route key="Home" path="/" element={<Home />} />

        <Route key="About" path="About" element={<About />} />

        <Route key="Contact" path="contact" element={<Contact />} />

        <Route
          path="business"
          element={
            // key dena important hai iske bina path rerender nhi hoga aur na he us path category ka news show kre ga path aae ga url me but rerender nhi hoga ....
            <News
              setProgress={setProgress}
              apikey={process.env.REACT_APP_NEWS_API}
              key="business"
              pageSize={12}
              country="In"
              category="business"
            />
          }
        />

        <Route
          path="entertainment"
          element={
            <News
              setProgress={setProgress}
              apikey={process.env.REACT_APP_NEWS_API}
              key="entertainment"
              pageSize={12}
              country="In"
              category="entertainment"
            />
          }
        />

        <Route
          path="general"
          element={
            <News
              setProgress={setProgress}
              apikey={process.env.REACT_APP_NEWS_API}
              key="general"
              pageSize={12}
              country="In"
              category="general"
            />
          }
        />

        <Route
          path="health"
          element={
            <News
              setProgress={setProgress}
              apikey={process.env.REACT_APP_NEWS_API}
              key="health"
              pageSize={12}
              country="In"
              category="health"
            />
          }
        />

        <Route
          path="science"
          element={
            <News
              setProgress={setProgress}
              apikey={process.env.REACT_APP_NEWS_API}
              key="science"
              pageSize={12}
              country="In"
              category="science"
            />
          }
        />

        <Route
          path="sports"
          element={
            <News
              setProgress={setProgress}
              apikey={process.env.REACT_APP_NEWS_API}
              key="sports"
              pageSize={12}
              country="In"
              category="sports"
            />
          }
        />

        <Route
          path="technology"
          element={
            <News
              setProgress={setProgress}
              apikey={process.env.REACT_APP_NEWS_API}
              key="technology"
              pageSize={12}
              country="In"
              category="technology"
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
