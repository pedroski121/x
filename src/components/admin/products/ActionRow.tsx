import { useRouter } from "next/router"


const ActionRow = () => {
    const router = useRouter()
    const navigateToActionPage = (page:string) =>{
        router.push(`/admin/products/${page}`)
    }
    return (
        <div className="row mt-3 gap-1 text-center justify-content-center">
        <div className="col-5 col-md-4 bg-secondary p-5 rounded-2 border border-dark" style={{cursor:"pointer"}} onClick={()=>navigateToActionPage('add')}>
            <p className="fs-5 fw-bolder">Add Product</p>
        </div>
        <div className="col-5 col-md-3 fs-5 fw-bolder bg-success p-5 rounded-2 border border-dark" style={{cursor:"pointer"}}>
            Add Category
        </div>

        <div className="col-5 col-md-4 bg-danger fs-5 fw-bolder p-5 rounded-2 border border-dark text-dark" onClick={()=> navigateToActionPage('delete')} style={{cursor:"pointer"}}>
            Delete Product
        </div>
    </div>
    )
}

export {ActionRow}