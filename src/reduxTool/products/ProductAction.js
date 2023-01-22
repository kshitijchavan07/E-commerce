import axios from "axios"


export const GetData=()=>{
    return (dispatch)=>{
        dispatch({type:'REQUEST_DATA'})
        axios.get('https://dummyjson.com/products').then(val=>{
            let userInfo=val.data.products;
            dispatch({type:'REQUEST_SUCCESS',payload:userInfo})
            localStorage.setItem('products',JSON.stringify(userInfo))
        })
        .catch(err=>{
            dispatch({type:'REQUEST_FAILED',payload:err.message})
        })
    }
}