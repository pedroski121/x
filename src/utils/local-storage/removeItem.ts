export const removeItem = (key:string) =>{
    if(typeof window !== undefined) {
        localStorage.removeItem(key);
    }
}