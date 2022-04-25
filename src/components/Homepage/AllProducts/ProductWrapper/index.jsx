import Skeleton,{ SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import CardItem from '../CardItem'

const ProductWrapper = ({data = [],isLoading}) => {

    if(isLoading) return (
        <SkeletonTheme
            height='200px'
            borderRadius='0.75rem'
            inline={false}
        >
            <Skeleton 
                style={{
                    lineHeight:'2',
                    border:'1px solid #F3F3F3'
                }}
            />
        </SkeletonTheme>
    )

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
                {data.map((item,idx) => {return <CardItem key={item.id} {...item}/>})}
        </div>
    )
}

export default ProductWrapper