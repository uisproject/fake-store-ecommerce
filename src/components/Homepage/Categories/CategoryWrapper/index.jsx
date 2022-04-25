import CategoryItem from "../CategoryItem"

const CategoryWrapper = ({data = [], isLoading}) => {
    console.log(data)
    if(data.length <= 0 && !isLoading) return (
        <div className="grid place-items-center">
            Categories is not available
        </div>
    )

    return (
        <div>
            {data.map((item,idx) => {
                return <CategoryItem label={item} key={idx} />
            })}
        </div>
    )
}
export default CategoryWrapper