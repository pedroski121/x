export interface IProductDetailsLeftSide {
    name: string,
    price: number,
    specification: string,
    rating: number,
    reviews?: { userID: string; review: string; date: string; }[]
}