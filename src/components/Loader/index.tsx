import React from "react";

import "./styles.scss";

interface LoaderProps {
  size?: string;
  type?: string;
}

const Loader: React.FC<LoaderProps> = ({
  size = "5rem",
  type = "secondary",
}) => {
  return (
    <span
      style={{
        height: size,
        width: size,
      }}
      className={`comp-loader comp-loader__${type}`}
    ></span>
  );
};

export default Loader;
