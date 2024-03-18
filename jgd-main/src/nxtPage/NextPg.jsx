import React from "react";
import { useParams } from "react-router-dom";
import { useProductDetailsQuery } from "../redux/api/ProductAPI";
import ProductShow from "./ProductShow";
import ProductInfo from "./ProductInfo";

const NextPg = () => {

  const params = useParams();

  const {data} = useProductDetailsQuery(params.id)
  
  return (
    <div className=" mb-6">
      <ProductShow
        productImages={data?.singleProduct.photos}
        category={data?.singleProduct.category}
        tags={data?.singleProduct.tags[0]}
        name={data?.singleProduct.name}
        description={data?.singleProduct.description
        }
      />
      <ProductInfo />
    </div>
  );
};

export default NextPg;
