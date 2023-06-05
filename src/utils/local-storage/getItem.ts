export const getItem = (key:string) => {
    if(typeof window !== undefined){
       const keyData =  localStorage.getItem(key);
       return keyData ? JSON.parse(keyData) : null;

    }
    return null;
}   