import { useGetFeaturesQuery } from "@/redux/api/api";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const PcBuilder = () => {
  const { data, isLoading, isError, error } = useGetFeaturesQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 6000,
  });

  const [disableButton, setDisableButton] = useState(true);
  const handleButtonClick = () => {
    alert("Button clicked!"); // Show a browser alert
  };
  useEffect(() => {
    const areAllImportantsTrue = data?.data.every((item) => item.important);
    setDisableButton(!areAllImportantsTrue);
  }, [data?.data]);
  return (
    <div className="w-full h-full">
      <div className="mt-52 flex justify-center items-center">
        <div className="grid w-full h-full lg:w-9/12 grid-cols-1 gap-3">
          {data?.data.map((category) => (
            <div
              key={category?._id}
              className="lg:p-5 sm:p-1 sm:w-full sm:h-full lg:w-9/12 bg-slate-200 rounded-md flex justify-between"
            >
              <div>
                <div className="flex gap-5 ">
                  <div className="border border-red-300 shadow-md sm:p-1 lg:p-2">
                    <h4 className="font-bold lg:mb-4 sm:mb-2">
                      {category.categoryName}{" "}
                    </h4>
                    <img
                      src={category?.image}
                      alt=""
                      className="w-7 h-7 gap-4"
                    />
                  </div>

                  {category?.product ? (
                    <div className="lg:p-5 sm:p-1 border border-yellow-200 lg:w-72 sm:w-56 flex justify-between items-center gap-28 ">
                      <div className="flex justify-center items-center gap-2">
                        <img
                          src="https://www.startech.com.bd/image/cache/catalog/processor/amd/Athlon/athlon-228x228.jpg"
                          className="w-8  h-8 mr-2 stroke-current"
                        />
                        <h2 className="font-bold">
                          {category?.product.productName}
                        </h2>
                      </div>

                      <h2 className="font-bold text-yellow-400">
                        {category?.product.price} ${" "}
                      </h2>
                    </div>
                  ) : (
                    <p className="text-gray-600 ">Required</p>
                  )}
                </div>
              </div>
              <div>
                <Link href={`/featureCategory/${category?._id}`}>
                  <button
                    disabled={category?.important && category?.product}
                    className="btn btn-primary lg:p-3 sm:p-1 hover:bg-green-500 text-white flex justify-center items-center mx-auto"
                  >
                    Select
                  </button>
                </Link>
              </div>
            </div>
          ))}
          <div>
            <button
              disabled={disableButton}
              onClick={handleButtonClick}
              className="btn btn-primary p-4"
            >
              Complete{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PcBuilder;
