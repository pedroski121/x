import { useFetch } from "@hooks/general/useFetch"
import { IProductsData } from "@lib/types/product"
import { axiosInstance } from "@utils/axiosInstance"
import  { AxiosError, AxiosResponse } from "axios"
import { useRouter } from "next/router"

type TAxiosResponseError = {
    message:string;
    success:boolean;
}

export const AllProducts = () =>{
    const router = useRouter();
    const {data} = useFetch<IProductsData[]>('/api/product/all')

    const deleteProduct = async (_id:string) =>{
        await axiosInstance.delete('/api/product/delete',{data:{_id}}).then((response:AxiosResponse<TAxiosResponseError[]>)=>{
           response.data.map((responseData)=>{
                alert(responseData.message)
            })
        }).catch((err:AxiosError<TAxiosResponseError[]>)=>{
            err.response?.data.map((data)=>{
              alert(data.message)
            })
        })
    }       

    const navigate = (product:IProductsData) => {
      router.push(`/categories/${product.category}/${product.subCategory}/${product.name.split(" ").join("-")}-${product._id}`)
    }
return <>
  <table className="table table-hover table-striped mt-4">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product Name</th>
      <th scope="col">Price</th>
      <th scope="col">Category</th>
      <th scope="col">SubCategory</th>
      <th scope="col">Quantity</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {data?.map((product,key)=>{
        return( 
    <tr key={product._id} style={{cursor:"pointer"}} onClick={()=>navigate(product)}>
      <th scope="row">{key+1}</th>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.category}</td>
      <td>{product.subCategory}</td>
      <td>{product.quantity}</td>
      <td><button className="btn btn-outline-danger fw-bold rounded-0" onClick={()=>deleteProduct(product._id)}>Delete</button></td>
    </tr> )})}

  </tbody>
</table>
    </>
}