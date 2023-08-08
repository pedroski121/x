import { useFetch } from "@hooks/general/useFetch"
import { ICategory, ISubCategory } from "@lib/types/category"

export const CategoryTables = () =>{
    const {data:categoryData} = useFetch('/api/category/all')
    const {data:subCategoryData} = useFetch('/api/sub-category/all')

    return ( 
    <div className="row gap-2">
        {categoryData && categoryData.length !== 0 ?  <section className="col-2 mt-3 mx-2 text-center">
        <h5>Categories</h5>
        <table className="table table-hover table-bordered">
            <thead>
                <tr>
                <th scope="col">Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    categoryData?.map((category:ICategory)=>{
                        return <tr style={{cursor:"pointer"}} key={category._id}  >
                                <th scope="row" className="fw-light">{category.name}</th>
                                </tr>
                    })
                }
            </tbody>
        </table>
    </section>: <></> }

            {
                subCategoryData && subCategoryData.length !== 0 ?        
             <section className="col-8 mt-3 mx-2 text-center">
                <h5>Sub Categories</h5>
                <div className="overflow-auto">
                      <table className="table table-hover table-bordered">
                          <thead>
                              <tr>
                              <th scope="col">Name</th>
                              <th scope="col">Category Name</th>
                              <th scope="col">Alt Image Text</th>          
                              </tr>
                          </thead>
                          <tbody>
                              {
                                 subCategoryData?.map((subCategory:ISubCategory)=>{
                                      return ( 
                                      <tr style={{cursor:"pointer"}}  key={subCategory._id}>
                                          <th scope="row" className="fw-light">{subCategory.name}</th>
                                          <td  className="fw-light">{subCategory.categoryName}</td >
                                          <td  className="fw-light">{subCategory.altImgText}</td >          
                                      </tr> )})
                                }                      
                          </tbody>
                      </table>
                 </div>
              </section> : <></>
            }

     </div> )
}