 export const calculator=(a,b,c) =>{
    if (c==="+"){
        return a+b
    }else if (c==="-"){
        return a-b
   }else if (c==="*"){
        return a*b
    }else if( c==="/"){
        return a/b
    }else{
        return "we can't perform any operation"
    }
 }
 export default calculator;