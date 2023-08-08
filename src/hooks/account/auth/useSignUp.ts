import React,{useState} from 'react';
import { useRouter } from 'next/router';
import {AxiosResponse} from 'axios';
import { axiosInstance } from '@utils/axiosInstance';

export const useSignUp = () => {
    
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [spinner, setSpinner] = useState<boolean>(false);

  const [accountInValidityMessage, setAccountInValidityMessage] = useState<string>('');
  const [passwordInValidityMessage, setPasswordInvalidityMessage] = useState<string>('');
  const [fullNameInValidityMessage, setFullNameInValidityMessage] = useState<string>('');
  const router = useRouter();
  
  async function handleSignUpFormSumbit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSpinner(true); 
    setAccountInValidityMessage(''); setPasswordInvalidityMessage(''); setFullNameInValidityMessage('')
    const data = {email, fullName, password};

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
        else if(obj.field == 'fullName') {
          setFullNameInValidityMessage(obj.message)
        }
        else {
          setPasswordInvalidityMessage(obj.message); setAccountInValidityMessage(obj.message); setFullName(obj.message);
        }
      })
    });
    setSpinner(false); setEmail(''); setPassword(''); setFullName('');
  }
  return {
    handleSignUpFormSumbit,
     fullName,
      setFullName,
    fullNameInValidityMessage,
     email,
      accountInValidityMessage,
       spinner, 
     password,
      passwordInValidityMessage,
       setPassword, setEmail}
}