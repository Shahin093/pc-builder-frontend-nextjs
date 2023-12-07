import React from "react";

const ChooseUsPage = () => {
  return (
    <section class="mb-16">
      <div class="container__main">
        <div class="text-center mb-12">
          <h3 class="text-sky-500 font-semibold text-2xl">Why choose us?</h3>
          <p class="text-gray-600 mt-1">
            Products and components delivered to your home
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-7">
          <article class="card__hover__bg">
            <i class="fa-solid fa-truck-fast text-5xl text-sky-500"></i>
            <h3 class="text-xl font-semibold text-gray-800 my-4">
              Free shipping
            </h3>
            <p class="text-sm text-gray-600">
              Enjoy Order in a hand using the fresness of groceries.
            </p>
          </article>

          <article class="card__hover__bg">
            <i class="fa-solid fa-hand-holding-dollar text-5xl text-sky-500"></i>
            <h3 class="text-xl font-semibold text-gray-800 my-4">
              15 days returns
            </h3>
            <p class="text-sm text-gray-600">
              Order in a handy way using the freshness of the groceries.
            </p>
          </article>

          <article class="card__hover__bg">
            <i class="fa-solid fa-building-lock text-5xl text-sky-500"></i>
            <h3 class="text-xl font-semibold text-gray-800 my-4">
              Secure checkout
            </h3>
            <p class="text-sm text-gray-600">
              If you get rotten items - return immediately to us.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ChooseUsPage;
