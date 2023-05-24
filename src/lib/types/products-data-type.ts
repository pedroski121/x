export interface IProductsData {
    _id:string,
    name: string,
    price: number,
    category: string,
    subCategory: string,
    specification: string,
    storeID: string,
    storeName: string,
    rating: number,
    quantity: number,
    imgURLs: string[],
    activePaths:string[],
    imgAltText?:string,
    reviews?: { userID: string, review: string, date: string }[]
  }