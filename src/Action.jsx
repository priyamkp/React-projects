export const AddTodo="AddTodo";
export const addTodo=(text) => ({
  type: "AddTodo",
  payload: text,
});
export const DeleteTodo="DeleteTodo";
export const deleteTodo=(index)=>({
    type: "DeleteTodo",
    payload: index,
});
export const EditTodo="EditTodo";
export const editTodo=(index, newText)=>({
    type:"EditTodo",
    payload:{index, newText},
});