import { AddTodo, DeleteTodo, EditTodo } from "./Action";
const initialValue= {todos:[]};
const TodoReducer=(state=initialValue,action)=>{
    switch(action.type){
      case AddTodo: 
        return {
            ...state,
            todos:[...state.todos,{text:action.payload}],
        };
      case DeleteTodo:
        return {
            ...state,
            todos:state.todos.filter((index)=>index!==action.payload)
        }; 
        case EditTodo:
            return {
                ...state,
                todos:state.todos.map((todo, index)=>
                index === action.payload.index ?{ ...todo, text: action.payload.newText } : todo)
        };
      default:
        return state;  
}};
export default TodoReducer;

