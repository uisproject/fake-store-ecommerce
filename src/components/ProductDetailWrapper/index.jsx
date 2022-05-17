import CustomSkeleton from "../General/CustomSkeleton";
import * as style from "./index.module.css";

const ProductDetailWrapper = ({
  image,
  category,
  description,
  id,
  price,
  rating,
  title,
  isLoading,
}) => {
  // isLoading=true
  return (
    <div className={`flex ${style.product_detail_content}`}>
      <div
        className={`min-w-[450px] min-h-[450px] max-w-[450px] max-h-[450px] mr-5 ${style.product_detail_content__img}`}
      >
        {!isLoading ? (
          <img src={`${image}`} className="w-[100%] h-[100%]" />
        ) : (
          <CustomSkeleton />
        )}
      </div>
      <div className="w-[100%]">
        <div className="mt-5 font-bold text-[1.7rem]">
          {!isLoading ? (
            title
          ) : (
            <CustomSkeleton width="100%" height="20px" count={1.5} />
          )}
        </div>
        <div className="flex mt-5">
          <div className="pr-5">
            {!isLoading ? (
              `Rating ${rating.rate}`
            ) : (
              <CustomSkeleton width="100px" />
            )}
          </div>
          <div className="px-5">
            {!isLoading ? (
              `Sold ${rating.count}`
            ) : (
              <CustomSkeleton width="100px" />
            )}
          </div>
          <div className="px-5">
            {!isLoading ? (
              `Category ${category}`
            ) : (
              <CustomSkeleton width="100px" />
            )}
          </div>
        </div>
        <div className="mt-5">
          <div className="font-bold text-[32px]">
            {!isLoading ? `$${price}` : <CustomSkeleton width="100%" />}
          </div>
        </div>
        <div className="mt-5">
          {!isLoading ? (
            description
          ) : (
            <CustomSkeleton width="100%" count={4.3} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailWrapper;
