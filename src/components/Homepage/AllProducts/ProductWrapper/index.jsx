import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import CustomSkeleton from '@/components/Generals/CustomSkeleton'
import CardItem from '../CardItem'

const ProductWrapper = ({data = [],isLoading}) => {

    if(isLoading){
        let dummySkeleton = []
        for(let i=0;i<10;i++){
            dummySkeleton.push(
                <CustomSkeleton 
                    width='220px'
                    height='250px'
                    style={{
                        lineHeight:'2',
                        border:'1px solid #F3F3F3'
                    }}
                />
            )
        }

        return (
            <div
                className='mb-10'
                style={{
                    display:'grid',
                    placeItems:'center',
                    gridTemplateColumns:'repeat(auto-fill,minmax(200px,3fr))',
                    gridGap:'50px'
                }}
            >
                {dummySkeleton.map((item,idx) => {
                    return (
                        <div key={idx}>
                            {item}
                        </div>
                    )
                })}
            </div>
        )
    } 

    if(!isLoading && data.length == 0) return (
        <div className='grid place-items-center h-[100%] font-bold'>
            Products are currently empty :(
        </div>
    )

    return(
        <div 
            className='grid place-items-center h-[100%] mb-20' 
            style={{
                display:'grid',
                gridTemplateColumns:'repeat(auto-fill,minmax(200px,3fr))',
                gridGap:'50px'
            }}
            >
                {data.map((item) => {return <CardItem key={item.id} {...item}/>})}
        </div>
    )
}

export default ProductWrapper