import { Header } from "@components/admin";
import { Footer } from "@components/general/footer";
import { NavBar } from "@components/general/navbar";
import { NextPage } from "next";
import { AddProductForm, UploadImage } from "@components/admin";
import { useState } from "react";

const AddProduct:NextPage = () =>{
    const [imgURLs, setImgURLs] = useState<string[]>([])
    
    const appendToImgURLs = (url:string) => {
        setImgURLs(prevURls => [...prevURls, url])
    }
    const emptyImgURLsArrays = () => {
        setImgURLs([])
    }
    return <>   
        <NavBar/>

        <div className="container">
            <Header pageName="New Product"/>
            <UploadImage appendToImgURLs={appendToImgURLs}/>
            <AddProductForm imgURLs={imgURLs} emptyImgURLsArrays={emptyImgURLsArrays}/>
        </div>
        <Footer/>
    </>
}

export default AddProduct