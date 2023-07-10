import { axiosInstance } from "@utils/axiosInstance"
import {  AxiosResponse } from "axios"
import useSWR from 'swr'
import { ICategory } from "@lib/types/category"
import { useAddProduct } from "@hooks/useAddProduct"
import { ProductFormAlert } from "./ProductFormAlert"
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
        showAlert,setShowAlert,
        addState,setAddState,
        addToProductFormSubmit
       } = useAddProduct(imgURLs, emptyImgURLsArrays)


    const fetchCategories = async (url:string) => await axiosInstance.get(url).then((response:AxiosResponse):ICategory[]=>response.data)
    const {data} = useSWR('api/category/all', fetchCategories)

    return <>
        { showAlert ?  <ProductFormAlert addState={addState}/> : <></> } 
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
                   <label htmlFor="name" className="form-label">Name</label>
                   <input type="text" onChange = {e=>setName(e.target.value)} value={name} className="form-control shadow-none border border-dark" id="name" />
                </div>
                <div className="mb-3">
                   <label htmlFor="price" className="form-label">Price(₦)</label>
                   <input  value={price} min={0} onChange={e=>setPrice(Number(e.target.value))} className="form-control shadow-none border border-dark" id="price" placeholder="" />
                </div>
              <div className="mb-3">
                <label htmlFor="category" className="form-label ">Choose your category</label>
                <select value={category} id="category" onChange={e=>setCategory(e.target.value)} className="form-select form-select-md  shadow-none border border-dark" aria-label="form select for categories">
                 { data ? <CategorySelect data={data}/> : <></>}
                </select>   
                </div>      
                <div className="mb-3">
                   <label htmlFor="subCategory" className="form-label">Sub Category</label>
                   <select value={subCategory} id="subCategory" onChange={e=>setSubCategory(e.target.value)} className="form-select form-select-md  shadow-none border border-dark" aria-label="form select for subCategories">
                   {data ? <SubCategorySelect data={data} categoryName={category}/> :<></>} 
              </select>
               </div>                             
                <div className="mb-3">
                   <label htmlFor="vendor" className="form-label">Vendor</label>
                   <input value={vendor} onChange={e=>setVendor(e.target.value)} className="form-control shadow-none border border-dark" id="vendor" />
                </div>      
                <div className="mb-3">
                   <label htmlFor="storeID" className="form-label">Store ID</label>
                   <input value={storeID} onChange={e=>setStoreID(e.target.value)} className="form-control shadow-none border border-dark" id="vendor" />
                </div>                  
               <div className="mb-3">
                   <label htmlFor="quantity" className="form-label">Quantity</label>
                   <input min={0} value={quantity} onChange={e=>setQuantity(Number(e.target.value))} className="form-control shadow-none border border-dark" id="quantity" />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea value={description} onChange={e=>setDescription(e.target.value)} className="form-control shadow-none border border-dark" id="description" rows={5}></textarea>
                </div>
               
               <div className="d-grid">
                 <button className="btn btn-dark mt-5 p-3 fs-5 fw-bold">Add Product</button>
               </div>
             
            </form>
    </>
}

export {AddProductForm}