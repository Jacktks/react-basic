import React from "react";

const SpinnerPage = () => {
  return (
    <div className="waiting">
      <div className="spinner-border text-primary loading" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default SpinnerPage;
