import RootLayout from "@/components/Layouts/RootLayout";
import Link from "next/link";

const ProductDetailPage = ({ categoryProduct }) => (
  <div className="mt-32 grid grid-cols-1 lg:grid-cols-3 gap-3">
    {categoryProduct?.map((product) => (
      <div
        key={product._id}
        className="bg-white shadow-md border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#" className="flex justify-center items-center">
          {/* <img  src="" alt=""  > */}
          <img className="rounded-t-lg" src={product?.image} alt="" />
        </a>
        <div className="p-2">
          <a href="#">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
              {product?.productName}
            </h5>
          </a>
          <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
            {product?.description}
          </p>

          <div class="flex justify-between item-center gap-2">
            <p class="text-gray-500 font-medium ">{product?.category}</p>
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
                {product?.individual_rating}
                <span class="text-gray-500 font-normal">(76 reviews)</span>
              </p>
            </div>

            <div class="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 ">
              {product?.price}$
            </div>
            <div class="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 ">
              {product?.status ? "In-Stock" : "Out-Stock"}
            </div>
          </div>

          <Link
            href={`/featureProduct/${product?._id}`}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="-mr-1 ml-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    ))}
    {/* <h2>{featureProduct?.productName}</h2> */}
  </div>
);
export default ProductDetailPage;

ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// export const getStaticPaths = async () => {
//   const res = await fetch("http://localhost:5000/news");
//   const newses = await res.json();

//   const paths = newses.map((news) => ({
//     params: { newsId: news.id },
//   }));

//   return { paths, fallback: false };
// };

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/api/v1/featureProduct/category-product/${params.categoryProductId}`
  );
  const data = await res.json();
  console.log("Data:", data);
  return {
    props: {
      categoryProduct: data?.data,
    },
  };
};
