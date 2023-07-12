import { useRouter } from "next/router"


const ActionRow = () => {
    const router = useRouter()
    const navigateToActionPage = (page:string) =>{
        router.push(`/admin/products/${page}`)
    }
    return (
        <div className="row mt-3 gap-1 text-center justify-content-center">
        <div className="col-5 col-md-4 bg-secondary p-5 rounded-2 border border-dark" style={{cursor:"pointer"}} onClick={()=>navigateToActionPage('add-product')}>
            <p className="fs-5 fw-bolder">Add Product</p>
        </div>
        <div className="col-5 col-md-3 fs-5 fw-bolder bg-success p-5 rounded-2 border border-dark" style={{cursor:"pointer"}} onClick={(()=>navigateToActionPage('add-category'))}>
            Add Category
        </div>
        <div className="col-5 col-md-4 fs-5 fw-bolder bg-dark text-light p-5 rounded-2 border border-dark" style={{cursor:"pointer"}} onClick={(()=>navigateToActionPage('add-category'))}>
            Add Sub Category
        </div>
    </div>
    )
}

export {ActionRow}