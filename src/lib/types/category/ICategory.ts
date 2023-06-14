import { ISubCategory } from "./ISubCategory";

export interface ICategory {
   
       _id: string;
    name: string;
    imgURL: string;
    subCategories: ISubCategory[];
    
  }