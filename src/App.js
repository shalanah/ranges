import { useState } from "react";
import Slider from "./Slider";
import Ranges from "./Ranges";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  :root {
    --accent: blue;
  }
`;

export default function App() {
  const [value0, setValue0] = useState(3);
  const onChange0 = (e) => {
    const v = Number(e.target.value);
    setValue0(v);
  };
  const [value1, setValue1] = useState(3);
  const onChange1 = (e) => {
    const v = Number(e.target.value);
    setValue1(v);
  };
  const [value2, setValue2] = useState(5);
  const onChange2 = (e) => {
    const v = Number(e.target.value);
    setValue2(v);
  };
  return (
    <div
      style={{
        margin: "auto",
        width: "90vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Global />
      <Slider
        style={{ margin: "auto" }}
        // disabled={disabled}
        // onDragStart={onDragStart}
        // onDragEnd={onDragEnd}
        value={value0}
        min={0}
        max={20}
        step={1}
        onChange={onChange0}
      />
      <Ranges
        style={{ margin: "auto" }}
        // disabled={disabled}
        // onDragStart={onDragStart}
        // onDragEnd={onDragEnd}
        value1={value1}
        value2={value2}
        min={0}
        max={20}
        step={1}
        onChange1={onChange1}
        onChange2={onChange2}
      />
    </div>
  );
}
