import React from "react";
import Container from "./Container";

const LoadingSpinner = () => {
  return (
    <Container>
      <div className="loader  flex justify-center items-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    </Container>
  );
};

export default LoadingSpinner;
