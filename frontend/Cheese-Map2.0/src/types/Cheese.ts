//define the data fetched from MongoDB (BE)
export interface Cheese {
    _id: string
    name: string
    region: string
    country: string
    location: {
        type: string, 
        coordinates: [number, number] //[lng, lat]
    } //empty array of 2 numbers
    rating: number | null
    fun: string
    url: string
    img: string
    createAt: string
}