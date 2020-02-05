import React from 'React';



const TodoForm =({addTodo}) =>{
// input tracker
let input;

retun(
    <div>
        <input ref={node => {
            input = node;
        }} />

        <button onClick={() => {
            addTodo(input.value);
            input.value = '';
        }}>
        +
        </button>
    </div>
);
};