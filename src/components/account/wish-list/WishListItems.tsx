import Image from "next/image"
import { useFetch } from "@hooks/general/useFetch"
import { useFetchMultipleParams } from "@hooks/general/useFetchMultipleParams"
import { useRouter } from "next/router"
import { IProductsData } from "@lib/types/product"
import { axiosInstance } from "@utils/axiosInstance"
import { useState} from "react"


type TWishList = {
    _id:string, 
    productID:string
}

export const WishListItems = ({currentUserId}:{currentUserId:string}) =>{
    const [deleting, setDeleting] = useState<boolean | undefined>(false)
    const router = useRouter()
    const {data, isLoading, mutate} = useFetch<TWishList[]>(`/api/wishlist/${currentUserId}`)
    const generateProductURLs  = (data:TWishList[]):string[] => {
        const params = data.map((d:TWishList)=>{
            return d.productID
        })  
        return params
    }
    const {isLoading:loading, data:productData} =  useFetchMultipleParams<IProductsData>('/api/product', generateProductURLs(data || []))
    if(loading || isLoading){
        return <p>loading...</p>
    }

    const deleteWishList = async (productID:string) =>{
        
        setDeleting(true)
        const data = {productID}
        await axiosInstance.delete('/api/wishlist/delete',{withCredentials:true, data})
        .then(()=>{
            mutate()
            setDeleting(false)
        }).catch(()=>{
            setDeleting(undefined)
        })
    }


return <>
         <ul className="list-group">
            <span className={`${deleting ? deleting === undefined ? "bi bi-x-circle-fill my-1 ": "spinner-border spinner-border-sm my-1" : ""}`}></span>
            {productData && productData.map((product:IProductsData)=>{
                const available = product.quantity > 0
                return<li key={product._id} style={{whiteSpace: "nowrap", height:"150px"}} className={`list-group-item overflow-auto border border-secondary rounded-1 p-0 mb-3 d-flex flex-row justify-content-between `}>
                <div className={` d-flex flex-row ` }>
                      <div style={{height:"100%", width:"140px", position:"relative"}}>
                       <Image src={product.imgURLs[0]} style={{ objectFit: "cover" }} alt="An item in the bag image" fill />
                       </div>

                          <div className=" text-center text-md-start px-3">
                              <p className={`fw-bold `}>{product.name} <br/> <span className={` ${available ? 'badge bg-success' : 'badge bg-danger'}  p-2 mt-2`}>
                                {available ? 'AVAILABLE' : 'NOT AVAILABLE'}</span></p>
                          </div>                    
    
                  </div>
                  <div  className=" d-flex justify-content-between flex-column m-2">
                          <button className="btn btn-dark rounded-0" onClick={()=>router.push(`/categories/${product.category}/${product.subCategory}/${product.name.split(" ").join("-")}-${product._id}`)}>See Details</button>
                          <button className="btn btn-outline-danger py-1 rounded-0" onClick={()=>deleteWishList(product._id)}>Remove </button>
                  </div>
            </li>
            })}
           </ul>
    </>
}