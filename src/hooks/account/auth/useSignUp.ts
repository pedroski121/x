import React,{useState} from 'react';
import { useRouter } from 'next/router';
import {AxiosResponse} from 'axios';
import { axiosInstance } from '@utils/axiosInstance';

export const useSignUp = () => {
    
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [spinner, setSpinner] = useState<boolean>(false);

  const [accountInValidityMessage, setAccountInValidityMessage] = useState<string>('');
  const [passwordInValidityMessage, setPasswordInvalidityMessage] = useState<string>('');
  const [firstNameInValidityMessage, setFirstNameInValidityMessage] = useState<string>('');
  const [lastNameInValidityMessage, setLastNameInValidityMessage] = useState<string>('');

  const router = useRouter();
  
  async function handleSignUpFormSumbit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSpinner(true); 
    setAccountInValidityMessage(''); setPasswordInvalidityMessage(''); setFirstNameInValidityMessage(''); setLastNameInValidityMessage('')
    const data = {email, firstName,lastName, password};

    await axiosInstance.post('/api/auth/sign-up', data)
    .then((response: AxiosResponse)=>{
      router.push('/account/sign-in')
    })
    .catch((err)=>{
      err.response?.data.map((obj:{message:'string', success:boolean, field?:string})=>{
        if(obj.field == 'password'){
          setPasswordInvalidityMessage(obj.message)
        }
        else if (obj.field == 'email') {
          setAccountInValidityMessage(obj.message)
        }
        else if(obj.field == 'firstName') {
          setFirstNameInValidityMessage(obj.message)
        }
        else if(obj.field == 'lastName') {
          setLastNameInValidityMessage(obj.message)
        }
        else {
          setPasswordInvalidityMessage(obj.message); setAccountInValidityMessage(obj.message); setFirstNameInValidityMessage(obj.message); setLastNameInValidityMessage(obj.message)
        } 
      })
    });
    setSpinner(false); setEmail(''); setPassword(''); setFirstName(''); setLastName('')
  }
  return {
    handleSignUpFormSumbit,
     firstName,
      setFirstName,
      lastName, setLastName,
    firstNameInValidityMessage,
    lastNameInValidityMessage,
     email,
      accountInValidityMessage,
       spinner, 
     password,
      passwordInValidityMessage,
       setPassword, setEmail}
}