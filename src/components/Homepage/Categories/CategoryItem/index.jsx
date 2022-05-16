import { upperCaseFirstLetterParser } from "@/services/parser";

const CategoryItem = ({ label }) => {
  return (
    <div className="inline-block mr-2 mt-3 px-3 py-1 border-solid border-2 border-black rounded-xl cursor-pointer">
      {upperCaseFirstLetterParser(label)}
    </div>
  );
};

export default CategoryItem;
