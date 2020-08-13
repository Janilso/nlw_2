import React from "react";
import "./styles.scss";

type TypesLoader = "primary" | "secondary" | "white";
interface LoaderProps {
  size?: string;
  type?: TypesLoader;
}

const Loader: React.FC<LoaderProps> = ({ size = "5rem", type = "primary" }) => {
  return (
    <span
      style={{ height: size, width: size }}
      className={`comp-loader comp-loader__${type}`}
    ></span>
  );
};

export default Loader;
