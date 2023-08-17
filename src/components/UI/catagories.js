const Catagories = () => {
  let arrayOfObjects = [
    {
      name: "Alice",
      age: 25,
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/gimbal-48x48.png",
    },
    {
      name: "Bob",
      age: 30,
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/gimbal-48x48.png",
    },
    {
      name: "Charlie",
      age: 22,
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/gimbal-48x48.png",
    },
    {
      name: "David",
      age: 28,
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/gimbal-48x48.png",
    },
    {
      name: "Eve",
      age: 23,
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/gimbal-48x48.png",
    },
    {
      name: "Frank",
      age: 35,
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/gimbal-48x48.png",
    },
  ];
  return (
    <div
      className="grid grid-cols-3
    lg:grid-cols-6 md:grid-cols-4 gap-3 bg-base-200 mt-10 p-4"
    >
      {arrayOfObjects.map((data) => (
        <div
          className="bg-gray-300  flex justify-center items-center h-32 rounded-md hover:text-yellow-600"
          key={data.age}
        >
          <div>
            <div className="flex justify-center items-center">
              <img src={data.img} alt="dfd" />
            </div>
            <h2 className="flex justify-center items-center"> {data?.name}</h2>
          </div>
        </div>
      ))}{" "}
    </div>
  );
};

export default Catagories;
