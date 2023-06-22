export const removeItem = (key:string):void =>{
    if(typeof window !== undefined) {
        localStorage.removeItem(key);
    }
}