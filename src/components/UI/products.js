import { useGetFeaturesProductQuery } from "@/redux/api/api";
import Link from "next/link";

const ProductsPage = () => {
  const { data, isLoading, isError, error } =
    useGetFeaturesProductQuery(undefined);

  // Check if data is iterable (an array)
  let randomObjects = [];
  if (Array.isArray(data?.data)) {
    randomObjects = [...data.data].sort(() => Math.random() - 0.5).slice(0, 6);

    // Now you can use the randomObjects array as needed
  } else {
    console.error("Data is not in the expected format");
  }

  return (
    <div className="mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 bg-base-200 gap-3">
        {randomObjects.map((featuresProduct) => (
          <div key={featuresProduct._id} className="  bg-base-200   p-2">
            <figure className="pt-2 flex justify-center items-center">
              <img
                src={featuresProduct?.image}
                alt="Shoes"
                className="rounded-lg"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{featuresProduct?.productName}</h2>
              <p>{featuresProduct?.description}</p>

              <div class="flex justify-between item-center gap-2">
                <p class="text-gray-500 font-medium ">
                  {featuresProduct?.category}
                </p>
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
                    {featuresProduct?.individual_rating}
                    <span class="text-gray-500 font-normal">(76 reviews)</span>
                  </p>
                </div>

                <div class="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 ">
                  {featuresProduct?.price}$
                </div>
                <div class="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 ">
                  {featuresProduct?.status ? "In-Stock" : "Out-Stock"}
                </div>
              </div>

              <div className="card-actions">
                <Link href={`/featureProduct/${featuresProduct?._id}`}>
                  <button className="btn bg-gradient-to-b from-orange-400 to-blue-400 text-white font-bold">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

// export const getServerSideProps = async () => {
//   const res = await fetch(
//     "https://pc-builder-backend-shahin093.vercel.app/api/v1/featureProduct"
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch data from the API");
//   }

//   const data = await res.json();

//   return {
//     props: {
//       products: data?.data || [], // Set a default value in case data is undefined
//     },
//   };
// };
