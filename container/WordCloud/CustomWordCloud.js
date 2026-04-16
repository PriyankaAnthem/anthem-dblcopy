"use client";

import { useEffect, useState } from "react";
import ReactWordcloud from "react-wordcloud";

export default function CustomWordCloud({ words }) {
  const [formattedWords, setFormattedWords] = useState([]);

  useEffect(() => {
    // Format words into an array that includes text and value
    const updatedWords = words.map((word) => ({
      text: word.text,
      value: word.value,
    }));
    setFormattedWords(updatedWords);
  }, [words]);

  const options = {
    fontSizes: [20, 60],
    fontFamily: "sans-serif",
    scale: "sqrt",
    spiral: "archimedean",
    rotations: 5,
    rotationAngles: [0, -90],
    padding: 5,
    transitionDuration: 1000,
    svgAttributes: {
      width: 500,
      height: 500,
      viewBox: "0 0 500 500",
    },
    textAttributes: {
      className: "custom-wordcloud-text",
      fill: "#e377c2",
      fontFamily: "Arial",
      fontSize: "35px",
      textAnchor: "middle",
    },
    callbacks: {
      onWordClick: (word, event) => {
        console.log("Word clicked: ", word.text);
      },
    },
  };

  const wordLayout = (word, width, height) => {
    return (
      <g>
        <rect
          x={word.x - word.width / 2 - 5}
          y={word.y - word.height / 2 - 5}
          width={word.width + 10}
          height={word.height + 10}
          fill="#e377c2"
          rx="5"
          ry="5"
        />
        <text
          x={word.x}
          y={word.y}
          fontSize={word.fontSize}
          fill="#ffffff"
          textAnchor="middle"
          style={{ pointerEvents: "none" }}
        >
          {word.text}
        </text>
      </g>
    );
  };

  return (
    <div style={{ margin: "0 auto" }}>
      <ReactWordcloud
        words={formattedWords}
        options={options}
        renderWord={wordLayout}
      />
    </div>
  );
}
