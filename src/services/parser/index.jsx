export const cardItemTitleParser = (value = '', length = 200) => {
    console.log(value.length)
    if(value.length > length) return `${value.slice(0,length)}...`

    return value
}