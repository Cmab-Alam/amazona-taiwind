import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import React from "react";
import data from "@/utils/data";

const ProductScreen = () => {
  // const {query} = useRouter();

  const { slug } = useRouter().query;

  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <Layout title={product.name}>
      <div>
        <Link href="/">
          <h2>Back to products</h2>
        </Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
          />
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg ">{product.name}</h1>
            </li>
            <li>cateogry:{product.cateogry}</li>
            <li>brand:{product.brand}</li>
            <li>
              {product.rating} of {product.numReviews}
            </li>
          </ul>
        </div>
        <div>
        <div className="p-5 card">
          <div className=" mb-2 flex justify-between">
            <div>price</div>
            <div>${product.price}</div>
          </div>
          <div className=" mb-2 flex justify-between">
            <div>status</div>
            <div>{product.countInStock > 0 ? "in stock" : "unavailable"}</div>
          </div>
          <button className="primary-button w-full">Add to cart</button>
        </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductScreen;
