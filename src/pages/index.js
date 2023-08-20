import RootLayout from "@/components/Layouts/RootLayout";
import Catagories from "@/components/UI/catagories";
import ProductsPage from "@/components/UI/products";
import SponsarPage from "@/components/shared/sponsar";

export default function HomePage() {
  return (
    <div>
      <div className="mt-32    bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <img
            src="https://techbd.com.bd/wp-content/uploads/2021/06/Web-Banner-desktop-2-1300x545-1-800x335.jpg"
            className=" rounded-lg "
          />
          <div>
            <h1 className="text-5xl font-bold">
              Leading Computer, Laptop & Retail & Online Shop in Bangladesh
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-gradient-to-b from-orange-400 to-blue-400 text-white font-bold">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <ProductsPage></ProductsPage>
      <Catagories></Catagories>
      <SponsarPage></SponsarPage>
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
