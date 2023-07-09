import { useState, FormEvent } from "react"
import { axiosInstance } from "@utils/axiosInstance"
import { AxiosError, AxiosResponse } from "axios"
import useSWR from 'swr'
import { ICategory } from "@lib/types/category"


const AddProductForm = ({imgURLs, emptyImgURLsArrays}:{imgURLs:string[], emptyImgURLsArrays():void}) =>{
    const [name, setName] = useState<string>('')
    const [price, setPrice] = useState<number>(0)
    const [category, setCategory] = useState<string>('')
    const [subCategory, setSubCategory] = useState<string>('')
    const [vendor, setVendor] = useState<string>('')
    const [quantity, setQuantity] = useState<number>(0)
    const [description, setDescription] = useState<string>('')
    const [storeID, setStoreID] = useState<string>('')
    const [showAlert, setShowAlert] = useState<boolean>(false)
    const [addState, setAddState] = useState<boolean>(false)

    if(isNaN(price)){
        setPrice(0)
    } 
    if(isNaN(quantity)){
        setQuantity(0)
    }

    const addToProductFormSubmit = async (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        const formData = {name, price,category, subCategory, quantity, specification:description ,storeName: vendor, rating:5, storeID, imgURLs}
       await axiosInstance.post('/api/product/add', formData)
                .then((response:AxiosResponse)=>{
                    setAddState(true)
                    setShowAlert(true)
                    emptyImgURLsArrays()
                    setName(''); setPrice(0); setSubCategory(''); setVendor(''); setQuantity(0); setDescription(''); setStoreID('')
                })
                .catch((err:AxiosError)=>{
                    setShowAlert(true)
                    setAddState(false)
                })}
    const fetchCategories = async (url:string) => await axiosInstance.get(url).then((response:AxiosResponse):ICategory[]=>response.data)
    const {data} = useSWR('api/category/all', fetchCategories)
    return <>
 {
            showAlert ? 
            <div className={`alert ${addState ? 'alert-success': 'alert-danger'} alert-dismissible fade show mt-2`} id={"scrollTo"}>
               <button type="button" className="btn-close" data-bs-dismiss="alert" onClick={()=>setShowAlert(false)}></button>
               <strong>{addState ? 'Success!' : 'Failure'}</strong> {addState ? 'Product Added' : 'Product Not Added'}
            </div> :
            <></> 
        } 
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
                    {
                        // Get all the available categories
                        data?.map((category)=>{
                            return <option key={category._id} value={category.name}>
                                {category.name} 
                            </option>
                        })
                    }

                </select>   
                </div>      
                <div className="mb-3">
                   <label htmlFor="subCategory" className="form-label">Sub Category</label>
                   <select value={subCategory} id="subCategory" onChange={e=>setSubCategory(e.target.value)} className="form-select form-select-md  shadow-none border border-dark" aria-label="form select for subCategories">

              {
                // sort through the chosen category based on state to get all the available the subcategory
                data?.map((categories)=>{
                    if(categories.name === category) {
                        return categories.subCategories.map((subCategory)=>{
                            return <option key={subCategory._id} value={subCategory.name}>{subCategory.name}</option>
                        })
                    }
                })
              } 
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