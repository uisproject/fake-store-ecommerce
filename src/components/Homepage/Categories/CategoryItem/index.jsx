import { upperCaseFirstLetterParser } from "@/services/parser";
import { setCategory, getProducts } from "@/stores/homepage";
import { useDispatch, useSelector } from "react-redux";

const CategoryItem = ({ label }) => {
  const dispatch = useDispatch();
  const getCurrentCategory = useSelector(
    (state) => state.homepage.categories.currentCategory
  );

  return (
    <div
      onClick={() => {
        dispatch(setCategory(label)); // to set color when category is clicked
        dispatch(getProducts(label));
      }}
      className={` ${
        getCurrentCategory.toLowerCase() == label.toLowerCase()
          ? "bg-[#000] text-[#fff]"
          : "bg-[#fff] text-[#000]"
      } inline-block mr-2 mt-3 px-3 py-1 border-solid border-2 border-black rounded-xl cursor-pointer`}
    >
      {upperCaseFirstLetterParser(label)}
    </div>
  );
};

export default CategoryItem;
