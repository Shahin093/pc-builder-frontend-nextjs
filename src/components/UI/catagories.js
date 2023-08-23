import { useGetFeaturesQuery } from "@/redux/api/api";
import Link from "next/link";

const Catagories = () => {
  const { data, isLoading, isError, error } = useGetFeaturesQuery(undefined);

  return (
    <div
      className="grid grid-cols-3
    lg:grid-cols-6 md:grid-cols-4 gap-3 bg-base-200 mt-10 p-4 mb-10"
    >
      {data?.data.map((feature) => (
        <Link key={feature.age} href={`/categoryProduct/${feature?._id}`}>
          <div className="bg-gray-300  flex justify-center items-center h-32 rounded-md hover:text-yellow-600">
            <div>
              <div className="flex justify-center items-center">
                <img src={feature.image} alt="dfd" />
              </div>
              <h2 className="flex justify-center items-center">
                {" "}
                {feature?.categoryName}
              </h2>
            </div>
          </div>
        </Link>
      ))}{" "}
    </div>
  );
};

export default Catagories;

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
