import { ICategory } from "@lib/types/category"

export const CategorySelect = ({data}:{data:ICategory[]}) =>{
    return <>
                    {
                        // Get all the available categories
                        data?.map((category)=>{
                            return <option key={category._id} value={category.name}>
                                {category.name} 
                            </option>
                        })
                    }
    </>
}