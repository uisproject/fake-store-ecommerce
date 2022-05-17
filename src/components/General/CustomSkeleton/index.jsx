import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

const CustomSkeleton = ({
    width='100%',
    height='100%',
    circle=0,
    count=1
}) => {
    return(
        <Skeleton 
            circle={circle}
            count={count}
            style={{
                width: width, 
                height: height
            }}
        />
    )
}

export default CustomSkeleton