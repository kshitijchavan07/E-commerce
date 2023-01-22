export const Add=(item)=>{
    return{
        type:'ADD',
        payload:item
    }
}

export const Delete=(id)=>{
    return{
        type:'DELETE',
        payload:id
    }
}