import React, { useState } from "react";
import News from "./News";

export default function Home() {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <News
        setProgress={setProgress}
        apikey={process.env.REACT_APP_NEWS_API}
        key="general"
        pageSize={12}
        country="In"
        category="general"
      />
    </div>
  );
}
