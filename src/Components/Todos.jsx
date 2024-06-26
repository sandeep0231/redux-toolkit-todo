import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
const Todos = () => {
  const TodoStoreData = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <h4>Todo List </h4>
      {TodoStoreData?.map((val) => (
        <>
        <ul>
          <li key={val?.id}>
            {val.text}
            <span style={{color:"red",cursor:"pointer"}} key={val?.id} onClick={() => dispatch(removeTodo(val?.id))}> X</span>
          </li>
          </ul>
        </>
      ))}
    </>
  );
};



export default Todos;
