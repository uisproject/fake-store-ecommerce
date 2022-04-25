import { cardItemTitleParser } from "@/services/parser"
import Link from 'next/link'

const CardItem = ({
    category,
    description,
    id,
    image,
    price,
    rating,
    title
}) => {
    return(
        <>
            <Link href='product/id' as={`product/${id}`} passHref >
                <a>
                    <div className="max-w-[200px] cursor-pointer">
                        <div className='min-h-[180px] min-w-[180px] h-[180px] w-[180px] mx-auto'>
                            <img src={`${image}`} className='h-[100%] w-[100%]'/>
                        </div>
                        <div className="mt-5 min-h-[70px] max-h-[70px]">{cardItemTitleParser(title,50)}</div>
                        <div>Ratings {rating.rate}</div>
                        <div className="flex justify-between">
                            <div>{price}</div>
                            <div>{rating.count} Sold</div>
                        </div>
                    </div>
                </a>
            </Link>
        </>
    )
}

export default CardItem