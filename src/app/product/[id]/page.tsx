//"use client";

import {client} from "@/sanity/lib/client";
import ProductDetail from "@/components/ProductDetal";
import Product from "@/components/Product";

// interface Product {
//   _id: string;
//   productName: string;
//   imageUrl: string;
//   colors: string[];
//   price: number;
//   description: string; o
//   status: string;
// }

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  console.log("params",params.id);
  const query = `
  *[_type == "product"  && _id == "product.id"] [0]{
    _id,
    productName,
    "imageUrl": image.asset->url,
    colors,
    price,
    description,
    status,
    category,
    inventory
  }
`;

const product = await client.fetch(query, { id: params.id });

if (!product) {
    return <p>Product not found!</p>;
  }

  return (
  <div>
    <ProductDetail product={product}/>
    <Product/>
  </div>)
 
};


