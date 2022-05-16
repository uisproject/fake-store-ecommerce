import CategoryItem from "../CategoryItem";
import CustomSkeleton from "@/components/Generals/CustomSkeleton";

const CategoryWrapper = ({ data = [], isLoading }) => {
  if (isLoading) {
    let dummySkeleton = [];
    for (let i = 0; i < 4; i++) {
      dummySkeleton.push(
        <CustomSkeleton
          width="110px"
          height="35px"
          style={{
            lineHeight: "2",
            border: "1px solid #F3F3F3",
          }}
        />
      );
    }

    return (
      <div className="mb-10">
        {dummySkeleton.map((item, idx) => {
          return (
            <div
              key={idx}
              style={{ marginRight: "10px", display: "inline-block" }}
            >
              {item}
            </div>
          );
        })}
      </div>
    );
  }

  if (data.length <= 0 && !isLoading)
    return (
      <div className="grid place-items-center">Categories is not available</div>
    );

  return (
    <div>
      {data.map((item, idx) => {
        return <CategoryItem label={item} key={idx} />;
      })}
    </div>
  );
};
export default CategoryWrapper;
