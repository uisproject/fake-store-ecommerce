import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, setCategory } from "@/stores/homepage";
import ProductWrapper from "./ProductWrapper";

const AllProducts = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.homepage.allProducts);

  useEffect(() => {
    dispatch(getProducts("all"));
    dispatch(setCategory("all"));
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="my-5 font-bold">
        <span className="text-base">All products</span>
      </div>
      <div className="min-h-[200px] bg-white">
        <ProductWrapper {...allProducts} />
      </div>
    </div>
  );
};

export default AllProducts;
