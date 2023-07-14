import { FormEvent, useState } from "react"
import { UploadImage } from "@components/admin"
import { axiosInstance } from "@utils/axiosInstance"
import { FormAlert } from "@components/admin/products/FormAlert"
import { AxiosError, AxiosResponse } from "axios"


export const AddCategoryForm = () => {

    const [categoryName, setCategoryName] = useState<string>('')
    const [categoryImageURL, setCategoryImageURL] = useState<string>('')
    const [showAlert, setShowAlert] = useState<boolean>(false)
    const [addState, setAddState] = useState<boolean>(false)
    
    const newCategoryFormSubmit =async  (e:FormEvent) =>{
        e.preventDefault()
        setShowAlert(true)
        setAddState(false)
        if(categoryImageURL.length !== 0 && categoryName.length !== 0){
            await axiosInstance.post('/api/category/add',{name:categoryName, imgURL:categoryImageURL})
            .then((response:AxiosResponse)=>{
                setAddState(true)
            })
            .catch((err:AxiosError)=>{
                setCategoryImageURL('')
                setCategoryName('')
            })
        }
    } 
    return <>
               { showAlert ? <FormAlert addState={addState} setShowAlert={setShowAlert}/> : <></>}
        <form className="mt-3 px-1" method="POST" onSubmit={newCategoryFormSubmit}>

        <UploadImage appendToImgURLs={(url:string)=>setCategoryImageURL(url)} section="Category"/>
         
                <div className=" mt-3">
                   <label htmlFor="categoryName" className="form-label">Category Name</label>
                   <input type="text" onChange = {e=>setCategoryName(e.target.value)} value={categoryName} className="form-control shadow-none border border-dark" id="categoryName"  placeholder="What your new category name?"/>
                </div>
                {
                categoryImageURL.length === 0 ? <></> : <>
               New Image Upload -<a href={categoryImageURL} className="fs-6 link-dark" target="_blank" rel="noreferrer" >   <b>Click to View</b> </a></>
                }

            <div className="d-grid"> 
               <button type="submit" className="btn rounded-0 btn-dark mt-3">Add New Category</button>
            </div>
        </form>
        
    </>
}