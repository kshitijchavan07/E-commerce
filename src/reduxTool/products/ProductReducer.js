const initalState={
    products:[],
    loading:false,
    error:null
}
const ProductReducer=(state=initalState,action)=>{
    switch(action.type){
        case "REQUEST_DATA":
            return{...state,loading:true}
        case 'REQUEST_SUCCESS':
            return{...state,loading:false,products:action.payload}
        case 'REQUEST_FAILED':
            return{loading:false,error:action.payload}
        default:
            return state
    }
}
export default ProductReducer