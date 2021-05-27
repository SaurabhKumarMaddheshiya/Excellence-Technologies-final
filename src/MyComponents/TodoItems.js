import React from 'react';

function TodoItems({todo, onDelete}) {
    return (
      <>
        <div>
            <div>
                <h1>{todo.title}</h1>
                <p>{todo.desc}</p>
                <button className="btn btn-sm btn-danger" onClick={() => onDelete(todo)}>
                    Delete
                </button>
            </div>
        </div>
        <hr/>
      </>
    );
}

export default TodoItems;

