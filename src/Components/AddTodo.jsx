import React, { useState } from "react";
import {useDispatch,useSelector} from 'react-redux';
import {addTodo,removeTodo} from '../features/todo/todoSlice';
const AddTodo = () => {
  const [inputTodo, setInputTodo] = useState("");
const dispatch = useDispatch();

const addTodoHandle = (e) =>{
    e.preventDefault();
    dispatch(addTodo(inputTodo));
    setInputTodo('');
}

  return (
    <>
      <h4>Add Todo</h4>

      <div>
        <input
          type="text"
          placeholder="Enter Todo"
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
        />
        <button onClick={addTodoHandle}>Add</button>
      </div>
    </>
  );
};

export default AddTodo;
