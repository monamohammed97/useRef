import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState("");
  const prevData = useRef();
  useEffect(() => {
    prevData.current = data;
  });
  const prevState = prevData.current;
  return (
    <div className="App">
      <input
        value={data}
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
      <h1>
        Hello CodeSandbox {data}, prev: {prevState}
      </h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
