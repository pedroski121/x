import { useState, useEffect, useContext } from "react"
import { FormEvent } from "react"
import { axiosInstance } from "@utils/axiosInstance"
import { AxiosError } from "axios"
import { TFormError } from "@lib/types/response"
import { useAuth } from "@clerk/nextjs"
import { useFetchSWR } from "@hooks/general/useFetchSWR"
import { IAddressBook } from "@lib/types/current-user"
export const useEditForm = () =>{
    const { data: userState } = useFetchSWR<IAddressBook>('/api/user')
    const {getToken} = useAuth()
    
    const [phoneNumber, setPhoneNumber] = useState<number>(0)
    const [additionalPhoneNumber, setAdditionalPhoneNumber] = useState<number | undefined>(0)
    const [address1, setAddress1] = useState<string>('')
    const [city, setCity] = useState<string>('')
    const [state, setState] = useState<string>('')   
    const [phoneNumberErrorMsg, setPhoneNumberErrorMsg] = useState<string>('')
    const [additionalPhoneNumberErrorMsg, setAdditionalPhoneNumberErrorMsg] = useState<string>('')

    const [address1ErrorMsg, setAddress1ErrorMsg] = useState<string>('')
    const [cityErrorMsg, setCityErrorMsg] = useState<string>('')
    const [stateErrorMsg, setStateErrorMsg] = useState<string>('')

    const [saving, setSaving] = useState<boolean>(false)
    const [notSaved, setNotSaved] = useState<boolean>(false)
    
    const onEditFormRender = () => {
   
      if(userState){
          // const {phoneNumber, additionalPhoneNumber, state, city,address1} = userState
          userState.phoneNumber && setPhoneNumber(userState.phoneNumber)
          userState.additionalPhoneNumber && setAdditionalPhoneNumber(userState.additionalPhoneNumber)
          userState.state && setState(state)
          userState.city && setCity(userState.city)
          userState.address1 && setAddress1(userState.address1)
      }
      
    }

    const editFormSubmit = async (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        setPhoneNumberErrorMsg(''); setAdditionalPhoneNumberErrorMsg(''); setAddress1ErrorMsg(''); setCityErrorMsg(''); setStateErrorMsg('') 
        setSaving(true)
        setNotSaved(false)
        const userInfoObject = {phoneNumber, additionalPhoneNumber, state, city, address1}
        if(!additionalPhoneNumber){
          delete userInfoObject.additionalPhoneNumber
        }
        const token = await getToken()
        await axiosInstance.patch(`/api/user/update-details`, userInfoObject, {withCredentials:true,headers:{Authorization:`Bearer ${token}`} })
        .then((data)=>{
          console.log(data)
          setSaving(false)
        })
        .catch((err:AxiosError<TFormError[]>)=>{
          console.log(err)
          setNotSaved(true)
          setSaving(false)
          const errors = err.response?.data
          errors && errors.map((error)=>{
            if(error.field === 'phoneNumber') {
              setPhoneNumberErrorMsg(error.message)
            }
            else if(error.field === 'additionalPhoneNumber') {
              setAdditionalPhoneNumberErrorMsg(error.message)
            }
            else if(error.field === 'address1'){
              setAddress1ErrorMsg(error.message)
            }
            else if(error.field === 'city'){
              setCityErrorMsg(error.message)
            }
            else if(error.field === 'state'){
              setStateErrorMsg(error.message)
            }
          })
        })
    }
    useEffect(()=>{
        onEditFormRender()
    }, [userState])

   return {editFormSubmit, phoneNumberErrorMsg, phoneNumber,
    additionalPhoneNumberErrorMsg, address1ErrorMsg, 
    cityErrorMsg, stateErrorMsg, saving, notSaved,
    setPhoneNumber,additionalPhoneNumber,address1,state, city, setAdditionalPhoneNumber, setAddress1, setCity, setState}

}