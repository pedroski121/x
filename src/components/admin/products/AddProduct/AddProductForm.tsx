import { axiosInstance } from "@utils/axiosInstance"
import {  AxiosResponse } from "axios"
import useSWR from 'swr'
import { ICategory } from "@lib/types/category"
import { useAddProduct } from "@hooks/admin/useAddProduct"
import { FormAlert } from "../FormAlert"
import { CategorySelect } from "./CategorySelect"
import { SubCategorySelect } from "./SubCategorySelect"

const AddProductForm = ({imgURLs, emptyImgURLsArrays}:{imgURLs:string[], emptyImgURLsArrays():void}) =>{
    const { name, setName,
        price, setPrice,
        category, setCategory,
        subCategory, setSubCategory,
        vendor,setVendor,
        quantity,setQuantity,
        description,setDescription,
        storeID,setStoreID,
        showAlert,
        addState,setShowAlert,
        addToProductFormSubmit
       } = useAddProduct(imgURLs, emptyImgURLsArrays)

    const fetchCategories = async (url:string) => await axiosInstance.get(url).then((response:AxiosResponse):ICategory[]=>response.data)
    const {data} = useSWR('api/category/all', fetchCategories)

    return <>
        { showAlert ?  <FormAlert addState={addState} setShowAlert={setShowAlert} /> : <></>} 
        <div>
            <ul>
            {imgURLs.map((imgUrl, key)=>{
                return <li key={key}>{imgUrl}</li>
            })}
            </ul>
        </div>
       <form className="mt-3 px-1" onSubmit={addToProductFormSubmit}>
                <h5><u>Add Specifications</u></h5>
                
                <div className="mb-3">
                   <label htmlFor="name" className="form-label m-0 fw-bold">Name</label>
                   <input type="text" onChange = {e=>setName(e.target.value)} value={name} className="form-control shadow-none border border-dark" id="name" />
                </div>
                <div className="mb-3">
                   <label htmlFor="price" className="form-label m-0 fw-bold">Price(₦)</label>
                   <input  value={price} min={0} onChange={e=>setPrice(Number(e.target.value))} className="form-control shadow-none border border-dark" id="price" placeholder="" />
                </div>
              <div className="mb-3">
                <label htmlFor="category" className="form-label m-0 fw-bold ">Choose your category</label>
                <select value={category} id="category" onChange={e=>setCategory(e.target.value)} className="form-select form-select-md  shadow-none border border-dark" aria-label="form select for categories">
                 { data ? <CategorySelect /> : <></>}
                </select>   
                </div>      
                <div className="mb-3">
                   <label htmlFor="subCategory" className="form-label m-0 fw-bold">Sub Category</label>
                   <select value={subCategory} id="subCategory" onChange={e=>setSubCategory(e.target.value)} className="form-select form-select-md  shadow-none border border-dark" aria-label="form select for subCategories">
                   {data ? <SubCategorySelect data={data} categoryName={category}/> :<></>} 
              </select>
               </div>                             
                <div className="mb-3">
                   <label htmlFor="vendor" className="form-label m-0 fw-bold">Vendor</label>
                   <input value={vendor} onChange={e=>setVendor(e.target.value)} className="form-control shadow-none border border-dark" id="vendor" />
                </div>      
                <div className="mb-3">
                   <label htmlFor="storeID" className="form-label m-0 fw-bold">Store ID</label>
                   <input value={storeID} onChange={e=>setStoreID(e.target.value)} className="form-control shadow-none border border-dark" id="vendor" />
                </div>                  
               <div className="mb-3">
                   <label htmlFor="quantity" className="form-label m-0 fw-bold">Quantity</label>
                   <input min={0} value={quantity} onChange={e=>setQuantity(Number(e.target.value))} className="form-control shadow-none border border-dark" id="quantity" />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label m-0 fw-bold">Description</label>
                    <textarea value={description} onChange={e=>setDescription(e.target.value)} className="form-control shadow-none border border-dark" id="description" rows={5}></textarea>
                </div>
               
               <div className="d-grid">
                 <button className="btn btn-dark mt-5 p-3 fs-5 fw-bold">Add Product</button>
               </div>
             
            </form>
    </>
}

export {AddProductForm}