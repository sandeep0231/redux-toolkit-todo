import {createSlice,nanoid} from '@reduxjs/toolkit';

const initialState ={
    todos:[{id:1,text:"Initial test for todo"}]
};


// todo reducer or slice
export const  todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action) => {
            const todo = {
                id:nanoid(),
                text:action.payload,
            }
            state.todos.push(todo);
        },
        removeTodo:(state,action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload  );

        }
    }
});

// from todoslice reducer we extract indivisual and export it because further in a component we can use it for perform a action 
export const {addTodo,removeTodo} = todoSlice.actions;
export default todoSlice.reducer


