import  {useRouter}  from "next/router"

export const CategoriesAction = () =>{
    const router = useRouter()
    return <>
        <div className="row gap-2 mt-3 justify-content-center">
            <div className="col-5 fs-5 fw-bolder text-center bg-success p-5 rounded-2 border border-dark" style={{cursor:"pointer"}} onClick={(()=>router.push(`/admin/categories/add-category`))}>
                Add Category
            </div>
            <div className="col-5 fs-5 fw-bolder bg-dark  text-center text-light p-5 rounded-2 border border-dark" style={{cursor:"pointer"}} onClick={(()=>router.push(`/admin/categories/add-sub-category`))}>
                Add Sub Category
            </div>
        </div> 
    </>
}