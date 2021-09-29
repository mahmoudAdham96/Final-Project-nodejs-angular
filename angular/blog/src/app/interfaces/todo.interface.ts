export interface Todo{
    _id:string;
    title:string;
    completed:boolean;
    createdBy:{
        id:string;
        name:string
    };
    createdAt:string;
}
export const defaultTodo:Todo ={
    _id:'',
    title:'',
    completed:true,
    createdBy:{
        id:'',
        name:''
    },
    createdAt:''
}