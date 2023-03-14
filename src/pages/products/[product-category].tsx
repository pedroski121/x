import { useRouter } from "next/router"

const ProductCategory = () =>{
    const query = useRouter().query

    return <h1>{query["sub-category"]}</h1>
}

export default ProductCategory