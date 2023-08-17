const ProductsPage = () => {
  let arrayOfObjects = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 },
    { name: "David", age: 28 },
    { name: "Eve", age: 23 },
    { name: "Frank", age: 35 },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 bg-base-200 gap-3">
      {arrayOfObjects?.map((arrays) => (
        <div
          key={arrays.age}
          className="  bg-base-200 hover:border-4 border-black  p-2"
        >
          <figure className="pt-2 flex justify-center items-center">
            <img
              src="https://techbd.com.bd/wp-content/uploads/2021/04/hp-250-g8-core-i3-10th-gen-laptop-1-500x500-1-300x300.jpg"
              alt="Shoes"
              className="rounded-lg"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn bg-gradient-to-b from-orange-400 to-blue-400 text-white font-bold">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
