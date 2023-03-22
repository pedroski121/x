export interface paths {
    _id: string;
    name: string;
    imgURL: string;
    subCategories: { _id: string; name: string; imgURL: string }[];
  }
  
export interface ICategory {
    categoriesPaths: paths[];
  }
  