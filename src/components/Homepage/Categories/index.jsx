import { useEffect } from "react"
import { getCategories } from "@/stores/homepage"
import { useDispatch, useSelector } from "react-redux"
import CategoryWrapper from "./CategoryWrapper"

const Categories = () => {
    const dispatch = useDispatch()
    const getCategoriesData = useSelector(state => state.homepage.categories)

    useEffect(() => {
        dispatch(getCategories())
    },[])

    return(
        <div>
            <div className='my-5 font-bold'>
                <span className='text-base'>
                    Categories
                </span>
            </div>
            <div className='min-h-[50px] bg-white'>
                <CategoryWrapper {...getCategoriesData}/>
            </div>
        </div>       
    )
}

export default Categories