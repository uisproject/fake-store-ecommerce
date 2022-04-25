import MainLayout from "@/layouts/MainLayout"
import { getProductDetail } from "@/stores/productDetail"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useRouter } from "next/router"
import ProductDetailWrapper from "@/components/ProductDetailWrapper"

const ProductDetail = () => {
    const dispatch = useDispatch()
    const productDetailData = useSelector(state => state.productDetail)
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        if(id === undefined || id === null) return 
        dispatch(getProductDetail(id))
    },[router.isReady])

    return(
        <MainLayout>
            <div className="max-w-[1200px] mx-auto my-5">
                <ProductDetailWrapper {...productDetailData.data} isLoading={productDetailData.isLoading}/>
            </div>
        </MainLayout>
    )
}

export default ProductDetail