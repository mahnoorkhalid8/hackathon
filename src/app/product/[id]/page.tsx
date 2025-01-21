"use client";
import products from "@/lib/product";

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const product = products.find((pro) => pro.id === params.id);

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center">
      {/* image */}
      <div className="w-full md:w-[50%]">
        <img
          src={product.image}
          alt={product.name}
          className="w-[653px] h-[653px]"
        />
      </div>

      {/* details */}
      <div className="w-full md:w-[50%] h-screen md:h-[653px] pt-0.5 gap-6 ">
        <div className="flex flex-col gap-6 justify-center sm:mx-6 sm:space-y-3">
        <h1 className="h-4 font-bold text-2xl text-red-600">{product.status}</h1>
          <h1 className="h-4 font-bold text-3xl my-4">{product.name}</h1>
          <br />
          <p>Type: {product.type}</p>
          <p>Price: {product.price}</p>
          <p>Color: {product.color}</p>
        </div>
        <button  className="flex justify-start gap-3 bg-black text-white font-poppins leading-[24px] weight-[500] px-4 py-2 my-3 mx-4 rounded-full hover:bg-gray-300">
          Add to Cart</button>
        <button className="flex justify-start gap-3 bg-black text-white font-poppins leading-[24px] weight-[500] px-4 py-2 my-3 mx-4 rounded-full hover:bg-gray-300">
          Remove From Cart</button>

      </div>
    </div>
  );
};


export default ProductDetails;
