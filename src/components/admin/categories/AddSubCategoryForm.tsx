import { FormEvent, useState } from "react"
import { UploadImage } from "@components/admin"
import { axiosInstance } from "@utils/axiosInstance"
import { FormAlert } from "@components/admin/products/FormAlert"
import { CategorySelect } from "../products/AddProduct/CategorySelect"
import { AxiosResponse, AxiosError } from "axios"


export const AddSubCategoryForm = () =>{
    const [subCategoryName, setSubCategoryName] = useState<string>('')
    const [categoryName, setCategoryName] = useState<string>('')
    const [subCategoryImageURL, setSubCategoryImageURL] = useState<string>('')
    const [altImgText, setAltImgText] = useState<string>('')

    const [showAlert, setShowAlert] = useState<boolean>(false)
    const [addState, setAddState] = useState<boolean>(false)
    
    const subCategoryFormSubmit = async  (e:FormEvent) =>{
        e.preventDefault()
        if(subCategoryImageURL.length !== 0 && subCategoryName.length !== 0){
            await axiosInstance.post('/api/sub-category/add',{ name:subCategoryName, imgURL:subCategoryImageURL, altImgText, categoryName })
            .then((response:AxiosResponse)=>{
               setShowAlert(true)
               setAddState(true)
            })
            .catch((err:AxiosError)=>{
               setShowAlert(true)
               setAddState(false)
               console.log(err.response?.data)
            })
        }
        setSubCategoryImageURL('')
        setCategoryName('')
        setSubCategoryName('')
        setAltImgText('')
    }
    return <>
        { showAlert ? <FormAlert addState={addState} setShowAlert={setShowAlert}/> : <></>}
        <form className="mt-3 px-1" method="POST" onSubmit={subCategoryFormSubmit}>

        <UploadImage appendToImgURLs={(url:string)=>setSubCategoryImageURL(url)} section="Sub-Category"/>
         
                <div className=" mt-3">
                   <label htmlFor="subCategoryName" className="form-label fw-bold m-0">Sub-Category Name</label>
                   <input type="text" onChange = {e=>setSubCategoryName(e.target.value)} value={subCategoryName} className="form-control shadow-none border border-dark" id="subCategoryName"  placeholder="What your new sub category name?"/>
                </div>
       
                <div className="mt-3">
                  <label htmlFor="category" className="form-label m-0 fw-bold ">Choose your category</label>
                  <select value={categoryName} id="category" onChange={e=>setCategoryName(e.target.value)} className="form-select form-select-md  shadow-none border border-dark" aria-label="form select for categories">
                     <CategorySelect />
                  </select>   
                </div> 

                <div className=" mt-3">
                   <label htmlFor="altImgText" className="form-label fw-bold m-0">Alt Image Text</label>
                   <input type="text" onChange = {e=>setAltImgText(e.target.value)} value={altImgText} className="form-control shadow-none border border-dark" id="altImgText"  placeholder="In the absence of the sub category image, what text should be displayed?"/>
                </div>
              
                {
                subCategoryImageURL.length === 0 ? <></> : <>
               New Image Upload -<a href={subCategoryImageURL} className="fs-6 link-dark" target="_blank" rel="noreferrer" >   <b>Click to View</b> </a></>
                }

            <div className="d-grid"> 
               <button type="submit" className="btn rounded-0 btn-dark mt-3">Add New Sub-Category</button>
            </div>
        </form>
    </>
}

