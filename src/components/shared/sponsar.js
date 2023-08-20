import React from "react";

const SponsarPage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-base-200 mb-10">
      <div className="transition duration-0 hover:duration-150 hidden lg:block">
        <img
          src="https://techbd.com.bd/wp-content/uploads/2021/04/11th-gen-intel-min-600x250-1.png"
          alt=""
          className="bg-base-200"
        />
      </div>
      <div className="transition duration-150 ease-out hover:ease-in">
        <img
          src="https://techbd.com.bd/wp-content/uploads/2021/04/tl12-corsair-home-banner-600x250-1.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default SponsarPage;
