export interface IProductsData {
    name: string,
    price: number,
    category: string,
    subCategory: string,
    specification: string,
    storeID: string,
    storeName: string,
    rating: number,
    quantity: number,
    imgURLs?: string[],
    imgAltText?:string,
    reviews?: { userID: string, review: string, date: string }[]
  }