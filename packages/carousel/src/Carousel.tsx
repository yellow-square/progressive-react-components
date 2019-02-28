import React, { SFC, useState, ReactElement } from "react";

import "./styles.css";

interface IProps {
  children: ReactElement[];
}

const Carousel: SFC<IProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const next = () =>
    setActiveIndex(Math.min(activeIndex + 1, children.length - 1));
  const prev = () => setActiveIndex(Math.max(activeIndex - 1, 0));
  const moveTo = (index: number) => () => {
    if (index < 0 || index > children.length - 1) {
      return;
    }

    setActiveIndex(index);
  };

  return (
    <div className="prc-carousel">
      <ul
        className="prc-carousel__container"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`
        }}
      >
        {children.map(child => (
          <li className="prc-carousel__slide">{child}</li>
        ))}
      </ul>
      <div className="prc-carousel__controls">
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
      <div className="prc-carousel__pagination">
        {children.map((_, index) => (
          <button onClick={moveTo(index)}>{index}</button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
