import RootLayout from "@/components/Layouts/RootLayout";

const ProductDetailPage = ({ featureProduct }) => (
  <div className="mt-32">
    <div className="grid grid-cols-1 lg:grid-cols-2 rounded-lg   dark:bg-neutral-700  md:flex-row">
      <div className="flex justify-center items-center">
        <img
          className=" rounded-t-lg  md:!rounded-none md:!rounded-l-lg"
          src={featureProduct?.image}
          alt=""
        />
      </div>
      <div className="justify-start p-2">
        <div className="flex justify-between ">
          <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
            {featureProduct.productName}
          </h5>
        </div>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {featureProduct?.description}
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-300">
          Last updated 3 mins ago
        </p>

        <div class="flex justify-between item-center gap-2">
          <p class="text-gray-500 font-medium ">{featureProduct?.category}</p>
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-yellow-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <p class="text-gray-600 font-bold text-sm ml-1">
              {featureProduct?.individual_rating}
              <span class="text-gray-500 font-normal">(76 reviews)</span>
            </p>
          </div>

          <div class="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 ">
            {featureProduct?.price}$
          </div>
          <div class="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 ">
            {featureProduct?.status ? "In-Stock" : "Out-Stock"}
          </div>
        </div>
        <h3>Key Featured : {featureProduct?.key_feature}</h3>
      </div>
    </div>
  </div>
);
export default ProductDetailPage;

ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/api/v1/featureProduct/product/${params.featureProductId}`
  );
  const data = await res.json();
  return {
    props: {
      featureProduct: data?.data,
    },
  };
};
