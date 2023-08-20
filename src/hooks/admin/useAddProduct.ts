// admin hook

import { useState, FormEvent } from "react"
import { AxiosResponse, AxiosError } from "axios"
import { axiosInstance } from "@utils/axiosInstance"

export const useAddProduct = (imgURLs: string[], emptyImgUrlsArrays: () => void) => {
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
  
    if (isNaN(price)) {
      setPrice(0)
    }
    if (isNaN(quantity)) {
      setQuantity(0)
    }
  
    const addToProductFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const formData = { name, price, category, subCategory, quantity, specification: description, storeName: vendor, rating: 5, storeID, imgURLs }
      await axiosInstance.post('/api/product/add', formData)
        .then((response: AxiosResponse) => {
          setAddState(true)
          setShowAlert(true)
          emptyImgUrlsArrays()
          setName(''); setPrice(0); setSubCategory(''); setVendor(''); setQuantity(0); setDescription(''); setStoreID('')
        })
        .catch((err: AxiosError) => {
          setShowAlert(true)
          setAddState(false)
          console.log(err.response?.data)
        })
    }
  
    return { name, setName, price, setPrice, category, setCategory,
      subCategory, setSubCategory,vendor,setVendor,
      quantity,setQuantity,
      description,setDescription,
      storeID,setStoreID,
      showAlert,setShowAlert,
      addState,setAddState,
      addToProductFormSubmit
     }
  }